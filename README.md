Exercício realizado durante a disciplina de Resolução de Problemas de Natureza Discreta, ministrada pelo professor Jose Rubens Rodrigues de Sousa na Universidade de Fortaleza (UNIFOR) no terceiro semestre de 2022.

- `T` - Verdadeiro
- `F` - Falso
- `^` - [Conjunção](https://pt.wikipedia.org/wiki/Conjun%C3%A7%C3%A3o_l%C3%B3gica) (operador AND)
- `v` - [Disjunção](https://pt.wikipedia.org/wiki/Disjun%C3%A7%C3%A3o_l%C3%B3gica) (operador OR)
- `~` - [Negação](https://pt.wikipedia.org/wiki/Negação_lógica) (operador NOT)
- `->` - [Implicação](https://pt.wikipedia.org/wiki/Implica%C3%A7%C3%A3o)
- `<->` - [Bicondicional](https://pt.wikipedia.org/wiki/Conectivo_l%C3%B3gico_bicondicional)
- `( )` - Parentização

Essa calculadora considera a precedência dos operadores e os parêntes durante o cálculo da expressão.

Então, uma entrada como `t->f^fvt` retornará o resultado `T`.

Foi se implementado o algoritmo [Shunting-yard](https://en.wikipedia.org/wiki/Shunting-yard_algorithm), que recebe uma expressão com notação infixa, e a converte para notação posfixa, também conhecida como [notação polonesa reversa](https://pt.wikipedia.org/wiki/Nota%C3%A7%C3%A3o_polonesa_inversa), onde então é processada na função [rpn](https://github.com/pedrxlz/calculadora-logica/blob/2923d93614b74f9aba404750b8b3f420a0eb59ec/src/calculator/index.ts#L70).

Dependências do projeto:

- [ReactJS](https://reactjs.org/)

- [Chakra UI](https://chakra-ui.com/docs/components)

- [ViteJS](https://vitejs.dev/guide/)

- [Typescript](https://www.typescriptlang.org/docs/)

## Como executar

Clonando repositório
```bash
$ git clone https://github.com/pedrxlz/calculadora-logica.git
```

Acessando diretório do projeto
```bash
$ cd calculadora-logica
```

Instalando dependências
```bash
$ yarn
```

Rodando projeto
```bash
$ yarn dev
```
