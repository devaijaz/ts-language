type Space = "padding" | "margin";
type Direction = "top" | "left" | "right" | "bottom";

type PaddingMargin = `${Space}-${Direction}` | Space;

type SizeUnit = "px" | "rem";

type PaddingMargingValue = `${number}${SizeUnit}`;


type CssClass = {
  [Key in PaddingMargin]? : PaddingMargingValue
}

const css:CssClass = {
  "margin-bottom": undefined
}

export {};