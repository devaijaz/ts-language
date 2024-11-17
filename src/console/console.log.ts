//type BaseTypes = 

type Mapping = {
  "s": string
} & {
  [Key in "d"|"f"]: number
} & {
  [Key in "o"|"O"]: object
}

type FirstChar<T extends string> = T extends `${infer Head}${infer Tail}` ? Head: T;
type TestFirstChar = FirstChar<"Hello">;


type AddMappedTypeToArray<ArgsArray extends  any[], Char extends string> = 
  Char extends keyof Mapping ? [...ArgsArray, Mapping[Char]]: ArgsArray;



type ArgsFromPlaceHolder<T extends string, Args extends any[]  = []> = 
  T extends `${infer Head}${infer Tail}`
  ? Head extends "%"
    ? ArgsFromPlaceHolder<Tail, AddMappedTypeToArray<Args, FirstChar<Tail>>>
    : ArgsFromPlaceHolder<Tail, Args>
  : [...Args, ...args: any[]]

type ArgsFromPlaceHolderV2<T extends string, Args extends any[]  = []> = 
  T extends `${infer _}%${infer PlaceHolder}${infer Tail}`
  ? ArgsFromPlaceHolderV2<Tail, AddMappedTypeToArray<Args, PlaceHolder>>
  : [...Args, ...args: any[]]  


type BaseTypes = string | number | object | bigint | symbol | null | undefined;

type OptionalParams<Input> = Input extends string ? ArgsFromPlaceHolder<Input> : any[];
type OptionalParamsV2<Input> = Input extends string ? ArgsFromPlaceHolderV2<Input> : any[];

type TestOptionalParamsV2 = OptionalParamsV2<"%s %%s">
type TestOptionalParams = OptionalParams<"%s %%s">


declare var console:Omit<Console, "log" | "debug"> & {
  log<T extends BaseTypes>(message?:T, ...args: OptionalParams<T>):void;
  debug<T extends BaseTypes>(message?:T, ...args: OptionalParamsV2<T>):void;
};

console.log("Hello %s, Your age is %o.", "aaaa", {});
console.log("Hello %s, Your age is %d.", "aaaa", 1);
console.log("Hello %d, Your age is %d.", 1, 1);
console.log("Hello %d, Your age is %s.", 1, "asddf");

console.log("Hello %%d, Your age is %s.", 1, "a", "something else");
console.debug("", "asfad", 1);

export {};