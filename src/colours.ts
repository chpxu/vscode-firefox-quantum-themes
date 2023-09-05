// global variables for colours and attributes to theme
// These have the same name as they are listed here:
// https://firefox-source-docs.mozilla.org/devtools-user/devtoolscolors/index.html
// but without the "--theme" and all hyphens replaced with underscores
// All colours in the form of an array with [dark colour, light colour]
// https://stackoverflow.com/questions/13612006/get-object-property-name-as-a-string
import { colors_scopes } from "./scopes";
import { Colour, Colours } from "./Types";

export function key_name<T extends object>(
  obj: T,
  expression: (x: { [Property in keyof T]: () => string }) => () => string
): string {
  const res: { [Property in keyof T]: () => string } = {} as {
    [Property in keyof T]: () => string;
  };
  Object.keys(obj).map((k) => (res[k as keyof T] = () => k));
  return expression(res)();
}

// VSCode Scopes
// https://code.visualstudio.com/api/references/theme-color

const chrome_colours: Colours = {
  // CHROME COLOURS
  tab_toolbar_background: ["#252c33", "#ebeced"],
  toolbar_background: ["#343c45", "#f0f1f2"],
  selection_background: ["#1d4f73", "#4c9ed9"],
  selection_color: ["#f5f7fa", "#f5f7fa"],
  splitter_color: ["#000000", "#aaaaaa"],
  comment: ["#5c6773", "#747573"],
};

// CONTENT COLOURS
const ui_colours: Colours = {
  body_background: ["#14171a", "#fcfcfc"],
  sidebar_background: ["#181d20", "#f7f7f7"],
  contrast_background: ["#b28025", "#e6b064"],
};

const text_colours: Colours = {
  body_color: ["#8fa1b2", "#18191a"],
  body_color_alt: ["#b6babf", "#585959"],
  content_color1: ["#a9bacb", "#292e33"],
  content_color2: ["#8fa1b2", "#8fa1b2"],
  content_color3: ["#667380", "#667380"],
};

export const highlight_colors: Colours = {
  highlight_blue: ["#46afe3", "#0088cc"],
  highlight_purple: ["#6b7abb", "#5b5fff"],
  highlight_pink: ["#df80ff", "#b82ee5"],
  highlight_red: ["#eb5368", "#ed2655"],
  highlight_orange: ["#d96629", "#f13c00"],
  highlight_lightorange: ["#d99b28", "#d97e00"],
  highlight_green: ["#70bf53", "#2cbb0f"],
  highlight_bluegrey: ["#5e88b0", "#0072ab"],
  highlight_yellow: ["#ffffb4", "#d97e00"],
};
// === Create colors object to loop through and do highlighting
// const coloursAttr: Colour[] = [];
export const all_colours: Colours = {
  ...chrome_colours,
  ...ui_colours,
  ...text_colours,
  ...highlight_colors,
};

// let length = colors_scopes.length;
// let objKeys: string[] = [];
// for (const key in all_colours) {
//   objKeys.push(key);
// }

// for (let i = 0; i < length; i++) {
//   let attribute: Colour = {
//     name: objKeys[i],
//     scope: colors_scopes[i],
//   };
//   coloursAttr.push(attribute);
// }

// console.log(all_colours);
// console.log(objKeys);
// console.log(coloursAttr);
