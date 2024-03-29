# Changelog

Official Releases will be published when there are new versions. This changelog contains dev and stable updates. The stable chnagelog is a merger of all development updates.

## 2.0.0

Wow, it finally happened after 1 year.

### Development

- Development has moved to TypeScript! See [README](./README.md) for more details. Theme files are now generated at the run of a command rather than manually modifying JSON files.
  - Created function logic to generate `tokenColors` and `colors`.
- ESLint to lint the TS files. Currently default settings (`recommended`).
- Added `direnv` and `nix` files for development.
- Alphabetical sort of all entries (and consequently means every scope in one tokenColor is sorted by category)

### Updates

- Updated [README.md](./README.md)
- `DIFFERENCES.md` keeps track of known differences with current devtools alongside any reasoning/ways forward
- Added `editor.rangeHighlightBackground`
- Added support for `.nix` files
- All comments are now the colours of `comment`.
- Added support for `dockerfile` via the extension `jeff-hykin.better-dockerfile-syntax`.
- Added limited support for `F#`. Tested with the extension `Ionide for F#: ionide.ionide-fsharp`.
- Added support for Rust (via `rust-lang.rust-analyzer`) keywords and namespaces.
- Improved support for other various inbuilt languages. Everything else is mostly the same.
- Improved theming for the status bar: debuggging, status items etc.
- No white text on light theme.
- Buttons and badges match active theme.
- Updated screenshots.

## 1.2.0

### Colour Theming

- `activityBar.activeBorder` is now blue as it is in DevTools

### Syntax Highlighting

- PHP
  - Changed type highlighting in PHP to be yellow #43 (light orange in light theme)
  - Embedded SQL follows the changes made in "SQL"
- C#
  - Changed type and delegate highlighting to be yellow
  - Changed fields and event variables to be blue
- YAML:
  - Types yellow (light orange in light theme)
  - Dates are now green
- SQL:
  - Params/variables are blue
  - Bracketed text is now blue-grey
  - DML keywords are light orange
  - Other keywords are pink except aliases - they remain green.
- Clojure
  - Meta symbols are orange
  - Keyword constants are blue
- Dart
  - Classes are now yellow (light orange in light theme)
  - Regular variables are default text colour for this theme. They do not hae have a TextMate scope and thus I cannot make them blue as desired

### Other

- Screenshots added: PHP, SQL, C#, YAML, Dart
- README updated

The next beta (currently) will focus on cleaning up the repository, highlighting more languages and focusing on the minimap/decorations. This version is NOT on the marketplace.

## 1.1.9

- Made selection highlight in dark theme have better accessibility contrast
- Changed some other things such as bracket highlighting slightly
- Cursor now has a yellow tint

## 1.1.8

- Made `storage.type.annotations` clearer to see in Light
- Made user-defined generic functions highlighted on languages such as Python
- Some misc back-end stuff

## 1.1.5

- In-built classes for languages should now be pink (in accordance to Firefox DevTool/Scratchpad)
- JS/JSON Property keys now in blue

- Polish to repo

## 1.1.3

- Variables now blue, functions now green
- Support classes, etc are now purple

## 1.1.1

- Fixed formatting of SCREENSHOTS.md

## 1.1.0

Here lands a biggish update, including improvements to the theme to catch up to the Firefox DevTools, and improvements to repo structure.

- Features:

  - Support for basically all the other default languages
  - Clean(er) repository
    - Removal of test files
    - Better screenshots
    - Improved Wiki

- Tweaks
  - Maintaining parity with Firefox DevTools [#28](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/issues/28)
    - Variable colours now blue instead of red
    - Property colours now green
    - Numbers and interpolation now a more vibrant blue
    - Support types and CSS Pseudos now a lighter/darker grey for dark/light themes respectively
  - Operators now coloured the same as types (light grey) to maintain consistency with DevTools, and to stop the amount of blue!
  - Symbols in Clojure changed to green
  - CONSISTENCY Background colour changed on tabs to match DevTools, Light
  - CONSISTENCY Tab border changed, Light
  - CONSISTENCY Selection now transparent to match DevTools and for better visibility

## 1.0.4

- Improved Language Support for:

  - Perl/Perl6
  - PHP
  - Python
  - PowerShell
  - log
  - R
  - Razor (cshtml) \[there are a few glitches with highlighting, but it appears to be with VSCode itself not the theme after further investigation]

- Select in Dropdowns now grey again! (Quantum Light)
- Theme title is not the same as name of extension [#25](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/issues/25)
- Yellow not visible in Quantum Light [#22](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/issues/22)

## 1.0.2

- Fix metas #16 #21 @compilenix
- Made cursor brighter #17 @compilenix
- Brighter text, turns out it matches Firefox :) #18 #19 #20 @compilenix

## 1.0.0

- Initial release
