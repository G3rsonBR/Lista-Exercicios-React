Nível Difícil (Contexto, Closures e Lógica)
Foco: Retorno de objetos, funções que retornam funções e manipulação de dados complexos.
    21. Retorno Implicito de Objeto: Crie uma arrow function que receba id e username e retorne um objeto. Cuidado com as chaves do objeto vs chaves da função!
    22. Filtro de Objetos: Dado um array de alunos {nome, nota}, retorne apenas os nomes dos alunos que foram aprovados (nota >= 7).
    23. Ordenação: Use sort com uma arrow function para ordenar um array de números de forma decrescente.
    24. Encadeamento (Chaining): Dado um array de números, primeiro filtre os pares, depois dobre o valor deles e, por fim, some tudo.
    25. Gerador de Multiplicador: Crie uma arrow function que receba um número x e retorne uma outra arrow function que receba y e retorne x * y.
    26. Formatação de Dados: Converta um array de strings no formato "DD/MM/AAAA" para um array de objetos {dia, mes, ano} usando map e split.
    27. Contador de Ocorrências: Dado um array de categorias ['eletronicos', 'casa', 'eletronicos'], use reduce para retornar um objeto que conte quantas vezes cada categoria aparece.
    28. High-Order Function: Crie uma função chamada executarOperacao que receba dois números e uma arrow function de operação, e execute essa operação com os números.
    29. Média de Notas: Dado um array de objetos onde cada objeto tem um array de notas, use map para retornar o nome do aluno e sua média final.
    30. Simulador de Contexto: Crie um objeto temporizador que tenha um método iniciar. Use setInterval com uma arrow function dentro para incrementar um contador a cada segundo. Explique por que usar arrow function aqui resolve o problema do this.