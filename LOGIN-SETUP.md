# Sign-in page (email + password + forgot password)

COSTRON's web app can show a **sign-in page** before the main app. People sign in with their **email address and password**. **Forgot password?** emails them a reset link with a one-time code, which opens COSTRON so they can choose a new password.

Because the site is static, the accounts are handled by **Firebase Authentication** (Google). It is free for this kind of use, stores passwords securely and sends the emails. You can attach it to the Google Cloud project you already made.

## 1. Turn on Firebase Authentication (about 10 minutes)

1. Go to **https://console.firebase.google.com** → **Create a project** → choose **your existing Google Cloud project** (COSTRON) from the list → Continue (you can turn Google Analytics off).
2. Go to **Build → Authentication → Get started**.
3. On the **Sign-in method** tab, click **Email/Password** → **Enable**. Leave *Email link* off → **Save**.
4. On the **Settings** tab, go to **Authorised domains → Add domain** → `YOU.github.io`.
5. Click the ⚙ **Project settings** → **General** → *Your apps* → **</> (Web)** → nickname `COSTRON` → **Register app**. Don't tick hosting.
   Copy the values from `firebaseConfig` into **`config.js` → `PROCOST_AUTH`**:
   ```js
   apiKey: 'AIza…', authDomain: 'procost-xxxx.firebaseapp.com', projectId: 'procost-xxxx', appId: '1:…:web:…'
   ```
6. Make the reset email open COSTRON:
   1. Go to **Authentication → Templates → Password reset** → ✏️.
   2. Click **Customise action URL** and enter `https://YOU.github.io/procost/` → **Save**.
   3. You can also change the sender name to "COSTRON" there.
7. Commit `config.js`. When you reload the site, the sign-in page appears after the splash screen.

## 2. Who can sign in?

* **Anyone can create an account** (default): `allowSignup: true`. The sign-in page shows *Create an account*.
* **Only people you invite:**
  1. Set `allowSignup: false` in `config.js`.
  2. In Firebase, go to **Authentication → Settings → User actions** and untick **Enable create (sign-up)**.
  3. Add people in **Authentication → Users → Add user**: their email and a temporary password. They can then use *Forgot password?* to choose their own.
* **Require confirmed emails:** set `requireVerified: true`. New users then have to click the link in a confirmation email before they can use COSTRON.

## 3. Protect the Firebase API key

GitHub will again report the Firebase `apiKey` as a "secret". Like the Picker key, it is a **public browser key**. Restrict it as follows:

1. In Google Cloud Console, go to **APIs & Services → Credentials** → open the key named *Browser key (auto created by Firebase)*.
2. Set **Websites** to `https://YOU.github.io/*`.
3. Set **API restrictions** to *Identity Toolkit API* and *Token Service API* → **Save**.
4. Close the GitHub alert with **Won't fix**, noting "public browser key, restricted".

## Good to know

* **The sign-in page identifies users:**
  * Each person's projects and cloud connections are kept **separate** in the browser. If two people share a computer, they don't see each other's work.
  * The app's files are still public on GitHub; don't put anything confidential in them.
  * Real project data stays in each user's own cloud or files.
* **Account menu:** **⋮ → Sign out / Change password** is at the top of the menu.
* **Users and limits:** the free Firebase plan covers thousands of users and password-reset emails. You can see and manage all users in **Authentication → Users**.
* **The desktop app has no sign-in page.** It works with local files.
