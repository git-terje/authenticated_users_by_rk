# Authenticated Users by rk

![GitHub release (latest by date)](https://img.shields.io/github/v/release/git-terje/authenticated_users_by_rk)
![Manifest version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/git-terje/authenticated_users_by_rk/main/custom_components/authenticated_users_by_rk/manifest.json&label=manifest%20version&query=$.version&color=blue)
![HACS version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/git-terje/authenticated_users_by_rk/main/hacs.json&label=hacs%20version&query=$.version&color=blueviolet)

A Home Assistant custom integration that tracks currently logged-in users.

## Automated Releases
This repository uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for fully automated versioning and publishing.

- Version is determined from commit messages (Conventional Commits).
- `manifest.json`, `hacs.json`, `CHANGELOG.md` and GitHub Releases are updated automatically.
- A HACS-ready zip is uploaded as a release asset.

### Example commits
- `fix: correct manifest version` → patch release
- `feat: add UI options flow` → minor release
- `feat!: breaking change in API` → major release
