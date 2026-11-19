# IgelTools — marketing website

Static marketing site for IgelTools: what each app is for, what it can do and
where to read more. No build step, no dependencies.

Live at <https://chuucommie.github.io/igeltools-web/>.

**Product documentation lives in a separate repository:**
<https://github.com/Chuucommie/IgelTools-docs> →
<https://chuucommie.github.io/IgelTools-docs/>. This repository does not carry
protocols, file paths, security details or MCP schemas.

```
index.html                 landing page
404.html                   not found page (GitHub Pages picks it up)
apps/igeltvremote.html     Igel TVRemote
apps/igelnotes.html        IgelNotes
apps/igelserver.html       IgelServer
apps/igellauncher.html     IgelLauncher
assets/css/style.css       all styles (design tokens at the top)
assets/js/main.js          nav toggle, scroll reveal, footer year
assets/icons/              brand mark + app icons
```

The app source checkouts (`IgelTVRemote/`, `IgelNotes/`, `ServerManager/`,
`IgelLauncher/`) and the docs checkout (`IgelTools-docs/`) sit next to the site
but are ignored by git.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Live from `Chuucommie/igeltools-web` (public) on `main`, root folder, built by
GitHub Pages directly — no Actions workflow.

```sh
git add -A
git commit -m "…"
git -c credential.helper='!gh auth git-credential' push
```

`.nojekyll` keeps Pages from running Jekyll. `404.html` uses
`<base href="/igeltools-web/">` so relative asset URLs resolve from the project
root at any depth — change that one line if the site moves to a custom domain.

## Content rules

- **Marketing only.** Introduce the app, show what it can do, state the status
  and link to the documentation.
- **No product documentation here.** Pairing steps, ports, storage paths,
  cryptography, build commands and MCP tool schemas belong in
  `IgelTools-docs`.
- **Docs links.** Every app page links to its documentation page; the header and
  footer link to the docs home.
- **Honest status.** In development means in development. Nothing is listed as
  available before it builds.

The three app folders stay out of the repository through `.gitignore`. Do not
upload this folder to a host that ignores `.gitignore` (Netlify or Cloudflare
drag-and-drop), or the private source of the apps goes public.
