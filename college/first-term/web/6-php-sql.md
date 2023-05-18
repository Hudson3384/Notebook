# PHP com banco de dados

Constantes -> definidas com uso da palavra reservada DEFINE 
Variáveis -> criadas usando um $

## PDO 

Camada de abstração entre php e o banco de dados, cabe ao banco criar uma interface para ser usada na linguagem

Atualmente existem 12 drivers PDO 

```php

//cria conecção com MySQL e PostgreeSQL  

$dsn = new PDO("mysql:host=localhost;dbname=test", $user, $pass);
$dsn = new PDO("pgsql:host=localhost;dbname=test"; $user, $pass);

```

## Tratamento de erros

Um dos principais métodos usados é o try/catch

```php
    <?php

    //Constantes para armazenamento das variáveis de conexão.
    define('HOST', '127.0.0.1');
    define('PORT', '5432');
    define('DBNAME', 'test');
    define('USER', 'user');
    define('PASSWORD', 'psswd');

    try {
        $dsn = new PDO("mysql:host=". HOST . ";port=".PORT.";dbname=" . DBNAME .";user=" . USER . ";password=" . PASSWORD);
    } catch (PDOException $e) {
        echo 'A conexão falhou e retornou a seguinte mensagem de erro: ' .$e->getMessage();
    }

```

## Orientação a objetos em php

classes, objetos, e herança. 

Uma classe é um modelo de objeto, que pode ser instanciado em um objeto ou inserido em outra classe

```php
<?php
class Fruta
{
//Propriedades ou atributos da Classe
var $nome;
var $tipo;
//Construtor da Classe: Essa função é executada todas as vezes em que uma instância da classe é criada.
//Como abaixo, essa função pode ser vazia. Ou seja, não realiza nenhuma ação.
public function __construct(){ }
public function setNome($nome)
{
$this->nome = $nome;
}
public function getNome()
{
return $this->nome;
}
public function setTipo($tipo)
{
$this->tipo = $tipo;
}
public function getTipo()
{
return $this->tipo;
}
}

// instanciando um objeto da classe Fruta
$fruta1 = new Fruta(); 
// utilizando o objeto criado para chamar o método “setNome”
$fruta1->setNome("morango"); 
// utilizando o objeto criado para chamar o método “setTipo”
$fruta1->setTipo("vermelha");
// utilizando o comando “echo” para imprimir o resultado da chamada ao método “getNome” 
echo $fruta1->getNome(); 
// utilizando o comando “echo” para imprimir o resultado da chamada ao método “getTipo” 
echo $fruta1->getTipo();

```

## Métodos PDO 

Classe PDO possui 2 métodos 

PDO -> controle de transações e execução de queries 
PDOStatement -> instruções de retorno 

### Método EXEC 

pertence a classe PDO, retorna número de linhas afetadas pela instrução 
```php

    <?php
        /*a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD*/
        $qtdeLinhasAfetadas = $dsn->exec("Delete From Cliente Where codigo_cliente = 1");
        echo "Quantidade de linhas afetadas: " . $qtdeLinhasAfetadas

```

## Método Query 

Semelhante ao EXEC, mas além da função original, executa a instrução sql 
```php
    <?php
    $instrucaoSQL = "Select nome, cpf, telefone From Cliente";
    //a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD
    $resultSet = $dsn->query($sql);
    while ($row = $resultSet->fetch()) {
      echo $row['nome'] . "\t";
      echo $row['cpf'] . "\t";
      echo $row['telefone'] . "\n";
    }
```

## SQL Injection 

inserção de instruções em elementos como forms 

## Prepare 

Prepara uma instruçâo antes de ser executada retornando um objeto do tipo statement, que será executado a posteriori pelo método Execute para evitar o SQL Injection

## Execute 


