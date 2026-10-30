/* COSTRON cloud sign-in settings for this website.
   Register COSTRON once with each cloud you want to offer (see CLOUD-SETUP.md),
   paste the public IDs between the quotes, and upload this file.
   Leave a value empty to hide that cloud. These IDs are public – no secrets go here. */
window.PROCOST_CLOUD = {
  dropbox:   '',   // Dropbox "App key"
  google:    '',   // Google "OAuth 2.0 Client ID" (….apps.googleusercontent.com)
  googleApiKey: '', // Google "API key" – lets users pick files saved by the desktop app (Google Picker)
  googleAppId:  '', // Google Cloud "Project number" (digits only, from the project dashboard)
  googleFullAccess: false, // true = see the whole Drive without the picker (only for your own use in Testing mode)
  microsoft: ''    // Microsoft "Application (client) ID" for OneDrive
};

/* Sign-in page (email + password + forgot password) using Firebase Authentication.
   Paste the values from Firebase console → Project settings → Your apps → Web app (see LOGIN-SETUP.md).
   Leave apiKey empty to open COSTRON without a sign-in page. */
window.PROCOST_AUTH = {
  apiKey:     '',
  authDomain: '',          // e.g. procost-xxxx.firebaseapp.com
  projectId:  '',
  appId:      '',
  allowSignup: true,       // false = only accounts you add in Firebase can sign in
  requireVerified: false,  // true = users must confirm their email before using COSTRON
  continueUrl: ''          // optional: your site address, e.g. https://YOU.github.io/procost/
};
