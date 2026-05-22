export class Produto {
  id: number
  nome: string
  preco: number
  promocao: boolean

  constructor(id: number, nome: string, preco: number, promocao: boolean) {
    this.id = id
    this.nome = nome
    this.preco = preco
    this.promocao = promocao
  }
}

export class Loja {
  nome: string
  produtos: Produto[]

  constructor(nome: string, produtos: Produto[]) {
    this.nome = nome
    this.produtos = produtos
  }

  filtrarPromocao = (): Produto[] =>
    this.produtos.filter((p) => p.promocao)

  exibirInfo(): string {
    return this.nome + ' - Total: ' + this.produtos.length + ' produtos | Em promocao: ' + this.filtrarPromocao().length
  }
}
