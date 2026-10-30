/* COSTRON cloud sign-in settings for this website.
   Register COSTRON once with each cloud you want to offer (see CLOUD-SETUP.md),
   paste the public IDs between the quotes, and upload this file.
   Leave a value empty to hide that cloud. These IDs are public – no secrets go here. */
window.PROCOST_CLOUD = {
  dropbox:   '',   // Dropbox "App key"
  google:    '640006574785-2opmhb2lvfo31uatqqvijmmko48jim2i.apps.googleusercontent.com',   // Google "OAuth 2.0 Client ID" (….apps.googleusercontent.com)
  googleApiKey: 'AIzaSyD73MCaGN6xo0QFan4PPOq0JIzTA1iY1Dk', // Google "API key" – lets users pick files saved by the desktop app (Google Picker)
  googleAppId:  '640006574785', // Google Cloud "Project number" (digits only, from the project dashboard)
  googleFullAccess: false, // true = see the whole Drive without the picker (only for your own use in Testing mode)
  microsoft: ''    // Microsoft "Application (client) ID" for OneDrive
};

/* Sign-in page (email + password + forgot password) using Firebase Authentication.
   Paste the values from Firebase console → Project settings → Your apps → Web app (see LOGIN-SETUP.md).
   Leave apiKey empty to open COSTRON without a sign-in page. */
window.PROCOST_AUTH = {
  apiKey:     'AIzaSyB4SOIK0LFjfcUhVoQk_Ds6vUkDYXue3_U',
  authDomain: 'project-1edd06bd-5686-4d0a-81d.firebaseapp.com',          // e.g. procost-xxxx.firebaseapp.com
  projectId:  'project-1edd06bd-5686-4d0a-81d',
  appId:      '1:640006574785:web:5ba1a60e4332e276d2fa40',
  allowSignup: true,       // false = only accounts you add in Firebase can sign in
  requireVerified: false,  // true = users must confirm their email before using COSTRON
  continueUrl: ''          // optional: your site address, e.g. https://YOU.github.io/procost/
  approval: true,
  admins: ['kuenchapdhendup.btn@gmail.com']
};
