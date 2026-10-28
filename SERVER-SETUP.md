# ProCOST on your own server (Nextcloud / WebDAV)

ProCOST can open and save project files (`.pcp`) and rate libraries (`.pcl`) directly on your own server. This works with **Nextcloud**, **ownCloud**, or any **WebDAV** server, for example Synology, QNAP, or Apache/nginx with WebDAV.

* **Desktop app:** works with any server straight away, with nothing to set up on the server.
* **Web app:** works best when ProCOST is placed **on the same server (same address) as Nextcloud**, for example `https://cloud.example.com/procost/`. See section 2.

---

## 1. Connect ProCOST to your server

1. In Nextcloud, go to **Settings → Security → Devices & sessions → Create new app password**. Name it "ProCOST" and copy the password it shows. Use this app password, not your login password; you can revoke it at any time.
2. In ProCOST, click the **☁ cloud button** on the Quick Access Toolbar, or use **⋮ → Server files**. On the desktop you can also use **File → Open from server…**.
3. Fill in:
   * **Server type:** Nextcloud / ownCloud
   * **Server address:** `https://cloud.example.com` (the address you use to open Nextcloud)
   * **User name:** your Nextcloud user name
   * **App password:** the password from step 1
   * **Folder:** `ProCOST`. It is created for you, and you can browse to any other folder.
4. Click **Connect**.

For another type of WebDAV server, choose **Other WebDAV** and enter the full folder URL, for example `https://nas.example.com:5006/home/procost/`.

**Using it**

* **Open:** click a file in the list and choose **Replace current project**.
* **Save (Ctrl+S):** writes back to the server file you opened. **Save here** saves the current project into the folder you are viewing, under a name you choose.
* **AutoSave:** switch it on in the toolbar, and the open server file is saved a few seconds after each change.
* **Conflicts:** if someone else, or another device, saved the same file after you opened it, ProCOST asks whether to overwrite it or save a copy, so no work is lost silently.

---

## 2. Put the web app on your Nextcloud server

Copy the contents of this package (`index.html`, `icon.png`, `libraries/`, `samples/`) to a folder on the server, for example `/var/www/procost`, then make it available under your Nextcloud address.

### Apache (most Nextcloud installs)

Add to your Nextcloud site configuration, for example `/etc/apache2/sites-available/nextcloud.conf`, inside `<VirtualHost *:443>`:

```apache
Alias /procost /var/www/procost
<Directory /var/www/procost>
    Require all granted
    Options -Indexes
</Directory>
```

Then run `sudo systemctl reload apache2`.

### nginx

Add inside the `server { … }` block of your Nextcloud site, **before** the other `location` blocks:

```nginx
location ^~ /procost/ {
    alias /var/www/procost/;
    index index.html;
}
```

Then run `sudo systemctl reload nginx`.

Open `https://cloud.example.com/procost/` and connect as in section 1. Because the app and your files are on the same address, the browser allows ProCOST to read and save them.

---

## 3. Web app hosted somewhere else (e.g. GitHub Pages)

Browsers block a page on one address (e.g. `https://you.github.io`) from reading files on another (`https://cloud.example.com`) unless the server allows it (CORS). Nextcloud does not allow this by default.

* **Option A (recommended):** host ProCOST on the Nextcloud server as in section 2.
* **Option B:** in Nextcloud, install the **WebAppPassword** app (Apps → search "WebAppPassword"). Then, under its admin settings, add your ProCOST address (e.g. `https://you.github.io`) to the allowed origins for WebDAV.
* **Option C:** use the ProCOST **desktop app**, which has no CORS limits.

If the connection fails with "Could not reach the server", one of these is needed.

---

## 4. Files on your computer too

Install the **Nextcloud desktop sync client** and sync the `ProCOST` folder. Your `.pcp` files then also appear in a normal folder on your computer, and you can open them with the ProCOST desktop app (**File → Open**) even offline. Nextcloud syncs the changes back.

---

## Notes

* The server address must use **https://** (except `localhost`).
* **Desktop app and self-signed certificates:** with a home server's self-signed certificate, the desktop app may refuse to connect. Use a free Let's Encrypt certificate instead.
* **Remembered password:** if you tick "Remember the password on this device", the app password is stored in this browser or app profile. Untick it on shared computers. You can remove the connection with **Forget connection**.
