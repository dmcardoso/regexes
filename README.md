# Já ouviu sobre a palavra de /^ReGeX$/i ?

## Introdução

À primeira vista é natural sentir um pouco de medo das expressões regulares, mas quanto mais se aprende sobre elas, mais você pode usá-las a seu favor. Tá na hora de parar de ter medo de usar elas e remover os `.toLowerCase` do seu código!

## Links úteis

[Livro](https://aurelio.net/regex/guia/)

[Doc. Mozila](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

[RegexR](https://regexr.com/)


## Flags

- g -> Global, pesquisa em todo o texto
    - `/([A-Z])\w+/g`
- m -> Multiline, pesquisa linha a linha
    - `/^[\s\S]+$/m`
- i -> Insensitive case, pesquisa em texto sem case sensitive
    - `/([A-Z])\w+/gi`

## Âncoras

- ^ -> início
- $ -> fim
- \b -> (boundary) fronteira (última correspondência de alguma palavra)
- \B -> (not boundary) !\b

## Quantificadores e alternação

- \+ -> Um ou mais
- \* -> Zero ou mais
- {1,3} -> Qauntificador (variações) 
- ? -> Opcional
- ? -> "Lazy", capturar a quantidade mínima de caracteres possível
- \| -> Alternação (ou)

## Classes de caracteres

- [ABC] -> Combina qual qualquer coisa dentro da definição/intervalo 
- [^ABC] -> ![ABC]
- [A-Z] -> Definição de intervalo
- . -> Qualquer coisa, menos quebra de linha
- [\s\S] -> Literalmente qualquer coisa
- \w -> Palavra
- \W -> !\w
- \d -> Dígitos (números)
- \D -> !\d
- \s -> Espaços em branco
- \S -> !\s

## Escapamentos

Caracteres especiais das regex devem ser escapados com `\`, por exemplo: `\.`, `\*`, `\/`

## Grupos de caputra

Grupos de captura te permitem recuperar valores e referênciá-los por um "backreference"

Existem dois principais tipos de grupos: Grupos individuais (parêntesis) e Grupos globais (colchetes)

Regex para testar: `/([A-Z])(?:.*\s)\w+/g`

Bônus* grupo sem caputra: `/([A-Z])\s?(?:\w.*)([A-Z].*)\w+/g`

## Substituição

- $& -> Insere o texto caputrado
- $1 -> Referência do grupo de captura
- $` -> Antecedente à captura
- $' -> Precedente à captura
- $$ -> Escapar o $

* Aplicar o escapamento de caracteres

## Lookarround

- (?=ABC) -> Lookahead positivo, Captura sem incluir no resultado
    - `asd(?=\w.)`
- (?!ABC) -> Lookahead negativo, Captura o oposto e isola do resultado
    - `asd(?!\w.)`
- (?<=ABC) -> Lookbehind positivo, Captura antes da expressão
    - `asd(?<=\w.)`
- (?<=ABC) -> Lookbehind negativo, Captura antes da expressão ( ? ? )
    - `asd(?<!(\w|\d).)`