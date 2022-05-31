# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.1.0-alpha - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add automatic Publicize module activation and a mocked endpoint for testing
- Added a function to list publicize connections in Jetpack Social.
- Added initial readme.txt content.
- Added redirect links for Jetpack cloud.
- Added toggle to enable and disable Publicize
- Add meta tags to singular posts and pages
- Adds a placeholder sidebar in the block editor
- Allow plugins to filter the list of available modules. Only activate and consider active modules that are available
- Meta tags: Added the title and description tags for a valid twitter card
- Publicize Panel: Implemented the Jetpack Social specific version of the Publicize panel
- Rename Reach to Social

### Changed
- Admin page: Updated the support link and swapped to use an ExternalLink
- Editor: Updated the sidebar menu icon to be the Social one
- Fix Composer dependencies
- Implemented the new design for the admin page
- Janitorial: require a more recent version of WordPress now that WP 6.0 is coming out.
- Moved components to their own files
- Remove use of `pnpx` in preparation for pnpm 7.0.
- Social: use isExternalLink for the media connections button
- Updated package dependencies.
- Updated remaining references to Jetpack Reach on readme, composer and admin page files
- Updated the design of the connection screen
- Update eslint config. No material change to the package itself.
- Update package.json metadata.

### Deprecated
- Moved the options class into Connection.

### Removed
- Editor plugin: Prevent it from loading with Jetpack active

### Fixed
- Depend on a release version of WorDBless.
- Site Editor: Prevent the editor extension loading for unsupported post types
