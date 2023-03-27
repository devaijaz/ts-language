export type Concat<T extends unknown[], U extends unknown[]> =
   U extends [infer Head, ...infer Tail] 
    ? Concat<[...T, Head], Tail>
    : T 

type Result = Concat<[1, 10], [2, 3, 4, 5]>