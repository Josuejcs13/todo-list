export type TaskType = {
  id: number
  category: Category
  text: string
  done: boolean
}
export enum Category {
  Casa = "Casa",
  Trabalho = "Trabalho",
  Estudo = "Estudo",
  Pessoal = "Pessoal",
}
