"use strict";
const fs = require('fs');
const path = require('path');
import {
    coloursarray, coloursattr, tokenColoursAttr, _252c333aa, coloursTokenArray, highlight_red, highlight_green, comment, highlight_yellow, highlight_purple
} from './colours';

import { qd, ql, generateColours, generateTokenColours } from './generator';

coloursattr.forEach(function (element, index) {
    element.forEach(function  (attr) {
        generateColours(attr, coloursarray[index]);
    });
});

//tokenColors
tokenColoursAttr.forEach(function (element, index) {
    generateTokenColours(element.name, element.scope, coloursTokenArray[index], ["", ""], "");
});    

//Markdown/up specific
//Italic
generateTokenColours("Italic Markup", ["markup.italic"], highlight_red, ["", ""], "italic");
//Bold markup
generateTokenColours("Bold Markup", ["markup.bold", "markup.bold string"], highlight_red, ["", ""], "bold");
///underlined markup
generateTokenColours("Underline Markup", ["markup.underline"], highlight_red, ["", ""], "underline");
//Strikethrough markup
generateTokenColours("Strikethrough Markup", ["markup.strike"], highlight_red, ["", ""], "strike");
//link and link anchor markup
generateTokenColours("Link Markup", ["string.other.link.title.markdown",  "string.other.link.description.title.markdown", "constant.other.reference.link.markdown"], highlight_red, ["", ""], "");
// Markup quote
generateTokenColours("Markup Quotes", ["markup.quote"], comment, ["", ""],  "italic");
//Markup Separators
generateTokenColours("Markup Quotes", ["meta.separator"], highlight_purple, ["#00000050", "#00000050"],  "bold");




// Making the files
let paths: string[] = [
    path.resolve(__dirname, '../themes/Quantum Dark.json'),
    path.resolve(__dirname, '../themes/Quantum Light.json')
];

fs.writeFileSync(paths[0], JSON.stringify(qd, null, '\t'));
fs.writeFileSync(paths[1], JSON.stringify(ql, null, '\t'));
