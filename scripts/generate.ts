"use strict";
const fs = require('fs');
const path = require('path');
import {
    coloursarray, coloursattr, tokenColoursAttr, _252c333aa, coloursTokenArray
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

// Making the files
let paths: string[] = [
    path.resolve(__dirname, '../themes/Quantum Dark.json'),
    path.resolve(__dirname, '../themes/Quantum Light.json')
];

fs.writeFileSync(paths[0], JSON.stringify(qd, null, '\t'));
fs.writeFileSync(paths[1], JSON.stringify(ql, null, '\t'));
