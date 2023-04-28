## Apresentação 

O VIM é um editor de texto lançado em 1991 que veio como uma versão melhorada
do VI, um outro editor de texto existente, e até hoje é usado com frequência.

## Salvando e saindo do VIM

 ZZ ou :wq -> Salva e sai do arquivo 
 wq! -> Força o arquivo á salvar e sai do arquivo
 ZQ ou :q -> Sai do arquivo sem salvar 
 :w ou :write -> Salva o arquivo 

## Comandos úteis 

u -> undo, semelhante ao ctrl + z em outras aplicações. 
ctrl + z -> reundo, reverte o u 

## Criando arquivo no vim 

```bash 
    vim <nomedoarquivo> 
    # caso o arquivo não exista, ele será criado 
```

Para criar o arquivo dentro do VIM, digite 
:new nomedoarquivo.js 

## Modos do VIM 

O VIM, diferentemente do padrãod dos editores de texto, não permite a edição do arquivo 
assim que ele é aberto, isso se dá pelo fato dele possuir um sistema de modos, no qual o padrão
é o normal, usado apenas para leitura de arquivos.

> Para sair de qualquer modo e retornar ao modo visual a tecla é o <esc>

### Modo normal
Modo que o vim se encontra quando ele é aberto, algumas tecladas usadas para navegação são:

### Métodos de navegação 

h,j,k,l -> para mover um caractere para esquerda, baixo, cima, direita respectivamente

ctrl + u -> Move meia página pra cima
ctrl + d -> Move meia página pra baixo

H,L -> move o cursor para o início/fim da tela

gg, G -> move o cursor para o começo/fim do arquivo

w -> move o cursor de primeiro á primeiro caractere de cada palavra
e ->  move o cursor de último á último caractere de cada palavra
b -> move o cursor de primeiro a primeiro caractere de cada palavra para trás

^ -> move para o início da linha 
$ -> move para o final da linha

### Modo de Edição 

Neste modo, o VIM se comporta como um editor de texto padrão, permitindo editar o texto ali presente.
Pode ser inicializado por: 

i -> entra em modo edição antes do cursor 
a -> entra em modo edição após o cursor
o -> cria abaixo e entrará em modo de edição 
I -> entra no modo de edição no início da linha 
A -> entra no modo de edição no final da linha 
O -> cria uma linha acima e entrará em modo de edição 

### Modo visual em linha

v -> inicia o modo
V -> inicia o modo selecionando uma linha

> O métodos de navegação podem ser usados tanto no modo normal quanto no modo visual

as principais ações que podem ser realizadas com a seleção são: 

y -> copiar texto selecionado 
p -> colar e substituir texto selecionado 
c -> apagar texto selecionado e entrar de modo de edição
d -> apagar texto selecionado 

### Modo Visual em blocos 

ctrl + v -> entra em modo visual em bloco 

### Pesquisando um item no vim 

/<pesquisa><enter> pesquisa e enumera a partir da primeira ocorrrência
?<pesquisa><enter> pesquisa e enumera a partir da última ocorrrência

n -> vai nas ocorrências de forma crescente
N -> vai nas ocorrências de forma decrescente


