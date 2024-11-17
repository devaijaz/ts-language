export type Old = {
  "legacy_nameV1": string,
  "legacy_nameV2": string,
  "legacy_nameV3": string,
  "address": {
    "legacy_house": string,
    "location": {
      "legacy_primary": number,
      "secondary": number,
      contact?: {
        phone: number;
        email: string;
      }
    }
  },
  age: number
}
type Beautify<T> = {
  [Key in keyof T]: T[Key]
} & {};
type MapObject = Record<PropertyKey, any>;

type Mapped<T extends MapObject> = {
  [Key in keyof T as Key extends `legacy_${infer Tail}` ? (
    Tail extends `${infer KeyName}V${number}` ? KeyName: Tail
  ) : Key
  ] : T[Key] extends MapObject ? Beautify<Mapped<T[Key]>> : T[Key];
}





const newapi:Beautify<Mapped<Old>> = {
  address: {
    house: "sfdsdf",
    location: {
      primary: 12,
      secondary:123,
      contact: {
        email: "",
        phone: 1234
      }
    },
  },

  age:10,
  name: ""
}

type New<T extends Record<PropertyKey, any>> = {
  [Key in keyof T as 
    Key extends `legacy_${infer A}` 
      ? A extends `${infer Name}V${number}` 
        ? Name 
        : A 
      : Key] 
    : T[Key] extends Record<PropertyKey, any> ? New<T[Key]> : T[Key]
}

type Test = New<Old>

const api:New<Old> = {
  address: {
    house: "sfdsdf",
    location: {
      primary: 12,
      secondary:123
    }
  },
  age:10,
  name: "adsfdf"
}

console.log(api);
