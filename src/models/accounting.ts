export const enum Type {
  INCOME = 1,
  OUTCOME,
}

export interface Category {
  id?: number
  frontId?: number
  name: string
  icon: string
}
