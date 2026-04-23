export default [

  {
    id: 'budget-001',
    category: 'Budget & Forecasting',
    title: 'Build a Monthly Revenue Forecast',
    tier: 'standalone',
    guide: null,
    prompt: `Help me build a monthly revenue forecast for [YEAR] for my vacation rental portfolio.

Historical data — last 12 months by month:
[PASTE: Month, Gross revenue, Occupancy %, Average nightly rate, Number of available nights]

Additional context:
- New properties being added: [LIST WITH EXPECTED ADD DATE AND ESTIMATED MONTHLY REVENUE]
- Properties being removed: [LIST WITH EXPECTED END DATE]
- Any known demand events in [YEAR]: [e.g. major local events, Olympic year, new airport opening]
- Pricing strategy changes planned: [DESCRIBE OR "None"]

Please:
1. Build a month-by-month revenue forecast for [YEAR] with low / base / high scenarios
2. Note the key assumptions behind each scenario
3. Calculate projected full-year revenue in each scenario`,
    placeholderHint: 'Build a low, base, and high monthly revenue forecast for the year ahead.',
  },

  {
    id: 'budget-002',
    category: 'Budget & Forecasting',
    title: 'Create a Property-Level Annual Budget',
    tier: 'standalone',
    guide: null,
    prompt: `Create an annual operating budget for [PROPERTY NAME OR ADDRESS] for [YEAR].

Historical actuals (last 12 months):
[PASTE: Monthly revenue and each major expense category — cleaning, maintenance, utilities, OTA fees, management fees, supplies, insurance, other]

Known changes for [YEAR]:
- Revenue: [Expected change? e.g. pricing increase of X%, new OTA channel]
- Expense changes: [e.g. new cleaning contract at $X per turn, insurance renewal at $X]
- One-time items: [e.g. planned renovation in Q2 estimated at $X]

Please:
1. Build a month-by-month budget for [YEAR] with each expense category
2. Calculate projected net owner payout by month
3. Flag months with expected cash flow risk (expenses likely to exceed revenue)
4. Summarise annual budget totals`,
    placeholderHint: 'Create a month-by-month property budget with projected owner payouts and cash flow flags.',
  },

  {
    id: 'budget-003',
    category: 'Budget & Forecasting',
    title: 'Budget vs Actual Variance Analysis',
    tier: 'standalone',
    guide: null,
    prompt: `Compare my actual performance against budget for [MONTH / QUARTER YEAR] and explain the variances.

Budget for this period:
[PASTE: Revenue budget, Budget by expense category, Budgeted net payout to owners]

Actual for this period:
[PASTE: Actual revenue, Actual expenses by category, Actual net payout to owners]

Please:
1. Calculate the variance (actual − budget) for each line item in dollar and percentage terms
2. Flag variances greater than ±10% as significant
3. For each significant variance, suggest the most likely explanation
4. Give an overall assessment: is the portfolio tracking ahead, behind, or in line with budget?`,
    placeholderHint: 'Compare actuals to budget, flag variances over 10%, and get an explanation for each.',
  },

  {
    id: 'budget-004',
    category: 'Budget & Forecasting',
    title: 'Project Owner Distributions for the Quarter',
    tier: 'standalone',
    guide: null,
    prompt: `Project the expected owner distributions for each property for the next quarter ([Q AND YEAR]).

For each property, provide:
[PASTE: Property name, Expected monthly revenue (or current bookings on the books), Expected monthly expenses, Management fee rate, Any known one-off expenses planned in the quarter]

Please:
1. Calculate the projected net payout to each owner for each month of the quarter
2. Sum the full-quarter projected distribution per owner
3. Flag any properties where expenses are projected to exceed revenue in any month
4. Note assumptions made where data is incomplete`,
    placeholderHint: 'Project owner distributions for each property across the next quarter.',
  },

  {
    id: 'budget-005',
    category: 'Budget & Forecasting',
    title: 'Seasonal Revenue Planning',
    tier: 'standalone',
    guide: null,
    prompt: `Help me plan for seasonal revenue fluctuations in my vacation rental portfolio.

My portfolio: [NUMBER] properties in [LOCATION / MARKET TYPE — e.g. beach market, mountain ski destination, urban city]

Historical seasonality (last 2 years):
[PASTE: Monthly revenue totals for the last 24 months — or at minimum, describe your high season and low season months]

I want to understand:
1. Which months are my revenue peaks and troughs?
2. How large is the gap between my best and worst months?
3. What cash reserve should I maintain to cover slow-season operating costs?
4. What strategies could help reduce the revenue gap between peak and off-peak months?`,
    placeholderHint: 'Plan for seasonal revenue swings and determine the cash reserve you need to weather slow periods.',
  },

  {
    id: 'budget-power-001',
    category: 'Budget & Forecasting',
    title: 'Budget vs Actual from CSV Export',
    tier: 'power',
    guide: 'generic-csv',
    prompt: `I've uploaded a CSV with actual financials for [PERIOD]. Run a budget vs. actual analysis using the targets below.

For each line item: (1) calculate the variance (actual minus budget) in dollars and percentage, (2) flag any variance greater than ±10%, (3) for each significant variance suggest the most likely explanation, (4) give an overall performance verdict: ahead of budget, on track, or behind.

Budget targets:
[Paste your budget line items and amounts]`,
    placeholderHint: 'Run a budget vs. actual variance analysis against an uploaded CSV export.',
  },

];
