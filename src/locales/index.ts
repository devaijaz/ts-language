const localeData = {
  en_us: {
    "companyName": "microsoft",
    "location": {
      "city": "Bangalore",
      "country": "india"
    },
    contact: {
      primary: {
        email:"test@test.com"
      },
      secondary: {
        email: "test2@test.com"
      }
    }
  }
}

type LocaleMap = typeof localeData;
type LocaleName = keyof LocaleMap;
type Locale = LocaleMap[LocaleName];

type Nested = Record<string, unknown>;

const currentLocale: LocaleName = "en_us";


type Path<T extends Nested> = keyof { [K in keyof T as (T[K] extends string | number
  ? K
  : (T[K] extends Nested ? `${K & string}.${Path<T[K]> & string}`
    : never))]
  : any
};

function resolve(obj: Nested, keys: string[], index: number = 0): string {
  const key = keys[index];
  const value = obj[key];
  if (typeof value === 'undefined') return "";
  if (typeof value === "string") return value;
  return resolve(Object(value), keys, index + 1);
}

export function t(key: Path<Locale>): string {
  return resolve(localeData[currentLocale], key.split("."));
}


console.log(t("contact.secondary.email"));