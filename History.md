## History

v1.1.0-beta, September 01, 2010
- Changed defaultCssClass option to defaultClassname.
- Fixed issue with firefox sometimes not applying the properties to the rendered code, causing text overflow.
- We are now a bit more explicit with the css, this will help safari and opera render properly if stylesheets are still loading
- Increased the load delay so that highlight will run when themes should have loaded.
- Updated demo to use PRE elements instead.

v1.0.1-beta, August 16, 2010
- Now uses a local copy of prettify which contains a fix to only prettify something once.
- Fixed some issues with IE and newlines
- Set tab width to 4 instead of 8
- IE does not have nice formatting for line numbers unfortunately so we have an alternate stylesheet

v1.0.0-beta, August 16, 2010
- Now uses Google's Prettify instead of Alex's Syntax Highlighter v3. There were just too many issues with Alex's and I couldn't fix them all. This fixes the IE error for all users.
- Added themes.
- Re-did nearly all the wording on the demo page to reflect the new syntax highlighter direction and features.

v0.2.1-beta, August 15, 2010
- Fixed an issue with IE and wraplines.

v0.2.0-beta, July 28, 2010
- Updated licensing information. Still using the same license, as it is the best there is, but just provided some more information on it to make life simpler.
- Fixed autoloading.

v0.1.0-dev, July 23, 2010
- Initial Release