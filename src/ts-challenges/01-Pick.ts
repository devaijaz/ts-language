export type Pickk<T, P extends keyof T> = {
  [K in keyof T as K extends P ? K : never]: T[K]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pickk<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}