/* ---------- Nível Fácil ---------- */

export const dobro = (n: number): number => n * 2
export const saudacao = (): string => 'Olá, Mundo!'
export const soma = (a: number, b: number): number => a + b
export const ehPar = (n: number): boolean => n % 2 === 0
export const quadrado = (n: number): number => n * n
export const maioridade = (idade: number): string =>
  idade >= 18 ? 'Maior de idade' : 'Menor de idade'
export const dolarParaReal = (dolar: number): number => dolar * 5.0
export const apresentar = (nome: string, idade: number): string =>
  `Olá, meu nome é ${nome} e tenho ${idade} anos`
export const mult10 = (n: number): number => n * 10
export const comprimento = (s: string): number => s.length

/* ---------- Nível Médio ---------- */

export const filtrarPositivos = (nums: number[]): number[] =>
  nums.filter((n) => n > 0)

export const nomesMaiusculo = (nomes: string[]): string[] =>
  nomes.map((n) => n.toUpperCase())

export const buscarUsuario = <T extends { id: number }>(
  usuarios: T[],
): T | undefined => usuarios.find((u: T) => u.id === 3)

export const calcularImposto = (precos: number[]): number[] =>
  precos.map((p) => p * 1.15)

export const contarCaracteres = (palavras: string[]): number[] =>
  palavras.map((p) => p.length)

export const filtrarMedios = (nums: number[]): number[] =>
  nums.filter((n) => n > 10 && n < 50)

export const somarCarrinho = (precos: number[]): number =>
  precos.reduce((acc, p) => acc + p, 0)

export const existeAdmin = (nomes: string[]): boolean =>
  nomes.some((n) => n === 'Admin')

export const todosPositivos = (nums: number[]): boolean =>
  nums.every((n) => n > 0)

export const criarObjeto = (nome: string, categoria: string) => ({
  nome,
  categoria,
})

/* ---------- Nível Difícil ---------- */

export const criarUsuario = (id: number, username: string) => ({ id, username })

export const aprovados = (
  alunos: { nome: string; nota: number }[],
): string[] =>
  alunos
    .filter((a) => a.nota >= 7)
    .map((a) => a.nome)

export const ordenarDecrescente = (nums: number[]): number[] =>
  [...nums].sort((a, b) => b - a)

export const processarNumeros = (nums: number[]): number =>
  nums
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((acc, n) => acc + n, 0)

export const gerarMultiplicador = (x: number) => (y: number) => x * y

export const formatarDatas = (
  datas: string[],
): { dia: string; mes: string; ano: string }[] =>
  datas.map((d) => {
    const [dia, mes, ano] = d.split('/')
    return { dia, mes, ano }
  })

export const contarOcorrencias = (categorias: string[]): Record<string, number> =>
  categorias.reduce(
    (acc, c) => {
      acc[c] = (acc[c] ?? 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

export const executarOperacao = (
  a: number,
  b: number,
  op: (x: number, y: number) => number,
): number => op(a, b)

export const mediaNotas = (
  alunos: { nome: string; notas: number[] }[],
): { nome: string; media: number }[] =>
  alunos.map((a) => ({
    nome: a.nome,
    media: a.notas.reduce((s, n) => s + n, 0) / a.notas.length,
  }))

export class Temporizador {
  contador = 0
  private id: ReturnType<typeof setInterval> | null = null

  iniciar(): void {
    this.id = setInterval(() => {
      this.contador++
    }, 1000)
  }

  parar(): void {
    if (this.id !== null) {
      clearInterval(this.id)
      this.id = null
    }
  }
}
