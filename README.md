# IgelTools — website

Static marketing site for IgelTools. No build step, no dependencies: open
`index.html` in a browser or serve the folder as-is.

Live at <https://chuucommie.github.io/igeltools-web/>.

```
index.html                 landing page
404.html                   not found page (GitHub Pages picks it up)
apps/igeltvremote.html     Igel TVRemote
apps/igelnotes.html        IgelNotes
apps/igelserver.html       IgelServer
assets/css/style.css       all styles (design tokens at the top)
assets/js/main.js          nav toggle, scroll reveal, footer year
assets/icons/              brand icon + three app icons (1024/512/256, 64 for the favicon)
IgelTVRemote/              app source checkout (not part of the site)
IgelNotes/                 app source checkout (not part of the site)
ServerManager/             app source checkout for IgelServer (not part of the site)
```

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

The three app folders stay out of the repository through `.gitignore`. Do not
upload this folder to a host that ignores `.gitignore` (Netlify or Cloudflare
drag-and-drop), or the private source of the apps goes public.

## Where the content comes from

| Page | Sources |
| --- | --- |
| Igel TVRemote | `IgelTVRemote/README.md`, `appStore/listing-en.md`, `appStore/privacy-policy.md` |
| IgelNotes | `IgelNotes/DEVELOPMENT_PLAN.md` plus the `Views/`, `Services/`, `Intents/` and `Networking/` folders |
| IgelServer | `ServerManager/README.md`, `SECURITY.md`, `docs/` |

Everything technical on the site (supported platforms, Fire TV limitations, the
missing interactive terminal, SSH key handling) comes from those files. If a
claim is not in the repository, it is not on the site.

### Icons

Each icon arrived as a 2048 × 2048 generated JPEG on a dark matte. The same
three steps turn it into a web asset:

```sh
# 1. flood fill the dark matte with the icon's own field colour
#    (purple #401A43 for IgelTools, green #5B8360 for IgelNotes, slate #385269 for IgelServer)
magick source.jpg -fuzz 18% -fill '#401A43' \
  -draw 'color 0,0 floodfill' -draw 'color 2047,0 floodfill' \
  -draw 'color 0,2047 floodfill' -draw 'color 2047,2047 floodfill' \
  -shave 20x20 +repage flat.png
# 2. export
magick flat.png -resize 1024x1024 assets/icons/<app>-1024.png
magick flat.png -resize 512x512  assets/icons/<app>-512.png
magick flat.png -resize 256x256  assets/icons/<app>-256.png
```

The brand icon also gets a 64 px version for the favicon. The artwork inside the
app repositories is untouched — the source PNGs there predate these images.

## Before launch

1. **GitHub links.** Every `https://github.com/Chuucommie` link points at the
   profile because the repositories are private. Swap each for its repo URL once
   it is public.
2. **App Store links.** No listing exists yet, so the app pages have no download
   button. Add the URL when Igel TVRemote goes live.
3. **Privacy policy page.** App Store Connect needs a hosted URL; the text is in
   `IgelTVRemote/appStore/privacy-policy.md` and still needs a contact address.
4. **IgelServer naming.** The repository is called `ServerManager` and the app
   inside it is still named *ServerPulse* in its README. The site uses
   **IgelServer**; rename the repo and the bundle before publishing anything.
5. **Icon text.** The IgelNotes icon carries a German sentence in the notebook
   and the IgelTools icon reads *Notizen*. Both are fine on the web; for the App
   Store they should be replaced with final artwork without lettering.

## Design notes

- Palette: ink background, cream text, and one accent per app — blue `#216DE7`
  (TVRemote), green `#5B8360` (Notes), slate `#385269` (Server), purple
  `#401A43` (IgelTools).
- The wordmark is set in a system serif to sit with the engraved artwork; the
  rest of the site stays in the system sans and mono.
- Type is system stacks only, so the site has no network dependencies.
