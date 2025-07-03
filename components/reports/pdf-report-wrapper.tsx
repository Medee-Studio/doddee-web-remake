"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ReportData, getReportData } from '@/lib/supabase/queries';
import { createClient } from '@/lib/supabase/client';
import { Loader2 } from 'lucide-react';

interface PDFReportWrapperProps {
  reportType: 'environnement' | 'social' | 'gouvernance';
  className?: string;
}

export const PDFReportWrapper: React.FC<PDFReportWrapperProps> = ({ 
  reportType, 
  className = "" 
}) => {
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [PDFComponent, setPDFComponent] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Dynamically import PDF components only on client side
  useEffect(() => {
    if (isClient && !PDFComponent) {
      import('./pdf-report').then((module) => {
        setPDFComponent(() => module.PDFDownloadButton);
      }).catch((err) => {
        console.error('Failed to load PDF component:', err);
        setError('Erreur lors du chargement du composant PDF');
      });
    }
  }, [isClient, PDFComponent]);

  const handleGenerateReport = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const supabase = createClient();
      const data = await getReportData(supabase, reportType);
      setReportData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      console.error('Error generating report:', err);
    } finally {
      setLoading(false);
    }
  };

  // Don't render anything until we're on the client
  if (!isClient) {
    return (
      <Button 
        variant="outline" 
        className={className}
        disabled
      >
        Chargement...
      </Button>
    );
  }

  if (error) {
    return (
      <Button 
        variant="outline" 
        className={className}
        onClick={handleGenerateReport}
        disabled={loading}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Réessayer
      </Button>
    );
  }

  if (reportData && PDFComponent) {
    return (
      <PDFComponent 
        reportData={reportData} 
        className={`${className} inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2`}
      />
    );
  }

  return (
    <Button 
      variant="outline" 
      className={className}
      onClick={handleGenerateReport}
      disabled={loading || !PDFComponent}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {loading ? 'Génération en cours...' : !PDFComponent ? 'Chargement...' : 'Générer mon rapport'}
    </Button>
  );
};

export default PDFReportWrapper; 