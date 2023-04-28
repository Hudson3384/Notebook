# Introdução 
dd é uma ferramenta muito poderosa do linux, usada para duplicar arquivos,
mas que pode também destruir discos e causar outros problemas, e por isso 
exige uma atenção redobrada em sua utilização.

Sua sintaxe básica é: 

```bash 
     # dd if = $ input_data of = $ output_data [opções]
```

## Preenchendo discos com itens aleatórios

```bash 
    dd if = /dev/urandom of = /dev/sda bs = 4k
```


Espelhamento de disco para disco

```bash
dd if = / dev / sda of = / dev / sdb bs = 4096  
```

Limpe um disco rígido (pode ser necessário repetir)
```bash
dd if = / dev / zero of = / dev / sda bs = 4k 
```

Copiar do arquivo para o dispositivo de fita
```bash
dd if = inputfile of = / dev / st0 bs = 32k conv = sync 
```

Verifique se o disco está realmente zerado
```bash
dd if = / dev / sda | hexdump -C | grep [^ 00] 
```

Preencher uma partição (cuidado com as partições do sistema!)
```bash
dd if = / dev / urandom de = / home / $ user / largefile bs = 4096  
```

Copie uma partição para outra partição
```bash
dd if = / dev / sda3 of = / dev / sdb3 bs = 4096 conv = notrunc, noerror 
```

Ver partições disponíveis em kb
```bash
dd if = / proc / partições | hexdump -C | less
```

Crie uma imagem gzip da segunda partição do segundo disco
```bash
dd if = / dev / sdb2 ibs = 4096 | gzip> partition.image.gz conv = noerror - 
```
