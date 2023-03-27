const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

export type MyReturnType<T> = T extends (...args:any[])=> infer U ? U : never;


type result = MyReturnType<typeof fn> // should be "1 | 2"