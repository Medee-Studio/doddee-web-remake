"use client"

import { useState, useEffect, useMemo } from "react"
import dynamic from "next/dynamic"
import { MapPin, Search, Filter, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { createClient } from "@/lib/supabase/client"
import { getPublicUtilisateursMoraux} from "@/lib/supabase/queries"
import { useDebounce } from "@/hooks/use-debounce"
import { PublicUtilisateurMoral } from "@/types"
import { sous_secteurs } from "@/lib/form-data/complete-profile"

// Dynamically import the map component to avoid SSR issues
const DynamicMap = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full rounded-lg border bg-muted/50 flex items-center justify-center">
      <div className="text-center">
        <Skeleton className="h-8 w-8 rounded-full mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">Chargement de la carte...</p>
      </div>
    </div>
  ),
})




// Get all sous-secteurs as flat array for dropdown
const getAllSousSecteurs = () => {
  const allSousSecteurs: { value: string; label: string }[] = []
  Object.values(sous_secteurs).forEach(secteurGroup => {
    allSousSecteurs.push(...secteurGroup)
  })
  return allSousSecteurs.sort((a, b) => a.label.localeCompare(b.label))
}

// Helper function to get sous-secteur name
const getSousSecteurName = (sousSecteurId: number | null): string => {
  if (!sousSecteurId) return "Sous-secteur non spécifié"
  const allSousSecteurs = getAllSousSecteurs()
  const sousSecteur = allSousSecteurs.find(s => s.value === sousSecteurId.toString())
  return sousSecteur ? sousSecteur.label : "Sous-secteur non spécifié"
}

interface CompaniesMapProps {
  onBack: () => void
}

export function CompaniesMap({ onBack }: CompaniesMapProps) {
  const [companies, setCompanies] = useState<PublicUtilisateurMoral[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSousSecteur, setSelectedSousSecteur] = useState<string>("")
  const [selectedCompany, setSelectedCompany] = useState<PublicUtilisateurMoral | null>(null)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const supabase = useMemo(() => createClient(), [])

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true)
      try {
        const sousSecteurId = selectedSousSecteur ? parseInt(selectedSousSecteur) : undefined
        const data = await getPublicUtilisateursMoraux(supabase, debouncedSearchTerm, sousSecteurId)
        setCompanies(data)
      } catch (error) {
        console.error("Error fetching companies:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [debouncedSearchTerm, selectedSousSecteur, supabase])

  const handleMarkerClick = (company: PublicUtilisateurMoral) => {
    setSelectedCompany(company)
  }

  const handleClearFilters = () => {
    setSearchTerm("")
    setSelectedSousSecteur("")
    setSelectedCompany(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <div>
          <h2 className="text-lg font-semibold">Entreprises engagées</h2>
          <p className="text-sm text-muted-foreground">
            Découvrez les entreprises ESG près de chez vous
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center" style={{ position: 'relative', zIndex: 10 }}>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher une entreprise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedSousSecteur} onValueChange={setSelectedSousSecteur}>
          <SelectTrigger className="w-full lg:w-80 min-w-0">
            <Filter className="h-4 w-4 mr-2 flex-shrink-0" />
            <SelectValue placeholder="Sous-secteur d'activité" className="truncate" />
          </SelectTrigger>
          <SelectContent 
            className="max-h-60 overflow-y-auto w-80 z-[9999]" 
            position="popper"
            sideOffset={5}
            align="start"
          >
            {getAllSousSecteurs().map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                className="truncate"
              >
                <span className="block truncate pr-2">{option.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {(searchTerm || selectedSousSecteur) && (
          <Button variant="outline" onClick={handleClearFilters}>
            Effacer les filtres
          </Button>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {loading ? (
            "Chargement..."
          ) : (
            `${companies.length} entreprise${companies.length > 1 ? "s" : ""} trouvée${companies.length > 1 ? "s" : ""}`
          )}
        </p>
      </div>

      {/* Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-0">
        <div className="lg:col-span-2" style={{ position: 'relative', zIndex: 1 }}>
          <DynamicMap
            companies={companies}
            onMarkerClick={handleMarkerClick}
            selectedCompany={selectedCompany}
            loading={loading}
          />
        </div>

        {/* Company Details Sidebar */}
        <div className="space-y-4">
          {selectedCompany ? (
            <Card>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{selectedCompany.raison_sociale}</CardTitle>
                    <CardDescription>
                      <span className="text-xs">
                        {getSousSecteurName(selectedCompany.sous_secteur_id)}
                      </span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedCompany.labels?.certifications && (
                    <div>
                      <h4 className="text-sm font-medium mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-1">
                        {selectedCompany.labels.certifications.map((cert: string, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedCompany.coordinates && Array.isArray(selectedCompany.coordinates) && selectedCompany.coordinates.length === 2 && (
                    <div>
                      <h4 className="text-sm font-medium mb-1">Localisation</h4>
                      <p className="text-xs text-muted-foreground">
                        {selectedCompany.coordinates[1].toFixed(4)}, {selectedCompany.coordinates[0].toFixed(4)}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-8">
                <MapPin className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground">
                  Cliquez sur un marqueur pour voir les détails de l&apos;entreprise
                </p>
              </CardContent>
            </Card>
          )}

          {/* Companies List (mobile) */}
          <div className="lg:hidden space-y-2">
            <h3 className="text-sm font-medium">Liste des entreprises</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {companies.map((company) => (
                <Card
                  key={company.user_id_moral}
                  className={`cursor-pointer transition-colors ${
                    selectedCompany?.user_id_moral === company.user_id_moral
                      ? "border-primary"
                      : "hover:border-muted-foreground/50"
                  }`}
                  onClick={() => setSelectedCompany(company)}
                >
                  <CardContent className="py-3">
                    <p className="font-medium text-sm">{company.raison_sociale}</p>
                    <p className="text-xs text-muted-foreground">
                      {getSousSecteurName(company.sous_secteur_id)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}