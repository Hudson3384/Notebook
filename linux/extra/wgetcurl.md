## Apresentação 

- O wget é uma ferramenta de comando de linha presente na maioria das distribuições linux e pode ser usado 
para baixar arquivos e páginas pelos protocolor HTTP, HTTPS, FTP, FTPS.

- O cURL é uma biblioteca de comando de linha usado para interagir com aplicações web em protocolos:  FTP(S), GOPHER(S), HTTP(S), SCP, SFTP, TFTP, TELNET, DICT, LDAP(S), MQTT, FILE, POP3(S), IMAP(S), SMB(S), SMTP(S), RTMP, RTSP and WS(S).  

Entre as principais diferenças entre o wget e o cURL, seria que o cURL atua como padrão como um cat, mostrando o conteúdo e o wget como um cp, copiando o conteúdo do endereço fornecido. 

## Usando o cURL pela primeira vez 

```bash 
    curl https://www.example.com/
    # retorna o html da página 
```

## Usando o wget pela primeira vez 

```bash
    wget https://www.example.com/
    # baixa o html da página
```

> "Nota-se que no cURL sem adentrar seus parâmetros,  é possível utilizar inúmeras combinações com o auxilio do pipe ( | )"

## Baixando um item usando cURL 

```bash 
    curl -o index.html https://www.example.com/
    # baixa o html da página 
```



