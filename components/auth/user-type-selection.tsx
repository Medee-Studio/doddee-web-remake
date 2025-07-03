"use client"

import { Building2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export type UserType = "entreprise" | "particulier"

interface UserTypeSelectionProps {
  onUserTypeSelect: (userType: UserType) => void
}

export function UserTypeSelection({ onUserTypeSelect }: UserTypeSelectionProps) {
  return (
    <div className="grid gap-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Vous êtes ?</h2>
        <p className="text-sm text-muted-foreground">
          Choisissez votre profil pour accéder à l&apos;interface adaptée
        </p>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 max-w-4xl w-full mx-auto">
        <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Une entreprise</CardTitle>
            <CardDescription>
              Accédez à votre espace professionnel pour gérer vos données ESG
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button 
              className="w-full px-3 py-2 text-sm" 
              onClick={() => onUserTypeSelect("entreprise")}
            >
              Continuer
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50 flex flex-col justify-between">
          <CardHeader className="text-center pb-3">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <User className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-lg">Un particulier</CardTitle>
            <CardDescription>
              Découvrez les entreprises engagées près de chez vous
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <Button 
              variant="outline" 
              className="w-full px-3 py-2 text-sm"
              onClick={() => onUserTypeSelect("particulier")}
            >
              Explorer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}