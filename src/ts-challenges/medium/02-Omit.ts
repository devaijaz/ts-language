interface Todo {
  title: string
  description: string
  completed: boolean
}

export type MyOmit<T, U> = {
  [K in keyof T as K extends U ? never: K]: T[K]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}