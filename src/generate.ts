import * as fs from "fs";
import * as path from "node:path";
import { highlight_colors, all_colours } from "./colours";
import { colors_scopes, tokenColoursAttr } from "./scopes";

import { qd, ql, generateColours, generateTokenColours } from "./generator";

// Function to alphabetically sort
// Get array of keys, sort, then reduce
function sortAlphabetically(keys: { [attr: string]: string }): {
  [attr: string]: string;
} {
  let sorted = Object.keys(keys)
    .sort()
    .reduce(
      (attr, key) => ({
        ...attr,
        [key]: keys[key],
      }),
      {}
    );
  return sorted;
}

// Generate colors
// Nested loop since colors_scopes is an array of objects
colors_scopes.forEach((element) => {
  element.scope.forEach((scope) => {
    generateColours(scope, all_colours[element.name]);
  });
});

// Generate tokenColors
tokenColoursAttr.forEach(function (element) {
  generateTokenColours(
    element.name,
    element.scope,
    highlight_colors[element.name]
  );
});

// === BEGIN GENERATION OF CUSTOM COLOURS ===
generateColours("activityBarBadge.foreground", [
  all_colours.body_color_alt[0],
  all_colours.content_color1[1],
]);
generateColours("editor.rangeHighlightBackground", ["#eb5568d9", "#ed2655d9"]);
// Correct Editor theming
generateColours("sideBar.background", [
  all_colours.body_background[0],
  all_colours.sidebar_background[1],
]);
generateColours("activityBar.background", [
  all_colours.body_background[0],
  all_colours.sidebar_background[1],
]);
generateColours("editor.background", [
  all_colours.sidebar_background[0],
  all_colours.body_background[1],
]);
generateColours("editorIndentGuide.activeBackground", [
  "#252c33aa",
  "#252c33aa",
]);
generateColours("scrollbarSlider.background", ["#252c33aa", "#252c33aa"]);
//Markdown/up specific
//Italic
generateTokenColours(
  "Italic Markup",
  ["markup.italic"],
  all_colours.highlight_red,
  "italic"
);
//Bold markup
generateTokenColours(
  "Bold Markup",
  ["markup.bold", "markup.bold string"],
  all_colours.highlight_red,
  "bold"
);
///underlined markup
generateTokenColours(
  "Underline Markup",
  ["markup.underline"],
  all_colours.highlight_red,
  "underline"
);
//Strikethrough markup
generateTokenColours(
  "Strikethrough Markup",
  ["markup.strike"],
  all_colours.highlight_red,
  "strike"
);
//link and link anchor markup
generateTokenColours(
  "Link Markup",
  [
    "string.other.link.title.markdown",
    "string.other.link.description.title.markdown",
    "constant.other.reference.link.markdown",
  ],
  all_colours.highlight_red
);
// Markup quote
generateTokenColours(
  "Markup Quotes",
  ["markup.quote"],
  all_colours.comment,
  "italic"
);

// Other comments
generateTokenColours(
  "Comments",
  ["comment", "punctuation.definition.comment"],
  all_colours.comment
);
//Markup Separators
generateTokenColours(
  "Markup Separator",
  ["meta.separator"],
  all_colours.highlight_purple,
  "bold",
  ["#00000050", "#00000050"]
);

generateTokenColours(
  "Nix configuration",
  ["entity.other.attribute-name.multipart.nix"],
  all_colours.content_color1
);

generateTokenColours(
  "ES7 Bind Operator",
  ["source.js constant.other.object.key.js string.unquoted.label.js"],
  all_colours.highlight_purple
);
// === END COLOUR GENERATION ===

// Making the files
const paths: string[] = [
  path.resolve(__dirname, "../themes/Quantum Dark.json"),
  path.resolve(__dirname, "../themes/Quantum Light.json"),
];

// === Final post-processing ===
// Alphabetical sort of all attributes
let qd_colors_sorted = sortAlphabetically(qd.colors);
qd.colors = qd_colors_sorted;
let ql_colors_sorted = sortAlphabetically(ql.colors);
ql.colors = ql_colors_sorted;

qd.tokenColors.forEach((obj) => {
  obj.scope = obj.scope.sort();
});
ql.tokenColors.forEach((obj) => {
  obj.scope = obj.scope.sort();
});

// Write theme files to ./themes
fs.writeFileSync(paths[0], JSON.stringify(qd, null, "\t"));
fs.writeFileSync(paths[1], JSON.stringify(ql, null, "\t"));
