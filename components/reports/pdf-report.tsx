"use client";

import React, { useEffect, useState } from 'react';
import { ReportData, Action, ActionStatus } from '@/types';
// Dynamically imported PDF components with minimal typing to avoid complex type issues
let Document: React.ComponentType<{ children?: React.ReactNode }>;
let Page: React.ComponentType<Record<string, unknown>>;
let Text: React.ComponentType<Record<string, unknown>>;
let View: React.ComponentType<Record<string, unknown>>;
let StyleSheet: { create: (styles: Record<string, unknown>) => Record<string, unknown> };
let PDFDownloadLink: React.ComponentType<Record<string, unknown>>;

interface PDFReportProps {
  reportData: ReportData;
}

interface PDFDownloadButtonProps {
  reportData: ReportData;
  className?: string;
}

// Define styles with primary color theme
const createStyles = (StyleSheetInstance: typeof StyleSheet) => StyleSheetInstance.create({
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
    color: '#10b981', // Primary green color
    marginBottom: 10,
    borderBottom: 1,
    borderBottomColor: '#ebfaff',
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
    color: '#10b981', // Primary green color
  },
  inProgressAction: {
    color: '#6b7280', // Darker gray
  },
  pendingAction: {
    color: '#9ca3af', // Medium gray
  },
  availableAction: {
    color: '#d1d5db', // Light gray
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ebfaff',
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
    color: '#10b981', // Primary green color
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
  chartSection: {
    marginVertical: 20,
    backgroundColor: '#ebfaff',
    padding: 15,
    borderRadius: 8,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
    textAlign: 'center',
  },
  chartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  chartCenterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10b981',
    textAlign: 'center',
    marginBottom: 5,
  },
  chartSubText: {
    fontSize: 10,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 15,
  },
  chartLegend: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    marginRight: 8,
    borderRadius: 2,
  },
  legendText: {
    fontSize: 11,
    color: '#374151',
  },
  chartBars: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  chartBar: {
    height: '100%',
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

const getActionStatusStyle = (status: string, styles: ReturnType<typeof createStyles>) => {
  switch (status) {
    case 'valide':
      return styles.validAction;
    case 'en_cours':
      return styles.inProgressAction;
    case 'en_cours_validation':
      return styles.pendingAction;
    case 'disponible':
    default:
      return styles.availableAction;
  }
};

// Add chart-related functions and styles
const createChartData = (actions: Action[]) => {
  const statusCounts = actions.reduce((acc, action) => {
    acc[action.action_status] = (acc[action.action_status] || 0) + 1;
    return acc;
  }, {} as Record<ActionStatus, number>);

  const total = actions.length;
  const chartData = Object.entries(statusCounts).map(([status, count]) => ({
    status: status as ActionStatus,
    count: count as number,
    percentage: Math.round((count as number / total) * 100)
  }));

  return chartData;
};

const getStatusLabel = (status: ActionStatus) => {
  switch (status) {
    case 'valide':
      return 'Validées';
    case 'en_cours':
      return 'En cours';
    case 'en_cours_validation':
      return 'En cours de validation';
    case 'disponible':
    default:
      return 'Disponibles';
  }
};

const getStatusColor = (status: ActionStatus) => {
  switch (status) {
    case 'disponible':
      return '#d1d5db'; // Light gray
    case 'en_cours_validation':
      return '#9ca3af'; // Medium gray
    case 'en_cours':
      return '#6b7280'; // Darker gray
    case 'valide':
      return '#10b981'; // Primary green color
    default:
      return '#e5e7eb'; // Very light gray fallback
  }
};

const PDFReportDocument: React.FC<PDFReportProps> = ({ reportData }) => {
  const { userProfile, responses, actions, reportType } = reportData;
  
  // Calculate statistics
  const totalActions = actions.length;
  const validatedActions = actions.filter(action => action.action_status === 'valide').length;
  const inProgressActions = actions.filter(action => action.action_status === 'en_cours').length;
  const completionRate = totalActions > 0 ? Math.round((validatedActions / totalActions) * 100) : 0;

  // Create chart data
  const chartData = totalActions > 0 ? createChartData(actions) : [];

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

      // Chart Section
      totalActions > 0 && React.createElement(View, { style: styles.chartSection },
        React.createElement(Text, { style: styles.chartTitle }, 
          `Répartition des actions ${reportType === 'environnement' ? 'environnementales' : 
            reportType === 'social' ? 'sociales' : 'de gouvernance'}`
        ),
        React.createElement(View, { style: styles.chartContainer },
          // Center completion percentage
          React.createElement(Text, { style: styles.chartCenterText }, `${completionRate}%`),
          React.createElement(Text, { style: styles.chartSubText }, 'd\'actions validées'),
          
          // Chart bars representation
          React.createElement(View, { style: styles.chartBars },
            ...chartData.map((data, index) => 
              React.createElement(View, { 
                key: index, 
                style: [
                  styles.chartBar, 
                  { 
                    backgroundColor: getStatusColor(data.status), 
                    width: `${data.percentage}%` 
                  }
                ] 
              })
            )
          ),
          
          // Legend
          React.createElement(View, { style: styles.chartLegend },
            ...chartData.map((data, index) =>
              React.createElement(View, { key: index, style: styles.legendItem },
                React.createElement(View, { 
                  style: [
                    styles.legendColor, 
                    { backgroundColor: getStatusColor(data.status) }
                  ] 
                }),
                React.createElement(Text, { style: styles.legendText }, 
                  `${getStatusLabel(data.status)}: ${data.count} (${data.percentage}%)`
                )
              )
            )
          )
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
        userProfile.labels && Array.isArray(userProfile.labels) && userProfile.labels.length > 0 && 
        React.createElement(Text, { style: styles.text }, 
          `Certifications: ${userProfile.labels.join(', ')}`
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
      Document = module.Document as React.ComponentType<{ children?: React.ReactNode }>;
      Page = module.Page as React.ComponentType<Record<string, unknown>>;
      Text = module.Text as React.ComponentType<Record<string, unknown>>;
      View = module.View as React.ComponentType<Record<string, unknown>>;
      StyleSheet = module.StyleSheet as { create: (styles: Record<string, unknown>) => Record<string, unknown> };
      PDFDownloadLink = module.PDFDownloadLink as unknown as React.ComponentType<Record<string, unknown>>;
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

  return React.createElement(
    PDFDownloadLink, 
    {
      document: React.createElement(PDFReportDocument, { reportData }),
      fileName,
      className,
    },
    (({ loading }: { loading: boolean }) => 
      loading ? 'Génération en cours...' : 'Télécharger le rapport') as unknown as React.ReactNode
  );
};

export default PDFReportDocument; 