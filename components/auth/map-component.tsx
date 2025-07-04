"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { Icon, LatLngBounds } from "leaflet"
import { PublicUtilisateurMoral } from "@/types"
import { sous_secteurs } from "@/lib/form-data/complete-profile"

// Import Leaflet CSS
import "leaflet/dist/leaflet.css"



// Get all sous-secteurs as flat array
const getAllSousSecteurs = () => {
  const allSousSecteurs: { value: string; label: string }[] = []
  Object.values(sous_secteurs).forEach(secteurGroup => {
    allSousSecteurs.push(...secteurGroup)
  })
  return allSousSecteurs
}

// Helper function to get sous-secteur name
const getSousSecteurName = (sousSecteurId: number | null): string => {
  if (!sousSecteurId) return "Sous-secteur non spécifié"
  const allSousSecteurs = getAllSousSecteurs()
  const sousSecteur = allSousSecteurs.find(s => s.value === sousSecteurId.toString())
  return sousSecteur ? sousSecteur.label : "Sous-secteur non spécifié"
}

interface MapComponentProps {
  companies: PublicUtilisateurMoral[]
  onMarkerClick: (company: PublicUtilisateurMoral) => void
  selectedCompany: PublicUtilisateurMoral | null
  loading: boolean
}

// Custom marker icon
const createCustomIcon = (isSelected: boolean = false) => {
  return new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${isSelected ? '#ef4444' : '#22c55e'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  })
}

export default function MapComponent({ companies, onMarkerClick, selectedCompany, loading }: MapComponentProps) {
  // Default center on France
  const defaultCenter: [number, number] = [46.603354, 1.888334]
  const defaultZoom = 6

  // Calculate bounds to fit all companies
  const getBounds = () => {
    if (companies.length === 0) return null
    
    const validCompanies = companies.filter(c => c.coordinates && Array.isArray(c.coordinates) && c.coordinates.length === 2)
    if (validCompanies.length === 0) return null

    const bounds = new LatLngBounds([])
    validCompanies.forEach(company => {
      if (company.coordinates) {
        bounds.extend([company.coordinates[1], company.coordinates[0]]) // [lat, lng] from [lng, lat]
      }
    })
    return bounds
  }

  if (loading) {
    return (
      <div className="h-[400px] w-full rounded-lg border bg-muted/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Chargement des entreprises...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[400px] w-full rounded-lg border overflow-hidden relative z-0">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%" }}
        bounds={getBounds() || undefined}
        boundsOptions={{ padding: [20, 20] }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {companies
          .filter(company => company.coordinates && Array.isArray(company.coordinates) && company.coordinates.length === 2)
          .map((company) => (
            <Marker
              key={company.user_id_moral}
              position={[company.coordinates![1], company.coordinates![0]]} // [lat, lng] from [lng, lat]
              icon={createCustomIcon(selectedCompany?.user_id_moral === company.user_id_moral)}
              eventHandlers={{
                click: () => onMarkerClick(company),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-semibold text-sm mb-1">{company.raison_sociale}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {getSousSecteurName(company.sous_secteur_id)}
                  </p>
                  {company.labels?.certifications && (
                    <div className="mb-2">
                      <p className="text-xs font-medium mb-1">Certifications:</p>
                      <div className="flex flex-wrap gap-1">
                        {company.labels.certifications.map((cert: string, index: number) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => onMarkerClick(company)}
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Voir les détails
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}