// Connection guide content for the Power Prompts tier
// Each guide walks a PM through connecting their data source to Claude
// so they can use Power Prompts that query live data without manual pasting.

export const GUIDES = [
  {
    slug: 'quickbooks',
    title: 'Connect QuickBooks Online to Claude',
    pms: 'QuickBooks Online',
    icon: null,
    tagline: 'Query your QBO books directly from Claude — no exports needed.',
    setupTime: '20–30 minutes',
    difficulty: 'Intermediate',
    unlocksCategories: [
      'Expense & Reconciliation',
      'Month-End Close',
      'Vendor & Bills',
      'QuickBooks & Accounting',
      'Owner Reporting / Year-End',
      'Budget & Forecasting',
    ],
    intro: `QuickBooks Online is the most common accounting tool in PM finance. Connecting it to Claude lets you query your chart of accounts, run expense summaries, and analyse vendor payments directly from a conversation — without exporting CSVs.`,
    steps: [
      {
        title: 'Get the QuickBooks MCP server',
        content: `Visit the QuickBooks MCP server on GitHub (search "qbo-mcp" or "quickbooks mcp server"). Clone the repo or download the release package to your local machine.`,
      },
      {
        title: 'Create a QuickBooks API app',
        content: `Go to developer.intuit.com and create a new app. Select "QuickBooks Online" as the platform. Note your Client ID and Client Secret from the Keys & OAuth tab.`,
      },
      {
        title: 'Authorise the MCP server',
        content: `Follow the MCP server's README to run the OAuth flow. You'll be redirected to Intuit's login, approve access, and the server will store your refresh token locally. You only need to do this once.`,
      },
      {
        title: 'Add the server to Claude Desktop',
        content: `Open your Claude Desktop config file (~/Library/Application Support/Claude/claude_desktop_config.json on Mac). Add the QuickBooks MCP server entry following the format in the README. Restart Claude Desktop.`,
      },
      {
        title: 'Test the connection',
        content: `Open Claude Desktop and ask: "What are my top 10 expense categories this month from QuickBooks?" If it returns real data, you're connected. If not, check the MCP server logs for auth errors.`,
      },
      {
        title: 'Use your Power Prompts',
        content: `Return to the prompt library and use any prompt marked with the Power badge. These prompts are written to work with your connected QuickBooks data directly, without manual data entry.`,
      },
    ],
    tips: [
      'Make sure you connect to your production QBO company, not a sandbox.',
      'The MCP server runs locally — your QuickBooks data is not sent to any third party.',
      'If your token expires, re-run the OAuth flow from step 3.',
      'For multi-company QBO accounts, you can connect multiple company files separately.',
    ],
    troubleshooting: [
      { issue: 'OAuth flow fails with "redirect URI mismatch"', fix: 'Add http://localhost:8080/callback as a redirect URI in your Intuit app settings.' },
      { issue: 'Claude says it cannot find QuickBooks tools', fix: 'Restart Claude Desktop after editing the config file. Check the config JSON is valid.' },
      { issue: 'Data looks stale', fix: 'QBO data is fetched live — if it looks old, check your QBO sync settings.' },
    ],
  },

  {
    slug: 'guesty',
    title: 'Connect Guesty to Claude',
    pms: 'Guesty',
    icon: null,
    tagline: 'Query your Guesty reservations, properties, and financials from Claude.',
    setupTime: '15–25 minutes',
    difficulty: 'Beginner–Intermediate',
    unlocksCategories: [
      'Revenue & Performance',
      'Revenue Reconciliation',
      'Owner Communication',
      'Month-End Close',
    ],
    intro: `Guesty's API gives you access to reservations, properties, owners, and financial summaries. Connecting it to Claude lets you ask questions about your portfolio directly — occupancy, revenue by property, upcoming check-ins, and more.`,
    steps: [
      {
        title: 'Generate a Guesty API key',
        content: `In Guesty, go to Settings > Integrations > API. Generate a new API key with read access to Listings, Reservations, and Financial Data. Copy the key — you'll need it in step 3.`,
      },
      {
        title: 'Get or build the Guesty MCP server',
        content: `Search GitHub for "guesty mcp" or "guesty claude integration". Several community-built options exist. Alternatively, you can use a generic REST MCP server (search "rest-mcp" on GitHub) configured with your Guesty API base URL.`,
      },
      {
        title: 'Configure the server with your API key',
        content: `Create a .env file in the MCP server directory with your GUESTY_API_KEY and GUESTY_BASE_URL (typically https://open-api.guesty.com/v1). Run npm install and start the server.`,
      },
      {
        title: 'Add to Claude Desktop config',
        content: `Edit ~/Library/Application Support/Claude/claude_desktop_config.json and add your Guesty MCP server. The server should expose tools like list_reservations, get_property, get_financials. Restart Claude Desktop.`,
      },
      {
        title: 'Test with a simple query',
        content: `Ask Claude: "How many reservations do I have checking in this week?" or "What is my current occupancy rate?" If it returns accurate data, you're set.`,
      },
    ],
    tips: [
      'Request read-only API access — you don\'t need write permissions for prompt use.',
      'Guesty rate limits API calls — the MCP server should handle retries automatically.',
      'If you manage multiple Guesty accounts, connect them with separate server instances.',
    ],
    troubleshooting: [
      { issue: 'API returns 401 Unauthorized', fix: 'Check your API key is correct and hasn\'t expired. Regenerate in Guesty settings if needed.' },
      { issue: 'Claude can\'t find your properties', fix: 'Verify the listings endpoint is included in your API key\'s permissions.' },
      { issue: 'Financial data is missing', fix: 'Financial endpoints may require a separate permission scope — check your API key settings in Guesty.' },
    ],
  },

  {
    slug: 'track',
    title: 'Connect Track Hospitality to Claude',
    pms: 'Track Hospitality',
    icon: null,
    tagline: 'Query your Track reservations and financials directly from Claude.',
    setupTime: '20–30 minutes',
    difficulty: 'Intermediate',
    unlocksCategories: [
      'Revenue & Performance',
      'Revenue Reconciliation',
      'Owner Communication',
      'Month-End Close',
    ],
    intro: `Track's API provides access to reservations, owner statements, and property financials. Once connected to Claude, you can query portfolio performance, pull owner data, and analyse revenue without touching a spreadsheet.`,
    steps: [
      {
        title: 'Get your Track API credentials',
        content: `Log into Track and navigate to Settings > API Access or contact your Track account manager. You'll need your API base URL, client ID, and secret (or API token depending on your Track version).`,
      },
      {
        title: 'Set up a REST-based MCP server',
        content: `Track doesn't have a dedicated Claude MCP server yet. Use a generic REST MCP server (search "openapi-mcp" or "rest-mcp" on GitHub). Configure it with Track's API base URL and your authentication credentials.`,
      },
      {
        title: 'Map Track endpoints in the config',
        content: `Configure the MCP server to expose the Track endpoints you'll use most: reservations, properties, owner statements, and financial summaries. Name each tool clearly (e.g. get_reservations, get_owner_statement).`,
      },
      {
        title: 'Add to Claude Desktop',
        content: `Add the MCP server to your Claude Desktop config at ~/Library/Application Support/Claude/claude_desktop_config.json. Restart Claude Desktop after saving.`,
      },
      {
        title: 'Test with a query',
        content: `Ask Claude: "What is my total revenue for last month from Track?" or "Show me all reservations arriving this weekend." Verify the response matches what you see in Track.`,
      },
    ],
    tips: [
      'Start with read-only API access — you don\'t need write permissions for these prompts.',
      'Track\'s API documentation is available in their developer portal — bookmark it for reference.',
      'If your API token expires, you\'ll need to regenerate it in Track settings.',
    ],
    troubleshooting: [
      { issue: 'Connection refused or timeout', fix: 'Check the API base URL is correct — Track may have different URLs for different environments.' },
      { issue: 'Authentication fails', fix: 'Verify your API credentials haven\'t expired. Check if Track uses OAuth or a simple token — the auth method affects your MCP config.' },
      { issue: 'Missing data in responses', fix: 'Some Track data requires specific query parameters (date ranges, property filters). Check the Track API docs for required params.' },
    ],
  },

  {
    slug: 'streamline',
    title: 'Connect Streamline VRS to Claude',
    pms: 'Streamline VRS',
    icon: null,
    tagline: 'Connect your Streamline data to Claude for live portfolio queries.',
    setupTime: '20–30 minutes',
    difficulty: 'Intermediate',
    unlocksCategories: [
      'Revenue & Performance',
      'Revenue Reconciliation',
      'Owner Communication',
      'Month-End Close',
    ],
    intro: `Streamline's API provides access to reservation data, owner accounts, and financial reporting. Connecting it to Claude lets you query your portfolio performance conversationally — asking questions the way you think them, not the way a database expects them.`,
    steps: [
      {
        title: 'Request API access from Streamline',
        content: `Contact your Streamline account manager or support team to request API access. You'll need your API endpoint URL and an API key or OAuth credentials. Note: API access may require a plan upgrade.`,
      },
      {
        title: 'Review the Streamline API documentation',
        content: `Streamline provides API documentation to authorised users. Review the endpoints for reservations, properties, owner statements, and financial data — these are the ones you'll use most with Claude.`,
      },
      {
        title: 'Configure a REST MCP server',
        content: `Use a generic REST or OpenAPI MCP server (search "openapi-mcp" on GitHub). Point it at Streamline's API base URL with your credentials. Configure the key endpoints as named tools.`,
      },
      {
        title: 'Add to Claude Desktop config',
        content: `Edit ~/Library/Application Support/Claude/claude_desktop_config.json and add your Streamline MCP server configuration. Restart Claude Desktop.`,
      },
      {
        title: 'Verify the connection',
        content: `Test with a simple query: "What properties do I manage in Streamline?" or "Show me my reservations for next week." If the data matches Streamline, you're connected.`,
      },
    ],
    tips: [
      'Streamline API access may have a cost — check with your account manager before setting up.',
      'Use read-only credentials — write access is not needed for these prompts.',
      'Streamline\'s data model uses specific terminology (e.g. "units" not "properties") — keep this in mind when writing prompts.',
    ],
    troubleshooting: [
      { issue: 'API access is not available on your plan', fix: 'Contact Streamline support to discuss API add-on options.' },
      { issue: '403 Forbidden on some endpoints', fix: 'Some Streamline endpoints require elevated API permissions. Check your API scope with Streamline support.' },
      { issue: 'Data doesn\'t match what I see in Streamline', fix: 'Check that you\'re querying the correct company/account ID — Streamline multi-company setups can be tricky.' },
    ],
  },

  {
    slug: 'generic-csv',
    title: 'Use Any PMS with Claude (Generic CSV Guide)',
    pms: 'Any PMS',
    icon: null,
    tagline: 'No direct integration? No problem. Export a CSV and let Claude do the rest.',
    setupTime: '5–10 minutes per session',
    difficulty: 'Beginner',
    unlocksCategories: [
      'Revenue & Performance',
      'Revenue Reconciliation',
      'Expense & Reconciliation',
      'Month-End Close',
      'Owner Reporting / Year-End',
      'Budget & Forecasting',
    ],
    intro: `Don't have a direct Claude integration for your PMS? This guide shows you how to export data from any PMS as a CSV or spreadsheet and use it effectively with Claude's file upload feature. It's the lowest-friction way to get started with AI-powered financial analysis.`,
    steps: [
      {
        title: 'Export your data from your PMS',
        content: `In your PMS, go to Reports and export the data you need. Common exports: Reservation report (date range), Revenue report by property, Expense report, Owner statement export. Download as CSV or Excel (.xlsx).`,
      },
      {
        title: 'Clean up the file (optional but helpful)',
        content: `Open the file and check for: extra header rows, merged cells, hidden columns. Remove any rows that aren't data (e.g. report titles, summary rows at the top). This helps Claude parse the file accurately.`,
      },
      {
        title: 'Upload to Claude.ai',
        content: `Go to claude.ai and start a new conversation. Click the paperclip/attachment icon and upload your CSV or Excel file. Claude can read both formats.`,
      },
      {
        title: 'Use a Power Prompt with your file',
        content: `Copy any Power Prompt marked with the CSV badge from the library. Paste it into Claude after uploading your file. Replace any placeholder text with additional context Claude needs. The prompt will guide Claude to analyse your uploaded data.`,
      },
      {
        title: 'Iterate and ask follow-up questions',
        content: `Once Claude has analysed your file, you can ask follow-up questions in plain English: "Which property had the highest expenses?", "What's the total management fee I earned?", "Show me a month-by-month breakdown." Claude remembers the file for the entire conversation.`,
      },
    ],
    tips: [
      'Larger files (over 1,000 rows) work fine — Claude handles them well.',
      'You can upload multiple files in one conversation (e.g. revenue + expenses separately).',
      'For recurring analysis, save a copy of the Claude conversation as a template — you just need to upload a new file each month.',
      'If your PMS export has unusual column names, tell Claude what each column means at the start of the conversation.',
      'Excel files with multiple sheets: Claude will read the first sheet by default. Tell it which sheet to use if needed.',
    ],
    troubleshooting: [
      { issue: 'Claude misidentifies column meanings', fix: 'Add a sentence at the start of your prompt: "Column A = property name, Column B = gross revenue, Column C = check-in date." This solves most parsing issues.' },
      { issue: 'Numbers look wrong', fix: 'Check for formatting issues in the CSV (currency symbols, commas in numbers). A clean CSV with plain numbers works best.' },
      { issue: 'File is too large to upload', fix: 'Split the file by date range or property group. Multiple smaller uploads in one conversation work well.' },
    ],
  },
];
