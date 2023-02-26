# ADMINISTRNDO USERS

###CRIANDO USER 

useradd -> cria o user   / mostra os options 

```BASH 
    useradd -c 'joao das neves' joao
```

passwd $USER -> senha pro usuário 

_As senhas ficam em /etc/passwd_

WHOIAM -> ver nome do user 

### ALTERANDO USUÀRIOS

usermod -> comando para modificar usuários
ex -> -s muda o shell do user 

```BASH 
usermod -s /bin/zsh joao 
```

userdel -> remove user 


_OBS : No archlinux, o comando adduser n cria a pasta, só o user, é necessário criar a pasta manualmente e usar o comando chowm para dar permissão para aquele usuário_

### GERENCIANDO CONTAS EM GRUPOS  

groupadd -> cria grupo
groupdel -> deleta groups
groupmod -> altera items em grupos 

### USUÀRIO ROOT 
su => entra no root no mesmo diretorio 
su - => entra no /root como root
sudo -> dá permissão root para usuarios comuns 

/etc/sudoers.d -> dá acesso permanente á um usuário 


