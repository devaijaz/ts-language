

export type Gap = "padding" | "margin";

export type Position = "top" | "left" | "right" | "bottom";


type GapType = Gap | `${Gap}-${Position}`;


type SizeType = "px" | "rem";


type SizeCss = `${number}${SizeType}`;

type MarginPadding = {
  [Key in GapType]? : SizeCss
}

const cssMap:MarginPadding = {
  "margin-bottom": "12px",
  margin: "10rem",
}


