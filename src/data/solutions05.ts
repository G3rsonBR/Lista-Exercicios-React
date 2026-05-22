import * as s from './lista05'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const produtosDemo = s.criarProdutos()

export const solutions05: Record<number, SolutionEntry> = {
  1: {
    code: code(s.ProdutoLoja.prototype.constructor),
    demo: () => {
      const p = new s.ProdutoLoja(99, 'Teste', 10, 'teste', 'https://picsum.photos/seed/teste/200/200')
      return JSON.stringify(p)
    },
  },
  2: {
    code: code(s.criarProdutos),
    demo: () => {
      const prods = s.criarProdutos()
      return prods.map((p) => p.nome + ' (' + p.categoria + ') R$' + p.preco).join(' | ')
    },
  },
  3: {
    code: code(s.Loja.prototype.constructor) + '\n\n' + code(s.Loja.prototype.exibirInfo),
    demo: () => {
      const loja = new s.Loja('TechStore', s.criarProdutos())
      return loja.exibirInfo()
    },
  },
  4: {
    code: code(s.filtrarPorCategoria),
    params: [{
      name: 'categoria',
      label: 'Categoria',
      type: 'text',
      defaultValue: 'eletronicos',
    }],
    run: (v) => {
      const r = s.filtrarPorCategoria(produtosDemo, v.categoria)
      if (r.length === 0) return 'Nenhum produto na categoria "' + v.categoria + '"'
      return r.map((p) => p.nome + ' - R$' + p.preco).join(' | ')
    },
  },
  5: {
    code: code(s.buscarPorId),
    params: [{
      name: 'id',
      label: 'ID do Produto',
      type: 'number',
      defaultValue: '3',
    }],
    run: (v) => {
      const r = s.buscarPorId(produtosDemo, Number(v.id))
      return r ? JSON.stringify(r) : 'Produto com ID ' + v.id + ' nao encontrado'
    },
  },
  6: {
    code: code(s.aplicarDesconto),
    demo: () => {
      const r = s.aplicarDesconto(produtosDemo)
      return r.map((p) => p.nome + ': R$' + p.preco).join(' | ')
    },
  },
  7: {
    code: code(s.produtosPromocao),
    demo: () => {
      const r = s.produtosPromocao(produtosDemo)
      if (r.length === 0) return 'Nenhum produto em promocao'
      return r.map((p) => p.nome + ' - R$' + p.preco).join(' | ')
    },
  },
  8: {
    code: code(s.ordenarPorPreco),
    demo: () => {
      const r = s.ordenarPorPreco(produtosDemo)
      return r.map((p) => p.nome + ': R$' + p.preco).join(' | ')
    },
  },
  9: {
    code: code(s.formatarEmReais),
    demo: () => s.formatarEmReais(produtosDemo).join(' | '),
  },
  10: {
    code: code(s.totalEstoque),
    demo: () => 'Valor total do estoque: R$ ' + s.totalEstoque(produtosDemo).toFixed(2).replace('.', ','),
  },
  11: {
    code: code(s.relatorioPorCategoria),
    demo: () => {
      const r = s.relatorioPorCategoria(produtosDemo)
      return Object.entries(r).map(([cat, qtd]) => cat + ': ' + qtd).join(' | ')
    },
  },
  12: {
    code: code(s.ListaDeDesejos.prototype.adicionar) + '\n\n' + code(s.ListaDeDesejos.prototype.remover) + '\n\n' + code(s.ListaDeDesejos.prototype.listar),
    demo: () => {
      const lista = new s.ListaDeDesejos()
      const msgs: string[] = []
      msgs.push(lista.adicionar(produtosDemo[0]!))
      msgs.push(lista.adicionar(produtosDemo[2]!))
      msgs.push(lista.adicionar(produtosDemo[0]!))
      msgs.push(lista.listar().map((p) => p.nome).join(', '))
      msgs.push(lista.remover(1))
      msgs.push(lista.listar().map((p) => p.nome).join(', '))
      return msgs.join(' | ')
    },
  },
  13: {
    code: code(s.Carrinho.prototype.adicionar) + '\n\n' + code(s.Carrinho.prototype.remover) + '\n\n' + code(s.Carrinho.prototype.total) + '\n\n' + code(s.Carrinho.prototype.resumo),
    demo: () => {
      const carrinho = new s.Carrinho()
      const msgs: string[] = []
      msgs.push(carrinho.adicionar(produtosDemo[0]!))
      msgs.push(carrinho.adicionar(produtosDemo[4]!, 2))
      msgs.push(carrinho.resumo().join(' | '))
      msgs.push('Total: R$ ' + carrinho.total().toFixed(2).replace('.', ','))
      return msgs.join(' | ')
    },
  },
  14: {
    code: code(s.renderizarProduto),
    params: [{
      name: 'id',
      label: 'ID do Produto',
      type: 'number',
      defaultValue: '1',
    }],
    run: (v) => {
      const produto = s.buscarPorId(produtosDemo, Number(v.id))
      if (!produto) return 'Produto nao encontrado'
      return s.renderizarProduto(produto)
    },
  },
  15: {
    code: code(s.finalizarCompra),
    demo: () => {
      const carrinho = new s.Carrinho()
      carrinho.adicionar(produtosDemo[0]!)
      carrinho.adicionar(produtosDemo[1]!)
      carrinho.adicionar(produtosDemo[2]!)
      carrinho.adicionar(produtosDemo[4]!)
      const resumo = s.finalizarCompra(carrinho.itens)
      return 'Itens: ' + resumo.quantidadeItens + ' | Bruto: R$ ' + resumo.totalBruto.toFixed(2).replace('.', ',') + ' | Desc.: R$ ' + resumo.desconto.toFixed(2).replace('.', ',') + ' | Total: R$ ' + resumo.totalFinal.toFixed(2).replace('.', ',')
    },
  },
}
