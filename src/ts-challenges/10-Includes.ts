import { Equal } from "./util"

export type Includes<T, U> = 
  T extends [infer Head, ...infer Tail] 
  ? Equal<Head,U> extends true 
    ? true
    :Includes<Tail, U>
  :false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'> // expected to be `false`