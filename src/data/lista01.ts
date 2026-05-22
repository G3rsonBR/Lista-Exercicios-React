/* ---------- Nivel Facil ---------- */

export class Livro {
  titulo: string
  autor: string

  constructor(titulo: string, autor: string) {
    this.titulo = titulo
    this.autor = autor
  }
}

export class Pessoa {
  nome: string

  constructor(nome: string) {
    this.nome = nome
  }

  falar(): string {
    return `Olá, meu nome é ${this.nome}`
  }
}

export class Retangulo {
  largura: number
  altura: number

  constructor(largura: number, altura: number) {
    this.largura = largura
    this.altura = altura
  }

  calcularArea(): number {
    return this.largura * this.altura
  }
}

export class Carro {
  velocidade = 0

  acelerar(): void {
    this.velocidade += 10
  }
}

export class Produto {
  preco: number

  constructor(preco: number) {
    this.preco = preco
  }

  aplicarDesconto(porcentagem: number): void {
    this.preco -= this.preco * (porcentagem / 100)
  }
}

export class Contador {
  valor = 0

  incrementar(): void {
    this.valor++
  }

  decrementar(): void {
    this.valor--
  }
}

export class Temperatura {
  celsius: number

  constructor(celsius: number) {
    this.celsius = celsius
  }

  paraFahrenheit(): number {
    return (this.celsius * 9) / 5 + 32
  }
}

export class Animal {
  nome: string
  especie: string

  constructor(nome: string, especie: string) {
    this.nome = nome
    this.especie = especie
  }

  emitirSom(): string {
    return '...'
  }
}

export class Filme {
  titulo: string
  anoLancamento: number

  constructor(titulo: string, anoLancamento: number) {
    this.titulo = titulo
    this.anoLancamento = anoLancamento
  }

  temMaisDe10Anos(): boolean {
    return new Date().getFullYear() - this.anoLancamento > 10
  }
}

export class Lampada {
  ligada = false

  ligar(): void {
    this.ligada = true
  }

  desligar(): void {
    this.ligada = false
  }
}

/* ---------- Nivel Medio ---------- */

export class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome, 'cachorro')
  }

  emitirSom(): string {
    return 'Latido'
  }
}

export class Funcionario {
  nome: string
  salario: number

  constructor(nome: string, salario: number) {
    this.nome = nome
    this.salario = salario
  }

  calcularSalario(): number {
    return this.salario
  }
}

export class Gerente extends Funcionario {
  departamento: string

  constructor(nome: string, salario: number, departamento: string) {
    super(nome, salario)
    this.departamento = departamento
  }
}

export class Conta {
  titular: string
  saldo: number

  constructor(titular: string, saldo: number = 0) {
    this.titular = titular
    this.saldo = saldo
  }

  depositar(valor: number): void {
    this.saldo += valor
  }

  sacar(valor: number): boolean {
    if (valor > this.saldo) return false
    this.saldo -= valor
    return true
  }

  transferir(valor: number, destino: Conta): boolean {
    if (!this.sacar(valor)) return false
    destino.depositar(valor)
    return true
  }
}

export class ContaPoupanca extends Conta {
  aplicarJuros(taxa: number): void {
    this.saldo += this.saldo * (taxa / 100)
  }
}

export class Veiculo {
  mover(): string {
    return 'Veículo se movendo'
  }
}

export class Aviao extends Veiculo {
  mover(): string {
    return 'Avião voando'
  }
}

export class CarroTerrestre extends Veiculo {
  mover(): string {
    return 'Carro rodando'
  }
}

export class Forma {
  desenhar(): string {
    return 'Desenhando forma'
  }
}

export class Circulo extends Forma {
  desenhar(): string {
    return 'Desenhando círculo'
  }
}

export class Quadrado extends Forma {
  desenhar(): string {
    return 'Desenhando quadrado'
  }
}

export class Usuario {
  nome: string
  email: string

  constructor(nome: string, email: string) {
    this.nome = nome
    this.email = email
  }
}

export class Professor extends Usuario {
  lancarNota(aluno: string, nota: number): string {
    return `Professor ${this.nome} lançou nota ${nota} para ${aluno}`
  }
}

export class Aluno extends Usuario {
  entregarTrabalho(disciplina: string): string {
    return `Aluno ${this.nome} entregou trabalho de ${disciplina}`
  }
}

export class ItemPedido {
  quantidade: number
  preco: number

  constructor(quantidade: number, preco: number) {
    this.quantidade = quantidade
    this.preco = preco
  }

  calcularTotal(): number {
    return this.quantidade * this.preco
  }
}

export class CarroEletrico extends Carro {
  bateria: number

  constructor(bateria: number) {
    super()
    this.bateria = bateria
  }
}

/* ---------- Nivel Dificil ---------- */

interface ItemCarrinho {
  produto: Produto
  quantidade: number
}

export class Carrinho {
  #itens: ItemCarrinho[] = []

  adicionarProduto(produto: Produto, quantidade: number = 1): void {
    this.#itens.push({ produto, quantidade })
  }

  calcularTotal(): number {
    return this.#itens.reduce((acc, i) => acc + i.produto.preco * i.quantidade, 0)
  }
}

export class Biblioteca {
  #livros: Livro[] = []

  adicionarLivro(livro: Livro): void {
    this.#livros.push(livro)
  }

  buscarPorAutor(autor: string): Livro[] {
    return this.#livros.filter((l) => l.autor.toLowerCase().includes(autor.toLowerCase()))
  }
}

export class Personagem {
  nome: string
  vida: number
  ataque: number

  constructor(nome: string, vida: number, ataque: number) {
    this.nome = nome
    this.vida = vida
    this.ataque = ataque
  }

  atacar(inimigo: Personagem): void {
    inimigo.vida -= this.ataque
  }
}

export class Frota {
  #veiculos: Veiculo[] = []
  #km: Map<Veiculo, number> = new Map()

  adicionarVeiculo(v: Veiculo): void {
    this.#veiculos.push(v)
  }

  registrarKm(v: Veiculo, km: number): void {
    this.#km.set(v, (this.#km.get(v) ?? 0) + km)
  }

  listarManutencao(limite: number = 10000): Veiculo[] {
    return this.#veiculos.filter((v) => (this.#km.get(v) ?? 0) >= limite)
  }
}

export class Vendedor extends Funcionario {
  comissao: number

  constructor(nome: string, salarioBase: number, comissao: number) {
    super(nome, salarioBase)
    this.comissao = comissao
  }

  calcularSalario(): number {
    return this.salario + this.comissao
  }
}

export class Diretor extends Funcionario {
  bonus: number

  constructor(nome: string, salarioBase: number, bonus: number) {
    super(nome, salarioBase)
    this.bonus = bonus
  }

  calcularSalario(): number {
    return this.salario + this.bonus
  }
}

export class Contato {
  nome: string
  telefone: string

  constructor(nome: string, telefone: string) {
    this.nome = nome
    this.telefone = telefone
  }
}

export class Agenda {
  #contatos: Contato[] = []

  adicionar(c: Contato): void {
    this.#contatos.push(c)
  }

  excluir(nome: string): boolean {
    const idx = this.#contatos.findIndex((c) => c.nome === nome)
    if (idx === -1) return false
    this.#contatos.splice(idx, 1)
    return true
  }

  listar(): Contato[] {
    return [...this.#contatos]
  }
}

export class Estacionamento {
  vagas: number
  #veiculos: Veiculo[] = []

  constructor(vagas: number) {
    this.vagas = vagas
  }

  estacionar(v: Veiculo): boolean {
    if (this.#veiculos.length >= this.vagas) return false
    this.#veiculos.push(v)
    return true
  }

  vagasDisponiveis(): number {
    return this.vagas - this.#veiculos.length
  }
}

export class Musica {
  titulo: string
  duracao: number

  constructor(titulo: string, duracao: number) {
    this.titulo = titulo
    this.duracao = duracao
  }
}

export class Playlist {
  #musicas: Musica[] = []

  adicionar(m: Musica): void {
    this.#musicas.push(m)
  }

  ordenarPorDuracao(): void {
    this.#musicas.sort((a, b) => a.duracao - b.duracao)
  }

  listar(): Musica[] {
    return [...this.#musicas]
  }
}

export class Elevador {
  andarAtual = 0
  #pessoas = 0
  totalAndares: number
  capacidade: number

  constructor(totalAndares: number, capacidade: number) {
    this.totalAndares = totalAndares
    this.capacidade = capacidade
  }

  subir(): boolean {
    if (this.andarAtual >= this.totalAndares) return false
    this.andarAtual++
    return true
  }

  descer(): boolean {
    if (this.andarAtual <= 0) return false
    this.andarAtual--
    return true
  }

  entrar(qtd: number): boolean {
    if (this.#pessoas + qtd > this.capacidade) return false
    this.#pessoas += qtd
    return true
  }

  sair(qtd: number): boolean {
    if (this.#pessoas - qtd < 0) return false
    this.#pessoas -= qtd
    return true
  }
}
