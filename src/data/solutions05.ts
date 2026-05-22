import * as s from './lista05'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const produtosDemo = [
  new s.Produto(1, 'Smartphone', 1299, true),
  new s.Produto(2, 'Notebook', 4500, false),
  new s.Produto(3, 'Fone Bluetooth', 189, true),
  new s.Produto(4, 'Camiseta', 79.9, false),
  new s.Produto(5, 'Cafe Gourmet', 34.9, true),
]

export const solutions05: Record<number, SolutionEntry> = {
  1: {
    code: code(s.Produto.prototype.constructor) + '\n\n' + code(s.Loja.prototype.constructor) + '\n\nfiltrarPromocao => ' + code(s.Loja.prototype.filtrarPromocao ?? (() => null)),
    params: [{
      name: 'json',
      label: 'Produtos (JSON)',
      type: 'text',
      defaultValue: '[{"id":1,"nome":"Smartphone","preco":1299,"promocao":true},{"id":2,"nome":"Notebook","preco":4500,"promocao":false},{"id":3,"nome":"Fone","preco":189,"promocao":true}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { id: number; nome: string; preco: number; promocao: boolean }[]
      const produtos = arr.map((p) => new s.Produto(p.id, p.nome, p.preco, p.promocao))
      const loja = new s.Loja('Minha Loja', produtos)
      const promocao = loja.filtrarPromocao()
      return loja.exibirInfo() + '\nEm promocao: ' + promocao.map((p) => p.nome + ' - R$' + p.preco).join(', ')
    },
    demo: () => {
      const loja = new s.Loja('TechStore', produtosDemo)
      const promocao = loja.filtrarPromocao()
      return loja.exibirInfo() + '\nEm promocao: ' + promocao.map((p) => p.nome + ' - R$' + p.preco).join(', ')
    },
  },
}
