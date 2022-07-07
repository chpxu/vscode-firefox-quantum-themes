
interface tokenColourSettings {
    foreground: string;
    background?: string;
    fontStyle?: string;
}
interface tokenColour {
    name: string;
    scopes: string[];
    settings: tokenColourSettings;
}
interface colors {
    name: string;
    color: string;
}
export let qd = {
    name: "Quantum Dark",
    type: "dark",
    colors: {},
    tokenColors: []
};
export let ql = {
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

    //console.log(JSON.stringify(aTokenColor));}
}

export function generateColours(name: string, colour: string[]) : void {
    qd.colors[name] = colour[0];
    ql.colors[name] = colour[1];
}
