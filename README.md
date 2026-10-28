# ProCOST — Project Costing, Optimisation, Scheduling & Tracking

ProCOST is a construction costing, bill of quantities, tender, delivery, scheduling and tracking tool that runs entirely in the browser.

**Open the app:** `https://<your-github-username>.github.io/<repository-name>/`

## Features
- Material, labour and plant rates with several locations, and a schedule of rates built from rate analysis
- Bill of quantities with detail of measurement (Excel export and import for site measurement)
- Tender: bids, bid comparison, technical scoring (QCBS / pass-fail), bid analysis and award
- Contract BoQ, running account bills, payments, retention and advances
- Project tasks, delivery timeline, resource forecast, inventory, expense record and cash flow (forecast and actual)
- PDF, Word and Excel reports
- Encrypted file sharing (.pcp) with selected pages only

## How your data is stored
- Everything you enter is kept **in your own browser** (local storage) on the device you are using. Nothing is sent to a server.
- Use **Save** (Quick Access Toolbar or Ctrl+S) to download your project as a `.pcp` file. Keep it as your backup, or open it on another computer with **Open**.
- Clearing your browser data deletes the project stored in the browser, so save a `.pcp` file regularly.

## Save to your own cloud
This site is static. Each user can connect **their own** cloud with **☁ Cloud storage** and open and save projects there, with AutoSave and conflict warnings:
- **Dropbox, Google Drive, OneDrive:** the site owner registers ProCOST once and pastes the IDs into `config.js`. See **[CLOUD-SETUP.md](CLOUD-SETUP.md)**.
- **Nextcloud / WebDAV:** see **[SERVER-SETUP.md](SERVER-SETUP.md)**.

## Rate libraries
The `libraries` folder has the BSR 2026 (Civil) rate libraries for Thimphu, Phuentsholing, Gelephu and Samdrup Jongkhar. Download one and load it in ProCOST with **⋮ → Load library**.

## Samples
The `samples` folder has two sample projects (`.pcp`). Download one and open it in ProCOST.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole ProCOST web app (single file) |
| `icon.png` | Browser tab icon |
| `libraries/*.pcl` | BSR 2026 rate libraries |
| `samples/*.pcp` | Sample projects |
| `config.js` | Dropbox / Google / Microsoft client IDs for cloud sign-in |
| `CLOUD-SETUP.md` | How to get those IDs |
| `SERVER-SETUP.md` | Connect to Nextcloud / WebDAV and host ProCOST on your server |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

The app loads jsPDF, jsPDF-AutoTable and JSZip from cdnjs.cloudflare.com, so an internet connection is needed for PDF and Excel features.
