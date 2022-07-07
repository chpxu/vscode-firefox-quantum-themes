# Firefox Quantum Themes

The Firefox Quantum Themes for [Visual Studio Code](https://code.visualstudio.com) are inspired by the colours used in Firefox Quantum's DevTools. Using the exact same colours Mozilla use for the chrome and syntax highlighting in the DevTools, I've put together a beautifully dark and light theme. This theme is open-source and  will forever be open-source. Snyone is welcome to submit PRs, open issues etc. I would love to hear your feedback! Look below for more information. For Firefox Users, this theme will be especially pleasing to use!

## UI Screenshots

![Firefox Quantum Dark](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/blob/master/screenshots/dark-ui.png)

![Firefox Quantum Light](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/blob/master/screenshots/light-ui.png)

For syntax highlighting, see [SCREENSHOTS.md](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/blob/master/SCREENSHOTS.md)


## Changelogs

[Changelog (includes in-development versions)](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/blob/master/CHANGELOG.md)

## Theme Colours

For the colours used, please refer to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Tools/DevToolsColors) for the most up-to-date information
Here is the quick summary:

The table is in the format of `<DARK HEXADECIMAL>, <DARK RGBA> , <LIGHT HEXADECIMAL>, <LIGHT RGBA>`

- `#252c33, rgba(37, 44, 51, 1) | #ebeced, rgba(235, 236, 237, 1)`
- `#343c45, rgba(52, 60, 69, 1) | #f0f1f2, rgba(240, 241, 242, 1)`
- `#1d4f73, rgba(29, 79, 115, 1) | #4c9ed9, rgba(76, 158, 217, 1)`
- `#5c6773, rgba(92, 103, 115, 1) | #747573, rgba(116, 117, 115, 1)`
- `#14171a, rgba(17, 19, 21, 1) | #fcfcfc, rgba(252, 252, 252, 1)`
- `#181d20, rgba(24, 29, 32, 1) | #f7f7f7, rgba(247, 247, 247, 1)`
- `#8fa1b2, rgba(143, 161, 178, 1) | #18191a, rgba(24, 25, 26, 1)`
- `#b6babf, rgba(182, 186, 191, 1) | #585959, rgba(88, 89, 89, 1)`
- `#46afe3, rgba(70, 175, 227, 1) | #0088cc, rgba(0, 136, 204, 1)`
- `#6b7abb, rgba(107, 122, 187, 1) | #5b5fff, rgba(91, 95, 255, 1)`
- `#df80ff, rgba(223, 128, 255, 1) | #b82ee5, rgba(184, 46, 229, 1)`
- `#eb5368, rgba(235, 83, 104, 1) | #ed2655, rgba(237, 38, 85, 1)`
- `#d96629, rgba(217, 102, 41, 1) | #f13c00, rgba(241, 60, 0, 1)`
- `#d99b28, rgba(217, 155, 40, 1) | #d97e00, rgba(217, 126, 0, 1)`
- `#70bf53, rgba(112, 191, 83, 1) | #2cbb0f, rgba(44, 187, 15, 1)`
- `#5e88b0, rgba(94, 136, 176, 1) | #0072ab, rgba(0, 114, 171, 1)`
- `#ffffb4, rgba(255, 255, 180, 1)`

## Contribution

I currently work on this theme in my spare time. As of writing, it is available in the Marketplace. As a new developer, I am still attempting to work things out, thanks!

If editing and wanting to submit a pull request, please ensure that as much sufficient detail is provided, and briefly state your changes and why, or if meant to fix an issue, reference the problem alongside it.

As of `v2.0.0`, I have changed how the theme files are generated. Upon opening the theme files `Quantum Light.json` and `Quantum Dark.json`, you will see the properties organised terribly. This is because the theme files are generated at the run of a command. 
- The files `Quantum Light old.json` and `Quantum Dark old.json` are the current stable theme values (currently `v1.2.0`). This was for legacy comparison's sake when developing this version.



To build and test your modifications, follow these steps:

1. Clone the repository
2. Install the `devDependencies` with `npm i -D` and install `ts-node` globally with `npm i -g ts-node`
3. Make modifications to the `generate.ts` file as necessary
    - You probably will never modify the `colours.ts` file. These contain all the global colours used and will never change unless Mozilla make a change to the DevTools scheme.
    - The `generator.ts` contains the functions that actually generate the `JSON`
    - The `generate.ts` contains the function calls for each relevant scope and theme attribute. It is just lines of function-calling code. You will spend almost all your time here modifying colours and scopes
4. In a terminal, run `ts-node ./scripts/generate.ts` (you may need admin previleges to do so). This will add theme files to `./themes`. (should probably make it an npm script when bothered)
5. Press `F5` (or whatever shortcut you have to debug extensions) and the debugging VSCode window will open up with the new theme files.

### Repo vs Marketplace
The marketplace version always contains the **stable** version of this theme (i.e., whatever is the Published (i.e., exists in Releases) version). The repsitory here on GitHub also contain development pushes (which aren't published on the Marketplace, but tagged on GitHub). 

To run these development pushes, follow the Contribution section above. 

If you wish to "daily drive" these development pushes, follow the Contribution section, and then:
1. Install the extension from VSCode marketplace regularly
2. Follow Contribution above, in a different directory
3. Copy and paste your generated theme files in `./themes` (in the development version) to the `./themes` in the `extensions` folder of your VSCode install.
4. Restart VSCode
5. If the theme then says a reload is required, DO NOT press it unless you want to reset the extension to stable.
6. Otherwise if you want to go back to stable, uninstall then reinstall the extension 
## Thank You's!

This theme was heavily inspired by Firefox DevTools, as well as the [One Dark Pro Port](https://github.com/Binaryify/OneDark-Pro) and VSCode itself! Thanks to them all for the ideas :)

And the following:

- [**@compilenix**](https://github.com/compilenix): First person to show interest and BETA TESTER

- All of you who have even just glanced!


Note: I highly recommend having Colorized Bracket Pairs enabled and customised to your liking. It helps with bracket heavy languages, especially ones that aren't themable that well or you just end up writing a lot of brackets (LaTeX). I would not recommend setting the colours to the same ones as the theme (unless you want to do so), as this will make some merge with the keywords and thus make it harder to vsiaully locate brackets without the visualiser.
## License

[MIT License](https://github.com/beastdestroyer/vscode-firefox-quantum-themes/blob/master/LICENSE.txt)
