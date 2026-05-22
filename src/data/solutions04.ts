import * as s from './lista04'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const parseNums = (raw: string): number[] =>
  raw.split(',').map((s) => {
    const n = Number(s.trim())
    if (isNaN(n)) throw new Error('Valor invalido: "' + s.trim() + '" nao e um numero')
    return n
  })

export const solutions04: Record<number, SolutionEntry> = {
  1: {
    code: code(s.dobro),
    params: [{
      name: 'n',
      label: 'Numero',
      type: 'number',
      defaultValue: '5',
    }],
    run: (v) => 'dobro(' + v.n + ') = ' + s.dobro(Number(v.n)),
  },
  2: {
    code: code(s.saudacaoFixa),
    demo: () => s.saudacaoFixa(),
  },
  3: {
    code: code(s.somaSimples),
    params: [
      { name: 'a', label: 'Valor A', type: 'number', defaultValue: '3' },
      { name: 'b', label: 'Valor B', type: 'number', defaultValue: '7' },
    ],
    run: (v) => v.a + ' + ' + v.b + ' = ' + s.somaSimples(Number(v.a), Number(v.b)),
  },
  4: {
    code: code(s.verificarPar),
    params: [{
      name: 'n',
      label: 'Numero',
      type: 'number',
      defaultValue: '4',
    }],
    run: (v) => v.n + ' e par? ' + s.verificarPar(Number(v.n)),
  },
  5: {
    code: code(s.quadrado),
    params: [{
      name: 'n',
      label: 'Numero',
      type: 'number',
      defaultValue: '6',
    }],
    run: (v) => 'quadrado(' + v.n + ') = ' + s.quadrado(Number(v.n)),
  },
  6: {
    code: code(s.maioridade),
    params: [{
      name: 'idade',
      label: 'Idade',
      type: 'number',
      defaultValue: '20',
    }],
    run: (v) => s.maioridade(Number(v.idade)),
  },
  7: {
    code: code(s.conversaoMoeda),
    params: [{
      name: 'dolar',
      label: 'Valor em Dolar',
      type: 'number',
      defaultValue: '10',
    }],
    run: (v) => 'US$ ' + v.dolar + ' = R$ ' + s.conversaoMoeda(Number(v.dolar)),
  },
  8: {
    code: code(s.templateString),
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'Ana' },
      { name: 'idade', label: 'Idade', type: 'number', defaultValue: '25' },
    ],
    run: (v) => s.templateString(v.nome, Number(v.idade)),
  },
  9: {
    code: code(s.multiplicacaoPor10),
    params: [{
      name: 'n',
      label: 'Numero',
      type: 'number',
      defaultValue: '7',
    }],
    run: (v) => v.n + ' * 10 = ' + s.multiplicacaoPor10(Number(v.n)),
  },
  10: {
    code: code(s.comprimentoString),
    params: [{
      name: 'str',
      label: 'String',
      type: 'text',
      defaultValue: 'JavaScript',
    }],
    run: (v) => 'comprimento("' + v.str + '") = ' + s.comprimentoString(v.str),
  },
  11: {
    code: code(s.filtrarPositivos),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '-5,10,-2,15,-1,3',
      defaultValue: '-5,10,-2,15,-1,3',
    }],
    run: (v) => '[' + v.nums + '] -> [' + s.filtrarPositivos(parseNums(v.nums)) + ']',
  },
  12: {
    code: code(s.nomesMaiusculo),
    params: [{
      name: 'arr',
      label: 'Nomes',
      type: 'array',
      itemType: 'string',
      placeholder: 'ana,joao,maria',
      defaultValue: 'ana,joao,maria',
    }],
    run: (v) => {
      const arr = v.arr.split(',').map((s: string) => s.trim())
      return "['" + arr.join("','") + "'] -> ['" + s.nomesMaiusculo(arr).join("','") + "']"
    },
  },
  13: {
    code: code(s.buscaUsuario),
    params: [{
      name: 'json',
      label: 'Usuarios (JSON)',
      type: 'text',
      defaultValue: '[{"id":1,"nome":"Ana"},{"id":2,"nome":"Joao"},{"id":3,"nome":"Maria"}]',
    }, {
      name: 'id',
      label: 'ID',
      type: 'number',
      defaultValue: '3',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { id: number; nome: string }[]
      const r = s.buscaUsuario(arr, Number(v.id))
      return r ? JSON.stringify(r) : 'Nao encontrado'
    },
  },
  14: {
    code: code(s.calcularImposto),
    params: [{
      name: 'nums',
      label: 'Precos',
      type: 'array',
      itemType: 'number',
      placeholder: '100,200,150',
      defaultValue: '100,200,150',
    }],
    run: (v) => '[' + s.calcularImposto(parseNums(v.nums)).map((n) => n.toFixed(2)) + ']',
  },
  15: {
    code: code(s.contagemCaracteres),
    params: [{
      name: 'arr',
      label: 'Palavras',
      type: 'array',
      itemType: 'string',
      placeholder: 'casa,arvore,sol',
      defaultValue: 'casa,arvore,sol',
    }],
    run: (v) => {
      const arr = v.arr.split(',').map((s: string) => s.trim())
      return '[' + s.contagemCaracteres(arr) + ']'
    },
  },
  16: {
    code: code(s.removerDuplicados),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '5,20,15,8,30,55',
      defaultValue: '5,20,15,8,30,55',
    }],
    run: (v) => '[' + v.nums + '] -> [' + s.removerDuplicados(parseNums(v.nums)) + ']',
  },
  17: {
    code: code(s.somaCarrinho),
    params: [{
      name: 'nums',
      label: 'Precos',
      type: 'array',
      itemType: 'number',
      placeholder: '10,20,30',
      defaultValue: '10,20,30',
    }],
    run: (v) => 'soma = ' + s.somaCarrinho(parseNums(v.nums)),
  },
  18: {
    code: code(s.verificarExistencia),
    params: [{
      name: 'arr',
      label: 'Nomes',
      type: 'array',
      itemType: 'string',
      placeholder: 'Ana,Admin,Joao',
      defaultValue: 'Ana,Admin,Joao',
    }, {
      name: 'nome',
      label: 'Buscar',
      type: 'text',
      defaultValue: 'Admin',
    }],
    run: (v) => {
      const arr = v.arr.split(',').map((s: string) => s.trim())
      return '"' + v.nome + '" existe? ' + s.verificarExistencia(arr, v.nome)
    },
  },
  19: {
    code: code(s.validacaoLista),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '10,20,30',
      defaultValue: '10,20,30',
    }],
    run: (v) => '[' + v.nums + '] todos positivos? ' + s.validacaoLista(parseNums(v.nums)),
  },
  20: {
    code: code(s.objetoCurto),
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'Mouse' },
      { name: 'categoria', label: 'Categoria', type: 'text', defaultValue: 'Periferico' },
    ],
    run: (v) => JSON.stringify(s.objetoCurto(v.nome, v.categoria)),
  },
  21: {
    code: code(s.retornoImplicitoObjeto),
    params: [
      { name: 'id', label: 'ID', type: 'number', defaultValue: '1' },
      { name: 'username', label: 'Username', type: 'text', defaultValue: 'ana_dev' },
    ],
    run: (v) => JSON.stringify(s.retornoImplicitoObjeto(Number(v.id), v.username)),
  },
  22: {
    code: code(s.filtroObjetos),
    params: [{
      name: 'json',
      label: 'Alunos (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Ana","nota":8},{"nome":"Joao","nota":5},{"nome":"Maria","nota":7}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; nota: number }[]
      return "['" + s.filtroObjetos(arr).join("','") + "']"
    },
  },
  23: {
    code: code(s.ordenacao),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '3,1,4,1,5,9',
      defaultValue: '3,1,4,1,5,9',
    }],
    run: (v) => '[' + v.nums + '] decrescente -> [' + s.ordenacao(parseNums(v.nums)) + ']',
  },
  24: {
    code: code(s.encadeamento),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3,4,5,6',
      defaultValue: '1,2,3,4,5,6',
    }],
    run: (v) => {
      const arr = parseNums(v.nums)
      return 'pares * 2 + soma = ' + s.encadeamento(arr) + ' (nums: [' + arr + '])'
    },
  },
  25: {
    code: code(s.geradorMultiplicador),
    params: [
      { name: 'x', label: 'Valor X', type: 'number', defaultValue: '3' },
      { name: 'y', label: 'Valor Y', type: 'number', defaultValue: '5' },
    ],
    run: (v) => {
      const mult = s.geradorMultiplicador(Number(v.x))
      return 'multiplicador(' + v.x + ')(' + v.y + ') = ' + mult(Number(v.y))
    },
  },
  26: {
    code: code(s.formatacaoDados),
    params: [{
      name: 'json',
      label: 'Datas',
      type: 'array',
      itemType: 'string',
      placeholder: '15/01/2024,20/05/2024',
      defaultValue: '15/01/2024,20/05/2024',
    }],
    run: (v) => {
      const arr = v.json.split(',').map((s: string) => s.trim())
      return JSON.stringify(s.formatacaoDados(arr))
    },
  },
  27: {
    code: code(s.contadorOcorrencias),
    params: [{
      name: 'json',
      label: 'Categorias',
      type: 'array',
      itemType: 'string',
      placeholder: 'eletronicos,casa,eletronicos',
      defaultValue: 'eletronicos,casa,eletronicos',
    }],
    run: (v) => {
      const arr = v.json.split(',').map((s: string) => s.trim())
      return JSON.stringify(s.contadorOcorrencias(arr))
    },
  },
  28: {
    code: code(s.executarOperacao),
    params: [
      { name: 'a', label: 'Valor A', type: 'number', defaultValue: '10' },
      { name: 'b', label: 'Valor B', type: 'number', defaultValue: '5' },
    ],
    run: (v) => {
      const a = Number(v.a), b = Number(v.b)
      return 'soma: ' + s.executarOperacao(a, b, (x, y) => x + y) + ' | mult: ' + s.executarOperacao(a, b, (x, y) => x * y)
    },
  },
  29: {
    code: code(s.mediaNotas),
    params: [{
      name: 'json',
      label: 'Alunos (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Ana","notas":[8,9,7]},{"nome":"Joao","notas":[6,5,7]}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; notas: number[] }[]
      return JSON.stringify(s.mediaNotas(arr))
    },
  },
  30: {
    code: code(s.criarTemporizador),
    demo: () => {
      const t = s.criarTemporizador()
      t.iniciar()
      t.contador = 1
      return 'Temporizador criado. Contador apos ~1s: ' + t.contador + ' (arrow function mantem o this/contexto corretamente)'
    },
  },
}
