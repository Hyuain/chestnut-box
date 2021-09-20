declare namespace Accounting {
  const enum Type {
    INCOME = 1,
    OUTCOME,
  }
  interface Category {
    id?: number
    frontId?: number
    name: string
    icon: string
  }
}
