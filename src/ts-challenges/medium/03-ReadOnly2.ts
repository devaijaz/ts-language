interface Todo {
  title: string
  description: string
  completed: boolean
}

export type MyReadonly2<T, U extends keyof T> = Omit<T, U> & {+readonly [P in U]: T[P]}



const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK