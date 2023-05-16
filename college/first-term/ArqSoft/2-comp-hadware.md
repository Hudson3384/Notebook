# Componentes de hardware 

## Mod 1 - Sistemas de computação

> Um sistema de computação é um conjunto de partes coordenadas
> que concorrem para a realização do objetivo de computar (dados).

Algoritmo -> comandos obedecidos por uma linguagem de programação

### Linguagens de programação

Método de se comunicar com a máquina:

Baixo nível de abstração: 

    Usa mnemốnicos ao invés de bits. 
    São comandos unitários em cada linha,  
    Chamados de Assembly ou ling. de montagem.

Alto nível de abstração:

    Mais pŕoximo da ling. humana

<img src='https://stecine.azureedge.net/repositorio/00212ti/00248/img/img8.jpg'></img>
> Máquina de Von Neumann.

### Barramento 

Todo sistema da computação se divide em 3 módulos:

- processador: operações primitivas
- memória: armazenar e recuperar valores (IOPS)
- E/S

seus contatos eram por fios denominado barramentos e eles são 3:

BC - barramento de controle     
BD - barramento de dados - bidirecional - transporta processador/componentes e vice versa
BE - barramento de endereço

> quantidade de celulas de memórias endereçadas


N = 2^l
l - largura de endereços do barramento 

> taxa de transferência 
t = v * l
- velocidade de transferência 
- largura do barramento 

internos -> dentro do processador
externos -> conexão com outros componentes

conjunto de instruções -> instruções possíveis pré estabelecidas no processador 
ciclo de instruções -> conjunto de instruções estabelecidos por um computador

## Subsistemas de processador

    - subsistema de controle ->  interpreta e organiza ações 

    - subsistema de processamento  ->  responsável pelo processamento de dados

## Memória 

Hierarquia das memórias 

<img src='https://jkolb.com.br/wp-content/uploads/2016/06/hierarquia-de-mem%C3%B3ria.png'></img>

### Registradores   
Armazenam dados que serão usados para cálculo de dados 

memória RDM -> transferências externas 
memória REM -> registrador de endereço 
CI -> buscar próxima instrução  

### Cache 

Entre processador e memória


-> Principio da localidade: 

Temporal x Espacial 

