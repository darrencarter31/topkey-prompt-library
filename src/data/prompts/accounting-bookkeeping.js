export default [

  // ─── QuickBooks & Accounting ───────────────────────────────────────────────

  {
    id: 'qbo-s-001',
    category: 'Accounting & Bookkeeping',
    title: 'Set Up My Chart of Accounts for a VR PM Company',
    tier: 'standalone',
    guide: null,
    prompt: `Create a chart of accounts optimized for a vacation rental property management company in QuickBooks Online.

My setup: [X] properties, I am a [full-service PM / co-host], I use [Guesty / OwnerRez / Track / Streamline] as my PMS, and I handle both trust funds and my own operating expenses.

Include: revenue accounts (management fees, ancillary fees, cleaning fee revenue if applicable), expense accounts broken out for both owner expenses and operating expenses, liability accounts for trust funds and owner reserves, and asset accounts for equipment and inventory.

Flag which accounts need to be set up with Classes or Locations for property-level tracking, and which QuickBooks settings I should configure for a PM company specifically (trust accounting mode if applicable).`,
    placeholderHint: 'Build a chart of accounts optimized for a vacation rental PM company in QuickBooks Online.',
  },

  {
    id: 'qbo-s-002',
    category: 'Accounting & Bookkeeping',
    title: 'Fix My QuickBooks Sync Issues',
    tier: 'standalone',
    guide: null,
    prompt: `My QuickBooks Online sync from Topkey is not working correctly. Help me troubleshoot.

The problem: [describe what's happening — transactions not appearing, appearing as duplicates, going to wrong accounts, amounts off, etc.]

My setup: PMS is [PMS name], QBO version is [Simple Start / Essentials / Plus / Advanced], I use Classes for property tracking: [yes/no].

Walk me through: (1) the most likely causes of this specific problem, (2) what to check in QBO settings first, (3) what to check in Topkey settings, (4) how to clean up transactions that already went through incorrectly without creating more problems, and (5) how to prevent it going forward.`,
    placeholderHint: 'Troubleshoot a QuickBooks sync issue coming from Topkey or your PMS.',
  },

  {
    id: 'qbo-s-003',
    category: 'Accounting & Bookkeeping',
    title: 'Set Up Classes and Locations for Property Tracking',
    tier: 'standalone',
    guide: null,
    prompt: `Help me set up QuickBooks Online Classes and/or Locations for property-level tracking in my vacation rental PM company.

Properties: [List property names or count]
I also need to track: [market areas / property types / owner groups — whatever matters to my reporting]

Design: (1) whether I should use Classes, Locations, or both and why, (2) naming conventions that will sort and filter cleanly in reports, (3) how to handle shared/corporate expenses that aren't property-specific, (4) which report in QBO will show me P&L by property after this is set up, and (5) how this integrates with how Topkey sends data to QBO.`,
    placeholderHint: 'Configure QBO Classes and Locations for clean property-level P&L reporting.',
  },

  {
    id: 'qbo-s-004',
    category: 'Accounting & Bookkeeping',
    title: 'Reconcile My QBO to My Bank Statement',
    tier: 'standalone',
    guide: null,
    prompt: `My QuickBooks bank account balance doesn't match my actual bank statement. Help me reconcile it.

Situation: QBO shows [$X], bank statement shows [$Y], difference is [$Z]. The account in question is: [operating account / trust account / savings].

Walk me through the reconciliation process step by step. Specifically: how to use QBO's reconciliation tool, what to look for (outstanding checks, timing differences, duplicate entries, missing transactions), how to handle transactions that are in the bank but not in QBO (and vice versa), and what to do if I find a genuine error vs. a timing difference.

Context: I use Topkey for bill pay so some transactions originate there before hitting QBO.`,
    placeholderHint: 'Step through the QBO bank reconciliation process when your balance does not match.',
  },

  {
    id: 'qbo-s-005',
    category: 'Accounting & Bookkeeping',
    title: 'Build the QBO Reports I Actually Need',
    tier: 'standalone',
    guide: null,
    prompt: `Tell me which QuickBooks Online reports I should run regularly as a vacation rental property manager, how to set each one up, and what I should be looking for when I review them.

I need to understand: property-level P&L, cash position, outstanding bills, vendor payment history, owner liability balance, and overall business profitability.

For each report: the QBO report name, how to filter/customize it for a PM company, what frequency to run it (daily / weekly / monthly), and what the key numbers or red flags to watch for are. Prioritize the 5 most important reports for someone with [X] properties who currently just does a P&L once a month.`,
    placeholderHint: 'Identify the five most important QBO reports for a property manager and how to use them.',
  },

  {
    id: 'qbo-s-006',
    category: 'Accounting & Bookkeeping',
    title: 'Prep My QBO for a New Bookkeeper',
    tier: 'standalone',
    guide: null,
    prompt: `I'm onboarding a new bookkeeper. Help me audit my QuickBooks Online setup and create a one-page overview document they can use to get up to speed.

The document should include: our chart of accounts structure and naming logic, Class/Location setup and what each represents, our fiscal year and close schedule, how Topkey connects to QBO and what flows automatically vs. needs manual attention, our main vendors and how they're coded, and any quirks or known workarounds in our setup.

Ask me any questions you need to fill this out completely. I'll answer them and then you write the document.`,
    placeholderHint: 'Create a one-page QBO overview document for onboarding a new bookkeeper.',
  },

  // ─── Trust Accounting ──────────────────────────────────────────────────────

  {
    id: 'trust-001',
    category: 'Accounting & Bookkeeping',
    title: 'Explain Trust Accounting for VR Property Managers',
    tier: 'standalone',
    guide: null,
    prompt: `Explain trust accounting for a vacation rental property manager in plain English. I need to understand:

1. What a trust account actually is and why it's required (legal obligations, state rules)
2. The difference between owner funds I hold in trust vs. my operating funds — and why mixing them is a serious problem
3. What a proper trust account reconciliation looks like
4. How Track and Streamline handle trust accounting differently from direct-deposit PMS systems
5. What happens to trust funds when an owner terminates their agreement
6. Red flags that indicate my trust accounting might be out of compliance

My state: [State]. My PMS: [Track / Streamline / other]. I currently hold approximately [$X] in owner funds at any time.`,
    placeholderHint: 'Understand what trust accounting is, why it matters, and what compliance requires.',
  },

  {
    id: 'trust-002',
    category: 'Accounting & Bookkeeping',
    title: 'Reconcile My Trust Account',
    tier: 'standalone',
    guide: null,
    prompt: `Walk me through how to reconcile my property management trust account for [Month Year].

My setup: PMS is [Track / Streamline / other], accounting is [QBO / Xero / other], trust account bank: [bank name].

The reconciliation should: match the trust bank balance to the sum of all individual owner ledger balances, identify any discrepancies at the individual owner level, verify that no operating expenses were paid from the trust account, and confirm that owner payouts match the payout records in my PMS.

What reports do I pull from each system and in what order? What does a completed trust reconciliation look like on paper?`,
    placeholderHint: 'Walk through the complete trust account reconciliation process for the month.',
  },

  {
    id: 'trust-003',
    category: 'Accounting & Bookkeeping',
    title: 'What Flows Through Trust vs. My Operating Account?',
    tier: 'standalone',
    guide: null,
    prompt: `Help me build a clear decision framework for which transactions belong in my trust account vs. my operating account.

My business model: [full-service PM / co-host], PMS: [name], I collect guest payments: [directly / through OTA / through PMS].

Create a transaction type guide that covers: guest deposits and reservations, cleaning fees, security deposits, owner expense reimbursements, vendor payments for property repairs, management fees, my own payroll, credit card charges, and refunds.

For each type: which account does it hit, at what timing, and what's the journal entry or workflow step in my accounting system?`,
    placeholderHint: 'Build a decision framework for which transactions belong in trust vs. operating accounts.',
  },

  {
    id: 'trust-004',
    category: 'Accounting & Bookkeeping',
    title: 'Should I Be Earning Interest on My Trust Account?',
    tier: 'standalone',
    guide: null,
    prompt: `I hold a large amount of money in trust for my property owners and I'm earning almost no interest on it. Help me understand my options.

Current situation: approximately [$X] in trust, currently earning [0.2% / $X/year] at [bank name].

Questions: (1) What are my legal obligations around trust account interest — do the earnings go to owners, to me, or a state fund? (2) Are there high-yield trust-eligible accounts I can move this to? (3) What disclosures do I need to make to owners? (4) How would I structure this if owners are entitled to their share of interest? (5) What's the risk of moving trust funds to a different institution?

My state: [State]. I currently have [X] owners across [Y] properties.`,
    placeholderHint: 'Explore options for earning interest on your trust account and understand the legal requirements.',
  },

  // ─── Bookkeeper Management ─────────────────────────────────────────────────

  {
    id: 'bkmgr-001',
    category: 'Accounting & Bookkeeping',
    title: 'Evaluate Whether to Switch Bookkeepers',
    tier: 'standalone',
    guide: null,
    prompt: `Help me evaluate whether I should switch bookkeepers or invest in fixing my current relationship.

Current situation: we've worked with [bookkeeper name / firm] for [X years]. We have [Y] properties. We pay approximately [$Z/month].

Problems we're experiencing: [late statements / inaccurate entries / not familiar with STR accounting / capacity issues / not learning Topkey / slow turnaround on requests]

What's working: [describe what's good]

Give me: (1) a framework for deciding stay vs. switch, (2) what to try first before switching, (3) what to look for in a replacement if I do switch (specifically for a VR PM using Topkey), (4) questions to ask potential new bookkeepers, and (5) how to transition without losing historical knowledge.`,
    placeholderHint: 'Decide whether to switch bookkeepers or fix the current relationship with a clear framework.',
  },

  {
    id: 'bkmgr-002',
    category: 'Accounting & Bookkeeping',
    title: 'Brief a New Bookkeeper on Our Setup',
    tier: 'standalone',
    guide: null,
    prompt: `Create a bookkeeper onboarding document for our property management company. It should contain everything a new bookkeeper needs to understand our setup and start working within the first week.

Cover: our business model and revenue structure, PMS ([name]) and how it connects to our accounting software ([name]), how Topkey works and what they'll do in it, our chart of accounts structure, our month-end close schedule and what their deliverables are by when, our owner statement format and timing, our vendor list and payment preferences, any known quirks in our setup, and who to contact for what.

Format it as a document I can share with a new bookkeeper or accounting firm on day one.`,
    placeholderHint: 'Create a day-one onboarding document that gets a new bookkeeper up to speed fast.',
  },

  {
    id: 'bkmgr-003',
    category: 'Accounting & Bookkeeping',
    title: 'Write a Bookkeeper Job Posting for a VR PM',
    tier: 'standalone',
    guide: null,
    prompt: `Write a job posting for a bookkeeper or accountant for our vacation rental property management company.

Our setup: [X] properties, PMS is [name], accounting in QuickBooks Online, we use Topkey for expense management and owner statements.

The ideal candidate: has experience with property management or STR accounting, is comfortable with QBO, can run month-end close independently, and can communicate clearly with non-finance owners.

The posting should: stand out from generic bookkeeper ads, attract someone who understands STR complexity (trust accounting, OTA reconciliation, owner statements), be honest about our stage (we're growing and still building processes), and include the key skills we actually need vs. nice-to-haves.`,
    placeholderHint: 'Write a job posting that attracts bookkeepers with real STR accounting experience.',
  },

  {
    id: 'bkmgr-004',
    category: 'Accounting & Bookkeeping',
    title: 'Interview Questions for a Bookkeeper Candidate',
    tier: 'standalone',
    guide: null,
    prompt: `Write 10 interview questions for a bookkeeper candidate that will help me determine if they're a good fit for a vacation rental property management company.

Questions should test: understanding of trust accounting, experience with OTA reconciliation, familiarity with property management accounting software (QBO, Guesty, Track, Streamline), how they handle month-end close under time pressure, their experience with owner statements, and how they approach learning new software.

For each question include: what a good answer sounds like, what a red flag answer sounds like, and whether the question is a must-pass or nice-to-have.

Also include 3 practical test questions I can give them as a take-home exercise before the final round.`,
    placeholderHint: 'Generate interview questions that test for trust accounting and OTA reconciliation skills.',
  },

  {
    id: 'bkmgr-005',
    category: 'Accounting & Bookkeeping',
    title: 'Create a Monthly Bookkeeper Scorecard',
    tier: 'standalone',
    guide: null,
    prompt: `Design a monthly performance scorecard for my bookkeeper. I want to evaluate them objectively instead of just having a general sense that things are going well or badly.

Metrics to include: days to close (target: by day 7), owner statement accuracy rate (errors found by owners), QBO reconciliation completion, response time to requests, and anything else that matters for our operation.

For each metric: define exactly how to measure it, set a green / yellow / red threshold, and note what action I should take at each level. The scorecard should be fillable in under 10 minutes and give me a clear picture of whether our bookkeeping operation is healthy or needs intervention.`,
    placeholderHint: 'Design a monthly scorecard to objectively measure your bookkeeper\'s performance.',
  },

];
