const color = {
  primary: "#205295",
  primary_active: "#0A2647",
  text: "#AAAAAA",
};

export const theme = {
  color,
};

export type Theme = typeof theme;
type ColorObject = typeof color;
export type Color = keyof ColorObject;
