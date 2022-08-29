# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.3.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Added scheduled post calculation on plugin activation
- Add JITMs to Jetpack Social
- Enforce sharing limits for Jetpack Social in the block editor, if it is enabled for a site.
- My Jetpack includes JITMs
- Post release tasks.
- Start a new release cycle.
- Support section for paid users
- Tweaked the supports method of the plans package to refresh the plan data.
- Updated Readme.txt for the jetpack-social-1.2.0-beta

### Removed
- Packages: remove deprecated package.

### Fixed
- Avoid PHP warnings when OG description is not set.

## 1.2.0 - 2022-08-03
### Added
- Added shares meter to Jetpack Social admin page.
- Updated package dependencies.
- Added the posts box to the Jetpack Social admin page
- Fetch share counter on the server side in Jetpack Social. To facilitate this, the call to wpcom has been moved into the Publicize_Base class.
- Updated publicize package version.

### Changed
- Rework the admin page to use new components
- Start the 1.2.0 release cycle
- Updated the tagline on the admin page.

## 1.1.0-beta - 2022-06-29
### Changed
- Renaming master to trunk.
- Renaming `master` references to `trunk`
- Reorder JS imports for `import/order` eslint rule.
- Updated package dependencies.
- Updated the design of the admin page to include share counters.

## 1.0.0 - 2022-05-31
### Added
- Initial release.
