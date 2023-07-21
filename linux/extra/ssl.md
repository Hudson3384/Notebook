## Criar o CA Certificate 
Serve como um validador de certificados, que afirma que as certificações pode ser usado para criar outros certificados

```bash 
openssl req -x509 -new -nodes -sha256 -days 1825 -out ca-dominio.pri.pem
mv privkey.pem ca-dominio.pri.key
```

## Criar o 'Signing Request Certificate' 

Age como um certtificado de solicitação que vai ser assinado por um certificado 
Nessa etapa é setado o domínio que será utilizado o certificado conforme a foto. 

```bash
openssl req -new -out csr.dominio.pri.csr
mv privkey.pem csr.dominio.pri.key
```

## Criar um arquivo wildcard.dominio.pri.ext com estas configurações

```bash
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment

[req_ext]
subjectAltName = @alt_names

[alt_names]
DNS.1 = *.dominio.pri
DNS.2 = dominio.pri

```

## Criar o certificado 'certificado' e assinar o formulário 

```bash
openssl x509 -req -in csr.dominio.pri.csr -CA ca-dominio.pri.pem -CAkey ca-dominio.pri.key -CAcreateserial -out wildcard.dominio.pri.crt -days 825 -sha256 -extfile wildcard.dominio.pri.ext -extensions req_ext
```

## Copía o certicado com a senha d e solicitação de assinatura para o certificado de chave privada sem senha  

```bash
openssl rsa -in csr.dominio.pri.key -out wildcard.dominio.pri.key
```
## Adiciona na lista de confiança o CA privado

```bash
sudo trust anchor --store ca-dominio.pri.pem
```
