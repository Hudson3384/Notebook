# Representação dos dados

bit -> byte -> palavra -> registro -> arquivos -> dados

|-------|--------|--------|--------|--------|
|   b   |2e^-10kb|2e^-20mb|2e^-30gb|2e^-40tb|
|       |  10^-3 |  10^-6 |  10^-9 |  10^-12|
|-------|--------|--------|--------|--------|

## Bases de numeração 

### Posicional 

base -> qnt de items de um sistema posicional ( total de itens ) 

>Base 10 (decimal) – 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
>Base 2 (binária) – 0, 1.
>Base 8 (octal) – 0, 1, 2, 3, 4, 5, 6, 7.
>Base 16 (hexadecimal) – 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

### Não posicional 

O valor não é relativo 

X -> sempre vale 10 

## Calculos

### Adições 

base 2 -> 

    1001
  + 1110
  ________
   11011 

* 1+1 = 10

Base 16 -> necessário saber a tabela de equivalência 

### Substração 

base 2: 

0 - 1 = 1 (e "pede emprestado" do dígito seguinte);
1 - 1 = 0;
1 - 0 = 1;
0 - 1 = 0.


## Conversão 

Usando a base 10 como intermediária

236 - base 6 para base 8 

### 1 - Fatorar os algoritmos 

2 * 6^2 + 3 * 6^1 + 6 * 6^0 => valor na base 10

### 2 - Dividir para a base requerida

102 / 8 => 12 resto=6 
6 

12/6 => 2 resto=0
60

2/6 =>0 resto=>2
260

! -- FAZER EXERCICIOS DE CONVERSÂO ( TEMA 3 ) -- !
 
 ## Representação de dados

 ### ASCII

 Cada caractere tem 7 bits ( 128 items ) 

 ### Unicode 

 Pelo ASCII ser limitado e não ter suporte para linguagens não latinas, criaram o Unicode

 caracteres de 16 bits 
 2^16 -> 65536


