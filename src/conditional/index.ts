export type SelectOption<T> = T extends string | number
  ? {
      options: Array<string | number>;
      labelKey?: never;
      valueKey?: never;
    }
  : {
      options: Array<T>;
      labelKey: keyof T;
      valueKey: keyof T;
    };

export function selectFunction<T>(data: SelectOption<T>): SelectOption<T> {
  return data;
}
