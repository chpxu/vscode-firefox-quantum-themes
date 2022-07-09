"use strict";
interface tokenColourSettings {
    foreground: string;
    background?: string;
    fontStyle?: string;
};
interface tokenColour {
    name: string;
    scopes: string[] | [];
    settings: tokenColourSettings;
};
export let qd : any = {
    name: "Quantum Dark",
    type: "dark",
    colors: {},
    tokenColors: []
};
export let ql : any = {
    name: "Quantum Light",
    type: "light",
    colors: {},
    tokenColors:[]
};
export function generateTokenColours(
    name: string, 
    scope: string[],
    foreground: string[], 
    background?: string[], 
    fontStyle?: string
    ) : void {
    if ((background != undefined) && (fontStyle != undefined)) {
        let aTokenColourDark: tokenColour = {
            name: name, 
            scopes: scope, 
            settings: { 
                foreground: foreground[0], 
                background: background[0], 
                fontStyle: fontStyle
            }
        };
        let aTokenColourLight: tokenColour = {
            name: name, 
            scopes: scope, 
            settings: {
                foreground: foreground[1], 
                background: background[1], 
                fontStyle: fontStyle
            }
        };
        qd.tokenColors.push(aTokenColourDark);
        ql.tokenColors.push(aTokenColourLight);
    }
}

export function generateColours(name: string, colour: string[]) : void {
    qd.colors[name] = colour[0];
    ql.colors[name] = colour[1];
}
