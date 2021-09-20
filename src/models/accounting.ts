export const enum Type {
  OUTCOME = 1,
  INCOME,
}

export interface Category {
  id?: number
  name: string
  icon: string
  type: Type
}
