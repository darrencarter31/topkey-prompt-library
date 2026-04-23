export default [

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
    placeholderHint: 'Generate a step-by-step month-end close checklist tailored to your team and software setup.',
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
    placeholderHint: 'Diagnose what is blocking your month-end close and get a prioritized resolution plan.',
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
    placeholderHint: 'Write the cover email that goes to all owners when distributing monthly statements.',
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
    placeholderHint: 'Calculate management fees for every property in your portfolio for the month.',
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
    placeholderHint: 'Verify your trust account reconciliation and flag any discrepancies between balance and owner liabilities.',
  },

  {
    id: 'monthend-h-001',
    category: 'Month-End Close',
    title: 'Diagnose Why Your Close Is Taking So Long',
    tier: 'standalone',
    guide: null,
    prompt: `My month-end close currently takes until around day [20–28] of the following month. We have [X] properties and [Y] cardholders.

Here's our current workflow: [describe what happens after the month ends — who pulls what, in what order, what causes delays].

Analyze where the bottlenecks are and give me 3–5 specific process changes that would get us to closing by day 7. Flag anything that software like Topkey or QuickBooks should be automating that we're currently doing manually.`,
    placeholderHint: 'Identify close bottlenecks and get specific process changes to reach a day-7 close.',
  },

  {
    id: 'monthend-h-002',
    category: 'Month-End Close',
    title: 'Write a Month-End SOP for My Bookkeeper',
    tier: 'standalone',
    guide: null,
    prompt: `Write a standard operating procedure (SOP) for month-end close that I can hand to my bookkeeper.

Setup: [X] properties, PMS is [PMS name], accounting in [QBO / Xero], expense management via Topkey, owner payouts on the [15th / 1st] of each month.

The SOP should cover: transaction review and categorization cutoff, receipt collection, Topkey to QBO sync verification, revenue reconciliation from OTAs, owner statement review and approval, and owner payout execution. Use numbered steps with clear pass/fail criteria at each checkpoint.`,
    placeholderHint: 'Write a step-by-step month-end SOP your bookkeeper can follow independently.',
  },

  {
    id: 'monthend-h-003',
    category: 'Month-End Close',
    title: 'Review Open Transactions for Close Readiness',
    tier: 'standalone',
    guide: null,
    prompt: `I'm preparing to close [Month Year]. Below is my list of open or incomplete transactions from Topkey. For each one, tell me: (1) why it might be open, (2) what action I need to take to resolve it, and (3) whether I can close without it or if it's a blocker.

Flag anything that looks like a duplicate, a split that doesn't add up, or a transaction that's been sitting incomplete for more than 30 days.

[Paste your open transaction list here]`,
    placeholderHint: 'Triage open or incomplete transactions and determine what is blocking the close.',
  },

  {
    id: 'monthend-h-004',
    category: 'Month-End Close',
    title: 'Month-End Status Email to My Team',
    tier: 'standalone',
    guide: null,
    prompt: `Draft a short, professional email I can send to my team at the start of each month reminding them to complete any outstanding transactions from last month.

Tone: direct but friendly, not accusatory. Include: the deadline for completion, what specifically needs to be done (receipt upload, memo, property tag), and the consequence if not done by the deadline (manual follow-up with the cardholder's manager).

Our team uses Topkey for transaction management. The deadline for completing last month's transactions is [Date].`,
    placeholderHint: 'Draft a team reminder email to complete outstanding transactions before the close deadline.',
  },

  {
    id: 'monthend-h-005',
    category: 'Month-End Close',
    title: 'Write a Cardholder Expense Policy',
    tier: 'standalone',
    guide: null,
    prompt: `Write a one-page cardholder expense policy for our property management company. We have [X] employees with Topkey corporate cards.

Include: what's required for each transaction (receipt, memo, property tag), time limits for submission, what happens with personal charges, the approval workflow, and consequences for non-compliance.

Make it readable (not legalese), specific to the vacation rental industry (field teams buying supplies, online purchases for multiple properties, Amazon orders, etc.), and formatted so I can paste it into our employee handbook.`,
    placeholderHint: 'Write a clear, practical cardholder expense policy your team will actually follow.',
  },

  {
    id: 'month-end-power-001',
    category: 'Month-End Close',
    title: 'Pull Uncategorized Transactions from QuickBooks',
    tier: 'power',
    guide: 'quickbooks',
    prompt: `Using my connected QuickBooks Online data, pull all transactions from [MONTH YEAR] that are: (1) uncategorized or in the "Ask My Accountant" account, (2) split transactions with a missing property class, (3) transactions over $[THRESHOLD] with no memo.

Format as a triage list I can work through to close the month. Sort by amount (largest first). Flag anything that has been sitting uncategorized for more than 30 days. Give me a total dollar value of uncategorized transactions so I know the scope before I start.`,
    placeholderHint: 'Pull all uncategorized and incomplete transactions from QuickBooks for close triage.',
  },

  {
    id: 'month-end-power-002',
    category: 'Month-End Close',
    title: 'Close Readiness Check from CSV Export',
    tier: 'power',
    guide: 'generic-csv',
    prompt: `I've uploaded a transactions or statements CSV for [MONTH YEAR]. Run a close readiness check:

1. Identify all transactions with missing receipts, memos, or property tags
2. Flag split transactions that don't add up
3. Identify any duplicate-looking entries
4. List what's blocking close vs. what can be deferred

Give me a prioritized list of the 10 most important items to resolve before I can close the month, with a rough time estimate to fix each one.`,
    placeholderHint: 'Run a close readiness check against an uploaded CSV and get a prioritized fix list.',
  },

];
