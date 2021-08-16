### Exercício 1
a) A resposta da pergunta é: 
VARCHAR -> Colunas do tipo VARCHAR(n) ocupam 1 byte por caractere informado no registro, reduzindo assim o espaço necessário em disco para armazenamento.
DATE -> Datas entre 01/Jan/1000 até 31/Dez/9999. Formato padrão: “aaaa-mm-dd”.
PRIMARY KEY -> Essa chave é utilizada como identificador único da tabela, sendo representada pelo campo que não receberá valores repetidos, por exemplo o campo ID.
NOT NULL -> Define que o campo precisa receber algum valor, mesmo que seja um valor vazio " ".

b) A resposta da pergunta é:
SHOW DATABASES -> Retorna todas as bases de dados criadas.
SHOW TABLES -> Retorna todas as tabelas criada no banco de dados.

c) A resposta da pergunta é:
DESCRIBE Actor -> Retorna com os dados armazenados dentro da tabela especificada.

```
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

-- Mostrar base de dados
SHOW DATABASES;

-- Mostrar tabela
SHOW TABLES;

-- Detalhes tabela
DESCRIBE Actor;
```

### Exercício 2
a) A resposta é: Blablabla, porque:
1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:
* Óbvio
* Sem dúvida