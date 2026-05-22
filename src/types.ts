export interface Exercise {
  number: number
  description: string
}

export interface Nivel {
  name: string
  focus: string
  exercises: Exercise[]
}

export interface ListaMeta {
  id: string
  title: string
  category: string
  niveis: Nivel[]
}

export interface ExerciseParam {
  name: string
  label: string
  type: 'text' | 'number' | 'array'
  itemType?: 'number' | 'string'
  placeholder?: string
  defaultValue: string
}

export interface SolutionEntry {
  code: string
  demo?: () => string
  params?: ExerciseParam[]
  run?: (values: Record<string, string>) => string
}
