"use client";

import React, { useEffect, useState } from 'react';
import { ReportData } from '@/lib/supabase/queries';

// Dynamically imported PDF components
let Document: any, Page: any, Text: any, View: any, StyleSheet: any, PDFDownloadLink: any;

interface PDFReportProps {
  reportData: ReportData;
}

interface PDFDownloadButtonProps {
  reportData: ReportData;
  className?: string;
}

// Define styles with primary color theme
const createStyles = (StyleSheet: any) => StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 30,
    borderBottom: 1,
    borderBottomColor: '#e5e7eb',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 5,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10b45a', // Primary color equivalent: hsl(154 100% 59.4%)
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#dcfce7',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: 8,
  },
  questionAnswer: {
    marginBottom: 12,
    backgroundColor: '#f9fafb',
    padding: 10,
    borderRadius: 5,
  },
  question: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  answer: {
    fontSize: 11,
    color: '#4b5563',
    lineHeight: 1.4,
  },
  actionsList: {
    marginTop: 10,
  },
  actionItem: {
    fontSize: 11,
    marginBottom: 5,
    paddingLeft: 10,
  },
  validAction: {
    color: '#059669',
  },
  pendingAction: {
    color: '#d97706',
  },
  availableAction: {
    color: '#6b7280',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0fdf4',
    padding: 15,
    borderRadius: 8,
    marginVertical: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10b45a', // Primary color
  },
  statLabel: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#9ca3af',
    borderTop: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10,
  },
});

const getReportTitle = (reportType: string) => {
  switch (reportType) {
    case 'environnement':
      return 'Rapport Environnemental ESG';
    case 'social':
      return 'Rapport Social ESG';
    case 'gouvernance':
      return 'Rapport Gouvernance ESG';
    default:
      return 'Rapport ESG';
  }
};

const getActionStatusText = (status: string) => {
  switch (status) {
    case 'valide':
      return 'Validé';
    case 'en_cours':
      return 'En cours';
    case 'en_cours_validation':
      return 'En cours de validation';
    case 'disponible':
    default:
      return 'Disponible';
  }
};

const getActionStatusStyle = (status: string, styles: any) => {
  switch (status) {
    case 'valide':
      return styles.validAction;
    case 'en_cours':
    case 'en_cours_validation':
      return styles.pendingAction;
    case 'disponible':
    default:
      return styles.availableAction;
  }
};

const PDFReportDocument: React.FC<PDFReportProps> = ({ reportData }) => {
  const { userProfile, responses, actions, reportType } = reportData;
  
  // Calculate statistics
  const totalActions = actions.length;
  const validatedActions = actions.filter(action => action.action_status === 'valide').length;
  const inProgressActions = actions.filter(action => action.action_status === 'en_cours').length;
  const completionRate = totalActions > 0 ? Math.round((validatedActions / totalActions) * 100) : 0;

  const styles = createStyles(StyleSheet);

  return React.createElement(Document, null,
    React.createElement(Page, { size: "A4", style: styles.page },
      // Header
      React.createElement(View, { style: styles.header },
        React.createElement(Text, { style: styles.title }, getReportTitle(reportType)),
        React.createElement(Text, { style: styles.subtitle }, userProfile?.raison_sociale || 'Entreprise'),
        React.createElement(Text, { style: styles.text }, 
          `Généré le ${new Date().toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}`
        )
      ),
      
      // Statistics
      React.createElement(View, { style: styles.stats },
        React.createElement(View, { style: styles.statItem },
          React.createElement(Text, { style: styles.statNumber }, totalActions.toString()),
          React.createElement(Text, { style: styles.statLabel }, 'Actions totales')
        ),
        React.createElement(View, { style: styles.statItem },
          React.createElement(Text, { style: styles.statNumber }, validatedActions.toString()),
          React.createElement(Text, { style: styles.statLabel }, 'Actions validées')
        ),
        React.createElement(View, { style: styles.statItem },
          React.createElement(Text, { style: styles.statNumber }, inProgressActions.toString()),
          React.createElement(Text, { style: styles.statLabel }, 'En cours')
        ),
        React.createElement(View, { style: styles.statItem },
          React.createElement(Text, { style: styles.statNumber }, `${completionRate}%`),
          React.createElement(Text, { style: styles.statLabel }, 'Taux de completion')
        )
      ),

      // Company Information
      userProfile && React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Informations de l\'entreprise'),
        React.createElement(Text, { style: styles.text }, 
          `Raison sociale: ${userProfile.raison_sociale || 'Non renseigné'}`
        ),
        userProfile.siren && React.createElement(Text, { style: styles.text }, 
          `SIREN: ${userProfile.siren}`
        ),
        userProfile.adresse && React.createElement(Text, { style: styles.text }, 
          `Adresse: ${userProfile.adresse}`
        ),
        userProfile.tel && React.createElement(Text, { style: styles.text }, 
          `Téléphone: ${userProfile.tel}`
        ),
        userProfile.annee_de_creation && React.createElement(Text, { style: styles.text }, 
          `Année de création: ${userProfile.annee_de_creation}`
        ),
        userProfile.labels?.certifications && Array.isArray(userProfile.labels.certifications) && userProfile.labels.certifications.length > 0 && 
        React.createElement(Text, { style: styles.text }, 
          `Certifications: ${userProfile.labels.certifications.join(', ')}`
        )
      ),

      // Actions
      actions.length > 0 && React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, `Plan d'action ${reportType}`),
        React.createElement(View, { style: styles.actionsList },
          ...actions.map((action, index) =>
            React.createElement(View, { key: index, style: styles.actionItem },
              React.createElement(Text, { style: [styles.text, getActionStatusStyle(action.action_status, styles)] },
                `• ${action.nom_action} - ${getActionStatusText(action.action_status)}`
              )
            )
          )
        )
      ),

      // All Questionnaire Responses
      responses.length > 0 && React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, 'Réponses du questionnaire'),
        ...responses.map((response, index) =>
          React.createElement(View, { key: index, style: styles.questionAnswer },
            React.createElement(Text, { style: styles.question }, response.question),
            React.createElement(Text, { style: styles.answer }, response.answer)
          )
        )
      ),

      // Footer
      React.createElement(Text, { style: styles.footer },
        'Ce rapport a été généré automatiquement par la plateforme Doddee'
      )
    )
  );
};

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ 
  reportData, 
  className = "" 
}) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Dynamically import PDF components only on client side
    import('@react-pdf/renderer').then((module) => {
      Document = module.Document;
      Page = module.Page;
      Text = module.Text;
      View = module.View;
      StyleSheet = module.StyleSheet;
      PDFDownloadLink = module.PDFDownloadLink;
      setIsReady(true);
    }).catch((error) => {
      console.error('Failed to load @react-pdf/renderer:', error);
    });
  }, []);

  if (!isReady) {
    return React.createElement('button', 
      { 
        className: className,
        disabled: true 
      }, 
      'Chargement...'
    );
  }

  const fileName = `rapport-${reportData.reportType}-${new Date().toISOString().split('T')[0]}.pdf`;

  return React.createElement(PDFDownloadLink, {
    document: React.createElement(PDFReportDocument, { reportData }),
    fileName,
    className,
    children: ({ loading }: { loading: boolean }) => 
      loading ? 'Génération en cours...' : 'Télécharger le rapport'
  });
};

export default PDFReportDocument; 