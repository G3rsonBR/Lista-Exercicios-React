import type { Nivel, SolutionEntry } from '../types'
import ExerciseCard from './ExerciseCard'

interface Props {
  nivel: Nivel
  sol: Record<number, SolutionEntry>
  openExercise: number | null
  onToggleExercise: (num: number) => void
}

export default function NivelSection({ nivel, sol, openExercise, onToggleExercise }: Props) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {nivel.name}
        </h2>
        {nivel.focus && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
            Foco: {nivel.focus}
          </p>
        )}
      </div>
      <div className="space-y-3">
        {nivel.exercises.map((ex) => {
          const entry = sol[ex.number]
          return (
            <ExerciseCard
              key={ex.number}
              exercise={ex}
              code={entry?.code ?? '// Código não disponível'}
              isOpen={openExercise === ex.number}
              onToggle={() => onToggleExercise(ex.number)}
              params={entry?.params}
              run={entry?.run}
              demo={entry?.demo}
            />
          )
        })}
      </div>
    </div>
  )
}
