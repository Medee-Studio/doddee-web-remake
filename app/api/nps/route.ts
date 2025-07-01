import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { npsResponses } from '@/lib/supabase/schema';

function getClientIP(request: NextRequest): string {
  // Try Vercel headers first
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback to other common headers
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Last resort fallback
  return '0.0.0.0';
}

export async function POST(request: NextRequest) {
  try {
    const { ecoProfileId, score } = await request.json();

    // Validate input
    if (!ecoProfileId || typeof score !== 'number' || score < 0 || score > 10) {
      return NextResponse.json(
        { error: 'Données invalides' },
        { status: 400 }
      );
    }

    // Get client IP
    const ipAddress = getClientIP(request);

    // Create Supabase client
    const supabase = await createClient();

    // Check if this IP has already voted for this profile
    const { data: existingResponse, error: checkError } = await supabase
      .from('nps_responses')
      .select('id')
      .eq('eco_profile_id', ecoProfileId)
      .eq('ip_address', ipAddress)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing response:', checkError);
      return NextResponse.json(
        { error: 'Erreur lors de la vérification' },
        { status: 500 }
      );
    }

    if (existingResponse) {
      return NextResponse.json(
        { error: 'Vous avez déjà voté pour ce profil' },
        { status: 409 }
      );
    }

    // Insert new NPS response
    const { error: insertError } = await supabase
      .from('nps_responses')
      .insert({
        eco_profile_id: ecoProfileId,
        score: score,
        ip_address: ipAddress,
      });

    if (insertError) {
      console.error('Error inserting NPS response:', insertError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'enregistrement' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Merci pour votre évaluation !' },
      { status: 201 }
    );

  } catch (error) {
    console.error('NPS API Error:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}