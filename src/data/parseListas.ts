import type { ListaMeta, Nivel } from '../types'

const LISTAS_GLOB = import.meta.glob('/LISTAS/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function extractListasFromGlob(): { id: string; category: string; content: string; sortKey: string }[] {
  return Object.entries(LISTAS_GLOB).map(([path, content]) => {
    const relPath = path.replace('/LISTAS/', '')
    const parts = relPath.split('/')
    const category = parts[0].replace(/^\d+\s*-\s*/, '')
    const filename = parts[parts.length - 1]
    const id = category + '/' + filename.replace(/\.md$/, '')
    return { id, category, content: content as string, sortKey: relPath }
  })
}

function formatCategory(cat: string): string {
  return cat
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function formatTitle(id: string): string {
  const parts = id.split('/')
  const fileName = parts[parts.length - 1]
  const num = fileName.replace(/^lista0*/, '')
  return 'Lista ' + num
}

function parseNiveis(lines: string[]): Nivel[] {
  const niveis: Nivel[] = []
  let currentNivel: Nivel | null = null

  for (const line of lines) {
    const trimmed = line.trim()

    const nivelMatch = trimmed.match(/^N[íi]vel\s+(F[áa]cil|M[ée]dio|Dif[íi]cil|Desafio)/i)
    if (nivelMatch) {
      currentNivel = { name: `Nível ${nivelMatch[1]}`, focus: '', exercises: [] }
      niveis.push(currentNivel)
      continue
    }

    const focusMatch = trimmed.match(/^Foco:\s*(.+)/i)
    if (focusMatch && currentNivel) {
      currentNivel.focus = focusMatch[1].trim()
      continue
    }

    const exerciseMatch = trimmed.match(/^(\d+)\.\s*(.+)/)
    if (exerciseMatch && currentNivel) {
      currentNivel.exercises.push({
        number: Number(exerciseMatch[1]),
        description: exerciseMatch[2].trim(),
      })
    }
  }

  return niveis
}

export function loadAllListas(): ListaMeta[] {
  const raw = extractListasFromGlob()
  raw.sort((a, b) => a.sortKey.localeCompare(b.sortKey))
  return raw.map(({ id, category, content }) => {
    const lines = content.split('\n')
    const niveis = parseNiveis(lines)
    const title = formatTitle(id)
    return { id, title, category, niveis }
  })
}

export function formatCategoryName(cat: string): string {
  return formatCategory(cat)
}
