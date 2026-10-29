# Let users save COSTRON projects in their own cloud

The COSTRON web app is a **static site**: just files, no server code and no database. Each person who uses it can connect **their own** cloud storage and keep their projects there:

| Cloud | What users see | One-time setup by the site owner |
|---|---|---|
| **Dropbox** | "Sign in to Dropbox" | Create a Dropbox app → paste the *App key* in `config.js` |
| **Google Drive** | "Sign in to Google Drive" | Create a Google OAuth client → paste the *Client ID* in `config.js` |
| **OneDrive** (personal or work) | "Sign in to OneDrive" | Register an app in Microsoft Entra → paste the *Application (client) ID* in `config.js` |
| **Nextcloud / WebDAV** | Server address + app password | Nothing in COSTRON (the user's server must allow this site; see SERVER-SETUP.md) |

Users sign in with their own account in a pop-up window. COSTRON never sees their password, and the files go directly between the user's browser and their cloud; nothing passes through your site. Each user's sign-in is remembered only in their own browser.

You can offer one cloud or all of them. Any cloud left empty in `config.js` shows "not set up on this site".

Below, **`https://YOU.github.io/procost/`** stands for your site address. Use exactly the address people open, including the final `/`.

---

## Dropbox (about 5 minutes)

1. Go to **https://www.dropbox.com/developers/apps** → **Create app**.
2. Choose **Scoped access**, then **App folder**. App folder is recommended: COSTRON can only touch `Dropbox/Apps/<your app name>/`.
3. Name it, e.g. `COSTRON`, and click **Create app**.
4. On the **Permissions** tab, tick `files.metadata.read`, `files.content.read`, `files.content.write` and `account_info.read`, then click **Submit**.
5. On the **Settings** tab:
   * **OAuth 2 → Redirect URIs:** add `https://YOU.github.io/procost/`
   * **Allow public clients (Implicit Grant & PKCE):** set to **Allow**
6. Copy the **App key** into `config.js` → `dropbox: '…'`.

A new Dropbox app works for up to 50 users. Click **Apply for production** in the app console when you need more.

## Google Drive (about 10 minutes)

1. Go to **https://console.cloud.google.com** → create a project (e.g. `COSTRON`).
2. Go to **APIs & Services → Library → Google Drive API → Enable**.
3. Set up the **OAuth consent screen** (Google Auth Platform):
   * User type **External**, app name `COSTRON`, and your support email.
   * Data access / scopes: add `…/auth/drive.file`. This lets COSTRON see only the files it creates or opens, not the rest of the user's Drive.
   * Publish the app. While it is in *Testing*, only the test users you add can sign in.
4. Go to **Credentials → Create credentials → OAuth client ID → Web application**:
   * **Authorised JavaScript origins:** `https://YOU.github.io` (the origin only, with no path)
5. Copy the **Client ID** (`….apps.googleusercontent.com`) into `config.js` → `google: '…'`.

### Google file picker (to open files saved by the desktop app)

With the `drive.file` permission, COSTRON only sees files that the web app itself created. A project saved by the **desktop app** into your Google Drive folder is uploaded by *Google Drive for desktop*, so it does not appear in the list. The **📂 Browse my Google Drive…** button opens Google's own file picker. Pick the file once, and from then on COSTRON can open it and save back to it, so the desktop app sees your web changes too.

6. Go to **APIs & Services → Library → Google Picker API → Enable**.
7. Go to **Credentials → Create credentials → API key**. Click the new key → **Application restrictions: Websites** → add `https://YOU.github.io/*` → **API restrictions:** *Restrict key* → tick **Google Picker API** → **Save**.
8. Copy the key into `config.js` → `googleApiKey: '…'`.
9. Copy the **Project number** (digits, shown on the project dashboard / *IAM & Admin → Settings*) into `config.js` → `googleAppId: '…'`.

*For your own use only:* setting `googleFullAccess: true` makes COSTRON list your whole Drive without the picker. Google treats full Drive access as a restricted permission. It works while the app is in **Testing** for your test users, but publishing it to everyone needs Google's security review.

## OneDrive (about 5 minutes)

1. Go to **https://entra.microsoft.com** (or portal.azure.com) → **App registrations → New registration**.
2. Fill in:
   * **Name:** `COSTRON`
   * **Supported account types:** *Accounts in any organizational directory and personal Microsoft accounts*
   * **Redirect URI:** platform **Single-page application (SPA)**, value `https://YOU.github.io/procost/`
3. Click **Register**, then copy the **Application (client) ID** into `config.js` → `microsoft: '…'`.
4. Under **API permissions**, check that Microsoft Graph *delegated* `User.Read`, `Files.ReadWrite` and `offline_access` are listed. Add any that are missing. No client secret is needed.

---

## Upload and test

1. Edit `config.js` on GitHub (open it → ✏️ → paste the IDs → **Commit**).
2. Open your site → **☁ Cloud storage** (toolbar or ⋮ menu) → choose the cloud → **Sign in**.
3. Save a project with **Save here**. After that, **Ctrl+S** and **AutoSave** write back to that cloud file. If the file was changed elsewhere since you opened it, COSTRON asks before overwriting.

**Try it before editing config.js:** in the cloud dialog, open *"I have a client ID – use it on this device for testing"* and paste the ID. It is stored only in that browser.

## Good to know

* **Address must match exactly:** if people open `https://YOU.github.io/procost/index.html`, register that address as well, because the redirect address must match what is in the browser bar.
* **Pop-ups:** sign-in uses a pop-up window, so users must allow pop-ups for the site.
* **Signing in again:** Google keeps users signed in for about an hour at a time; COSTRON asks again when needed. Dropbox and OneDrive stay signed in longer.
* **Desktop app:** the COSTRON desktop app connects to Nextcloud/WebDAV directly. For Dropbox, Google Drive and OneDrive, install that company's desktop app and save projects in its synced folder (File → Save As).
