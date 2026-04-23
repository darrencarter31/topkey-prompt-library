export default [

  // ─── Owner Communication ───────────────────────────────────────────────────

  {
    id: 'owner-comm-001',
    category: 'Owner Comms & Reporting',
    title: 'Monthly Owner Statement Narrative',
    tier: 'standalone',
    guide: null,
    prompt: `You are a professional property management accountant writing a monthly performance summary for a property owner.

Here is the data for [OWNER NAME]'s property at [PROPERTY ADDRESS] for [MONTH YEAR]:

[PASTE YOUR REVENUE AND EXPENSE DATA HERE — e.g. gross revenue, OTA fees, cleaning costs, maintenance, management fee, net payout]

Write a 2–3 paragraph professional narrative to accompany the owner statement. The tone should be warm, clear, and confident. Highlight any strong or weak performance with a brief explanation. If occupancy or revenue was below normal, offer a brief, honest explanation and a forward-looking note. Do not make up numbers — only reference the data I've provided.`,
    placeholderHint: 'Write a professional monthly performance narrative to accompany an owner statement.',
  },

  {
    id: 'owner-comm-002',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Draft a professional email explaining a lower-than-expected owner payout.',
  },

  {
    id: 'owner-comm-003',
    category: 'Owner Comms & Reporting',
    title: 'Mid-Year Portfolio Check-In Email',
    tier: 'standalone',
    guide: null,
    prompt: `Write a mid-year check-in email to a property owner summarising performance for their vacation rental portfolio for the first half of [YEAR].

Use this data:
[PASTE H1 SUMMARY DATA — e.g. total revenue, total expenses, occupancy rate, management fees paid, net distributed to owner]

The tone should be professional and relationship-focused. Highlight 1–2 wins and mention any areas we're watching or improving. Close with a brief note about what to expect for H2. Keep the email under 300 words.`,
    placeholderHint: 'Write a mid-year check-in email summarizing H1 portfolio performance for an owner.',
  },

  {
    id: 'owner-comm-004',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Draft an email notifying an owner of an unexpected maintenance expense on their property.',
  },

  {
    id: 'owner-comm-005',
    category: 'Owner Comms & Reporting',
    title: 'Answer Owner Question: "Why Was My Payout Different?"',
    tier: 'standalone',
    guide: null,
    prompt: `A property owner has asked: "My payout this month was different from last month — can you explain why?"

Here is the comparison data:
Last month: [PASTE LAST MONTH'S REVENUE, EXPENSES, AND NET PAYOUT]
This month: [PASTE THIS MONTH'S REVENUE, EXPENSES, AND NET PAYOUT]

Analyse the differences line by line and write a clear, friendly explanation I can send directly to the owner. Use plain English — no accounting jargon. Point out the 2–3 biggest drivers of the change.`,
    placeholderHint: 'Explain month-over-month payout differences to an owner in plain, jargon-free language.',
  },

  {
    id: 'owner-comm-006',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Write a warm onboarding email that builds confidence with a new property owner.',
  },

  {
    id: 'owner-comm-007',
    category: 'Owner Comms & Reporting',
    title: 'Respond to an Owner Questioning a Line Item',
    tier: 'standalone',
    guide: null,
    prompt: `A property owner is questioning a line item on their statement and wants an explanation.

Owner's question: "[PASTE THE OWNER'S QUESTION OR CONCERN]"
The line item in question: [DESCRIPTION OF THE EXPENSE/FEE] — $[AMOUNT]
Context: [BRIEF EXPLANATION OF WHAT THIS CHARGE IS AND WHY IT WAS INCURRED]

Write a clear, professional reply that explains the charge without being defensive. If the charge is legitimate, explain it confidently. If there's any ambiguity, acknowledge it and offer to review. Keep it under 150 words.`,
    placeholderHint: 'Draft a confident, professional reply to an owner questioning a line item on their statement.',
  },

  {
    id: 'owner-stmt-001',
    category: 'Owner Comms & Reporting',
    title: 'Explain an Owner Statement Line by Line',
    tier: 'standalone',
    guide: null,
    prompt: `I need to explain this owner statement to a property owner in plain English. They're not familiar with accounting terms and sometimes push back on charges they don't recognize.

For each line item write a 1–2 sentence explanation a non-accountant would understand. Flag any line items that are commonly questioned and suggest how to proactively explain them before the owner asks.

Management fee structure: [X% of gross revenue]
Owner type: [hands-off investor / actively involved / new to STR investing]

Statement:
[Paste the statement or list of line items here]`,
    placeholderHint: 'Translate a complex owner statement into plain-English explanations, line by line.',
  },

  {
    id: 'owner-stmt-002',
    category: 'Owner Comms & Reporting',
    title: 'Draft the Monthly Owner Statement Email',
    tier: 'standalone',
    guide: null,
    prompt: `Draft a monthly owner statement email I can use as a template. It should accompany the owner statement PDF and be professional but warm.

Include: a summary of the month's performance (gross revenue, net payout, occupancy if known), 1–2 sentences on anything notable (strong season, maintenance issue resolved, rate adjustment), what the payout amount is and when it will arrive.

Variables to fill in each month: [PROPERTY_NAME], [MONTH], [GROSS_REVENUE], [TOTAL_EXPENSES], [NET_PAYOUT], [PAYOUT_DATE], [OCCUPANCY_%], [OPTIONAL_NOTE].

Tone: confident and transparent — I want owners to feel informed, not surprised. Keep it under 200 words.`,
    placeholderHint: 'Create a reusable monthly owner statement email template with variable placeholders.',
  },

  {
    id: 'owner-stmt-003',
    category: 'Owner Comms & Reporting',
    title: 'Respond to an Owner Disputing a Charge',
    tier: 'standalone',
    guide: null,
    prompt: `An owner is questioning a charge on their statement. Help me draft a professional, confident response that explains the charge without being defensive.

The charge: [describe the expense — amount, what it was for, which property]
The owner's concern: [what they said or asked]
Context: [Was it pre-approved? Is it in the management agreement? Was it an emergency?]
My relationship with this owner: [New owner / Long-term / Currently a bit rocky]

The response should: acknowledge their question, explain the charge clearly, reference the management agreement if applicable, and close in a way that maintains trust. Keep it under 150 words.`,
    placeholderHint: 'Respond professionally to an owner disputing a charge while maintaining trust.',
  },

  {
    id: 'owner-stmt-004',
    category: 'Owner Comms & Reporting',
    title: 'Design What Should Be on an Owner Statement',
    tier: 'standalone',
    guide: null,
    prompt: `Help me design the right format for owner statements for my VR property management business.

My situation: [X] properties, management fee of [X%], I am a [full-service PM / co-host / hybrid]. Owners range from [hands-off investors to actively involved local owners].

For each owner type, tell me: what line items to show, what to roll up vs. itemize, whether cleaning fees should be shown or netted, how to handle OTA fees and processing fees, and what the top 3 items that confuse owners are and how to label them clearly.

Note: I use Topkey for statements. I want statements that look professional and don't expose internal cost structures unnecessarily.`,
    placeholderHint: 'Design the right format and line-item structure for your owner statements.',
  },

  {
    id: 'owner-stmt-005',
    category: 'Owner Comms & Reporting',
    title: 'QA Checklist Before Sending Owner Statements',
    tier: 'standalone',
    guide: null,
    prompt: `Create a pre-send QA checklist for owner statements that my team can run through every month before statements go out.

We have [X] properties and send statements on the [15th / 1st]. Common errors we've had in the past: [e.g., wrong management fee %, missing expenses, double-counted charges, wrong payout amount].

The checklist should be: quick to run (under 10 minutes per statement), specific to vacation rental statements (not just generic accounting), and include a spot to initial/sign off for both the preparer and a second reviewer. Include a "red flags" section for things that should pause a statement from going out.`,
    placeholderHint: 'Build a pre-send QA checklist that catches statement errors before owners see them.',
  },

  {
    id: 'owner-comm-power-001',
    category: 'Owner Comms & Reporting',
    title: 'Generate Monthly Owner Narrative from Guesty Data',
    tier: 'power',
    guide: 'guesty',
    prompt: `Using my connected Guesty data for [OWNER NAME]'s property [PROPERTY NAME] for [MONTH YEAR]: pull total revenue, occupancy rate, average nightly rate, number of bookings, and any notable booking events (long stays, last-minute bookings, cancellations).

Use this live data to write a 2–3 paragraph owner statement narrative. Highlight the best-performing weeks, explain any gaps or below-average periods, and close with a brief note about the month ahead. Tone should be professional but warm. Do not make up numbers — only reference what the Guesty data shows.`,
    placeholderHint: 'Auto-generate a monthly owner narrative using live Guesty reservation data.',
  },

  // ─── Owner Reporting / Year-End ────────────────────────────────────────────

  {
    id: 'year-end-001',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Create a professional annual performance summary with narrative and key metrics for an owner.',
  },

  {
    id: 'year-end-002',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Prepare a year-end tax summary organized for an owner\'s accountant.',
  },

  {
    id: 'year-end-003',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Rank all portfolio properties by revenue and efficiency for an internal year-end review.',
  },

  {
    id: 'year-end-004',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Prepare a 1099 expense summary for a property owner for the tax year.',
  },

  {
    id: 'year-end-005',
    category: 'Owner Comms & Reporting',
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
    placeholderHint: 'Write a warm year-end letter to all owners that summarizes performance and builds confidence.',
  },

  {
    id: 'year-end-power-001',
    category: 'Owner Comms & Reporting',
    title: 'Generate Owner P&L Summary from QuickBooks',
    tier: 'power',
    guide: 'quickbooks',
    prompt: `Using my connected QuickBooks Online data, pull the P&L for [PROPERTY NAME OR CLASS] for [MONTH / QUARTER / YEAR].

Format the output as an owner-facing performance summary: gross revenue, expenses by category, management fee, net owner payout. Calculate the net payout as a percentage of gross revenue. Add a brief narrative paragraph explaining the performance. Flag any expense line that was significantly higher or lower than the prior period and suggest why.`,
    placeholderHint: 'Generate an owner-facing P&L summary with narrative directly from QuickBooks.',
  },

  // ─── Year-End & CPA ────────────────────────────────────────────────────────

  {
    id: 'yearend-cpa-001',
    category: 'Owner Comms & Reporting',
    title: 'Year-End Close Checklist for a VR PM',
    tier: 'standalone',
    guide: null,
    prompt: `Create a comprehensive year-end close checklist for my vacation rental property management company.

My setup: [X] properties, [Y] owners, PMS is [name], accounting in [QBO / Xero], use Topkey for cards and expense management.

The checklist should cover: December tasks (what to complete before Dec 31), January tasks (what to do in the first 2 weeks), 1099 requirements and deadlines, what to send my CPA and when, bank reconciliation and trust account reconciliation, final owner statements and year-end owner summaries, and any depreciation or capital expense items to capture.

Organize by week (Dec week 3, Dec week 4, Jan week 1, Jan week 2) with a clear owner for each task and a done/not done column.`,
    placeholderHint: 'Build a week-by-week year-end close checklist covering 1099s, CPA package, and owner summaries.',
  },

  {
    id: 'yearend-cpa-002',
    category: 'Owner Comms & Reporting',
    title: 'Build the Complete CPA Package',
    tier: 'standalone',
    guide: null,
    prompt: `Create a tax package checklist — everything my CPA needs from me to file my property management company's taxes.

My business structure: [LLC / S-Corp / Sole Prop]. I have [X] properties under management and own [Y] properties personally.

The package checklist should include: financial statements from QBO, 1099s issued and received, owner statements summary, capital expenditure list, depreciation schedules, bank statements, any new assets acquired this year, mileage log, home office information (if applicable), and anything specific to a PM company (trust account summary, management fee revenue breakdown).

Also write: a one-page cover letter I can send my CPA with the package that explains our business model so they don't have to ask basic questions about how VR property management works.`,
    placeholderHint: 'Create a complete CPA tax package checklist with a cover letter explaining your business model.',
  },

  {
    id: 'yearend-cpa-003',
    category: 'Owner Comms & Reporting',
    title: 'Smart Questions to Ask My CPA About VR Tax Strategy',
    tier: 'standalone',
    guide: null,
    prompt: `Give me a list of smart questions to ask my CPA about tax strategy specifically for a vacation rental property management business.

My situation: [X] years in business, [Y] properties managed, [$Z] approximate revenue, business structure: [LLC / S-Corp], I also personally own [W] STR properties.

Questions should cover: how to minimize self-employment tax, whether my S-Corp election is optimized for my income level, depreciation opportunities (cost segregation, bonus depreciation), home office deduction, vehicle and mileage, pass-through deduction (Section 199A), retirement account options, and anything specific to property managers that most generic CPAs miss.

Flag which questions are most important for someone at my revenue level and which might not apply until I'm larger.`,
    placeholderHint: 'Generate smart tax strategy questions to ask your CPA about your PM business.',
  },

  {
    id: 'yearend-cpa-004',
    category: 'Owner Comms & Reporting',
    title: 'Run My Year-End 1099 Process',
    tier: 'standalone',
    guide: null,
    prompt: `Walk me through the complete 1099 process for my vacation rental property management company.

Vendor types I pay: cleaners (some are individuals, some are LLCs), maintenance contractors, landscapers, property management software (probably exempt), accountants, and a few other service vendors.

Cover: (1) which vendors need 1099-NEC vs. 1099-MISC, (2) how to determine if an LLC needs a 1099, (3) the W-9 collection process and when to do it, (4) deadlines — recipient deadline vs. IRS filing deadline, (5) how to file (QBO 1099 wizard vs. third-party service vs. accountant), and (6) what to do if I missed collecting a W-9 from a vendor I already paid.

Also flag anything specific to PMs who pay owners — do I need to issue 1099s to property owners?`,
    placeholderHint: 'Walk through the complete 1099 process from W-9 collection to filing deadlines.',
  },

  {
    id: 'yearend-cpa-005',
    category: 'Owner Comms & Reporting',
    title: 'Year-End Letter to Property Owners',
    tier: 'standalone',
    guide: null,
    prompt: `Draft a year-end letter to send to my property owners. This goes with their annual owner statement and any tax documents I'm providing.

The letter should: summarize the year (overall business performance, notable wins, any challenges), remind owners of key dates for their own tax filing, list what tax documents I'm providing them and what they need to give their own CPA, answer the most common owner questions at tax time (do they get a 1099 from me, what can they deduct, etc.), and preview any changes for next year (rate adjustments, new services, etc.).

Tone: warm, professional, confident. This letter reinforces our value and sets the tone for the new year. Keep it to one page.`,
    placeholderHint: 'Draft a year-end letter to owners covering tax documents, deductions, and what to give their CPA.',
  },

];
