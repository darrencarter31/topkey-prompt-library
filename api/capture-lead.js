// Vercel serverless function — captures email leads via HubSpot Forms API (no token needed)
// POST /api/capture-lead
// Body: { email: string, name?: string }
// Returns: { packUrl: string } on success

// Public HubSpot Forms API — same endpoint used on the Webflow site
const HS_PORTAL_ID = '45738827';
const HS_FORM_ID   = '1c3944f1-6614-4f33-b4f6-51b2afcb2049';
const HS_FORMS_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`;

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { res.status(405).json({ error: 'Method not allowed' }); return; }

  const { email, name } = req.body || {};

  if (!isValidEmail(email)) {
    res.status(400).json({ error: 'Valid email address required' });
    return;
  }

  const fields = [
    { name: 'email', value: email.trim().toLowerCase() },
    { name: 'form_source', value: 'tools-prompt-library' },
  ];
  if (name?.trim()) fields.push({ name: 'firstname', value: name.trim() });

  try {
    const hsRes = await fetch(HS_FORMS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields, context: { pageName: 'STR Finance Prompt Library' } }),
    });

    if (!hsRes.ok) {
      const text = await hsRes.text();
      throw new Error(`HubSpot Forms API ${hsRes.status}: ${text}`);
    }

    console.log(`capture-lead: submitted ${email} to HubSpot Forms`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('capture-lead error:', err.message);
    res.status(500).json({ error: 'Failed to save — please try again' });
  }
}
