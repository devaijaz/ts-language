const data = {
  name: "ajaz",
  address: {
    location: "Hebbal",
    city: "BLR",
    postalCode:560077,
  },
  oldAddress: {},
  contact: {
    email: {
      primary:"ajaz@sap.com",
      secondary: "devaijaz@gmail.com"
    }
  }
}


type Data = typeof data;

type Nested = Record<string, unknown>;

type Path<T extends Nested> = keyof {
  [
    K in keyof T as (T[K] extends string | number ? K : T[K] extends Nested ? `${K & string}.${Path<T[K]> & string}`: never)
  ]: any
}

type Value = Path<Data>;
