
interface tokenColorSettings {
    foreground: string;
    background?: string;
    fontStyle?: string;
}
interface tokenColor {
    name: string;
    scopes: string[];
    settings: tokenColorSettings;
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
export function generateTokenColors(
    name: string, 
    scope: string[],
    foreground: string[], 
    background?: string[], 
    fontStyle?: string
    ) : void {
    let aTokenColorDark: tokenColor = {
        name: name, 
        scopes: scope, 
        settings: { 
            foreground: foreground[0], 
            background: background[0], 
            fontStyle: fontStyle
        }
    };
    let aTokenColorLight: tokenColor = {
        name: name, 
        scopes: scope, 
        settings: { 
            foreground: foreground[1], 
            background: background[1], 
            fontStyle: fontStyle
        }
    };
    qd.tokenColors.push(aTokenColorDark);
    ql.tokenColors.push(aTokenColorLight);

    //console.log(JSON.stringify(aTokenColor));}
}

export function generateColors(name: string, color: string[]) : void {
    qd.colors[name] = color[0];
    ql.colors[name] = color[1];
}
