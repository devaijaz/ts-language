export type MyAwaited<T> = T extends Promise<infer U> 
  ? U extends Promise<any>
    ? MyAwaited<U>
    :U
  : never;

type ExampleType1 = Promise<string>
type Result = MyAwaited<ExampleType1> // string



type ExampleType2 = Promise<Promise<string>>
type Result2 = MyAwaited<ExampleType2> // string
