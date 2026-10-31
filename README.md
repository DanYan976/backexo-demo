# BackExo

**Simulation-trained, adaptive control for low-back exoskeletons.**

Back-support exoskeletons help in the lab but struggle at work, mostly because their control is one-size-fits-all. We build digital human models of many body sizes, train one controller in simulation across thousands of worker, load and lifting-technique combinations, and run it on a commercial active exoskeleton (FIT HV). The controller adjusts its assist to each worker, gives smooth and stable torque, and is judged by the load it removes from the lower spine (L5/S1), the joint the NIOSH lifting limit is set at.

AnyMotion Lab and BioDynamics Lab, New Jersey Institute of Technology.

**[Website](https://danyan976.github.io/backexo-demo/)**

## How it works

| Step | What it does |
|---|---|
| 1. Digital human model | A full-body musculoskeletal model driven by 416 muscles, fitted to each person's motion capture on the GPU; it gives the load on every spinal joint. A model of the FIT HV couples onto it |
| 2. Learn from real motion | Lab recordings, even a plain video, become reference motions; the digital human learns to reproduce them in physics with its own muscles |
| 3. Lift boxes in simulation | The digital human lifts boxes in physics with the techniques workers use (full squat, semi squat, stoop) and carries them to a shelf |
| 4. Train the exo controller | The digital human wears the exo and adapts to it; one controller learns by reinforcement learning across worker, load and technique combinations |
| 5. Deploy on hardware | The trained controller drives the FIT HV motors in real time, tested in the lab first, then in real workplaces |

## Progress at a glance

| Check | Result |
|---|---|
| Lifts processed | 360 lifts from 10 people (4 techniques x 9 directions) |
| L5/S1 load vs experimental measurements | r = 0.99 |
| Lower-back effort with exo assist | −25%, in simulation |
| Hardware | Live control of the FIT HV motors from our own software |

Exo results are from simulation.

## Working together

The pipeline can run entirely on a partner's own systems, so no worker or task data has to leave the partner. We provide the simulation platform, the code and trained controllers, and lab testing on our own active exo. Together: controllers fitted to real workplace tasks, L5/S1 load checked against the NIOSH limit, and a step-by-step path from lab to floor.

## Labs

- **AnyMotion Lab** ([website](https://sites.google.com/view/weiyin-njit/home)), led by Dr. Wei Yin, School of Applied Engineering and Technology and Department of Mechanical and Industrial Engineering, NJIT
- **BioDynamics Lab** ([website](https://web.njit.edu/~alexzhou/)), led by Dr. Xianlian (Alex) Zhou, Department of Biomedical Engineering, NJIT

## Related publications

Training exoskeleton controllers with reinforcement learning on musculoskeletal models, then testing them on a real exoskeleton.

- Luo, Jiang, Zhang, Zhu, Yu, Dominguez Silva, Wang, Rouse, Zhou B., Yuk, Zhou X. and Su, "Experiment-free exoskeleton assistance via learning in simulation," *Nature* 630, 353–359, 2024. [doi:10.1038/s41586-024-07382-4](https://doi.org/10.1038/s41586-024-07382-4)
- Yuan, Wolf, Androwis and Zhou, "Multi-Agent Reinforcement Learning of Co-Adaptive Hip Exoskeleton Control (MARL-Exo) for Metabolic Energy Reduction," 2026. [arXiv:2610.37441](https://arxiv.org/abs/2610.37441)
- Yuan, Wolf, Androwis and Zhou, "UniExo: Unified Multi-Skill Policies for Musculoskeletal Locomotion and Co-Adaptive Exoskeleton Control," 2026. [arXiv:2609.19690](https://arxiv.org/abs/2609.19690)
- Yuan, Wolf, Androwis and Zhou, "Staged Multi-Agent Training for Human-Exoskeleton Co-Adaptation: Simulation-Based Learning and Real-World Metabolic and Biomechanical Validation," 2026, extended version of the IROS 2026 paper. [arXiv:2608.00715](https://arxiv.org/abs/2608.00715)
- Yuan, Androwis and Zhou, "SMAT: Staged Multi-Agent Training for Co-Adaptive Exoskeleton Control," IROS 2026. [arXiv:2603.07618](https://arxiv.org/abs/2603.07618)

## Sources

- Waters, Putz-Anderson, Garg and Fine, "Revised NIOSH equation for the design and evaluation of manual lifting tasks," *Ergonomics* 36(7), 1993. [Link](https://stacks.cdc.gov/view/cdc/205542)
- Kermavnar, de Vries, de Looze and O'Sullivan, "Effects of industrial back-support exoskeletons on body loading and user experience: an updated systematic review," *Ergonomics* 64(6), 2021. [doi:10.1080/00140139.2020.1870162](https://doi.org/10.1080/00140139.2020.1870162)
- Favro, Beratto, Gobbo, Rainoldi, Capuzzo, Bullo, Bergamin and Mulasso, "What is the current state of evidence on passive exoskeletons designed to support the lumbar region? A systematic review and meta-analysis of physiological, biomechanical, and user-related outcomes," *Applied Ergonomics* 139, 104874, 2027 (online Aug 2026). [doi:10.1016/j.apergo.2026.104874](https://doi.org/10.1016/j.apergo.2026.104874)
- Kazemi, Park and Srinivasan, "Unequal assistance? A systematic review of demographic representation and outcome differences in exoskeleton studies," *Applied Ergonomics* 137, 104808, 2026. [doi:10.1016/j.apergo.2026.104808](https://doi.org/10.1016/j.apergo.2026.104808)
- Amazon workplace safety reports: [2023 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-post-2023), [2024 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-performance-2024), [2025 data](https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-2025-injury-reduction)

## Repository layout

```
index.html     the page and all its text
site.css       the look: black stage, big type, orange-to-pink accent
site.js        scroll effects (fade-in, videos play while on screen)
assets/        images (img/) and videos (video/)
```

Plain HTML, CSS and JS, no build step. GitHub Pages serves the `main` branch, so a push updates the website within a minute or two.

## Editing the page

| To | Do |
|---|---|
| Preview | Run `python -m http.server` in this folder and open http://localhost:8000, or double-click `index.html` |
| Change text | Edit `index.html`; change only the text between tags and keep the `class="..."` attributes |
| Change an Approach step's video | Each step is an `<article class="chapter">`; replace the file in `assets/video/` (same name) and its poster `.jpg`. Videos: H.264, muted, 30 fps, a few MB each |
| Add a hardware video | Put the MP4 (H.264, a few MB) in `assets/video/` and add it where the `TEAM SLOT` comment in step 05 (Deploy on hardware) says |

Style: put the accent only on the one number or word that matters (`class="grad"`), and avoid em dashes.
