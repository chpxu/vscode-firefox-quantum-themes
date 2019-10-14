# Changelog

Official Releases will be published when there are new versions. To see (beta changelogs)[] which are reset every update, and document betas. Both are sorted with latest at the top.

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
