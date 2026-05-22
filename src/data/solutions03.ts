import * as s from './lista03'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const parseNums = (raw: string): number[] =>
  raw.split(',').map((s) => {
    const n = Number(s.trim())
    if (isNaN(n)) throw new Error('Valor invalido: "' + s.trim() + '" nao e um numero')
    return n
  })

export const solutions03: Record<number, SolutionEntry> = {
  1: {
    code: code(s.dobrarValores),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3,4,5',
      defaultValue: '1,2,3,4,5',
    }],
    run: (v) => '[' + v.nums + '] -> [' + s.dobrarValores(parseNums(v.nums)) + ']',
  },
  2: {
    code: code(s.nomesProprios),
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
      return "['" + arr.join("','") + "'] -> ['" + s.nomesProprios(arr).join("','") + "']"
    },
  },
  3: {
    code: code(s.desestruturacaoSimples),
    demo: () => {
      const r = s.desestruturacaoSimples()
      return 'f1=' + r.f1 + ', f2=' + r.f2
    },
  },
  4: {
    code: code(s.trocarVariaveis),
    demo: () => {
      const r = s.trocarVariaveis()
      return 'a=' + r.a + ', b=' + r.b
    },
  },
  5: {
    code: code(s.extrairNome),
    demo: () => s.extrairNome(),
  },
  6: {
    code: code(s.mapComIndice),
    params: [{
      name: 'itens',
      label: 'Itens',
      type: 'array',
      itemType: 'string',
      placeholder: 'a,b,c',
      defaultValue: 'a,b,c',
    }],
    run: (v) => {
      const arr = v.itens.split(',').map((s) => s.trim())
      return s.mapComIndice(arr).join(', ')
    },
  },
  7: {
    code: code(s.converterParaString),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3',
      defaultValue: '1,2,3',
    }],
    run: (v) => '[' + s.converterParaString(parseNums(v.nums)) + ']',
  },
  8: {
    code: code(s.extrairPropriedade),
    params: [{
      name: 'json',
      label: 'Cidades (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Sao Paulo","populacao":12300000},{"nome":"Rio de Janeiro","populacao":6748000}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; populacao: number }[]
      return '[' + s.extrairPropriedade(arr) + ']'
    },
  },
  9: {
    code: code(s.destrComDefault),
    demo: () => s.destrComDefault(),
  },
  10: {
    code: code(s.restOperator),
    demo: () => {
      const r = s.restOperator()
      return 'primeiro=' + r.primeiro + ', outros=[' + r.outros + ']'
    },
  },
  11: {
    code: code(s.renomearVariaveis),
    demo: () => s.renomearVariaveis().tituloCurso,
  },
  12: {
    code: code(s.formatarPrecos),
    params: [{
      name: 'json',
      label: 'Produtos (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Caderno","preco":15},{"nome":"Caneta","preco":3}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; preco: number }[]
      return s.formatarPrecos(arr).join(' | ')
    },
  },
  13: {
    code: code(s.receberUsuario),
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'Ana' },
      { name: 'email', label: 'Email', type: 'text', defaultValue: 'ana@email.com' },
    ],
    run: (v) => s.receberUsuario({ nome: v.nome, email: v.email }),
  },
  14: {
    code: code(s.mapParaObjetos),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3,4',
      defaultValue: '1,2,3,4',
    }],
    run: (v) => JSON.stringify(s.mapParaObjetos(parseNums(v.nums))),
  },
  15: {
    code: code(s.aninhamento),
    demo: () => 'cavalos=' + s.aninhamento(),
  },
  16: {
    code: code(s.filtrarPorMap),
    params: [{
      name: 'idades',
      label: 'Idades',
      type: 'array',
      itemType: 'number',
      placeholder: '15,20,17,30',
      defaultValue: '15,20,17,30',
    }],
    run: (v) => '[' + parseNums(v.idades) + '] -> [' + s.filtrarPorMap(parseNums(v.idades)) + ']',
  },
  17: {
    code: code(s.arraysAninhados),
    demo: () => {
      const r = s.arraysAninhados()
      return 'a=' + r.a + ', b=' + r.b
    },
  },
  18: {
    code: code(s.calcularDesconto),
    params: [{
      name: 'json',
      label: 'Produtos (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Mouse","preco":50},{"nome":"Teclado","preco":100}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; preco: number }[]
      return JSON.stringify(s.calcularDesconto(arr))
    },
  },
  19: {
    code: code(s.extracaoAPISimulada),
    params: [{
      name: 'json',
      label: 'Dados (JSON)',
      type: 'text',
      defaultValue: '[{"id":1,"nome":"Ana","cargo":"Dev","idade":30},{"id":2,"nome":"Joao","cargo":"Designer","idade":25}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { id: unknown; nome: unknown }[]
      return JSON.stringify(s.extracaoAPISimulada(arr))
    },
  },
  20: {
    code: code(s.porcentagemDoTotal),
    params: [{
      name: 'nums',
      label: 'Numeros',
      type: 'array',
      itemType: 'number',
      placeholder: '10,20,30,40',
      defaultValue: '10,20,30,40',
    }],
    run: (v) => '[' + parseNums(v.nums) + '] -> [' + s.porcentagemDoTotal(parseNums(v.nums)) + ']',
  },
  21: {
    code: code(s.htmlGenerator),
    params: [{
      name: 'json',
      label: 'Links (JSON)',
      type: 'text',
      defaultValue: '[{"texto":"Google","url":"https://google.com"},{"texto":"GitHub","url":"https://github.com"}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { texto: string; url: string }[]
      return s.htmlGenerator(arr).join(', ')
    },
  },
  22: {
    code: code(s.mergeDados),
    params: [{
      name: 'ids',
      label: 'IDs',
      type: 'array',
      itemType: 'number',
      placeholder: '1,2,3',
      defaultValue: '1,2,3',
    }, {
      name: 'nomes',
      label: 'Nomes',
      type: 'array',
      itemType: 'string',
      placeholder: 'Ana,Joao,Maria',
      defaultValue: 'Ana,Joao,Maria',
    }],
    run: (v) => JSON.stringify(s.mergeDados(parseNums(v.ids), v.nomes.split(',').map((s) => s.trim()))),
  },
  23: {
    code: code(s.destrDinamica),
    demo: () => s.destrDinamica(),
  },
  24: {
    code: code(s.sistemaDeNotas),
    params: [{
      name: 'json',
      label: 'Alunos (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Ana","notas":[8,9,7]},{"nome":"Joao","notas":[6,5,7]}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; notas: number[] }[]
      return JSON.stringify(s.sistemaDeNotas(arr))
    },
  },
  25: {
    code: code(s.refatorarObjeto),
    demo: () => JSON.stringify(s.refatorarObjeto()),
  },
  26: {
    code: code(s.calcularEstoque),
    params: [{
      name: 'json',
      label: 'Itens (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Mouse","preco":50,"quantidade":3},{"nome":"Teclado","preco":100,"quantidade":2}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; preco: number; quantidade: number }[]
      return JSON.stringify(s.calcularEstoque(arr))
    },
  },
  27: {
    code: code(s.destrAliasEMap),
    params: [{
      name: 'json',
      label: 'Itens (JSON)',
      type: 'text',
      defaultValue: '[{"id":1,"nome":"Ana"},{"id":2,"nome":"Joao"}]',
    }, {
      name: 'chave',
      label: 'Chave',
      type: 'text',
      defaultValue: 'nome',
    }, {
      name: 'alias',
      label: 'Alias',
      type: 'text',
      defaultValue: 'nomeExtraido',
    }],
    run: (v) => JSON.stringify(s.destrAliasEMap(JSON.parse(v.json), v.chave, v.alias)),
  },
  28: {
    code: code(s.inverterMatriz),
    params: [{
      name: 'json',
      label: 'Matriz (JSON)',
      type: 'text',
      defaultValue: '[[1,2],[3,4],[5,6]]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as number[][]
      return '[' + s.inverterMatriz(arr) + ']'
    },
  },
  29: {
    code: code(s.dadosIncompletos),
    params: [{
      name: 'json',
      label: 'Usuarios (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Ana","telefone":"9999-0000"},{"nome":"Joao"}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; telefone?: string }[]
      return JSON.stringify(s.dadosIncompletos(arr))
    },
  },
  30: {
    code: code(s.Relatorio.prototype.constructor) + '\n\n' + code(s.UsuarioRelatorio.prototype.constructor) + '\n\nRelatorio.prototype.gerar = ' + code(s.Relatorio.prototype.gerar),
    params: [{
      name: 'json',
      label: 'Usuarios (JSON)',
      type: 'text',
      defaultValue: '[{"nome":"Ana","email":"ana@email.com","cargo":"Dev","ativo":true},{"nome":"Joao","email":"joao@email.com","cargo":"Designer","ativo":false}]',
    }],
    run: (v) => {
      const arr = JSON.parse(v.json) as { nome: string; email: string; cargo: string; ativo: boolean }[]
      const usuarios = arr.map((u) => new s.UsuarioRelatorio(u.nome, u.email, u.cargo, u.ativo))
      const r = new s.Relatorio()
      return r.gerar(usuarios).join('\n')
    },
  },
}
