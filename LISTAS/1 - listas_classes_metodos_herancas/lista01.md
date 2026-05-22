 Olá! Que excelente progresso. Entender esses pilares é o que separa quem apenas "escreve código" de quem realmente "projeta sistemas" escaláveis. Em JavaScript, embora usemos a sintaxe de class, por baixo dos panos ainda temos o sistema de protótipos, mas para esses exercícios, vamos focar na lógica da Orientação a Objetos (OO) moderna.

Nível Fácil (Aquecimento: Sintaxe e Instanciação)
Foco: Criação de classes, atributos simples e métodos básicos.

    1. Crie uma classe Livro com atributos titulo e autor. Instancie dois objetos.
    2. Método de Saudação: Na classe Pessoa, crie um método falar () que exiba "Olá, meu nome é [nome]".
    3. Calculadora de Retângulo: Crie uma classe Retangulo com largura e altura. Adicione um método calcularArea().
    4. Classe Carro: Adicione um atributo velocidade inicializado em 0. Crie um método acelerar() que aumente a velocidade em 10.
    5. Alterando Atributos: Crie uma classe Produto e um método aplicarDesconto(porcentagem) que altere o preço original.
    6. Contador: Uma classe Contador com atributo valor e métodos incrementar e decrementar.
    7. Conversor de Temperatura: Classe Temperatura com um método paraFahrenheit() que converte o valor em Celsius guardado no objeto.
    8. Instância de Animal: Crie uma classe Animal e instancie três animais diferentes (cachorro, gato, pássaro).
    9. Filme: Classe Filme com titulo e anoLancamento. Verifique se o filme tem mais de 10 anos em um método.
    10. Lâmpada: Classe Lampada com atributo ligada (boolean) e métodos ligar() e desligar().

Nível Médio (Herança e Reuso)
Foco: Palavras-chave extends e super, e especialização de classes.

    11. Herança Animal: Crie uma classe Cachorro que herda de Animal. Sobrescreva um método emitirSom() para retornar "Latido".
    12. Funcionários: Classe Funcionario e subclasse Gerente. O gerente deve ter um atributo adicional departamento.
    13. Construtor Pai: Na classe Gerente, use super () para passar o nome e salário para o construtor da classe Funcionario.
    14. Sistema Bancário: Classe Conta e subclasse ContaPoupanca. A poupança deve ter um método aplicarJuros().
    15. Veículos: Classe Veiculo com método mover (). Subclasses Aviao e Carro que exibem mensagens diferentes ao mover.
    16. Validação de Saque: Na classe Conta, impeça que o método sacar () deixe o saldo negativo.
    17. Geometria: Classe Forma com método desenhar (). Crie Circulo e Quadrado que herdam de Forma.
    18. Escola: Classe Usuario e subclasses Professor e Aluno. Adicione métodos específicos para cada um (ex: lancarNota() e entregarTrabalho()).
    19. Loja Virtual: Classe ItemPedido com quantidade e preco. Crie um método que calcula o total do item.
    20. Upgrade de Carro: Crie uma classe CarroEletrico que herda de Carro (do ex. 4) e adiciona o atributo bateria.

Nível Difícil (Lógica e Integração)
Foco: Composição, manipulação de múltiplos objetos e lógica de negócio.

    21. Carrinho de Compras: Crie uma classe Carrinho que possui um array de objetos da classe Produto. Adicione métodos para adicionarProduto () e calcularTotal().
    22. Biblioteca Digital: Classe Biblioteca que armazena um array de Livro. Crie um método buscarPorAutor(nome).
    23. Sistema de RPG: Classe Personagem com vida e ataque. Método atacar(inimigo) que subtrai a vida do outro objeto.
    24. Gestão de Frota: Classe Empresa que contém uma lista de Veiculo. Adicione um método para listar todos os veículos que precisam de manutenção.
    25. Override Complexo: Crie um método calcularSalario() em Funcionario. Em Vendedor, o salário deve ser o base + comissão. Em Diretor, base + bônus fixo.
    26. Transferência Bancária: Na classe Conta, crie um método transferir (valor, contaDestino) que interage com outra instância de conta.
    27. Agenda de Contatos: Classe Agenda que gerencia objetos da classe Contato. Deve ser possível excluir um contato pelo nome.
    28. Sistema de Estacionamento: Classe Estacionamento com limite de vagas. Um método estacionar(veiculo) deve verificar se há espaço antes de adicionar ao array.
    29. Playlist: Classe Playlist que gerencia objetos Musica. Adicione um método ordernarPorDuração().
    30. Simulador de Elevador: Classe Elevador com atributos andarAtual, totalAndares e capacidade. Crie métodos para subir, descer e entrar pessoas (respeitando os limites)
