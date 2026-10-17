# GPM Pest Control — Premium Website

A responsive, conversion-focused static website built with HTML, CSS, and vanilla JavaScript.

## Files
- `index.html` — semantic page structure and content
- `styles.css` — responsive styling and visual system
- `script.js` — mobile navigation, enquiry form, CTA links, and contact configuration

## Before publishing (important)
Open `script.js` and replace:
- `phone`: GPM's WhatsApp/call number in digits only, including country code. Example format for India: `919876543210`
- `displayPhone`: the human-readable phone number shown on the page.

The phone number is intentionally a placeholder. Until replaced, the call and WhatsApp actions will guide the visitor to the contact section, and the enquiry form will explain that configuration is needed.

Also update the business service area, actual service availability, address, and any company-specific details after confirming them with the client. Do not publish unverified claims, testimonials, certifications, or guarantees.

## Images and fonts
This draft uses externally hosted Unsplash image URLs and Google Fonts. An internet connection is required for those assets. Replace the URLs with approved client/brand imagery before final launch if available.

## Run locally
Open `index.html` in a browser. For a local server, use VS Code Live Server or run:
`python -m http.server 8000`
then open `http://localhost:8000`.

## Deploy
Upload the folder to GitHub and import the repository into Vercel, or deploy it using Netlify / GitHub Pages. No build step is required.
