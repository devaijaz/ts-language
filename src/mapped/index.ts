export type ObjectData = {
  id: number;
  [key: string]: string | number;
};

export type MappedData = {
  name: string;
  id: number;
};

export type MappedDataOptions = {
  [Property in keyof MappedData]: boolean;
};

export type Listener<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]: (
    value: T[Property]
  ) => void;
};

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.substring(1);
};
export const registerObjectListener = function <T>(
  obj: T,
  listeners: Listener<T>
) {};
