Nível Desafio
Foco: Construir uma loja virtual completa usando Classes, Arrow Functions, Map, Filter, Reduce e Destructuring.
     01. Classe Produto: Crie uma classe Produto com construtor que receba id, nome, preco, categoria e imagem. Armazene tudo como propriedades.
     02. Criar Produtos: Usando a classe Produto, crie uma arrow function que retorne um array fixo com 10 produtos variados (eletrônicos, roupas, alimentos, livros, etc). Cada produto deve ter uma imagem via https://picsum.photos (use seed diferente para cada).
     03. Classe Loja: Crie uma classe Loja com construtor que receba nome e um array de produtos. Deve ter um método para exibir o nome da loja e a quantidade de produtos.
     04. Filtrar por Categoria: Use filter com arrow function para retornar apenas os produtos de uma categoria específica.
     05. Buscar Produto por ID: Use find com arrow function para localizar um produto pelo seu id.
     06. Aplicar Desconto: Use map com arrow function para retornar um novo array com 15% de desconto em todos os preços, sem modificar o original.
     07. Produtos em Promoção: Filtrar produtos com preço menor ou igual a 30 reais.
     08. Ordenar por Preço: Use sort com arrow function para ordenar os produtos do mais barato ao mais caro (sem modificar o original).
     09. Formatar em Reais: Use map com destructuring e template string para retornar frases como "Smartphone: R$ 1.299,00".
     10. Total do Estoque: Use reduce para calcular o valor total do estoque (soma de todos os preços).
     11. Relatório por Categoria: Use reduce para criar um objeto que conte quantos produtos existem em cada categoria.
     12. Lista de Desejos: Crie uma classe ListaDeDesejos com métodos para adicionar, remover e listar itens usando arrow functions. Não pode adicionar duplicados.
     13. Carrinho de Compras: Crie uma classe Carrinho com métodos para adicionar, remover, calcular total e exibir resumo. Use reduce no total e map no resumo.
     14. Renderizar Produto: Crie uma função que receba um produto (com destructuring) e retorne uma string HTML formatada com imagem, nome e preço.
     15. Finalizar Compra: Crie uma função que receba um carrinho, aplique 5% de desconto no total se houver mais de 3 itens, e retorne um resumo completo com quantidade de itens, total bruto, desconto e total final.
