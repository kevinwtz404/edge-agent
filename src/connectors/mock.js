export function getMockSignals() {
  return {
    metrics: [
      { name: 'atRiskOpportunities', value: 7 },
      { name: 'noActivity14d', value: 11 },
      { name: 'stalledEnterpriseDeals', value: 3 }
    ],
    risks: [
      'Three enterprise deals have had no owner update in 10+ days.',
      'Forecast confidence is reduced due to incomplete CRM notes.'
    ],
    actions: [
      'Trigger manager follow-up for all no-activity deals.',
      'Request evidence notes for top 10 at-risk opportunities.'
    ],
    assumptions: [
      'Mock connector mode enabled.',
      'No live Slack, email, CRM, or Supabase credentials are used.'
    ],
    sources: [
      'mock:crm',
      'mock:supabase'
    ]
  };
}
