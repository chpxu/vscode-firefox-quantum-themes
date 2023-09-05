import * as fs from "fs";
import * as path from "node:path";
import {
  coloursarray,
  coloursattr,
  tokenColoursAttr,
  coloursTokenArray,
  comment,
  content_color1,
} from "./colours";

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
coloursattr.forEach(function (element, index) {
  element.forEach(function (attr) {
    generateColours(attr, coloursarray[index]);
  });
});

// Generate tokenColors
tokenColoursAttr.forEach(function (element, index) {
  generateTokenColours(element.name, element.scope, coloursTokenArray[index]);
});
// === BEGIN GENERATION OF CUSTOM COLOURS ===

generateColours("editorBracketMatch.background", coloursarray[1]);
generateColours("editorBracketMatch.border", comment);
generateColours(
  "editorBracketHighlight.unexpectedBracket.foreground",
  coloursTokenArray[3]
);
generateColours("activityBarBadge.background", coloursarray[0]);
generateColours("activityBarBadge.foreground", [
  coloursarray[6][0],
  coloursarray[7][1],
]);
generateColours("editorBracketHighlight.foreground1", coloursTokenArray[6]);
generateColours("editor.rangeHighlightBackground", ["#eb5568d9", "#ed2655d9"]);
//Markdown/up specific
//Italic
generateTokenColours(
  "Italic Markup",
  ["markup.italic"],
  coloursTokenArray[3],
  ["", ""],
  "italic"
);
//Bold markup
generateTokenColours(
  "Bold Markup",
  ["markup.bold", "markup.bold string"],
  coloursTokenArray[3],
  ["", ""],
  "bold"
);
///underlined markup
generateTokenColours(
  "Underline Markup",
  ["markup.underline"],
  coloursTokenArray[3],
  ["", ""],
  "underline"
);
//Strikethrough markup
generateTokenColours(
  "Strikethrough Markup",
  ["markup.strike"],
  coloursTokenArray[3],
  ["", ""],
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
  coloursTokenArray[3]
);
// Markup quote
generateTokenColours(
  "Markup Quotes",
  ["markup.quote"],
  comment,
  ["", ""],
  "italic"
);

// Other comments
generateTokenColours(
  "Comments",
  ["comment", "punctuation.definition.comment"],
  comment
);
//Markup Separators
generateTokenColours(
  "Markup Separator",
  ["meta.separator"],
  coloursTokenArray[2],
  ["#00000050", "#00000050"],
  "bold"
);

generateTokenColours(
  "Nix configuration",
  ["entity.other.attribute-name.multipart.nix"],
  content_color1
);

generateTokenColours(
  "ES7 Bind Operator",
  ["source.js constant.other.object.key.js string.unquoted.label.js"],
  coloursTokenArray[2]
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
