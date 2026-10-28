/* ProCOST cloud sign-in settings for this website.
   Register ProCOST once with each cloud you want to offer (see CLOUD-SETUP.md),
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
