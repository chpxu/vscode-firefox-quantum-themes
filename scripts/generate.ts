const fs = require('fs');
const path = require('path');
import {
    tab_toolbar_background, toolbar_background,
    selection_background, selection_color,
    splitter_color, comment, body_background,
    sidebar_background, contrast_background,
    body_color, body_color_alt,
    content_color1, content_color2, content_color3,
    highlight_blue,
    highlight_purple,
    highlight_pink,
    highlight_red,
    highlight_orange,
    highlight_lightorange,
    highlight_green,
    highlight_bluegrey,
    highlight_yellow
} from './colours';
import { qd, ql, generateColors, generateTokenColors } from './generator';

/*===Generating items in "colors"  {}===*/
// colors using tab_toolbar_background
let colors252c33 = [
    "activityBarBadge.background",
    "editor.wordHighlightBorder",
    "editorIndentGuide.background",
    "input.background",
    "list.hoverBackground",
    "list.activeBackground",
    "list.activeSelectionBackground",
    "list.focusBackground"
];

// calling functions for these arrays
colors252c33.forEach(element => generateColors(element, tab_toolbar_background));

/* Generating the tokenColors*/
let tokenColorsdf80ff = [
    {
        name: "Boolean",
        scope: [
            "constant.language.boolean",
            "constant.language.json",
            "constant.language"
        ]
    },
    {
        name: "Keyword, Storage",
        scope: [
            "keyword",
            "storage.modifier",
            "storage.control",
            "storage.type"
        ],
    }
];

tokenColorsdf80ff.forEach(element => generateTokenColors(element.name, element.scope, highlight_pink, ["", ""], ""));

// Making the files
let paths: string[] = [
    path.resolve(__dirname, '../themes/Quantum Dark.json'),
    path.resolve(__dirname, '../themes/Quantum Light.json')
];

fs.writeFileSync(paths[0], JSON.stringify(qd, null, '\t'));
fs.writeFileSync(paths[1], JSON.stringify(ql, null, '\t'));
