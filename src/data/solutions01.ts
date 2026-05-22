import * as s from './lista01'
import type { SolutionEntry } from '../types'

const code = (v: object) => v.toString()

const livroCode = code(s.Livro.prototype.constructor)

export const solutions01: Record<number, SolutionEntry> = {
  1: {
    code: livroCode,
    params: [
      { name: 'titulo', label: 'Título', type: 'text', defaultValue: '1984' },
      { name: 'autor', label: 'Autor', type: 'text', defaultValue: 'George Orwell' },
    ],
    run: (v) => JSON.stringify(new s.Livro(v.titulo, v.autor)),
  },
  2: {
    code: code(s.Pessoa.prototype.constructor) + '\n\n' + 'Pessoa.prototype.falar = ' + code(s.Pessoa.prototype.falar),
    params: [{ name: 'nome', label: 'Nome', type: 'text', defaultValue: 'João' }],
    run: (v) => new s.Pessoa(v.nome).falar(),
  },
  3: {
    code: code(s.Retangulo.prototype.constructor) + '\n\n' + 'Retangulo.prototype.calcularArea = ' + code(s.Retangulo.prototype.calcularArea),
    params: [
      { name: 'largura', label: 'Largura', type: 'number', defaultValue: '5' },
      { name: 'altura', label: 'Altura', type: 'number', defaultValue: '3' },
    ],
    run: (v) => 'Area: ' + new s.Retangulo(Number(v.largura), Number(v.altura)).calcularArea(),
  },
  4: {
    code: code(s.Carro.prototype.constructor) + '\n\n// acelerar() incrementa velocidade em 10',
    params: [{ name: 'vezes', label: 'Acelerações', type: 'number', defaultValue: '2' }],
    run: (v) => {
      const c = new s.Carro()
      for (let i = 0; i < Number(v.vezes); i++) c.acelerar()
      return 'Velocidade: ' + c.velocidade
    },
  },
  5: {
    code: code(s.Produto.prototype.constructor) + '\n\n' + 'Produto.prototype.aplicarDesconto = ' + code(s.Produto.prototype.aplicarDesconto),
    params: [
      { name: 'preco', label: 'Preço original', type: 'number', defaultValue: '100' },
      { name: 'porcentagem', label: 'Desconto (%)', type: 'number', defaultValue: '10' },
    ],
    run: (v) => {
      const p = new s.Produto(Number(v.preco))
      p.aplicarDesconto(Number(v.porcentagem))
      return 'Preco com desconto: R$ ' + p.preco
    },
  },
  6: {
    code: code(s.Contador.prototype.constructor) + '\n\n' +
      'Contador.prototype.incrementar = ' + code(s.Contador.prototype.incrementar) + '\n' +
      'Contador.prototype.decrementar = ' + code(s.Contador.prototype.decrementar),
    demo: () => {
      const c = new s.Contador()
      c.incrementar()
      c.incrementar()
      c.decrementar()
      return 'Valor: ' + c.valor
    },
  },
  7: {
    code: code(s.Temperatura.prototype.constructor) + '\n\n' + 'Temperatura.prototype.paraFahrenheit = ' + code(s.Temperatura.prototype.paraFahrenheit),
    params: [{ name: 'celsius', label: '°C', type: 'number', defaultValue: '30' }],
    run: (v) => v.celsius + 'C = ' + new s.Temperatura(Number(v.celsius)).paraFahrenheit() + 'F',
  },
  8: {
    code: `class Animal {\n  constructor(nome, especie) {\n    this.nome = nome\n    this.especie = especie\n  }\n  emitirSom() { return '...' }\n}`,
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'Rex' },
      { name: 'especie', label: 'Espécie', type: 'text', defaultValue: 'cachorro' },
    ],
    run: (v) => JSON.stringify(new s.Animal(v.nome, v.especie)),
  },
  9: {
    code: code(s.Filme.prototype.constructor) + '\n\n' + 'Filme.prototype.temMaisDe10Anos = ' + code(s.Filme.prototype.temMaisDe10Anos),
    params: [
      { name: 'titulo', label: 'Título', type: 'text', defaultValue: 'Matrix' },
      { name: 'ano', label: 'Ano de lançamento', type: 'number', defaultValue: '1999' },
    ],
    run: (v) => {
      const f = new s.Filme(v.titulo, Number(v.ano))
      return f.titulo + ' (' + f.anoLancamento + ') > 10 anos? ' + f.temMaisDe10Anos()
    },
  },
  10: {
    code: `class Lampada {\n  ligada = false\n  ligar() { this.ligada = true }\n  desligar() { this.ligada = false }\n}`,
    demo: () => {
      const l = new s.Lampada()
      l.ligar()
      return 'Lampada ligada? ' + l.ligada
    },
  },
  11: {
    code: code(s.Cachorro.prototype.constructor),
    demo: () => {
      const c = new s.Cachorro('Rex')
      return c.emitirSom()
    },
  },
  12: {
    code: code(s.Funcionario.prototype.constructor) + '\n\n' + code(s.Gerente.prototype.constructor),
    params: [
      { name: 'nome', label: 'Nome', type: 'text', defaultValue: 'Maria' },
      { name: 'salario', label: 'Salário', type: 'number', defaultValue: '10000' },
      { name: 'departamento', label: 'Departamento', type: 'text', defaultValue: 'TI' },
    ],
    run: (v) => JSON.stringify(new s.Gerente(v.nome, Number(v.salario), v.departamento)),
  },
  13: { code: '// super() - ver exercicio 12 acima' },
  14: {
    code: code(s.Conta.prototype.constructor) + '\n\n' + code(s.ContaPoupanca.prototype.constructor),
    params: [
      { name: 'saldo', label: 'Saldo inicial', type: 'number', defaultValue: '1000' },
      { name: 'taxa', label: 'Taxa de juros (%)', type: 'number', defaultValue: '5' },
    ],
    run: (v) => {
      const cp = new s.ContaPoupanca('Cliente', Number(v.saldo))
      cp.aplicarJuros(Number(v.taxa))
      return 'Saldo apos ' + v.taxa + '% juros: R$ ' + cp.saldo
    },
  },
  15: {
    code: code(s.Veiculo.prototype.constructor) + '\n\n' + code(s.Aviao.prototype.constructor) + '\n\n' + code(s.CarroTerrestre.prototype.constructor),
    demo: () => {
      const a = new s.Aviao()
      const c = new s.CarroTerrestre()
      return a.mover() + ' | ' + c.mover()
    },
  },
  16: {
    code: '// Validacao de saque implementada em Conta.sacar()\n' + code(s.Conta.prototype.sacar),
    params: [
      { name: 'saldo', label: 'Saldo', type: 'number', defaultValue: '100' },
      { name: 'valor', label: 'Valor do saque', type: 'number', defaultValue: '50' },
    ],
    run: (v) => {
      const c = new s.Conta('Joao', Number(v.saldo))
      const r = c.sacar(Number(v.valor))
      return 'Saque ' + v.valor + ': ' + r + ' | Saldo: ' + c.saldo
    },
  },
  17: {
    code: code(s.Forma.prototype.constructor) + '\n\n' + code(s.Circulo.prototype.constructor) + '\n\n' + code(s.Quadrado.prototype.constructor),
    demo: () => {
      const c = new s.Circulo()
      const q = new s.Quadrado()
      return c.desenhar() + ' | ' + q.desenhar()
    },
  },
  18: {
    code: code(s.Usuario.prototype.constructor) + '\n\n' + code(s.Professor.prototype.constructor) + '\n\n' + code(s.Aluno.prototype.constructor),
    demo: () => {
      const prof = new s.Professor('Carlos', 'carlos@escola.com')
      const aluno = new s.Aluno('Ana', 'ana@escola.com')
      return prof.lancarNota('Ana', 9.5) + ' | ' + aluno.entregarTrabalho('Matematica')
    },
  },
  19: {
    code: code(s.ItemPedido.prototype.constructor) + '\n\n' + 'ItemPedido.prototype.calcularTotal = ' + code(s.ItemPedido.prototype.calcularTotal),
    params: [
      { name: 'quantidade', label: 'Quantidade', type: 'number', defaultValue: '3' },
      { name: 'preco', label: 'Preço unitário', type: 'number', defaultValue: '25.5' },
    ],
    run: (v) => 'Total: R$ ' + new s.ItemPedido(Number(v.quantidade), Number(v.preco)).calcularTotal(),
  },
  20: {
    code: code(s.CarroEletrico.prototype.constructor),
    params: [{ name: 'bateria', label: 'Bateria (%)', type: 'number', defaultValue: '85' }],
    run: (v) => {
      const ce = new s.CarroEletrico(Number(v.bateria))
      ce.acelerar()
      return 'Bateria: ' + ce.bateria + '% | Velocidade: ' + ce.velocidade
    },
  },
  21: {
    code: code(s.Carrinho.prototype.constructor),
    demo: () => {
      const carrinho = new s.Carrinho()
      carrinho.adicionarProduto(new s.Produto(50), 2)
      carrinho.adicionarProduto(new s.Produto(30), 1)
      return 'Total: R$ ' + carrinho.calcularTotal()
    },
  },
  22: {
    code: code(s.Biblioteca.prototype.constructor),
    demo: () => {
      const b = new s.Biblioteca()
      b.adicionarLivro(new s.Livro('Dom Casmurro', 'Machado de Assis'))
      b.adicionarLivro(new s.Livro('1984', 'George Orwell'))
      const found = b.buscarPorAutor('Machado')
      return 'Encontrados: ' + found.length + ' - ' + found[0].titulo
    },
  },
  23: {
    code: code(s.Personagem.prototype.constructor) + '\n\n' + 'Personagem.prototype.atacar = ' + code(s.Personagem.prototype.atacar),
    params: [
      { name: 'ataque', label: 'Ataque', type: 'number', defaultValue: '25' },
      { name: 'vidaInimigo', label: 'Vida do inimigo', type: 'number', defaultValue: '50' },
    ],
    run: (v) => {
      const heroi = new s.Personagem('Heroi', 100, Number(v.ataque))
      const monstro = new s.Personagem('Monstro', Number(v.vidaInimigo), 10)
      heroi.atacar(monstro)
      return 'Vida do monstro apos ataque: ' + monstro.vida
    },
  },
  24: {
    code: code(s.Frota.prototype.constructor),
    demo: () => {
      const frota = new s.Frota()
      const v1 = new s.CarroTerrestre()
      const v2 = new s.CarroTerrestre()
      frota.adicionarVeiculo(v1)
      frota.adicionarVeiculo(v2)
      frota.registrarKm(v1, 15000)
      const manut = frota.listarManutencao()
      return 'Veiculos p/ manutencao: ' + manut.length
    },
  },
  25: {
    code: code(s.Vendedor.prototype.constructor) + '\n\n' + code(s.Diretor.prototype.constructor),
    demo: () => {
      const v = new s.Vendedor('Paulo', 3000, 500)
      const d = new s.Diretor('Carla', 10000, 5000)
      return 'Vendedor: R$ ' + v.calcularSalario() + ' | Diretor: R$ ' + d.calcularSalario()
    },
  },
  26: {
    code: '// Metodo transferir em Conta:\n' + code(s.Conta.prototype.transferir),
    params: [
      { name: 'saldoOrigem', label: 'Saldo origem', type: 'number', defaultValue: '500' },
      { name: 'saldoDestino', label: 'Saldo destino', type: 'number', defaultValue: '100' },
      { name: 'valor', label: 'Valor da transferência', type: 'number', defaultValue: '200' },
    ],
    run: (v) => {
      const a = new s.Conta('Alice', Number(v.saldoOrigem))
      const b = new s.Conta('Bob', Number(v.saldoDestino))
      a.transferir(Number(v.valor), b)
      return 'Alice: R$ ' + a.saldo + ' | Bob: R$ ' + b.saldo
    },
  },
  27: {
    code: code(s.Agenda.prototype.constructor) + '\n\n' + code(s.Contato.prototype.constructor),
    demo: () => {
      const agenda = new s.Agenda()
      agenda.adicionar(new s.Contato('Joao', '9999-0000'))
      agenda.adicionar(new s.Contato('Maria', '8888-0000'))
      agenda.excluir('Joao')
      return 'Contatos: ' + agenda.listar().length
    },
  },
  28: {
    code: code(s.Estacionamento.prototype.constructor),
    demo: () => {
      const est = new s.Estacionamento(2)
      est.estacionar(new s.CarroTerrestre())
      est.estacionar(new s.CarroTerrestre())
      const r3 = est.estacionar(new s.CarroTerrestre())
      return 'Vagas restantes: ' + est.vagasDisponiveis() + ' | Terceiro carro: ' + r3
    },
  },
  29: {
    code: code(s.Playlist.prototype.constructor) + '\n\n' + code(s.Musica.prototype.constructor),
    demo: () => {
      const pl = new s.Playlist()
      pl.adicionar(new s.Musica('Musica A', 300))
      pl.adicionar(new s.Musica('Musica B', 180))
      pl.ordenarPorDuracao()
      return 'Musicas ordenadas: ' + pl.listar().map((m) => m.titulo).join(', ')
    },
  },
  30: {
    code: code(s.Elevador.prototype.constructor),
    demo: () => {
      const e = new s.Elevador(10, 5)
      e.entrar(3)
      e.subir()
      e.subir()
      return 'Andar: ' + e.andarAtual
    },
  },
}
