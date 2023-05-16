# CSS

## Sintaxe 

Selector | propriedade | valor

## Seletores 

ID(#) -> para itens únicos 
class(.) -> para itens gerais 

### Seletores de atributo 

[checked] - seleciona todos que possuem o atributo checked 

### Seletores de relação

h1 p -> qualquer elem. p descendente de h1
h1>p qualquer elem. p que seja filho de h1
h1+p qualquer elem.p que seja o prox. irmão do h1 ( prox. filho do mesmo pai)

## Tipos de integração/inserção

>inline - dentro de cada elemento html
>interna/incorpada -  dentro do head 
>externa - arquivo separado 
>escopo - apenas dentro de um container 

## Efeito Cascata 

herança & especifidade

> Herança - filhos recebem props dos pais
> Especifidade - valor para o elemento tem mais peso 

+valor ----------------------- -valor
inline -> internos/escopo -> externo 
id -> classe -> elemento<tag>

!important -> ignora as regras e seta a props

## Recursos de textos e fontes 

Dividido em duas partes:  

Layout do texto x estilo das fontes 

Alinhamento -> left, right, center, justify

## Box Model

margin -> border -> padding -> content 

## Pseudoclasses 

> usado para definir um estado especial de um elemento

:active  -> links ativos
:checked -> inputs checados

## PseudoElementos 

> Os pseudoelementos são palavras-chave que, adicionadas/relacionadas a um seletor, permitem que uma parte específica dele seja estilizada.

::first::letter -> Primeira letra 
::after -> Inserir conteúdo antes do conteúdo
::selection -> Selection a porção de um elemento selecionado pelo usuário

## Conceitos de Layout

### Position 

> Podem ser static, relative, fixed, absolute, stickyl

## Framework CSS 

### Bootstrap

 2011, Twitter 

- mobile first
- grid composto por 12 colunas e 5 breakpoints responsivos

#### Foundation 

- grid de 12 colunas 
- grid xy 
- uso de SASS
- recomendado o uso conjunto ao JQuery

#### SemanticUI 

- uso do preprocessador LESS
- uso de JQuery



