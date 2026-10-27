# Simulation-Trained Low-Back Exo Control

**One adaptive controller for back-support exoskeletons, trained in simulation.**

Back-support exoskeletons help in the lab but struggle on the floor, mostly because their control is one-size-fits-all. We build digital human models of many body sizes, train one controller in simulation across thousands of worker, load and lifting-technique combinations, and run it on a commercial active exoskeleton (FIT HV). The controller adjusts its assist to each worker, gives smooth and stable torque, and is judged by the load it removes from the lower spine (L5/S1), the joint the NIOSH lifting limit is set at.

AnyMotion Lab and BioDynamics Lab, New Jersey Institute of Technology.

**[Website](https://danyan976.github.io/backexo-demo/)**

## How it works

| Step | What it does |
|---|---|
| 1. Digital human models | Body models of many sizes, fitted to motion capture on the GPU, with 210 lower-back muscles and the load on each spinal joint |
| 2. Train in simulation | Each model wears the exo; one controller learns by trial and error across worker, load and technique combinations |
| 3. Deploy on hardware | The trained controller drives the FIT HV motors in real time, tested in the lab first, then in the field |

## Progress at a glance

| Check | Result |
|---|---|
| Lifting trials processed | 90 trials from 10 people |
| Marker fit, same input as OpenSim | 19.9 mm; OpenSim 26.2 mm |
| L5/S1 load vs force plates | r = 0.99 |
| Lower-back effort with exo assist (20 N·m per hip) | −25%, in simulation |
| Hardware | Live control of the FIT HV motors from our own software |

Exo results are from simulation.

## Working together

The pipeline can run entirely on a partner's own systems, so no worker or task data has to leave the partner. We provide the simulation platform, the code and trained controllers, and lab testing on our own active exo. Together: controllers fitted to real workplace tasks, L5/S1 load checked against the NIOSH limit, and a step-by-step path from lab to floor.

## Sources

- Waters, Putz-Anderson, Garg and Fine, "Revised NIOSH equation for the design and evaluation of manual lifting tasks," *Ergonomics* 36(7), 1993. [Link](https://stacks.cdc.gov/view/cdc/205542)
- Kermavnar, de Vries, de Looze and O'Sullivan, "Effects of industrial back-support exoskeletons on body loading and user experience: an updated systematic review," *Ergonomics* 64(6), 2021. [doi:10.1080/00140139.2020.1870162](https://doi.org/10.1080/00140139.2020.1870162)
- Amazon workplace safety reports: [2023 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-post-2023), [2024 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-performance-2024), [2025 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-2025-injury-reduction)

## Repository layout

```
index.html     the page and all its text
site.css       the look: black stage, big type, orange-to-pink accent
site.js        scroll effects (fade-in, the Approach steps)
assets/        images (img/) and videos (video/)
```

Plain HTML, CSS and JS, no build step. GitHub Pages serves the `main` branch, so a push updates the website within a minute or two.

## Editing the page

| To | Do |
|---|---|
| Preview | Run `python -m http.server` in this folder and open http://localhost:8000, or double-click `index.html` |
| Change text | Edit `index.html`; change only the text between tags and keep the `class="..."` attributes |
| Add a figure to the Approach steps | Put the image in `assets/img/` and replace `<div class="frame placeholder">[Figure to add]</div>` with `<div class="frame photo"><img src="assets/img/your-figure.jpg" alt="..."></div>`. Keep one `.frame` per `.step`, in the same order |
| Add a video demo | Put the MP4 (H.264, under about 50 MB) in `assets/video/` and add it where the `TEAM SLOT` comment in the Progress section says |

Style: put the accent only on the one number or word that matters (`class="grad"`), and avoid em dashes.
