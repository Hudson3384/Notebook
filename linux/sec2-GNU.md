# SECTION 2 - COMANDOS GNU e UNIX 

### Sistemas de Arquivos do Linux

<img src="https://img.vivaolinux.com.br/imagens/artigos/comunidade/Artigo_01.jpg" align="left">

### Comandos

_Sistemas de arquivos_

- mount -> comando para ver distribuições das pastas 
- df -Th -> mostra melhor o armazenamento em cada repositório 
- findmnd -> Mesmo que o mount em forma 'tree'

_Arquivos

- du * name * -> determina o tamanho do item

- du -h -s * name * or  du -sh * name *  'or' * name *  du -sh ->  Mostra o tamanho total do repositório

- pwd -> mostra o caminho do repo atual até a raiz 

- touch -> Cria arquivo 

- mkdir -> Cria pasta 

- rmdir -> Apaga repositórios vazios 

- $USER -> Variável que representa seu nome de usuário ex: mkdir /home/$USER/pasta

- ls -l -> Mostra os tipos de arquivos na pasta react 

- ls -R -> Todos os items e subitems do repositório atual 

- ls -a -> Apresenta arquivos ocultos

- --help -> ajuda para comandos linux 

- ln  -> Cria link ( cópia de um diretório )

  ```bash
  ln -s test link
  ```
  
  ### Comandos de compactação 

tar -> responsável pela compactação de arquivos no linux 

```bash
tar -cvf /root/home.tar /home
#cria o home.tar compactando o home 
```

```shell
tar -rvf /root/homes.tar /etc/hosts
#adiciona items ao arquivo .tar 
```

```bash
tar -tvf 
```

