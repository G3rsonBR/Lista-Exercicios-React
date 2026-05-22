import { useState, useEffect } from 'react'
import { loadAllListas, formatCategoryName } from './data/parseListas'
import { solutions01 } from './data/solutions01'
import { solutions02 } from './data/solutions02'
import { solutions03 } from './data/solutions03'
import { solutions04 } from './data/solutions04'
import NivelSection from './components/NivelSection'
import type { ListaMeta } from './types'

const listas = loadAllListas()

const solLookup: Record<string, Record<string, Record<number, { code: string; demo?: () => string; params?: { name: string; label: string; type: 'text' | 'number' | 'array'; itemType?: 'number' | 'string'; placeholder?: string; defaultValue: string }[]; run?: (values: Record<string, string>) => string }>>> = {
  'listas_classes_metodos_herancas': {
    'listas_classes_metodos_herancas/lista01': solutions01,
    'listas_classes_metodos_herancas/lista02': solutions02,
  },
  'lista_map_destructingArrays': {
    'lista_map_destructingArrays/lista01': solutions03,
    'lista_map_destructingArrays/lista02': solutions03,
    'lista_map_destructingArrays/lista03': solutions03,
  },
  'lista_arrowFunctions': {
    'lista_arrowFunctions/lista01': solutions04,
    'lista_arrowFunctions/lista02': solutions04,
    'lista_arrowFunctions/lista03': solutions04,
  },
}

const grouped = listas.reduce<Record<string, ListaMeta[]>>((acc, l) => {
  ;(acc[l.category] ??= []).push(l)
  return acc
}, {})

type DiffKey = 'Fácil' | 'Médio' | 'Difícil'
const DIFFS: { key: DiffKey; label: string; icon: string }[] = [
  { key: 'Fácil', label: 'Fácil', icon: '●' },
  { key: 'Médio', label: 'Médio', icon: '●●' },
  { key: 'Difícil', label: 'Difícil', icon: '●●●' },
]

const nivelNameToKey = (name: string): DiffKey | null => {
  if (name.includes('Fácil') || name.includes('Facil')) return 'Fácil'
  if (name.includes('Médio') || name.includes('Medio')) return 'Médio'
  if (name.includes('Difícil') || name.includes('Dificil')) return 'Difícil'
  return null
}

const diffInfo: Record<string, { icon: string; label: string }> = {
  'Fácil': DIFFS[0],
  'Médio': DIFFS[1],
  'Difícil': DIFFS[2],
}

const singleLevelInfo = (nivelName: string): { icon: string; label: string } | null => {
  const key = nivelNameToKey(nivelName)
  return key ? diffInfo[key] : null
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [diffFilter, setDiffFilter] = useState<Record<number, DiffKey | null>>({})
  const [openExercise, setOpenExercise] = useState<number | null>(null)
  const [openCategory, setOpenCategory] = useState<string | null>(
    Object.keys(grouped)[0] ?? null,
  )
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })
  const [sidebarCompact, setSidebarCompact] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const lista = listas[activeIndex] as ListaMeta | undefined

  if (!lista) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-400">
        Nenhuma lista encontrada.
      </div>
    )
  }

  const isMultiLevel = lista.niveis.length > 1

  const sol = solLookup[lista.category]?.[lista.id] ?? {}
  const selectedDiff = diffFilter[activeIndex] ?? null

  const filteredNiveis = isMultiLevel
    ? selectedDiff
      ? lista.niveis.filter((n) => nivelNameToKey(n.name) === selectedDiff)
      : []
    : lista.niveis

  const handleToggleExercise = (num: number) => {
    setOpenExercise((prev) => (prev === num ? null : num))
  }

  const handleListaClick = (idx: number) => {
    setActiveIndex(idx)
    setDiffFilter((prev) => ({ ...prev, [idx]: null }))
    setOpenExercise(null)
  }

  const handleDiffClick = (listaIdx: number, diffKey: DiffKey) => {
    setActiveIndex(listaIdx)
    setDiffFilter((prev) => {
      const isSame = prev[listaIdx] === diffKey
      return { ...prev, [listaIdx]: isSame ? null : diffKey }
    })
    setOpenExercise(null)
  }

  const handleCategoryClick = (cat: string) => {
    setOpenCategory((prev) => (prev === cat ? null : cat))
  }

  const sidebarContent = (compact: boolean) => (
    <>
      {Object.entries(grouped).map(([cat, lists]) => {
        const isCatOpen = openCategory === cat
        return (
          <div key={cat} className={compact ? 'mb-1' : 'mb-2'}>
            <button
              type="button"
              onClick={() => handleCategoryClick(cat)}
              className={`w-full flex items-center justify-between rounded-lg transition cursor-pointer ${
                compact
                  ? 'px-2 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  : 'px-3 py-2 text-xs uppercase tracking-widest font-semibold text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              title={compact ? formatCategoryName(cat) : undefined}
            >
              {compact ? (
                <span className="mx-auto">{formatCategoryName(cat).charAt(0)}</span>
              ) : (
                <>
                  {formatCategoryName(cat)}
                  <svg
                    className={`w-3 h-3 transition-transform ${isCatOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </>
              )}
            </button>

            {isCatOpen && (
              <div className={compact ? 'space-y-0.5' : 'mt-1 ml-1 space-y-1'}>
                {lists.map((l) => {
                  const globalIdx = listas.indexOf(l)
                  const isActive = globalIdx === activeIndex
                  const info = l.niveis.length === 1
                    ? singleLevelInfo(l.niveis[0].name)
                    : null
                  return (
                    <div key={l.id}>
                      <button
                        type="button"
                        onClick={() => handleListaClick(globalIdx)}
                        className={`w-full flex items-center gap-2 text-left rounded-lg transition cursor-pointer ${
                          compact
                            ? `px-1 py-1.5 justify-center text-xs ${
                                isActive
                                  ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                                  : 'text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`
                            : `px-3 py-1.5 text-sm font-medium ${
                                isActive
                                  ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300'
                                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                              }`
                        }`}
                        title={compact ? (info ? info.label : l.title) : undefined}
                      >
                        {compact ? (
                          info
                            ? <span className="text-[10px]">{info.icon}</span>
                            : <span className="text-xs font-bold">{l.title.replace('Lista ', '')}</span>
                        ) : (
                          info
                            ? <><span className="text-[10px] opacity-60">{info.icon}</span> {info.label}</>
                            : l.title
                        )}
                      </button>

                      {!compact && isActive && isMultiLevel && (
                        <div className="ml-2 mt-1 space-y-0.5">
                          {DIFFS.map((d) => {
                            const isDiffActive = diffFilter[globalIdx] === d.key
                            return (
                              <button
                                key={d.key}
                                type="button"
                                onClick={() => handleDiffClick(globalIdx, d.key)}
                                className={`w-full flex items-center gap-2 text-xs px-3 py-1 rounded-md transition cursor-pointer ${
                                  isDiffActive
                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium'
                                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                              >
                                <span className="text-[10px] opacity-60">{d.icon}</span>
                                {d.label}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </>
  )

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              className="md:hidden p-1.5 -ml-1 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              onClick={() => setMobileSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="min-w-0">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight truncate">
                Listas de Programação JS
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                Exercícios de JavaScript
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">

            <button
              type="button"
              onClick={() => setDark((v) => !v)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
              title={dark ? 'Modo claro' : 'Modo escuro'}
            >
              {dark ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {mobileSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/30 z-10"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        <aside
          className={`
            transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
            ${sidebarCompact ? 'w-14' : 'w-56 shrink-0'}
            ${mobileSidebarOpen ? 'fixed left-0 inset-y-0 z-20 block' : 'hidden md:block'}
          `}
        >
          <div className="p-3 flex flex-col h-full">
            <button
              type="button"
              onClick={() => setSidebarCompact((v) => !v)}
              className="hidden md:flex items-center justify-center w-full mb-2 p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
              title={sidebarCompact ? 'Expandir menu' : 'Compactar menu'}
            >
              <svg className={`w-4 h-4 transition-transform ${sidebarCompact ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex-1 overflow-y-auto">
              {sidebarCompact ? sidebarContent(true) : sidebarContent(false)}
            </div>
          </div>
        </aside>

        <main className="flex-1 flex justify-center overflow-y-auto min-h-0">
          <div className="w-full max-w-4xl px-4 sm:px-6 py-6 min-h-full flex flex-col">
            {filteredNiveis.map((nivel) => (
              <NivelSection
                key={nivel.name}
                nivel={nivel}
                sol={sol}
                openExercise={openExercise}
                onToggleExercise={handleToggleExercise}
              />
            ))}
            {filteredNiveis.length === 0 && isMultiLevel && (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                <svg className="w-12 h-12 mb-4 opacity-40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-sm">Selecione uma dificuldade para ver!</p>
                <p className="text-xs mt-1 opacity-60">
                  Clique em Fácil, Médio ou Difícil
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
