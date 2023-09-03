import * as fs from "fs";
const path = require("node:path");
import {
  coloursarray,
  coloursattr,
  tokenColoursAttr,
  _252c333aa,
  coloursTokenArray,
  highlight_red,
  highlight_orange,
  highlight_green,
  comment,
  content_color1,
  highlight_yellow,
  highlight_purple,
} from "./colours";

import { qd, ql, generateColours, generateTokenColours } from "./generator";

coloursattr.forEach(function (element, index) {
  element.forEach(function (attr) {
    generateColours(attr, coloursarray[index]);
  });
});

//tokenColors
tokenColoursAttr.forEach(function (element, index) {
  generateTokenColours(element.name, element.scope, coloursTokenArray[index]);
});
generateColours("editorBracketMatch.background", coloursarray[1]);
generateColours("editorBracketMatch.border", comment);
generateColours(
  "editorBracketHighlight.unexpectedBracket.foreground",
  highlight_red
);
generateColours("editorBracketHighlight.foreground1", highlight_green);
generateColours("editor.rangeHighlightBackground", ["#eb5568d9", "#ed2655d9"]);
//Markdown/up specific
//Italic
generateTokenColours(
  "Italic Markup",
  ["markup.italic"],
  highlight_red,
  ["", ""],
  "italic"
);
//Bold markup
generateTokenColours(
  "Bold Markup",
  ["markup.bold", "markup.bold string"],
  highlight_red,
  ["", ""],
  "bold"
);
///underlined markup
generateTokenColours(
  "Underline Markup",
  ["markup.underline"],
  highlight_red,
  ["", ""],
  "underline"
);
//Strikethrough markup
generateTokenColours(
  "Strikethrough Markup",
  ["markup.strike"],
  highlight_red,
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
  highlight_red,
  ["", ""],
  ""
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
  highlight_purple,
  ["#00000050", "#00000050"],
  "bold"
);

generateTokenColours(
  "Nix configuration",
  ["entity.other.attribute-name.multipart.nix"],
  content_color1
);

// Making the files
let paths: string[] = [
  path.resolve(__dirname, "../themes/Quantum Dark.json"),
  path.resolve(__dirname, "../themes/Quantum Light.json"),
];

fs.writeFileSync(paths[0], JSON.stringify(qd, null, "\t"));
fs.writeFileSync(paths[1], JSON.stringify(ql, null, "\t"));
