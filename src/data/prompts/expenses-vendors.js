export default [

  // ─── Expense & Reconciliation ──────────────────────────────────────────────

  {
    id: 'expense-001',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Categorize and attribute bank transactions to the right property and expense type.',
  },

  {
    id: 'expense-002',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Identify owner-billable expenses that were missed and calculate the total leakage.',
  },

  {
    id: 'expense-003',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Match actual OTA payouts to expected bookings and surface any gaps or overpayments.',
  },

  {
    id: 'expense-004',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Flag duplicate charges, anomalies, and suspicious expenses across your ledger.',
  },

  {
    id: 'expense-005',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Group and sub-total all expenses by property into a clean attribution report.',
  },

  {
    id: 'expense-power-001',
    category: 'Expenses & Vendors',
    title: 'Run Property-Level Expense Report from QuickBooks',
    tier: 'power',
    guide: 'quickbooks',
    prompt: `Using my connected QuickBooks Online data, generate an expense report for [MONTH YEAR] broken down by property class/location.

For each property: total expenses by category, comparison to prior month, any expenses over $[THRESHOLD] that weren't present last month. Identify the top 5 expense categories across the portfolio. Flag any properties with unusual expense spikes and suggest possible explanations based on the vendor names and categories you can see.`,
    placeholderHint: 'Pull a property-level expense breakdown from QuickBooks and flag unusual spikes.',
  },

  {
    id: 'expense-power-002',
    category: 'Expenses & Vendors',
    title: 'Categorize and Attribute Expenses from CSV Export',
    tier: 'power',
    guide: 'generic-csv',
    prompt: `I've uploaded an expense or transaction CSV export from my PMS or accounting software. For each transaction:

1. Suggest the GL category (Cleaning, Maintenance, Supplies, Utilities, OTA Fees, Management, Other)
2. Attribute to the correct property based on any identifying information in the row
3. Flag whether it's likely owner-billable or a company expense
4. Note any transactions that need manual review

Output a clean table I can use to review and approve the categorizations. Flag the top 5 transactions that need my immediate attention.`,
    placeholderHint: 'Categorize and attribute expenses from a CSV export with GL and billback suggestions.',
  },

  // ─── Amazon & Receipts ─────────────────────────────────────────────────────

  {
    id: 'amazon-001',
    category: 'Expenses & Vendors',
    title: 'Split an Amazon Order Across Properties',
    tier: 'standalone',
    guide: null,
    prompt: `I have an Amazon order that contains items for multiple properties. Help me split it for Topkey expense coding.

Order details:
[Paste the Amazon order — item names, quantities, prices]

Properties involved:
[List your property names]

For each line item: suggest which property it likely belongs to, suggest a GL category (Supplies, Maintenance, Linens, Guest Amenities, etc.), and flag any items that should be split across multiple properties or coded to corporate (not a specific property). Format as a table I can use as a reference when entering splits in Topkey.`,
    placeholderHint: 'Split a multi-property Amazon order into property-level line items for Topkey coding.',
  },

  {
    id: 'amazon-002',
    category: 'Expenses & Vendors',
    title: 'Build an Amazon Ordering Process That Actually Reconciles',
    tier: 'standalone',
    guide: null,
    prompt: `We spend roughly $[X]/month on Amazon across [Y] properties. Currently we have one or two Amazon accounts and orders often mix items for multiple properties, making reconciliation a nightmare.

Design a practical ordering workflow that ensures every Amazon purchase can be attributed to a specific property at the time of purchase. Consider: how to structure Amazon Business accounts or purchase order numbers, what to put in the order memo, how to handle shared/supply orders, and what the receiving process should look like.

We use Topkey for expense management. The solution needs to work for a team of [Z] people, not just me.`,
    placeholderHint: 'Design an ordering workflow so every Amazon purchase can be attributed at time of purchase.',
  },

  {
    id: 'amazon-003',
    category: 'Expenses & Vendors',
    title: 'Categorize Amazon Items for a VR Business',
    tier: 'standalone',
    guide: null,
    prompt: `I need to categorize these Amazon purchases for my vacation rental property management company's books. Use standard chart of accounts categories appropriate for a property manager (Supplies, Linens & Bedding, Kitchen Supplies, Maintenance Materials, Guest Amenities, Office Supplies, Cleaning Supplies, Furniture & Fixtures, etc.).

For each item also indicate: (1) is this owner-billable or company expense? (2) is it a capital expense (depreciable) or operational? (3) any notes on splitting if it could apply to multiple categories.

Items:
[Paste your Amazon purchase list]`,
    placeholderHint: 'Categorize Amazon items by GL account and flag what is owner-billable vs. company expense.',
  },

  {
    id: 'amazon-004',
    category: 'Expenses & Vendors',
    title: 'Write Our Amazon Purchasing Policy',
    tier: 'standalone',
    guide: null,
    prompt: `Write an Amazon purchasing policy for our vacation rental property management team. We have [X] employees who make Amazon purchases.

The policy must address: who is authorized to make Amazon purchases, what information must be included in the order (property name, purpose), how to handle orders for multiple properties in one cart, receipt forwarding requirements, return procedures, and what to do with personal purchases accidentally made on the business account.

We want to eliminate the monthly scramble to figure out what each charge was for. Make it short enough that staff will actually read it (under 400 words), practical, and specific to property management purchasing patterns (linens, supplies, small appliances, etc.).`,
    placeholderHint: 'Write a practical Amazon purchasing policy that eliminates the monthly reconciliation scramble.',
  },

  {
    id: 'amazon-005',
    category: 'Expenses & Vendors',
    title: 'Reconstruct Amazon Transactions Without Receipts',
    tier: 'standalone',
    guide: null,
    prompt: `I'm trying to reconstruct what these Amazon charges were for, but I don't have the original receipts. Help me figure out the most likely categorization based on context.

For each transaction I'll give you: date, amount, and any merchant details or notes. Based on the amount, typical STR purchasing patterns, and any context I provide, suggest: (1) what the item was most likely, (2) the GL category, (3) whether it was likely owner-billable or a company expense, and (4) confidence level.

Transactions:
[List your mystery transactions with dates and amounts]

Context about our business: [e.g., mountain cabins, coastal properties, we were restocking after winter season, we onboarded 3 new properties that month, etc.]`,
    placeholderHint: 'Reconstruct missing Amazon receipts using purchase patterns and business context.',
  },

  {
    id: 'amazon-006',
    category: 'Expenses & Vendors',
    title: 'Design Merchant Auto-Categorization Rules',
    tier: 'standalone',
    guide: null,
    prompt: `I want to set up merchant-level auto-categorization rules in Topkey to stop manually coding the same vendors every month.

Here are my most common recurring vendors: [List vendors — Amazon, Home Depot, Lowe's, Walmart, Costco, cleaning supply companies, etc.]

For each vendor suggest: (1) the default GL category, (2) whether a default property should be applied or if it always needs manual property selection, (3) any caveats where the category might vary, and (4) a memo template to use as a default.

My business type: [Coastal rentals / Mountain cabins / Urban apartments] with [X] properties.`,
    placeholderHint: 'Set up merchant-level auto-categorization rules to stop manually coding recurring vendors.',
  },

  // ─── Vendor & Bills ────────────────────────────────────────────────────────

  {
    id: 'vendor-001',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Review a vendor invoice for accuracy, red flags, and a clear approve or query recommendation.',
  },

  {
    id: 'vendor-002',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Scan vendor payment history for duplicate charges, suspicious amounts, and billing anomalies.',
  },

  {
    id: 'vendor-003',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Compare vendor costs across properties to surface inconsistencies and savings opportunities.',
  },

  {
    id: 'vendor-004',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Draft a concise internal payment approval request for a vendor invoice above your threshold.',
  },

  {
    id: 'vendor-005',
    category: 'Expenses & Vendors',
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
    placeholderHint: 'Prioritize which outstanding bills to pay this week given your available cash.',
  },

  {
    id: 'vendor-h-001',
    category: 'Expenses & Vendors',
    title: 'Review and Categorize a Batch of Vendor Invoices',
    tier: 'standalone',
    guide: null,
    prompt: `Review these vendor invoices for my vacation rental property management company. For each invoice provide: (1) suggested GL category, (2) which property to attribute it to, (3) whether it should be billed to the owner or absorbed as a company expense, (4) any red flags (duplicate, unusual amount, missing info).

My commission structure: I take [X%]. Anything under $[threshold] I typically absorb; anything above I bill to the owner.

Property list: [List your properties]

Invoices:
[Paste invoice details — vendor name, amount, date, service description, property if noted]`,
    placeholderHint: 'Review a batch of invoices for GL category, property attribution, and owner-billback decisions.',
  },

  {
    id: 'vendor-h-002',
    category: 'Expenses & Vendors',
    title: 'Design a Vendor Payment Workflow',
    tier: 'standalone',
    guide: null,
    prompt: `Design a vendor payment workflow for my property management company. Currently invoices come in via: [email / text / Zelle / paper / work orders]. We pay via: [ACH / check / card / Zelle].

The workflow should cover: how invoices are received and logged, who codes them to properties, approval thresholds (what needs my sign-off vs. what can be processed directly), how vendor payments are made, and how charges are reflected on owner statements.

We use Topkey for bill pay. We have [X] properties and pay roughly [Y] vendor invoices per month. Our biggest gap right now: [e.g., cleaning vendors who only text their invoice, missing work order references, retroactive charges].`,
    placeholderHint: 'Design a vendor payment workflow from invoice receipt to owner statement reflection.',
  },

  {
    id: 'vendor-h-003',
    category: 'Expenses & Vendors',
    title: 'Design My Vendor Markup Structure',
    tier: 'standalone',
    guide: null,
    prompt: `Help me design and communicate my markup policy for vendor charges billed to owners.

Current situation: I pay vendors directly and bill owners back. I'm considering adding a [5–15%] markup on vendor invoices to cover my coordination overhead.

Create: (1) a markup policy with clear rules on when it applies, (2) how to disclose it in my management agreement, (3) how to show it on owner statements (separate line or rolled in), and (4) language I can use to explain it to owners who ask.

Be honest about industry norms for PM markup rates and how to justify the fee without it feeling like a gotcha.`,
    placeholderHint: 'Design and communicate a vendor markup policy that is transparent and justifiable to owners.',
  },

  {
    id: 'vendor-h-004',
    category: 'Expenses & Vendors',
    title: 'Set Up My Vendor Master List',
    tier: 'standalone',
    guide: null,
    prompt: `Help me set up a vendor master list for my property management company. I have approximately [X] active vendors.

Design the fields I should track for each vendor and the format to maintain it. Fields should include everything needed for: 1099 reporting, payment processing, invoice coding, and onboarding a new bookkeeper or VA who needs to understand our vendor relationships.

Also create: a vendor onboarding checklist (what info I collect before paying a new vendor for the first time), a flag system for vendors who need 1099s, and a note field format for special billing instructions (e.g., "always bill to Owner Smith" or "split 50/50 between Properties A and B").`,
    placeholderHint: 'Build a vendor master list with fields for 1099s, payments, and bookkeeper handoff.',
  },

  {
    id: 'vendor-h-005',
    category: 'Expenses & Vendors',
    title: 'Identify Which Vendors Need 1099s',
    tier: 'standalone',
    guide: null,
    prompt: `Help me figure out which of my vendors need 1099-NEC or 1099-MISC forms for the tax year.

Vendor list with annual payment totals:
[List vendor name, entity type if known (individual / LLC / corp), total paid this year, payment method]

For each vendor: (1) do they likely need a 1099? (2) which form — NEC or MISC? (3) what information do I need to collect if I don't have it? (4) any exceptions or edge cases to flag.

Note: I'm a property manager paying cleaners, maintenance contractors, and some subcontractors. Some vendors are paid via Zelle and credit card — flag how payment method affects 1099 requirements.`,
    placeholderHint: 'Identify which vendors need 1099s, which form to use, and flag any missing W-9s.',
  },

  {
    id: 'vendor-h-006',
    category: 'Expenses & Vendors',
    title: 'Find My Billing Leakage',
    tier: 'standalone',
    guide: null,
    prompt: `I suspect I'm absorbing owner-billable expenses that should be charged back. Help me find the leakage.

Here's a sample of my expenses from last month:
[Paste expense list with vendor, amount, category, property]

For each expense: (1) should this be owner-billable or a company expense? (2) if owner-billable, is there any reason I might currently not be billing it? (3) estimate the monthly dollar impact if I billed this correctly.

Then give me: a summary of estimated annual leakage, the 3 biggest categories to fix first, and the system or process change needed to capture each one going forward.`,
    placeholderHint: 'Find expenses you are absorbing that should be billed back to property owners.',
  },

  {
    id: 'vendor-power-001',
    category: 'Expenses & Vendors',
    title: 'Pull Outstanding Bills from QuickBooks',
    tier: 'power',
    guide: 'quickbooks',
    prompt: `Using my connected QuickBooks Online data, show me all outstanding (unpaid) vendor bills as of today. Sort by due date (most urgent first).

For each bill: vendor name, amount, due date, days until due (or days overdue), which property class it's attributed to. Flag any bills that are more than 14 days overdue. Provide totals for: overdue amount, due this week, due this month, and due beyond this month.`,
    placeholderHint: 'Pull all outstanding and overdue vendor bills from QuickBooks sorted by urgency.',
  },

];
