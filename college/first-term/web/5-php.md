# PHP

PHP -> serverside

Seu ambiente é chamado também de AMP:

- Apache ( Servidor)  
- Banco ( MARIADB)
- PHP 

## Comentários 

// -> inline
"/*""*/" -> block 

```php 

    <!doctype html>
    <html lang="pt-BR">
        <head>Primeiro código PHP com tags HTML</head>
        <body>
             <h1>Título do texto</h1>
             <p><?php echo "Olá, mundo"; ?></p>
        </body>
    </html>

```

_O arquivo tem que ser .php_

## Métodos de requisição http 

.........................................


## Operador aritméticos 

> + soma
> - subtração 
> * multiplicação
> / divisão 
> % módulo 
> ** exponencial 

## Operador de comparação 

```php 

    $var1 == $var2
    // verifica se é igual 

    $var1 === $var2
    // verifica se é igual e de mesmo tipo  

    $var1 != $var2
    // verifica se é diferente 

    $var1 <> $var2
    // verifica se é diferente 

    $var1 !== $var2
    // verifica se é diferente  e/ou do mesmo tipo 

    $var1 < $var2
    // verifica se $var1 é menor que $var2

    $var1 <==> $var2
    // spaceship - retorna -1,0,1 respectivamente se o $var1 for menor, igual ou maior $var2

```

## Operador lógicos 

and -> retorna true se ambos forem
&& -> retorna true se ambos forem
or -> retorna true se pelo menos um for
|| -> retorna true se pelo menos um for
xor -> retorna true se um for true, mas não os dois
! -> retorna true se for false 

## Estrutura de decisão 

else, if, elseif 

switch 

```php 

<?php

 switch($var1){
	case 10:
		echo "var1 é igual a 10";
	case 20:
		echo "var1 é igual a 20";
		break;
	default:
		echo "var1 não é igual a 10 e nem a 20";
		break;
 }

```

for

```php 
     <?php
         for ($i = 1; $i <= 20; $i++) {
            echo $i;
            echo "\n";
         }
```

## Arrays 

Existem 3 tipos de array no php

numéricos, associativo, e misto 

Esses valores são referentes aos indices

### Formas de declarar array 

```php 
    <?php
        //Declarando um array vazio
        $carros = array();

        //Primeira forma de declaração e atribuição de valores
        $carros = Array("Fusca", "Monza", "Passat");

        //Segunda forma de declaração e atribuição de valores
        //Esta forma é semelhante à anterior, mas utilizando sintaxe similar a do Javascript
        $carros = ["Fusca", "Monza", "Passat"];

        //Terceira forma de declaração e atribuição de valores
        $carros[0] = "Fusca";
        $carros[1] = "Monza";
        $carros[2] = "Passat";

        //Quarta forma de declaração e atribuição de valores
        $carros[] = "Fusca";
        $carros[] = "Monza";
        $carros[] = "Passat";
```

### Adicionar items 

array_push => adiciona ao final 
array_unshift => adiciona ao início

### Remover items

Definindo o valor do item como vazio -> mas a largura do array permanece e o indice permanece tbm
unset -> define os índices a serem eliminados 
array_splice -> usado para manipular o array

## Arrays multidimensionais 

arrays inside the others arrays 



