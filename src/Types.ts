export interface Colour {
  name: string;
  scope: string[];
}
export interface tokenColourSettings {
  foreground: string;
  background?: string;
  fontStyle?: string;
}
export interface tokenColour extends Colour {
  settings: tokenColourSettings;
}
export interface Theme {
  name: string;
  type: "dark" | "light";
  colors: {
    [attr: string]: string;
  };
  tokenColors: tokenColour[];
}
export interface Colours {
  [attr: string]: string[];
}
