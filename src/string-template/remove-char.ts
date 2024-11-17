export type RemoveChar<T, ToRemove, Save=""> = 
  T extends `${infer Head}${infer Tail}` 
  ? Head extends ToRemove
    ? RemoveChar<Tail,ToRemove, Save>
    : RemoveChar<Tail, ToRemove, `${Save & string}${Head}`>
  : Save;


type TrimSpace = RemoveChar<"He ll o Y outu be", " ">;

type TrimSpace2 = RemoveChar<"Hello Youtube", "l"|"o">;


