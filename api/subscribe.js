// Vercel Serverless Function to proxy Substack subscription
// Based on: https://techtrails.io/p/adding-subscribers-to-substack

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // Substack's internal subscription API
    const response = await fetch('https://felixwinkler.substack.com/api/v1/free', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Origin': 'https://felixwinkler.substack.com',
        'Referer': 'https://felixwinkler.substack.com/',
      },
      body: JSON.stringify({
        email: email,
        first_url: 'https://felixwinkler.substack.com/',
        first_referrer: '',
        current_url: 'https://felixwinkler.substack.com/',
        current_referrer: '',
        referral_code: '',
        source: 'embed',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Subscribed successfully!' });
    } else {
      // If Substack blocks server calls, fall back to redirect approach
      return res.status(200).json({ 
        success: false, 
        fallback: true,
        redirectUrl: `https://felixwinkler.substack.com/subscribe?email=${encodeURIComponent(email)}`
      });
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(200).json({ 
      success: false, 
      fallback: true,
      redirectUrl: `https://felixwinkler.substack.com/subscribe?email=${encodeURIComponent(email)}`
    });
  }
}

