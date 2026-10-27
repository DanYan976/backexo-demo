# Simulation-Trained Low-Back Exo Control: web page

A single scrolling page that introduces the project: the problem, the NIOSH yardstick, why exoskeletons struggle in the field, our three-step approach, progress so far, and how we can work together. Plain HTML, CSS and JS, no build step.

## View it

| Situation | How |
|---|---|
| Quick look | Double-click `index.html` |
| Editing | In this folder run `python3 -m http.server`, then open http://localhost:8000 |
| Online | GitHub Pages (see the end of this file) |

## Folder layout

```
index.html                 the page and all its text
site.css                   the look: black stage, big type, orange-to-pink accent
site.js                    scroll effects (fade-in, the Approach steps)
assets/img/  assets/video/ pictures and videos
```

## Edit the page

- Change only the text between tags; keep the `class="..."` attributes as they are.
- Put the accent only on the one number or word that matters (`class="grad"`), and avoid em dashes.
- **Approach section:** one `.step` on the left per `.frame` on the right, in the same order and count. To swap a placeholder for a figure, replace `<div class="frame placeholder">[Figure to add]</div>` with `<div class="frame photo"><img src="assets/img/your-figure.jpg" alt="..."></div>`.
- **Video demos:** put the MP4 (H.264) in `assets/video/` and add it where the `TEAM SLOT` comment in the Progress section says. Keep each file under about 50 MB; GitHub rejects files over 100 MB.

## Publish with GitHub Pages

On GitHub: **Settings, Pages, Build and deployment, Source: Deploy from a branch, Branch: main, folder: / (root)**. The page appears at `https://<user>.github.io/<repo-name>/` after a minute. It has `noindex` set, so search engines are asked not to list it, but anyone with the link can open it.
