import * as s from './lista02'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const parseNums = (raw: string): number[] =>
  raw.split(',').map((s) => {
    const n = Number(s.trim())
    if (isNaN(n)) throw new Error('Valor inválido: "' + s.trim() + '" não é um número')
    return n
  })

export const solutions02: Record<number, SolutionEntry> = {
  1: {
    code: code(s.dobro),
    params: [{ name: 'n', label: 'Número', type: 'number', defaultValue: '5' }],
    run: (v) => 'dobro(' + v.n + ') = ' + s.dobro(Number(v.n)),
  },
  2: { code: code(s.saudacao), demo: () => s.saudacao() },
  3: {
    code: code(s.soma),
    params: [
      { name: 'a', label: 'a', type: 'number', defaultValue: '3' },
      { name: 'b', label: 'b', type: 'number', defaultValue: '7' },
    ],
    run: (v) => 'soma(' + v.a + ', ' + v.b + ') = ' + s.soma(Number(v.a), Number(v.b)),
  },
  4: {
    code: code(s.ehPar),
    params: [{ name: 'n', label: 'Número', type: 'number', defaultValue: '4' }],
    run: (v) => 'ehPar(' + v.n + ') = ' + s.ehPar(Number(v.n)),
  },
  5: {
    code: code(s.quadrado),
    params: [{ name: 'n', label: 'Número', type: 'number', defaultValue: '6' }],
    run: (v) => 'quadrado(' + v.n + ') = ' + s.quadrado(Number(v.n)),
  },
  6: {
    code: code(s.maioridade),
    params: [{ name: 'idade', label: 'Idade', type: 'number', defaultValue: '17' }],
    run: (v) => 'maioridade(' + v.idade + ') = ' + s.maioridade(Number(v.idade)),
  },
  7: {
    code: code(s.dolarParaReal),
    params: [{ name: 'dolar', label: 'Valor em US$', type: 'number', defaultValue: '50' }],
    run: (v) => 'US$ ' + v.dolar + ' = R$ ' + s.dolarParaReal(Number(v.dolar)),
  },
  8: {
    code: code(s.apresentar),
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'João' },
      { name: 'idade', label: 'Idade', type: 'number', defaultValue: '25' },
    ],
    run: (v) => s.apresentar(v.nome, Number(v.idade)),
  },
  9: {
    code: code(s.mult10),
    params: [{ name: 'n', label: 'Número', type: 'number', defaultValue: '7' }],
    run: (v) => 'mult10(' + v.n + ') = ' + s.mult10(Number(v.n)),
  },
  10: {
    code: code(s.comprimento),
    params: [{ name: 's', label: 'String', type: 'text', defaultValue: 'JavaScript' }],
    run: (v) => 'comprimento("' + v.s + '") = ' + s.comprimento(v.s),
  },
  11: {
    code: code(s.filtrarPositivos),
    params: [{
      name: 'nums',
      label: 'Números',
      type: 'array',
      itemType: 'number',
      placeholder: '-5,10,-2,15,-1,3',
      defaultValue: '-5,10,-2,15,-1,3',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return '[' + arr + '] -> [' + s.filtrarPositivos(arr) + ']'
    },
  },
  12: {
    code: code(s.nomesMaiusculo),
    params: [{
      name: 'nomes',
      label: 'Nomes',
      type: 'array',
      itemType: 'string',
      placeholder: 'ana,joao,maria',
      defaultValue: 'ana,joao,maria',
    }],
    run: (v) => {
      const arr = v.nomes.split(',').map((s) => s.trim())
      return "['" + arr.join("','") + "'] -> ['" + s.nomesMaiusculo(arr).join("','") + "']"
    },
  },
  13: {
    code: code(s.buscarUsuario),
    demo: () => JSON.stringify(s.buscarUsuario([{ id: 1, nome: 'Ana' }, { id: 3, nome: 'Joao' }])),
  },
  14: {
    code: code(s.calcularImposto),
    params: [{
      name: 'precos',
      label: 'Preços',
      type: 'array',
      itemType: 'number',
      placeholder: '100,200,50',
      defaultValue: '100,200,50',
    }],
    run: (v) => {
      const arr = parseNums(v.precos)
      return '[' + arr + '] -> [' + s.calcularImposto(arr) + ']'
    },
  },
  15: {
    code: code(s.contarCaracteres),
    params: [{
      name: 'palavras',
      label: 'Palavras',
      type: 'array',
      itemType: 'string',
      placeholder: 'sol,lua,estrela',
      defaultValue: 'sol,lua,estrela',
    }],
    run: (v) => {
      const arr = v.palavras.split(',').map((s) => s.trim())
      return "['" + arr.join("','") + "'] -> [" + s.contarCaracteres(arr) + ']'
    },
  },
  16: {
    code: code(s.filtrarMedios),
    params: [{
      name: 'nums',
      label: 'Números',
      type: 'array',
      itemType: 'number',
      placeholder: '5,20,55,30,10,49',
      defaultValue: '5,20,55,30,10,49',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return '[' + arr + '] -> [' + s.filtrarMedios(arr) + ']'
    },
  },
  17: {
    code: code(s.somarCarrinho),
    params: [{
      name: 'precos',
      label: 'Preços',
      type: 'array',
      itemType: 'number',
      placeholder: '10,20,30',
      defaultValue: '10,20,30',
    }],
    run: (v) => {
      const arr = parseNums(v.precos)
      return '[' + arr + '] -> ' + s.somarCarrinho(arr)
    },
  },
  18: {
    code: code(s.existeAdmin),
    params: [{
      name: 'nomes',
      label: 'Nomes',
      type: 'array',
      itemType: 'string',
      placeholder: 'User,Admin,Guest',
      defaultValue: 'User,Admin,Guest',
    }],
    run: (v) => {
      const arr = v.nomes.split(',').map((s) => s.trim())
      return "['" + arr.join("','") + "'] -> " + s.existeAdmin(arr)
    },
  },
  19: {
    code: code(s.todosPositivos),
    params: [{
      name: 'nums',
      label: 'Números',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3',
      defaultValue: '1,2,3',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return '[' + arr + '] -> ' + s.todosPositivos(arr)
    },
  },
  20: {
    code: code(s.criarObjeto),
    demo: () => JSON.stringify(s.criarObjeto('Notebook', 'Eletronicos')),
  },
  21: {
    code: code(s.criarUsuario),
    params: [
      { name: 'id', label: 'ID', type: 'number', defaultValue: '1' },
      { name: 'username', label: 'Username', type: 'text', defaultValue: 'joaosilva' },
    ],
    run: (v) => JSON.stringify(s.criarUsuario(Number(v.id), v.username)),
  },
  22: {
    code: code(s.aprovados),
    demo: () => 'Aprovados: [' + s.aprovados([{ nome: 'Ana', nota: 8 }, { nome: 'Joao', nota: 5 }, { nome: 'Maria', nota: 7 }]) + ']',
  },
  23: {
    code: code(s.ordenarDecrescente),
    params: [{
      name: 'nums',
      label: 'Números',
      type: 'array',
      itemType: 'number',
      placeholder: '3,1,4,1,5,9',
      defaultValue: '3,1,4,1,5,9',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return '[' + arr + '] -> [' + s.ordenarDecrescente(arr) + ']'
    },
  },
  24: {
    code: code(s.processarNumeros),
    params: [{
      name: 'nums',
      label: 'Números',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3,4,5,6',
      defaultValue: '1,2,3,4,5,6',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return '[' + arr + '] -> ' + s.processarNumeros(arr)
    },
  },
  25: {
    code: code(s.gerarMultiplicador),
    params: [
      { name: 'x', label: 'x', type: 'number', defaultValue: '3' },
      { name: 'y', label: 'y', type: 'number', defaultValue: '4' },
    ],
    run: (v) => 'gerarMultiplicador(' + v.x + ')(' + v.y + ') = ' + s.gerarMultiplicador(Number(v.x))(Number(v.y)),
  },
  26: {
    code: code(s.formatarDatas),
    params: [{
      name: 'datas',
      label: 'Datas (DD/MM/AAAA)',
      type: 'array',
      itemType: 'string',
      placeholder: '25/12/2024,01/01/2025',
      defaultValue: '25/12/2024,01/01/2025',
    }],
    run: (v) => {
      const arr = v.datas.split(',').map((s) => s.trim())
      return JSON.stringify(s.formatarDatas(arr))
    },
  },
  27: {
    code: code(s.contarOcorrencias),
    params: [{
      name: 'categorias',
      label: 'Categorias',
      type: 'array',
      itemType: 'string',
      placeholder: 'eletronicos,casa,eletronicos',
      defaultValue: 'eletronicos,casa,eletronicos',
    }],
    run: (v) => {
      const arr = v.categorias.split(',').map((s) => s.trim())
      return JSON.stringify(s.contarOcorrencias(arr))
    },
  },
  28: {
    code: code(s.executarOperacao),
    demo: () => 'executarOperacao(10, 5, (a,b) => a - b) = ' + s.executarOperacao(10, 5, (a, b) => a - b),
  },
  29: {
    code: code(s.mediaNotas),
    demo: () => JSON.stringify(s.mediaNotas([{ nome: 'Ana', notas: [8, 9, 7] }])),
  },
  30: {
    code: code(s.Temporizador.prototype.constructor),
    demo: () => 'Classe Temporizador criada. Use t.iniciar() para comecar.',
  },
}
