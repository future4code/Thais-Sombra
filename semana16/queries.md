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
a) A resposta é: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b) A resposta é:
Error Code: 1062. Duplicate enry '002' for key 'PRIMARY' -> Erro de tentativa de cadastro duplicado devido ao mesmo ID.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

c) A resposta é:
Error Code: 1136. Column count doesn't match value count at row1 -> A quantidade de colunas informadas para inserção de informações não é equivalente.
```

```

d) A resposta é:
Error Code: 1364. Field 'name' doesn't have a default value -> O campo name é de preenchimento obrigatório e nenhum dado foi passado query.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Lázaro Ramos",
  400000,
  "1949-04-18", 
  "male"
);
```

e) A resposta é:
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row1 -> O formato da data não condiz com o definido no banco.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f) A resposta é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Taís Araújo",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marjorie Estiano",
  500000,
  "1990-03-26", 
  "female"
);
```

Obs.: Outra forma de escrever o comando para adicionar os atores:

```
INSERT INTO Actor 
	(id, name, salary, birth_date, gender)
VALUES
	("001","Tony Ramos",400000,"1948-08-25","male"),
	("002","Glória Pires",1200000,"1963-08-23","female"),
	("003","Fernanda Montenegro",300000,"1929-10-19","female"),
	("004","Lázaro Ramos",400000,"1949-04-18","male"),
	("005","Juliana Paes",719333.33,"1979-03-26","female"),
	("006","Taís Araújo",719333.33,"1979-03-26","female"),
	("007","Marjorie Estiano",500000,"1990-03-26","female");
```

1. Bleus
2. Blius
3. Blos

b) Isso está errado, pelos motivos:
* Óbvio
* Sem dúvida