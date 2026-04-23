// STR Finance Prompt Library — all prompt content
// Organized by category. Each prompt is standalone (paste your data) or power (requires a connection guide).
// Placeholders use [SQUARE BRACKETS] to indicate what the user should fill in or paste.

export const CATEGORIES = [
  'Owner Communication',
  'Revenue & Performance',
  'Expense & Reconciliation',
  'Month-End Close',
  'Vendor & Bills',
  'Owner Reporting / Year-End',
  'Budget & Forecasting',
];

export const PROMPTS = [

  // ─── Owner Communication ──────────────────────────────────────────────────

  {
    id: 'owner-comm-001',
    category: 'Owner Communication',
    title: 'Monthly Owner Statement Narrative',
    tier: 'standalone',
    guide: null,
    prompt: `You are a professional property management accountant writing a monthly performance summary for a property owner.

Here is the data for [OWNER NAME]'s property at [PROPERTY ADDRESS] for [MONTH YEAR]:

[PASTE YOUR REVENUE AND EXPENSE DATA HERE — e.g. gross revenue, OTA fees, cleaning costs, maintenance, management fee, net payout]

Write a 2–3 paragraph professional narrative to accompany the owner statement. The tone should be warm, clear, and confident. Highlight any strong or weak performance with a brief explanation. If occupancy or revenue was below normal, offer a brief, honest explanation and a forward-looking note. Do not make up numbers — only reference the data I've provided.`,
    placeholderHint: 'Paste your monthly revenue and expense summary for one property.',
  },

  {
    id: 'owner-comm-002',
    category: 'Owner Communication',
    title: 'Explain a Lower-Than-Expected Payout',
    tier: 'standalone',
    guide: null,
    prompt: `I manage short-term rental properties and need to explain a lower-than-expected owner payout this month.

Property: [PROPERTY NAME OR ADDRESS]
Month: [MONTH YEAR]
Expected payout: $[AMOUNT]
Actual payout: $[AMOUNT]
Reason(s): [LIST THE MAIN REASONS — e.g. lower occupancy due to slow season, emergency maintenance expense, OTA fee increase]

Write a short, professional email to the property owner explaining the variance. Be honest but reassuring. Avoid jargon. Keep it under 200 words. Include a brief forward-looking note where appropriate.`,
    placeholderHint: 'Fill in the expected vs actual payout and the reasons for the difference.',
  },

  {
    id: 'owner-comm-003',
    category: 'Owner Communication',
    title: 'Mid-Year Portfolio Check-In Email',
    tier: 'standalone',
    guide: null,
    prompt: `Write a mid-year check-in email to a property owner summarising performance for their vacation rental portfolio for the first half of [YEAR].

Use this data:
[PASTE H1 SUMMARY DATA — e.g. total revenue, total expenses, occupancy rate, management fees paid, net distributed to owner]

The tone should be professional and relationship-focused. Highlight 1–2 wins and mention any areas we're watching or improving. Close with a brief note about what to expect for H2. Keep the email under 300 words.`,
    placeholderHint: "Paste your H1 summary data for the owner's portfolio.",
  },

  {
    id: 'owner-comm-004',
    category: 'Owner Communication',
    title: 'Notify Owner of an Unexpected Maintenance Expense',
    tier: 'standalone',
    guide: null,
    prompt: `Draft an email notifying a property owner about an unexpected maintenance expense that was incurred this month.

Property: [PROPERTY NAME OR ADDRESS]
Expense: [DESCRIPTION OF WORK DONE]
Amount: $[AMOUNT]
Vendor: [VENDOR NAME]
Was prior approval obtained? [YES / NO — if no, explain briefly]
Impact on this month's payout: [BRIEF DESCRIPTION]

Be transparent and professional. If approval was not obtained, acknowledge it without being defensive. Keep the email under 200 words.`,
    placeholderHint: 'Fill in the maintenance expense details and whether approval was obtained.',
  },

  {
    id: 'owner-comm-005',
    category: 'Owner Communication',
    title: 'Answer Owner Question: "Why Was My Payout Different?"',
    tier: 'standalone',
    guide: null,
    prompt: `A property owner has asked: "My payout this month was different from last month — can you explain why?"

Here is the comparison data:
Last month: [PASTE LAST MONTH'S REVENUE, EXPENSES, AND NET PAYOUT]
This month: [PASTE THIS MONTH'S REVENUE, EXPENSES, AND NET PAYOUT]

Analyse the differences line by line and write a clear, friendly explanation I can send directly to the owner. Use plain English — no accounting jargon. Point out the 2–3 biggest drivers of the change.`,
    placeholderHint: 'Paste the statement data for both months side by side.',
  },

  {
    id: 'owner-comm-006',
    category: 'Owner Communication',
    title: 'Welcome a New Owner to Your Portfolio',
    tier: 'standalone',
    guide: null,
    prompt: `Write a professional onboarding email for a new property owner joining my vacation rental management portfolio.

Owner name: [OWNER NAME]
Property address: [PROPERTY ADDRESS]
Management start date: [DATE]
Our management fee: [X%]
Statement frequency: [MONTHLY / QUARTERLY]
Key contacts at our company: [NAME + ROLE]

The tone should be warm and confidence-building. Cover: what they can expect from us, how and when they'll receive their statements, how to reach us, and what happens in the first 30 days. Keep it under 350 words.`,
    placeholderHint: 'Fill in owner details, fee structure, and your company contacts.',
  },

  {
    id: 'owner-comm-007',
    category: 'Owner Communication',
    title: 'Respond to an Owner Questioning a Line Item',
    tier: 'standalone',
    guide: null,
    prompt: `A property owner is questioning a line item on their statement and wants an explanation.

Owner's question: "[PASTE THE OWNER'S QUESTION OR CONCERN]"
The line item in question: [DESCRIPTION OF THE EXPENSE/FEE] — $[AMOUNT]
Context: [BRIEF EXPLANATION OF WHAT THIS CHARGE IS AND WHY IT WAS INCURRED]

Write a clear, professional reply that explains the charge without being defensive. If the charge is legitimate, explain it confidently. If there's any ambiguity, acknowledge it and offer to review. Keep it under 150 words.`,
    placeholderHint: "Paste the owner's question and provide context about the line item.",
  },

  // ─── Revenue & Performance ────────────────────────────────────────────────

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
    placeholderHint: 'Paste a table of property-level revenue, occupancy, and nightly rate data.',
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
    placeholderHint: 'Paste the same metrics for both this year and last year.',
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
    placeholderHint: 'Paste your OTA payout report, broken down by platform and/or property.',
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
    placeholderHint: 'Paste your upcoming bookings list with check-in and check-out dates.',
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
    placeholderHint: 'Paste a table with property names, total revenue, available nights, and booked nights.',
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
    placeholderHint: 'Paste a list of bookings with booking date and check-in date for each.',
  },

  // ─── Expense & Reconciliation ─────────────────────────────────────────────

  {
    id: 'expense-001',
    category: 'Expense & Reconciliation',
    title: 'Categorise and Attribute Transactions',
    tier: 'standalone',
    guide: null,
    prompt: `I need help categorising and attributing a list of transactions from my bank statement to the correct property and expense category.

Here is my transaction list for [MONTH YEAR]:
[PASTE YOUR BANK TRANSACTIONS — date, description/merchant, amount, and any notes you have]

My properties are: [LIST YOUR PROPERTY NAMES OR ADDRESSES]

Standard expense categories I use:
- Cleaning & Turnover
- Maintenance & Repairs
- Supplies & Consumables
- Utilities
- OTA Fees & Commissions
- Insurance
- Management Fees
- Marketing & Listing Costs
- Administrative
- Other

For each transaction, suggest: (1) the most likely property it belongs to, (2) the expense category, and (3) a confidence level (High / Medium / Low). Flag any transactions you can't confidently categorise.`,
    placeholderHint: 'Paste your bank transactions (date, merchant, amount) for the month.',
  },

  {
    id: 'expense-002',
    category: 'Expense & Reconciliation',
    title: 'Flag Missed Billback Expenses',
    tier: 'standalone',
    guide: null,
    prompt: `Review this list of expenses and identify any that should have been billed back to a property owner but may have been missed.

My management agreement states that the following expense types are owner-responsible (billed back to owners):
[LIST YOUR BILLBACK CATEGORIES — e.g. repairs over $[X], emergency maintenance, consumables restocking, utility bills]

Here are all expenses recorded this month:
[PASTE YOUR EXPENSE LIST — description, amount, property, whether it was billed back (yes/no/unknown)]

Please:
1. Flag every expense that appears to be owner-responsible but is marked as not billed back
2. Calculate the total potential missed billback amount
3. Note any ambiguous cases where the billback status is unclear`,
    placeholderHint: 'Paste your expense list with a column indicating whether each was billed back.',
  },

  {
    id: 'expense-003',
    category: 'Expense & Reconciliation',
    title: 'Reconcile OTA Payouts Against Expected Revenue',
    tier: 'standalone',
    guide: null,
    prompt: `Help me reconcile my OTA payouts against expected revenue for [MONTH YEAR].

Expected revenue (from my PMS / booking system):
[PASTE: Property name, Booking reference, Check-in date, Gross booking value, Expected payout date]

Actual OTA payouts received (from bank or OTA dashboard):
[PASTE: Platform, Payout date, Amount received, Reference/booking ID if available]

Please:
1. Match each payout to the expected booking where possible
2. Flag any bookings where no matching payout was received
3. Flag any payouts received that don't match an expected booking
4. Calculate the total variance between expected and received payouts`,
    placeholderHint: 'Paste your expected bookings list and your actual bank/OTA payout records.',
  },

  {
    id: 'expense-004',
    category: 'Expense & Reconciliation',
    title: 'Identify Anomalous or Duplicate Expenses',
    tier: 'standalone',
    guide: null,
    prompt: `Review this expense list and flag any anomalies, potential duplicates, or unusual charges.

Expense data for [MONTH YEAR]:
[PASTE YOUR EXPENSE LIST — date, vendor, description, amount, property]

Please look for:
1. Duplicate charges (same vendor, similar amount, close dates)
2. Unusually high expenses compared to previous months (note: [TYPICAL MONTHLY BUDGET IS APPROXIMATELY $X per property])
3. Round-number amounts that may be estimates rather than actual invoices
4. Vendors appearing for the first time with no prior history
5. Any charges that look inconsistent with the property or time of year

Return a prioritised list of items to investigate, with a brief reason for each flag.`,
    placeholderHint: 'Paste your full expense list for the month.',
  },

  {
    id: 'expense-005',
    category: 'Expense & Reconciliation',
    title: 'Property-Level Expense Attribution Report',
    tier: 'standalone',
    guide: null,
    prompt: `Create a property-level expense attribution summary from this transaction data.

My properties: [LIST PROPERTY NAMES]
Transaction data for [MONTH YEAR]:
[PASTE YOUR TRANSACTIONS — each row should have: date, vendor, description, amount, property (if already known), or leave property blank if unknown]

Please:
1. Group all expenses by property
2. Sub-total by expense category within each property
3. Calculate each property's total expenses for the month
4. Flag any transactions where the property attribution is unclear
5. Produce a clean summary table at the end`,
    placeholderHint: 'Paste your transactions with vendor, amount, and property where known.',
  },

  // ─── Month-End Close ──────────────────────────────────────────────────────

  {
    id: 'month-end-001',
    category: 'Month-End Close',
    title: 'Month-End Close Checklist Generator',
    tier: 'standalone',
    guide: null,
    prompt: `Generate a step-by-step month-end close checklist for a vacation rental property management company with the following setup:

Number of properties: [NUMBER]
Accounting software: [QuickBooks / Xero / Other]
PMS system: [Guesty / Track / Streamline / Other]
Bank accounts: [NUMBER — e.g. 1 operating, 1 trust account]
Team handling close: [JUST ME / 1 bookkeeper / small finance team]
Close deadline: [DATE EACH MONTH]

Generate a practical checklist ordered by priority, covering: OTA payout reconciliation, expense categorisation and attribution, owner statement preparation, management fee calculation, trust account reconciliation, bank reconciliation, and QuickBooks journal entries. Estimate time for each step.`,
    placeholderHint: 'Fill in your company setup details — properties, software, team size.',
  },

  {
    id: 'month-end-002',
    category: 'Month-End Close',
    title: "Identify What's Blocking the Close",
    tier: 'standalone',
    guide: null,
    prompt: `I'm in the middle of my month-end close for [MONTH YEAR] and I'm stuck. Help me identify what's blocking completion.

Here is my current status:
[PASTE YOUR CURRENT CLOSE STATUS — e.g. "OTA reconciliation done, 3 expenses uncategorised, trust account off by $X, 2 owner statements not sent, missing invoices from vendor X"]

Based on this, please:
1. Identify the highest-priority blocker (what's stopping the close from being finalised?)
2. Suggest a resolution approach for each blocker
3. Flag any items that can be deferred to next month without impacting accuracy
4. Estimate the order to tackle each item for maximum efficiency`,
    placeholderHint: "Describe your current month-end status — what's done, what's stuck.",
  },

  {
    id: 'month-end-003',
    category: 'Month-End Close',
    title: 'Draft Owner Statement Distribution Email',
    tier: 'standalone',
    guide: null,
    prompt: `Write a professional cover email to send to all owners when distributing their monthly statements for [MONTH YEAR].

Context about this month:
- Overall portfolio performance: [STRONG / MIXED / BELOW EXPECTATIONS]
- Any noteworthy events: [e.g. holiday weekend boost, slow market conditions, maintenance spike, etc.]
- Any upcoming changes owners should know about: [e.g. new OTA fee structure, seasonal pricing changes]

The email should:
- Be warm and professional
- Reference the month and attached statement
- Highlight one key portfolio-level note
- Invite owners to reach out with questions
- Be under 200 words`,
    placeholderHint: 'Fill in the portfolio performance context and any notable events this month.',
  },

  {
    id: 'month-end-004',
    category: 'Month-End Close',
    title: 'Calculate Management Fees Across Portfolio',
    tier: 'standalone',
    guide: null,
    prompt: `Calculate management fees for all properties in my portfolio for [MONTH YEAR].

Fee structure:
[DESCRIBE YOUR FEE STRUCTURE — e.g. "15% of gross revenue for all properties" or "varies: Property A = 18%, Property B = 12%, etc."]

Revenue data:
[PASTE: Property name, Gross revenue for the month, Any deductions before fee is applied (e.g. OTA fees)]

Please:
1. Calculate the management fee for each property based on the fee structure
2. Show the calculation clearly (revenue × rate = fee)
3. Sum the total management fees earned across the portfolio
4. Flag any properties where the fee calculation may need manual review`,
    placeholderHint: 'Describe your fee structure and paste the gross revenue per property.',
  },

  {
    id: 'month-end-005',
    category: 'Month-End Close',
    title: 'Trust Account Reconciliation Review',
    tier: 'standalone',
    guide: null,
    prompt: `Help me review my trust account reconciliation for [MONTH YEAR].

Opening trust balance: $[AMOUNT]
Closing trust balance: $[AMOUNT]

Credits (funds received into trust):
[LIST: Date, Source, Amount — e.g. OTA payouts, direct booking deposits]

Debits (funds paid out of trust):
[LIST: Date, Recipient, Amount — e.g. owner distributions, expense payments on behalf of owners]

Expected closing balance (sum of all outstanding owner liabilities): $[AMOUNT]

Please:
1. Verify the maths: opening + credits − debits = closing balance
2. Flag any discrepancy between closing balance and sum of owner liabilities
3. Identify the most likely sources of any variance
4. List items that may need journal entries to correct`,
    placeholderHint: 'Paste your trust account opening balance, credits, debits, and closing balance.',
  },

  // ─── Vendor & Bills ───────────────────────────────────────────────────────

  {
    id: 'vendor-001',
    category: 'Vendor & Bills',
    title: 'Review and Approve a Vendor Invoice',
    tier: 'standalone',
    guide: null,
    prompt: `Review this vendor invoice and tell me if it looks correct and reasonable before I approve it.

Invoice details:
[PASTE THE INVOICE — or describe: Vendor name, Invoice date, Description of work, Line items and amounts, Total amount, Property the work was done at]

Context:
- Was this work pre-approved? [YES / NO / VERBAL]
- Expected cost range for this type of work: $[RANGE] based on past invoices
- Is this vendor on our approved vendor list? [YES / NO / UNKNOWN]
- Are there any known issues with this vendor's billing? [DESCRIBE OR N/A]

Please flag: (1) any line items that look excessive or unclear, (2) whether the total is in line with expected cost, (3) anything missing from the invoice (PO number, property reference, etc.), (4) your recommendation: approve / query / reject.`,
    placeholderHint: 'Paste the invoice details and context about whether it was pre-approved.',
  },

  {
    id: 'vendor-002',
    category: 'Vendor & Bills',
    title: 'Find Duplicate or Suspicious Vendor Charges',
    tier: 'standalone',
    guide: null,
    prompt: `Review this vendor payment history and identify any duplicate or suspicious charges.

Payment history for [DATE RANGE]:
[PASTE YOUR PAYMENT LIST — date, vendor name, invoice number (if available), description, amount, property]

Look for:
1. Exact duplicate payments (same vendor, same amount, within 30 days)
2. Near-duplicate payments (same vendor, similar amount, slightly different description)
3. Round-number invoices that may be estimates rather than actual costs
4. Unusually high single payments (over $[YOUR THRESHOLD]) with no prior similar charge
5. Vendors appearing multiple times in a short period for the same property

Return a list of flags with your confidence level (High / Medium) and a brief reason for each.`,
    placeholderHint: 'Paste your vendor payment history for the review period.',
  },

  {
    id: 'vendor-003',
    category: 'Vendor & Bills',
    title: 'Compare Vendor Costs Across Properties',
    tier: 'standalone',
    guide: null,
    prompt: `Compare vendor costs across my properties to identify inconsistencies or savings opportunities.

Vendor category to analyse: [e.g. Cleaning, Lawn Care, HVAC maintenance]
Time period: [MONTH / QUARTER YEAR]

Cost data:
[PASTE: Property name, Vendor name, Cost for the period, Number of services/visits, Size of property or number of units if relevant]

Please:
1. Calculate the cost per service for each property
2. Rank properties from most to least expensive for this vendor category
3. Flag any properties paying more than 25% above the portfolio average for this category
4. Suggest whether the variance is likely to be justified (e.g. larger property) or worth investigating`,
    placeholderHint: 'Paste cost data for one vendor category across all your properties.',
  },

  {
    id: 'vendor-004',
    category: 'Vendor & Bills',
    title: 'Draft a Payment Approval Request',
    tier: 'standalone',
    guide: null,
    prompt: `Draft a brief internal payment approval request for the following invoice.

Vendor: [VENDOR NAME]
Invoice amount: $[AMOUNT]
Property: [PROPERTY NAME OR ADDRESS]
Work performed: [BRIEF DESCRIPTION]
Was this budgeted? [YES / NO]
Is this over our approval threshold? [YES — threshold is $X / NO]
Who needs to approve: [NAME / ROLE]

Write a 3–5 sentence approval request that I can send internally. Include the key facts, why the payment is necessary, and any urgency. Keep it direct and factual.`,
    placeholderHint: 'Fill in the vendor details, amount, property, and approval context.',
  },

  {
    id: 'vendor-005',
    category: 'Vendor & Bills',
    title: 'Summarise Outstanding Bills',
    tier: 'standalone',
    guide: null,
    prompt: `Summarise my outstanding vendor bills and help me prioritise what to pay this week.

Outstanding bills as of today ([DATE]):
[PASTE YOUR BILL LIST — Vendor, Invoice date, Due date, Amount, Property, Status (overdue / due soon / upcoming)]

Cash available for vendor payments this week: $[AMOUNT]

Please:
1. Flag any overdue bills and calculate total overdue amount
2. List bills due in the next 7 days
3. Suggest a payment priority order based on due dates and amounts
4. If cash is insufficient to pay everything due, recommend which to prioritise and which to defer`,
    placeholderHint: 'Paste your outstanding bills list with due dates and amounts.',
  },

  // ─── Owner Reporting / Year-End ───────────────────────────────────────────

  {
    id: 'year-end-001',
    category: 'Owner Reporting / Year-End',
    title: 'Annual Owner Performance Summary',
    tier: 'standalone',
    guide: null,
    prompt: `Create an annual performance summary for a property owner for [YEAR].

Owner: [OWNER NAME]
Property/properties: [PROPERTY NAME(S) OR ADDRESS(ES)]

Full-year financial data:
[PASTE YOUR ANNUAL DATA — ideally broken down by month: gross revenue, OTA fees, cleaning costs, maintenance, management fees, other expenses, net payout to owner]

Please create:
1. A year-in-review narrative (2–3 paragraphs): overall performance, highlights, and any challenges
2. A financial summary table: total gross revenue, total expenses by category, total management fees, net distributed to owner
3. Key performance metrics: average monthly occupancy %, average nightly rate, best and worst performing months
4. A brief outlook for [NEXT YEAR]

Keep the tone professional and owner-friendly.`,
    placeholderHint: 'Paste your full-year monthly financial data for the property.',
  },

  {
    id: 'year-end-002',
    category: 'Owner Reporting / Year-End',
    title: 'Year-End Tax Summary for Owners',
    tier: 'standalone',
    guide: null,
    prompt: `Prepare a year-end tax summary for a property owner to share with their accountant.

Owner: [OWNER NAME]
Property: [PROPERTY NAME OR ADDRESS]
Tax year: [YEAR]

Financial data:
[PASTE: Total gross revenue, Total expenses by category (cleaning, maintenance, supplies, utilities, management fees, insurance, OTA fees, other), Total net income distributed to owner]

Please:
1. Organise all income and expenses in a clean format suitable for an accountant
2. Note which expense categories are typically deductible for short-term rental owners (general guidance only — not tax advice)
3. Flag any expense categories where documentation may be needed
4. Calculate the net taxable income (gross revenue minus total expenses) as a starting point

Add a note: "This summary is prepared by [YOUR COMPANY NAME] for informational purposes and should be reviewed with a qualified tax professional."`,
    placeholderHint: 'Paste full-year revenue and expense totals by category.',
  },

  {
    id: 'year-end-003',
    category: 'Owner Reporting / Year-End',
    title: 'Portfolio Year-End Ranking Report',
    tier: 'standalone',
    guide: null,
    prompt: `Rank all properties in my portfolio by financial performance for [YEAR] and create a summary report.

Portfolio data:
[PASTE: Property name, Gross revenue for the year, Total expenses, Net owner payout, Average occupancy %, Average nightly rate]

Please:
1. Rank properties by gross revenue (highest to lowest)
2. Rank properties by net owner payout as % of gross (most efficient to least)
3. Calculate portfolio totals: total gross revenue, total expenses, total paid to owners
4. Identify the top 3 and bottom 3 performers with a brief note on what may explain the difference
5. Format as a clean summary table suitable for an internal team review`,
    placeholderHint: 'Paste full-year data for all properties: revenue, expenses, payout, occupancy, ADR.',
  },

  {
    id: 'year-end-004',
    category: 'Owner Reporting / Year-End',
    title: 'Prepare a 1099 Expense Summary',
    tier: 'standalone',
    guide: null,
    prompt: `Help me prepare a 1099 expense summary for a property owner for tax year [YEAR].

Owner: [OWNER NAME]
Tax ID / SSN on file: [LAST 4 DIGITS ONLY — do not paste full SSN]
Total rents paid to owner this year: $[AMOUNT]
Any non-rent payments made to owner (e.g. refunds, reimbursements): $[AMOUNT OR N/A]

Expense breakdown for the year (amounts paid on behalf of owner):
[PASTE YOUR EXPENSE CATEGORIES AND TOTALS]

Please:
1. Confirm whether a 1099-MISC or 1099-NEC is likely required based on the amounts (note: I will verify with my accountant)
2. List all reportable payments in the correct format
3. Flag any amounts that may require special handling
4. Note what documentation I should retain

Reminder: This is for reference only — I will confirm all 1099 requirements with my CPA.`,
    placeholderHint: 'Fill in owner details and paste your full-year expense and payout totals.',
  },

  {
    id: 'year-end-005',
    category: 'Owner Reporting / Year-End',
    title: 'Write a Year-End Letter to All Owners',
    tier: 'standalone',
    guide: null,
    prompt: `Write a year-end letter to all property owners in my portfolio for [YEAR].

Portfolio-level highlights for the year:
- Total portfolio gross revenue: $[AMOUNT]
- Overall occupancy: [X%]
- Number of properties managed: [NUMBER]
- Key events or milestones: [e.g. added X new properties, launched direct booking, new OTA partnership]
- Any challenges: [e.g. slower Q1, maintenance cost increases, platform fee changes]
- Outlook for [NEXT YEAR]: [BRIEF NOTE]

Write a warm, professional letter (under 400 words) that thanks owners for their partnership, acknowledges the year's performance honestly, and builds confidence in the year ahead. It should feel personal, not like a press release.`,
    placeholderHint: 'Fill in your portfolio highlights, challenges, and outlook for next year.',
  },

  // ─── Budget & Forecasting ─────────────────────────────────────────────────

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
    placeholderHint: 'Paste 12 months of historical data (revenue, occupancy, ADR) and describe any planned changes.',
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
    placeholderHint: 'Paste 12 months of historical actuals and describe any known changes for next year.',
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
    placeholderHint: 'Paste your budget and actuals for the period, broken down by the same categories.',
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
    placeholderHint: 'Paste expected revenue, expenses, and management fee for each property for the next quarter.',
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
    placeholderHint: 'Paste 24 months of monthly revenue data or describe your seasonal pattern.',
  },

];
