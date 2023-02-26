# SECTION 3 - SHELL 


È o elo entre o kernel, aplicações e usuários. 
<img src="https://imgs.search.brave.com/MGb4iUG3Vl4bC7r0YNhim-Sk2pXRDx9hiCrGMS5CCoc/rs:fit:577:583:1/g:ce/aHR0cHM6Ly9xcGgu/ZnMucXVvcmFjZG4u/bmV0L21haW4tcWlt/Zy1hMDQyZTYyYTcz/NTJhZDAzZjJhMzFl/NTI3Y2M2N2M0MC1j" align="left" style="width: 100%;">

### Variáveis Shell

= Como declarar uma variável?

Qualquer palavra onde foi atribuido
```bash 
    ANSWER=43
    echo ANSWER;
    //43
``

Para pegar seu valor é utilizado o simbolo $
- com "" ou sem aspas o valor retornado é o conteúdo
- com '' retorna o valor a variável

- echo ->  faz output no terminal 

### ESCOPO 

- escopo local -> padrão do shell, declaraçâo de forma lógica 
- escopo global -> uso do termo export :

```bash 
    LOCAL = Não usa export 
    export GLOBAL = usa export
```
### COMANDOS 

-set mostra todas as variáveis e lógica do shell
-env mostra todas as variáveis de escopo da máquina 

### ARQUIVOS DE CONFIGURAÇAO

- /etc/profile -> arquivo de config do shell em todo o sistema 
- /etc/envirolment -> ordem de busca dos caminhos paths 
- .bashrc -> arquivos de config do bash / alias 

### EDITOR 

Reatribuir variável EDITOR 

-export EDITOR=VIM 
-comando vipw para entrar no arq de config do editor 

### VARIÀVEIS 

- $PATH -> mostra a sequência do search do linux 

### ALIAS

- Cria atalhos executáveis 
```BASH 
    alias ip='ip -c a'
```
- alias -> Mostra todas as alias do dispositivo 

### PROCESSOS 

- bg executa um processo em background 
- fg traz job para frontground 
- jobs mostra todos os processos criados por mim
- top mostra todos processos do computador
- kill [pid] mata o processo 

## HISTÒRICO DE COMANDOS

- history mostra todos os comandos usados 
- ls /usr/bin | sort -f | less -> mostra todos os comandos em ordem alfabetica 
com o editor less 
- !número do comando no histórico -> Executa o comando 
- !! executa o  último comando 
- CTRL + R -> reverse search 
```BASH 
    pacman -S office-cracked-pkg 
    sudo !! // sudo pacman -S windows 
```

### MOVIMENTOS NO COMANDO 

- CTRL + A Vai pro início da linha de comando 
- CTRL + D  Apaga um caractere 
- CTRL + F Pula um caractere 

### PROCESSOS

- top -> mostra processos e valor em memória, cpu, swap e afins 

