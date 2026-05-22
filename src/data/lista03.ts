/* ---------- Nivel Facil ---------- */

export const dobrarValores = (nums: number[]): number[] =>
  nums.map((n) => n * 2)

export const nomesProprios = (nomes: string[]): string[] =>
  nomes.map((n) => n.charAt(0).toUpperCase() + n.slice(1))

export function desestruturacaoSimples(): { f1: string; f2: string } {
  const arr = ['Maca', 'Banana']
  const [f1, f2] = arr
  return { f1, f2 }
}

export function trocarVariaveis(): { a: number; b: number } {
  let a = 1
  let b = 2
  ;[a, b] = [b, a]
  return { a, b }
}

export function extrairNome(): string {
  const obj = { nome: 'Ana', idade: 25 }
  const { nome } = obj
  return nome
}

export const mapComIndice = (arr: string[]): string[] =>
  arr.map((v, i) => 'Indice ' + i + ': Valor ' + v)

export const converterParaString = (nums: number[]): string[] =>
  nums.map(String)

export const extrairPropriedade = (
  cidades: { nome: string; populacao: number }[],
): string[] => cidades.map((c) => c.nome)

export function destrComDefault(): string {
  const obj: Record<string, string> = {}
  const { cor = 'preto' } = obj
  return cor
}

export function restOperator(): { primeiro: number; outros: number[] } {
  const arr = [10, 20, 30, 40]
  const [primeiro, ...outros] = arr
  return { primeiro, outros }
}

/* ---------- Nivel Medio ---------- */

export function renomearVariaveis(): { tituloCurso: string } {
  const obj = { id: 1, title: 'JS' }
  const { title: tituloCurso } = obj
  return { tituloCurso }
}

export const formatarPrecos = (
  produtos: { nome: string; preco: number }[],
): string[] =>
  produtos.map((p) => 'O produto ' + p.nome + ' custa R$ ' + p.preco)

export function receberUsuario({
  nome,
  email,
}: {
  nome: string
  email: string
}): string {
  return nome + ' (' + email + ')'
}

export const mapParaObjetos = (nums: number[]): { valor: number; par: boolean }[] =>
  nums.map((n) => ({ valor: n, par: n % 2 === 0 }))

export function aninhamento(): number {
  const carro = { motor: { cavalos: 150 } }
  const {
    motor: { cavalos },
  } = carro
  return cavalos
}

export const filtrarPorMap = (idades: number[]): string[] =>
  idades.map((i) => (i < 18 ? 'Menor' : 'Maior'))

export function arraysAninhados(): { a: number; b: number } {
  const arr = [1, [2, 3], 4]
  const [, segundo] = arr
  const [a, b] = segundo as number[]
  return { a, b }
}

export const calcularDesconto = (
  produtos: { nome: string; preco: number }[],
): { nome: string; preco: number }[] =>
  produtos.map((p) => ({ ...p, preco: p.preco * 0.9 }))

export const extracaoAPISimulada = (
  itens: { id: unknown; nome: unknown }[],
): { id: unknown; nome: unknown }[] =>
  itens.map(({ id, nome }) => ({ id, nome }))

export const porcentagemDoTotal = (nums: number[]): string[] => {
  const total = nums.reduce((s, n) => s + n, 0)
  return nums.map((n) => ((n / total) * 100).toFixed(1) + '%')
}

/* ---------- Nivel Dificil ---------- */

export const htmlGenerator = (
  links: { texto: string; url: string }[],
): string[] => links.map((l) => '<a href="' + l.url + '">' + l.texto + '</a>')

export const mergeDados = (ids: number[], nomes: string[]): { id: number; nome: string }[] =>
  ids.map((id, i) => ({ id, nome: nomes[i] ?? '' }))

export function destrDinamica(): string {
  const chave = 'nome'
  const obj = { nome: 'Ana', idade: 25 }
  return obj[chave as keyof typeof obj] as string
}

export const sistemaDeNotas = (
  alunos: { nome: string; notas: number[] }[],
): { nome: string; media: number }[] =>
  alunos.map(({ nome, notas }) => ({
    nome,
    media: notas.reduce((s, n) => s + n, 0) / notas.length,
  }))

export function refatorarObjeto(): { nome: string; idade: number } {
  const config = { nome: 'Ana', idade: 25, cargo: 'Dev', cidade: 'SP' }
  const { nome, idade } = config
  return { nome, idade }
}

export const calcularEstoque = (
  itens: { nome: string; preco: number; quantidade: number }[],
): (typeof itens[0] & { totalItem: number })[] =>
  itens.map((i) => ({ ...i, totalItem: i.preco * i.quantidade }))

export const destrAliasEMap = <
  T extends Record<string, unknown>,
>(
  itens: T[],
  chave: string,
  alias: string,
): Record<string, unknown>[] =>
  itens.map((item) => {
    const { [chave]: valorExtraido } = item
    return { [alias]: valorExtraido }
  })

export const inverterMatriz = (matriz: number[][]): number[] =>
  matriz.map((linha) => linha[0])

export const dadosIncompletos = (
  usuarios: { nome: string; telefone?: string }[],
): { nome: string; telefone: string }[] =>
  usuarios.map(({ nome, telefone = 'Nao informado' }) => ({
    nome,
    telefone,
  }))

export class UsuarioRelatorio {
  nome: string
  email: string
  cargo: string
  ativo: boolean

  constructor(nome: string, email: string, cargo: string, ativo: boolean) {
    this.nome = nome
    this.email = email
    this.cargo = cargo
    this.ativo = ativo
  }
}

export class Relatorio {
  gerar(usuarios: UsuarioRelatorio[]): string[] {
    return usuarios.map(({ nome, email, cargo, ativo }) => {
      const status = ativo ? 'ativo' : 'inativo'
      return '[' + status + '] ' + nome + ' - ' + cargo + ' (' + email + ')'
    })
  }
}
