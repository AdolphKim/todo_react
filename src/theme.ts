const color = {
  primary: "#205295",
  primary_active: "#0A2647",
  text: "#000000",
  text_active: "#AAAAAA",
  background: "#ECE3CE",
};

export const theme = {
  color,
};

export type Theme = typeof theme;
type ColorObject = typeof color;
export type Color = keyof ColorObject;
