export default [

  // ─── Revenue & Performance ─────────────────────────────────────────────────

  {
    id: 'revenue-001',
    category: 'Revenue & Performance',
    title: 'Identify Underperforming Properties',
    tier: 'standalone',
    guide: null,
    prompt: `I manage a vacation rental portfolio and want to identify which properties are underperforming.

Here is my portfolio performance data for [MONTH/QUARTER YEAR]:
[PASTE A TABLE OR LIST WITH: Property name, Gross revenue, Occupancy %, Average nightly rate, Number of nights booked]

Analyse this data and:
1. Rank properties from best to worst performer by RevPAR (revenue per available night)
2. Flag any properties more than 20% below the portfolio average
3. Suggest 2–3 possible reasons for underperformance for each flagged property
4. Recommend 1–2 actions for each underperformer

Be specific and data-driven.`,
    placeholderHint: 'Rank properties by RevPAR, flag underperformers, and surface actionable improvements.',
  },

  {
    id: 'revenue-002',
    category: 'Revenue & Performance',
    title: 'Compare This Month vs Same Month Last Year',
    tier: 'standalone',
    guide: null,
    prompt: `Compare my vacation rental portfolio performance for [MONTH YEAR] against [SAME MONTH LAST YEAR].

This year ([MONTH YEAR]):
[PASTE: Total revenue, Occupancy %, Average nightly rate, Number of bookings, Key expenses]

Last year ([SAME MONTH LAST YEAR]):
[PASTE: Total revenue, Occupancy %, Average nightly rate, Number of bookings, Key expenses]

Provide:
1. A concise year-over-year comparison highlighting the biggest changes
2. Percentage change for each key metric
3. Possible explanations for significant variances
4. A brief outlook note based on the trends`,
    placeholderHint: 'Compare key metrics year-over-year and explain the drivers behind significant changes.',
  },

  {
    id: 'revenue-003',
    category: 'Revenue & Performance',
    title: 'Analyse OTA Payout Breakdown',
    tier: 'standalone',
    guide: null,
    prompt: `Analyse this OTA payout summary for my vacation rental portfolio for [MONTH YEAR].

[PASTE YOUR OTA PAYOUT DATA — ideally broken down by platform (Airbnb, VRBO, Booking.com, direct) and by property]

I want to understand:
1. Which OTA platform generated the most revenue and which had the lowest average nightly rate?
2. What percentage of bookings came from each platform?
3. Are there any properties that are overly dependent on a single platform (>80% from one source)?
4. What are the total gross payouts vs total OTA fees retained, and what is the effective net revenue rate?`,
    placeholderHint: 'Break down OTA payouts by platform to surface revenue mix, fee impact, and channel dependency.',
  },

  {
    id: 'revenue-004',
    category: 'Revenue & Performance',
    title: 'Find Gap Nights and Last-Minute Pricing Opportunities',
    tier: 'standalone',
    guide: null,
    prompt: `I want to identify gap nights in my calendar that could be filled with last-minute promotions.

Here is my upcoming booking calendar for the next 60 days:
[PASTE YOUR BOOKING LIST — property name, check-in date, check-out date for each booking]

Please:
1. Identify all gap nights between consecutive bookings (check-out to next check-in)
2. Flag gaps of 2–5 nights that are prime targets for last-minute promotions
3. Group gaps by property
4. Suggest a simple pricing strategy for each gap type (2-night vs 4-5 night gaps)`,
    placeholderHint: 'Identify fillable gap nights between bookings and get a last-minute pricing strategy.',
  },

  {
    id: 'revenue-005',
    category: 'Revenue & Performance',
    title: 'Calculate RevPAR by Property',
    tier: 'standalone',
    guide: null,
    prompt: `Calculate RevPAR (Revenue Per Available Night) for each property in my portfolio for [MONTH YEAR] and rank them.

Data:
[PASTE A LIST OR TABLE WITH: Property name, Total revenue for the period, Number of available nights in the period, Number of nights booked]

For each property:
1. Calculate Occupancy % = Nights Booked / Available Nights
2. Calculate ADR (Average Daily Rate) = Total Revenue / Nights Booked
3. Calculate RevPAR = ADR × Occupancy %
4. Rank all properties by RevPAR from highest to lowest
5. Flag any property where RevPAR is more than 15% below the portfolio average`,
    placeholderHint: 'Calculate and rank RevPAR across all properties, flagging those below the portfolio average.',
  },

  {
    id: 'revenue-006',
    category: 'Revenue & Performance',
    title: 'Spot Booking Lead Time Trends',
    tier: 'standalone',
    guide: null,
    prompt: `Analyse my booking lead time data to understand how far in advance guests are booking.

Here is my booking data for the last [90 / 180] days:
[PASTE A LIST OF BOOKINGS WITH: Booking date, Check-in date (calculate the lead time as days between these two dates), Property name, Total revenue]

Please:
1. Calculate the average booking lead time across all bookings
2. Break down bookings into buckets: 0–7 days (last-minute), 8–30 days, 31–60 days, 60+ days
3. Identify which properties attract the most last-minute bookings
4. Note any seasonal patterns if visible in the data`,
    placeholderHint: 'Analyse how far in advance guests book and identify last-minute booking patterns by property.',
  },

  {
    id: 'revenue-power-001',
    category: 'Revenue & Performance',
    title: 'Pull Portfolio Occupancy and Revenue from Guesty',
    tier: 'power',
    guide: 'guesty',
    prompt: `Using my connected Guesty data, pull the following for [MONTH YEAR] across all active properties: occupancy rate, average daily rate, RevPAR, gross revenue, number of reservations.

Rank properties from highest to lowest RevPAR. Flag any property more than 20% below the portfolio average and note the number of days it was vacant vs. booked. Highlight any properties that had an unusual number of cancellations or last-minute bookings this month.`,
    placeholderHint: 'Pull live occupancy, ADR, and RevPAR from Guesty and rank properties by performance.',
  },

  {
    id: 'revenue-power-002',
    category: 'Revenue & Performance',
    title: 'Analyse Revenue Trends from CSV Export',
    tier: 'power',
    guide: 'generic-csv',
    prompt: `I've uploaded a revenue report CSV from my PMS. Analyse the data and provide:

1. Total gross revenue for the period
2. Property-level revenue breakdown ranked highest to lowest
3. Occupancy rate and ADR by property if those columns are present
4. Month-over-month or year-over-year trends if multiple periods are in the file
5. The top 3 insights I should act on

Tell me what additional columns would make this analysis more useful in future exports.`,
    placeholderHint: 'Analyse an uploaded revenue CSV to surface trends, rankings, and the top insights to act on.',
  },

  // ─── Revenue Reconciliation ────────────────────────────────────────────────

  {
    id: 'rev-rec-001',
    category: 'Revenue & Performance',
    title: 'Reconcile OTA Deposits to Reservations',
    tier: 'standalone',
    guide: null,
    prompt: `Help me reconcile my OTA deposits to my reservation revenue for [MONTH YEAR].

OTA platforms: [Airbnb / VRBO / Booking.com / Direct]

I'll paste two datasets: (1) bank deposits received from OTAs this month, and (2) my reservation revenue report from [PMS name].

For each deposit: match it to the corresponding reservations, identify any gaps or partial matches, flag deposits that contain multiple reservations or partial payouts, and note any timing differences (reservation revenue recognized in a different month than when the deposit arrived).

Deposits: [Paste deposit data]
Reservations: [Paste reservation data]`,
    placeholderHint: 'Match OTA bank deposits to individual reservations and flag timing gaps or mismatches.',
  },

  {
    id: 'rev-rec-002',
    category: 'Revenue & Performance',
    title: 'Explain How OTA Payouts Work for Accounting',
    tier: 'standalone',
    guide: null,
    prompt: `Explain how OTA payouts work for accounting purposes for a vacation rental property manager. Cover:

1. The difference between gross booking value, OTA fees, and net payout — and which number to record as revenue
2. How Airbnb specifically structures its payouts (timing, batching, gross vs. net)
3. How VRBO payouts differ from Airbnb
4. Whether I should record revenue when a booking is made, when a guest checks in, or when I receive the deposit — and what GAAP says
5. How to handle cancellations and refunds that reduce a future payout
6. The right way to record OTA processing fees (as a revenue reduction vs. an expense)

My setup: I use [PMS name] and [QuickBooks Online / Xero].`,
    placeholderHint: 'Understand how Airbnb and VRBO payouts work for accounting and when to recognize revenue.',
  },

  {
    id: 'rev-rec-003',
    category: 'Revenue & Performance',
    title: 'Investigate a Revenue Discrepancy',
    tier: 'standalone',
    guide: null,
    prompt: `My revenue numbers don't match between my PMS and my bank account. Help me find the discrepancy.

PMS shows total revenue for [Month]: [$X]
Bank deposits received that I can attribute to [Month]: [$Y]
Difference: [$Z]

OTA platforms used: [list]
PMS: [name]

Walk me through the most common reasons for this type of discrepancy in a vacation rental business, what data to pull to investigate each cause, and how to determine whether this is a timing difference, an accounting error, a refund I missed, or a payment I need to chase.`,
    placeholderHint: 'Diagnose why your PMS revenue total does not match your bank deposits.',
  },

  {
    id: 'rev-rec-004',
    category: 'Revenue & Performance',
    title: 'Build a Revenue Reconciliation Process',
    tier: 'standalone',
    guide: null,
    prompt: `Design a monthly revenue reconciliation process for my vacation rental PM company that I can run in under 2 hours.

Setup: [X] properties, OTAs used: [Airbnb / VRBO / Booking.com / Direct], PMS: [name], accounting: [QBO / Xero].

The process should: define what reports to pull from each OTA and when, define what to pull from my PMS, establish a matching methodology, define how to handle common exceptions (partial months, cancellations, split stays), and result in a reconciliation worksheet I can keep for each month.

Create a template reconciliation worksheet structure I can use in a spreadsheet alongside the process steps.`,
    placeholderHint: 'Design a repeatable monthly revenue reconciliation process with a worksheet template.',
  },

  {
    id: 'rev-rec-power-001',
    category: 'Revenue & Performance',
    title: 'Match Guesty Reservations to Payout Deposits',
    tier: 'power',
    guide: 'guesty',
    prompt: `Using my connected Guesty data, pull all reservations with check-out dates in [MONTH YEAR] that should have generated OTA payouts. For each reservation: property, guest name, check-out date, gross booking value, expected payout amount, OTA platform.

I will compare this list against my bank deposits. Flag any reservations with unusual payout amounts, ones that don't follow the standard OTA payout timing for that platform, or reservations where the payout amount doesn't match the booking value after OTA fees.`,
    placeholderHint: 'Pull reservation-level payout data from Guesty to compare against bank deposit records.',
  },

];
