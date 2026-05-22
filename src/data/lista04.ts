/* ---------- Nivel Facil ---------- */

export const dobro = (n: number): number => n * 2

export const saudacaoFixa = (): string => 'Ola, Mundo!'

export const somaSimples = (a: number, b: number): number => a + b

export const verificarPar = (n: number): boolean => n % 2 === 0

export const quadrado = (n: number): number => n * n

export const maioridade = (idade: number): string =>
  idade >= 18 ? 'Maior de idade' : 'Menor de idade'

export const conversaoMoeda = (dolar: number): number => dolar * 5.0

export const templateString = (nome: string, idade: number): string =>
  'Ola, meu nome e ' + nome + ' e tenho ' + idade + ' anos'

export const multiplicacaoPor10 = (n: number): number => n * 10

export const comprimentoString = (s: string): number => s.length

/* ---------- Nivel Medio ---------- */

export const filtrarPositivos = (arr: number[]): number[] =>
  arr.filter((n) => n > 0)

export const nomesMaiusculo = (arr: string[]): string[] =>
  arr.map((s) => s.toUpperCase())

export const buscaUsuario = (
  arr: { id: number; nome: string }[],
  id: number,
): { id: number; nome: string } | undefined =>
  arr.find((u) => u.id === id)

export const calcularImposto = (arr: number[]): number[] =>
  arr.map((p) => p * 1.15)

export const contagemCaracteres = (arr: string[]): number[] =>
  arr.map((s) => s.length)

export const removerDuplicados = (arr: number[]): number[] =>
  arr.filter((n) => n > 10 && n < 50)

export const somaCarrinho = (arr: number[]): number =>
  arr.reduce((acc, p) => acc + p, 0)

export const verificarExistencia = (arr: string[], nome: string): boolean =>
  arr.some((s) => s === nome)

export const validacaoLista = (arr: number[]): boolean =>
  arr.every((n) => n > 0)

export const objetoCurto = (nome: string, categoria: string): { nome: string; categoria: string } =>
  ({ nome, categoria } as { nome: string; categoria: string })

/* ---------- Nivel Dificil ---------- */

export const retornoImplicitoObjeto = (
  id: number,
  username: string,
): { id: number; username: string } =>
  ({ id, username } as { id: number; username: string })

export const filtroObjetos = (
  arr: { nome: string; nota: number }[],
): string[] =>
  arr.filter((a) => a.nota >= 7).map((a) => a.nome)

export const ordenacao = (arr: number[]): number[] =>
  [...arr].sort((a, b) => b - a)

export const encadeamento = (arr: number[]): number =>
  arr
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((acc, n) => acc + n, 0)

export const geradorMultiplicador = (x: number): ((y: number) => number) =>
  (y) => x * y

export const formatacaoDados = (
  arr: string[],
): { dia: string; mes: string; ano: string }[] =>
  arr.map((s) => {
    const [dia, mes, ano] = s.split('/')
    return { dia, mes, ano }
  })

export const contadorOcorrencias = (
  arr: string[],
): Record<string, number> =>
  arr.reduce(
    (acc, cat) => {
      acc[cat] = (acc[cat] ?? 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

export const executarOperacao = (
  a: number,
  b: number,
  fn: (x: number, y: number) => number,
): number => fn(a, b)

export const mediaNotas = (
  arr: { nome: string; notas: number[] }[],
): { nome: string; media: number }[] =>
  arr.map(({ nome, notas }) => ({
    nome,
    media: notas.reduce((s, n) => s + n, 0) / notas.length,
  }))

export interface Temporizador {
  contador: number
  iniciar: () => ReturnType<typeof setInterval>
}

export const criarTemporizador = (): Temporizador => {
  const t: Temporizador = { contador: 0, iniciar: () => 0 }
  t.iniciar = function () {
    return setInterval(() => {
      t.contador++
    }, 1000)
  }
  return t
}
