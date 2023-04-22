# LIDANDO COM PROCESSOS

# COMAND LINE BASICS FOR PROCESS 
top -> lista de processos, uso de memória, cpu 
ps aux | head -> principais processos 
ps -ef -> mostra todos os caminhos absolutos 
ps fax -> processos que dependem de outros processos
nice -> define prioridade há um comando 
exemplo:
```BASH
    nice -10 rm -f arquivos.txt
```
renice -n 5 1205 -> reinicia e muda prioridade ( usados em processos já em execução ) 
    PR -> significa priority 
        -20 -> mais priority que o 20 
ionice -c *
    1 -> vai ser executado com total prioridade 
    2 -> executar sem consumir muito recurso
    3 -> só executa se sobrar recursos
```BASH
    ionice -c 3 -p 1000
```
htop -> top com visual
free -m -> memória utilizada
swapon -s -> ver swap
vmstat x y->  mosra memoria y vezes a cada x segundos

### PS TREE E PGREP

pstree -> processo systemd em cascata
pgrep -> filtra processos 
    -lnu -> flag para processos mais recentes 

```BASH
    pgrep -u root ssh
```

### SCREEN 
screen -> processos visuais 
screen -> cria uma screeen 
change screens -> CTRL + A + A  
crtl + alt + ?  -> muda de tela // saporrra n funciona 
configurações em /etc/screenrc

### UPTIME

uptime -> tempo que o dispositivo está ligado de forma interrupta
    -p melhora a entrega do horario, sem ser em ms

### TEE

tee -> salva, lida com o output 

```BASH 
    echo oi | tee file2.txt
    # ele irá salvar oi
```
### XARGS
