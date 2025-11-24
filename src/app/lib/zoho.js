import axios from 'axios';

export async function getZohoAccessToken() {
  const client_id = process.env.ZOHO_CLIENT_ID;
  const client_secret = process.env.ZOHO_CLIENT_SECRET;
  const refresh_token = process.env.ZOHO_REFRESH_TOKEN;
  const accounts_url = process.env.ZOHO_ACCOUNTS_URL || 'https://accounts.zoho.com';

  const tokenUrl = `${accounts_url}/oauth/v2/token`;

  try {
    const response = await axios.post(tokenUrl, null, {
      params: {
        refresh_token,
        client_id,
        client_secret,
        grant_type: 'refresh_token',
      },
    });

    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Failed to get access token:', error.response?.data || error.message);
    throw new Error('Unable to get access token');
  }
}

// Example: Add a lead
export async function createZohoLead(leadData) {
  const accessToken = await getZohoAccessToken()

  try {
    const response = await axios.post(
      'https://www.zohoapis.com/crm/v2/Leads',
      { data: [leadData] },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      }
    )

    console.log('📦 Zoho CRM raw response:', JSON.stringify(response.data, null, 2))

    return response.data
  } catch (error) {
    console.error('❌ Failed to create lead:', error.response?.data || error.message)
    throw new Error('Unable to create lead')
  }
}

