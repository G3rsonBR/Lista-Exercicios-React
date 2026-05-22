import { useState, useCallback } from 'react'
import type { Exercise, ExerciseParam } from '../types'

interface Props {
  exercise: Exercise
  code: string
  isOpen: boolean
  onToggle: () => void
  params?: ExerciseParam[]
  run?: (values: Record<string, string>) => string
  demo?: () => string
}

function validateParams(params: ExerciseParam[], values: Record<string, string>): string | null {
  for (const p of params) {
    const val = values[p.name]?.trim()

    if (!val) {
      return 'Preencha o campo "' + p.label + '".'
    }

    if (p.type === 'number') {
      if (isNaN(Number(val))) {
        return '"' + p.label + '" deve ser um número válido.'
      }
    }

    if (p.type === 'array') {
      const items = val.split(',').map((s) => s.trim()).filter(Boolean)
      if (items.length === 0) {
        return '"' + p.label + '" deve ter ao menos um valor.'
      }
      if (p.itemType === 'number') {
        for (const item of items) {
          if (isNaN(Number(item))) {
            return '"' + p.label + '" contém "' + item + '" que não é um número.'
          }
        }
      }
    }
  }
  return null
}

export default function ExerciseCard({ exercise, code, isOpen, onToggle, params, run, demo }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {}
    for (const p of params ?? []) {
      init[p.name] = p.defaultValue
    }
    return init
  })
  const [output, setOutput] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleRun = useCallback(() => {
    setError(null)
    setOutput(null)

    if (params) {
      const err = validateParams(params, values)
      if (err) {
        setError(err)
        return
      }
    }

    if (run) {
      try {
        setOutput(run(values))
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erro ao executar.')
      }
    }
  }, [params, values, run])

  const handleDemo = useCallback(() => {
    setError(null)
    if (demo) {
      try {
        setOutput(demo())
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erro ao executar.')
      }
    }
  }, [demo])

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <p className="text-gray-800 dark:text-gray-200 flex-1 leading-relaxed">
            <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-2">
              {exercise.number}.
            </span>
            {exercise.description}
          </p>
          <div className="shrink-0 flex gap-1.5">
            {run && (
              <button
                type="button"
                onClick={handleRun}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 transition cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Executar
              </button>
            )}
            {!run && demo && (
              <button
                type="button"
                onClick={handleDemo}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 transition cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Executar
              </button>
            )}
            <button
              type="button"
              onClick={onToggle}
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 active:bg-gray-300 dark:active:bg-gray-500 transition cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M10 6L16 12L10 18" />
                )}
              </svg>
              {isOpen ? 'Ocultar' : 'Ver'} código
            </button>
          </div>
        </div>

        {params && (
          <div className="mt-3 flex flex-wrap gap-2 items-end">
            {params.map((p) => (
              <label key={p.name} className="flex flex-col gap-0.5">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{p.label}</span>
                <input
                  type={p.type === 'number' ? 'text' : 'text'}
                  value={values[p.name] ?? ''}
                  placeholder={p.placeholder}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, [p.name]: e.target.value }))
                    setError(null)
                    setOutput(null)
                  }}
                  className="w-32 px-2 py-1 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </label>
            ))}
          </div>
        )}

        {error && (
          <pre className="mt-3 p-3 bg-red-900/20 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-xs leading-relaxed overflow-x-auto border border-red-300 dark:border-red-800">
            {'! '}{error}
          </pre>
        )}

        {output !== null && !error && (
          <pre className="mt-3 p-3 bg-gray-900 dark:bg-black text-green-300 rounded-lg text-xs leading-relaxed overflow-x-auto">
            {'> '}{output}
          </pre>
        )}
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 dark:border-gray-700">
          <pre className="p-4 bg-gray-900 dark:bg-black text-gray-100 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap m-0">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
