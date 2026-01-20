# Desktop Software Integration Guide

This guide is for the software developer (C#, C++, Python, etc.).

## 1. How to Verify a License Key
Your software should **NOT** talk to Payhip directly. Instead, verification goes through your website API.

**API Endpoint:**
`POST https://your-website-domain.com/api/verify`

**Request Body (JSON):**
```json
{
  "licenseKey": "XXXX-XXXX-XXXX-XXXX"
}
```

**Response (JSON):**
```json
{
  "valid": true,         // or false
  "email": "customer@example.com", // (Optional) The buyer's email
  "licenseMsg": "..."
}
```

## 2. Server Setup (Important!)
For this to work, you must add your **Payhip API Key** to Vercel.

1.  Login to [Payhip](https://payhip.com) -> **Settings** -> **Developer** -> Copy **API Key**.
2.  Login to [Vercel](https://vercel.com) -> Select Project -> **Settings** -> **Environment Variables**.
3.  Add a new variable:
    *   **Key**: `PAYHIP_API_KEY`
    *   **Value**: (Paste the key from step 1)
4.  Redeploy (Click "Redeploy" in Vercel if needed).

## 3. C# Example (Windows Forms / WPF)

```csharp
using System.Net.Http;
using System.Text;
using System.Text.Json;

public async Task<bool> IsLicenseValid(string userKey)
{
    var url = "https://your-website-domain.com/api/verify";
    var json = JsonSerializer.Serialize(new { licenseKey = userKey });
    var content = new StringContent(json, Encoding.UTF8, "application/json");

    using (var client = new HttpClient())
    {
        var response = await client.PostAsync(url, content);
        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadAsStringAsync();
            // Parse result to check if "valid" is true
            // ...
            return true; 
        }
    }
    return false;
}
```
