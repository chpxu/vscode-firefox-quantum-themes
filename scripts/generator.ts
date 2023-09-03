interface tokenColourSettings {
  foreground: string;
  background?: string;
  fontStyle?: string;
}
interface tokenColour {
  name: string;
  scope: string[];
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
  let genericSetting = {
    name: name,
    scope: scopes,
  };
  let aTokenColourDark: tokenColour = Object.assign(genericSetting, {
    settings: { foreground: foreground[0] },
  });
  let aTokenColourLight: tokenColour = Object.assign(genericSetting, {
    settings: { foreground: foreground[1] },
  });
  if (background !== undefined) {
    let backgroundDark = background[0];
    let backgroundLight = background[1];
    aTokenColourDark["settings"]["background"] = backgroundDark;
    aTokenColourLight["settings"]["background"] = backgroundLight;
  }
  if (fontStyle !== undefined) {
    aTokenColourDark["settings"]["fontStyle"] = fontStyle;
    aTokenColourLight["settings"]["fontStyle"] = fontStyle;
  }
  qd.tokenColors.push(aTokenColourDark);
  ql.tokenColors.push(aTokenColourLight);
}

export function generateColours(name: string, colour: string[]): void {
  qd.colors[name] = colour[0];
  ql.colors[name] = colour[1];
}
