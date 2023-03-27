export type Push<T extends unknown[], U> = [...T, U]

type Result = Push<["A",1, 2, false], 3> // [1, 2, '3']