export interface Produto {
  id: number
  nome: string
  preco: number
  categoria: string
  imagem: string
}

export class ProdutoLoja {
  id: number
  nome: string
  preco: number
  categoria: string
  imagem: string

  constructor(id: number, nome: string, preco: number, categoria: string, imagem: string) {
    this.id = id
    this.nome = nome
    this.preco = preco
    this.categoria = categoria
    this.imagem = imagem
  }
}

export const criarProdutos = (): Produto[] => [
  { id: 1, nome: 'Smartphone', preco: 1299, categoria: 'eletronicos', imagem: 'https://picsum.photos/seed/smart/200/200' },
  { id: 2, nome: 'Notebook', preco: 4500, categoria: 'eletronicos', imagem: 'https://picsum.photos/seed/note/200/200' },
  { id: 3, nome: 'Fone Bluetooth', preco: 189, categoria: 'eletronicos', imagem: 'https://picsum.photos/seed/fone/200/200' },
  { id: 4, nome: 'Camiseta', preco: 79.9, categoria: 'roupas', imagem: 'https://picsum.photos/seed/camiseta/200/200' },
  { id: 5, nome: 'Tenis', preco: 299, categoria: 'roupas', imagem: 'https://picsum.photos/seed/tenis/200/200' },
  { id: 6, nome: 'Chocolate Artesanal', preco: 24.9, categoria: 'alimentos', imagem: 'https://picsum.photos/seed/choco/200/200' },
  { id: 7, nome: 'Cafe Gourmet', preco: 34.9, categoria: 'alimentos', imagem: 'https://picsum.photos/seed/cafe/200/200' },
  { id: 8, nome: 'Livro JavaScript', preco: 89.9, categoria: 'livros', imagem: 'https://picsum.photos/seed/livrojs/200/200' },
  { id: 9, nome: 'Mousepad Gamer', preco: 49.9, categoria: 'eletronicos', imagem: 'https://picsum.photos/seed/mousepad/200/200' },
  { id: 10, nome: 'Mochila', preco: 159.9, categoria: 'roupas', imagem: 'https://picsum.photos/seed/mochila/200/200' },
]

export class Loja {
  nome: string
  produtos: Produto[]

  constructor(nome: string, produtos: Produto[]) {
    this.nome = nome
    this.produtos = produtos
  }

  exibirInfo(): string {
    return 'Loja: ' + this.nome + ' | Produtos: ' + this.produtos.length
  }
}

export const filtrarPorCategoria = (produtos: Produto[], categoria: string): Produto[] =>
  produtos.filter((p) => p.categoria === categoria)

export const buscarPorId = (produtos: Produto[], id: number): Produto | undefined =>
  produtos.find((p) => p.id === id)

export const aplicarDesconto = (produtos: Produto[]): Produto[] =>
  produtos.map((p) => ({ ...p, preco: Number((p.preco * 0.85).toFixed(2)) }))

export const produtosPromocao = (produtos: Produto[]): Produto[] =>
  produtos.filter((p) => p.preco <= 30)

export const ordenarPorPreco = (produtos: Produto[]): Produto[] =>
  [...produtos].sort((a, b) => a.preco - b.preco)

export const formatarEmReais = (produtos: Produto[]): string[] =>
  produtos.map(
    (p) => p.nome + ': R$ ' + p.preco.toFixed(2).replace('.', ','),
  )

export const totalEstoque = (produtos: Produto[]): number =>
  produtos.reduce((acc, p) => acc + p.preco, 0)

export const relatorioPorCategoria = (
  produtos: Produto[],
): Record<string, number> =>
  produtos.reduce(
    (acc, p) => {
      acc[p.categoria] = (acc[p.categoria] ?? 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

export class ListaDeDesejos {
  itens: Produto[] = []

  adicionar(produto: Produto): string {
    if (this.itens.some((i) => i.id === produto.id)) {
      return 'Produto "' + produto.nome + '" ja esta na lista'
    }
    this.itens.push(produto)
    return 'Produto "' + produto.nome + '" adicionado a lista'
  }

  remover(id: number): string {
    const idx = this.itens.findIndex((i) => i.id === id)
    if (idx === -1) return 'Produto nao encontrado'
    this.itens.splice(idx, 1)
    return 'Produto removido da lista'
  }

  listar(): Produto[] {
    return this.itens
  }
}

export class Carrinho {
  itens: { produto: Produto; quantidade: number }[] = []

  adicionar(produto: Produto, quantidade = 1): string {
    const existente = this.itens.find((i) => i.produto.id === produto.id)
    if (existente) {
      existente.quantidade += quantidade
    } else {
      this.itens.push({ produto, quantidade })
    }
    return produto.nome + ' (' + quantidade + 'x) adicionado ao carrinho'
  }

  remover(id: number): string {
    const idx = this.itens.findIndex((i) => i.produto.id === id)
    if (idx === -1) return 'Produto nao encontrado no carrinho'
    this.itens.splice(idx, 1)
    return 'Produto removido do carrinho'
  }

  total(): number {
    return this.itens.reduce((acc, i) => acc + i.produto.preco * i.quantidade, 0)
  }

  resumo(): string[] {
    return this.itens.map(
      (i) => i.produto.nome + ' x' + i.quantidade + ' = R$ ' + (i.produto.preco * i.quantidade).toFixed(2).replace('.', ','),
    )
  }
}

export interface CompraResumo {
  quantidadeItens: number
  totalBruto: number
  desconto: number
  totalFinal: number
}

export const renderizarProduto = (produto: Produto): string => {
  const { nome, preco, imagem } = produto
  return '<div class="produto"><img src="' + imagem + '" alt="' + nome + '" /><span>' + nome + '</span><strong>R$ ' + preco.toFixed(2).replace('.', ',') + '</strong></div>'
}

export const finalizarCompra = (itens: { produto: Produto; quantidade: number }[]): CompraResumo => {
  const totalBruto = itens.reduce((acc, i) => acc + i.produto.preco * i.quantidade, 0)
  const quantidadeItens = itens.reduce((acc, i) => acc + i.quantidade, 0)
  const desconto = quantidadeItens > 3 ? totalBruto * 0.05 : 0
  return {
    quantidadeItens,
    totalBruto: Number(totalBruto.toFixed(2)),
    desconto: Number(desconto.toFixed(2)),
    totalFinal: Number((totalBruto - desconto).toFixed(2)),
  }
}
