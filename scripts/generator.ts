interface tokenColourSettings {
  foreground: string;
  background?: string;
  fontStyle?: string;
}
interface tokenColour {
  name: string;
  scope: string[] | [];
  settings: tokenColourSettings;
}
export let qd: any = {
  name: "Quantum Dark",
  type: "dark",
  colors: {},
  tokenColors: [],
};
export let ql: any = {
  name: "Quantum Light",
  type: "light",
  colors: {},
  tokenColors: [],
};
export function generateTokenColours(
  name: string,
  scopes: string[],
  foreground: string[],
  background?: string[],
  fontStyle?: string
): void {
  let aTokenColourDark: tokenColour = {
    name: name,
    scope: scopes,
    settings: {
      foreground: foreground[0],
      background: background !== undefined ? background[0] : "",
      fontStyle: fontStyle !== undefined ? fontStyle : "",
    },
  };
  let aTokenColourLight: tokenColour = {
    name: name,
    scope: scopes,
    settings: {
      foreground: foreground[1],
      background: background !== undefined ? background[1] : "",
      fontStyle: fontStyle !== undefined ? fontStyle : "",
    },
  };
  qd.tokenColors.push(aTokenColourDark);
  ql.tokenColors.push(aTokenColourLight);
}

export function generateColours(name: string, colour: string[]): void {
  qd.colors[name] = colour[0];
  ql.colors[name] = colour[1];
}
