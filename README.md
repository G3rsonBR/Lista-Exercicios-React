# Lista de Exercícios - Programação JS

Aplicação interativa para resolver e visualizar exercícios de JavaScript, com categorias por assunto e níveis de dificuldade.

## Funcionalidades

- **3 categorias** de exercícios: Classes e Métodos, Map e Destructuring, Arrow Functions
- **Níveis de dificuldade**: Fácil, Médio e Difícil
- **Execução interativa**: insira parâmetros e veja o resultado em tempo real
- **Visualização de código**: exibe a implementação de cada exercício
- **Dark/Light mode**: alternância suave com persistência em `localStorage`
- **Sidebar responsiva**: modo compacto em desktop, overlay em mobile
- 30 exercícios por categoria, totalizando 90 exercícios

## Stack

- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4
- ESLint 10 (flat config)
- pnpm

## Comandos

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Iniciar dev server |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | ESLint |
| `pnpm preview` | Preview do build de produção |

## Estrutura

```
LISTAS/                          # Arquivos .md com os exercícios
├── 1 - listas_classes_metodos_herancas/
├── 2 - lista_map_destructingArrays/
└── 3 - lista_arrowFunctions/
src/
├── data/                        # Implementações e soluções
│   ├── parseListas.ts           # Parser dos .md
│   ├── lista01.ts → solutions01.ts
│   ├── lista02.ts → solutions02.ts
│   ├── lista03.ts → solutions03.ts
│   └── lista04.ts → solutions04.ts
├── components/
│   ├── ExerciseCard.tsx         # Card com input/run/demo/code
│   └── NivelSection.tsx         # Seção de nível (Fácil/Médio/Difícil)
├── types.ts                     # Interfaces compartilhadas
├── App.tsx                      # Layout principal + sidebar
└── index.css                    # Tailwind + dark mode variant
```
