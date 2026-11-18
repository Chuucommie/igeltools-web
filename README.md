# IgelTools — website

Static marketing site for IgelTools. No build step, no dependencies: open
`index.html` in a browser or serve the folder as-is.

```
index.html                 landing page
apps/igeltvremote.html     Igel TVRemote app page
assets/css/style.css       all styles (design tokens at the top)
assets/js/main.js          nav toggle, scroll reveal, footer year
assets/icons/              app icon (1024/512/256) + brand mark + favicon
IgelTVRemote/              app source checkout (not part of the site)
IgelNotes/                 app source checkout (not part of the site)
```

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Any static host works. For GitHub Pages: push the contents of this folder to a
repository, then Settings → Pages → deploy from branch, root.

## Where the content comes from

Copy and technical claims are taken from the app repository in `IgelTVRemote/`:

- `README.md` — protocols, discovery, limitations, requirements
- `appStore/listing-en.md` — subtitle, promotional text, description
- `appStore/privacy-policy.md` — the privacy section
- `assets/IgelTVRemoteIcon-1024.png` — the icon, resized into `assets/icons/`

If the app repo changes, update the matching sections on both pages.

IgelNotes copy comes from `IgelNotes/DEVELOPMENT_PLAN.md` and the view/service
names in the project (block editor, CloudKit, PencilKit drawing, App Intents,
AI agents). Its icon was produced from a 2048 × 2048 generated image: the dark
matte was flood-filled with the field green `#5B8360`, the result trimmed and
exported to `assets/icons/igelnotes-{1024,512,256}.png`. The source PNG inside
`IgelNotes/Assets.xcassets` is still the older watercolour icon.

## Things to fill in before launch

1. **GitHub links.** All `https://github.com/Chuucommie` links currently point
   at the profile because the app repositories are private. Swap them for
   `https://github.com/Chuucommie/IgelTVRemote` once it is public.
2. **App Store link.** There is no listing URL yet, so the "Get the app" buttons
   scroll to the download section instead. Replace `href="#get"` with the
   App Store URL when it exists.
3. **Privacy policy page.** App Store Connect needs a hosted URL. The app repo
   has the text in `appStore/privacy-policy.md`; it needs a contact address
   before publishing.
4. **`IgelTVRemote/` and `IgelNotes/`** are working copies of the app repos.
   They are already in `.gitignore`, so they will not be pushed with the site.
5. **IgelNotes has no page yet.** It appears in the lineup and in the icon
   section, but its card links to GitHub. The new green icon also still has a
   German placeholder sentence in the notebook; swap in final artwork before
   App Store submission.

## Design notes

- Palette comes from the icon: blue `#216DE7`, cream `#F2E7CF`, ink `#22262D`.
- Type is system stacks only, so the site has no network dependencies.
- The "icon language" section is the rule set for future app icons: same blue
  field, same cream engraving, same hedgehog, one prop per app.
