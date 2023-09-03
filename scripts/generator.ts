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
export const qd = {
  name: "Quantum Dark",
  type: "dark",
  colors: {},
  tokenColors: [],
};
export const ql = {
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
  const genericDark = {
    name: name,
    scope: scopes,
  };
  const genericLight = {
    name: name,
    scope: scopes,
  };

  const aTokenColourDark: tokenColour = Object.assign(genericDark, {
    settings: { foreground: foreground[0] },
  });
  const aTokenColourLight: tokenColour = Object.assign(genericLight, {
    settings: { foreground: foreground[1] },
  });
  if (background !== undefined) {
    const backgroundDark = background[0];
    const backgroundLight = background[1];
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
