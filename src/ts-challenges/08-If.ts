export type If<Value, Truthy, Falsy> = Value extends true ? Truthy : Falsy

type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'