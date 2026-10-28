<div align="center">

# Maestro Mobile Quality Framework

**Human-readable Android automation for fast smoke feedback, focused regression, and mobile release confidence.**

[![Maestro](https://img.shields.io/badge/Maestro-Mobile_Automation-6C5CE7)](https://maestro.mobile.dev/)
[![Validate](https://github.com/foysal619/maestro-mobile-quality-framework/actions/workflows/validate.yml/badge.svg)](https://github.com/foysal619/maestro-mobile-quality-framework/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-14B8A6.svg)](LICENSE)

</div>

## Overview

This repository demonstrates a modern, low-maintenance approach to mobile UI automation with Maestro. The example flows exercise the Wikipedia Android app, but the structure is deliberately product-neutral: flows are grouped by risk, tagged for selective execution, readable by the whole delivery team, and ready for local devices or cloud execution.

## What it covers

- Clean-state app launch and conditional onboarding handling
- Critical search journey smoke coverage
- Article navigation regression coverage
- Core control discoverability checks
- Tag-based suites for fast release gates
- Screenshots at high-value evidence points
- Static flow validation on every pull request
- Optional Maestro Cloud execution when repository secrets are configured

## Structure

```text
.maestro/
├── config.yaml
└── flows/
    ├── accessibility/core-labels.yaml
    ├── regression/article-navigation.yaml
    └── smoke/launch-and-search.yaml
scripts/validate-flows.mjs
```

## Run locally

1. Install Maestro and start an Android emulator or connect a device.
2. Install the Wikipedia Android app (`org.wikipedia`).
3. Clone this repository and run:

```bash
npm run validate
npm run test:smoke
npm run test:regression
npm test
```

## Adapt it to your app

Update `appId`, replace the visible labels with stable accessibility text from your application, and keep the risk-based folders. Avoid long end-to-end flows: compose short journeys, make data ownership explicit, and capture evidence only where it helps diagnose a release risk.

## CI and device strategy

The default GitHub workflow validates the repository without requiring an emulator. If `MAESTRO_API_KEY`, `MAESTRO_PROJECT_ID`, and an app artifact are available, the cloud job executes the same flows on managed devices. This separation keeps pull requests fast while preserving a path to real-device confidence.

## Mobile automation principles

- Prefer visible and accessibility-facing selectors.
- Handle optional system or onboarding states explicitly.
- Keep smoke coverage small enough to gate every build.
- Run broad device and OS coverage where it changes product risk.
- Treat screenshots, logs, and videos as diagnostic evidence—not decoration.

## Author

Built by [Musfiqur Rahman Foysal](https://github.com/foysal619), Software QA Engineer working across web, mobile, API, and release quality.
