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

### Exercício 3
a) A resposta é:
```
SELECT * FROM Actor WHERE gender ="female";
```
b) A resposta é:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c) A resposta é:
```
SELECT * FROM Actor WHERE gender = "invalid";
```
d) A resposta é:
```
SELECT id, name, salary from Actor WHERE salary < 500000;
```
e) A resposta é:

Error Code: 1054. Unknown column 'nome' in field list' -> Não encontrou coluna nome
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4
a) A resposta é:
    A requisição avalia se os dados da coluna name começão com A ou com J e se o valor do salário for superior a 300.000, caso todas as condições sejam atendidas, ele retorna aquela linha de dados.

b) A resposta é:
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

c) A resposta é:
```
SELECT * FROM Actor
WHERE name LIKE "%G%"
```
d) A resposta é:
```
SELECT * FROM Actor
WHERE (name LIKE "%A%" AND name LIKE "%J%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) A resposta é:
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```
b/c/d/e) A resposta é:
```
INSERT INTO Movie 
	(id, title, synopsis, release_Date, rating)
VALUES
	("001","Se Eu Fosse Você","Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos","2006-01-06",7),
	("002","Doce de Mãe","Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela","2012-12-27",10),
	("003","Dona Flor e Seus Dois Maridos","Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.","2017-11-02",8),
	("004","Deus é Brasileiro","Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.","2003-01-31",9);
```

### Exercício 6
a) A resposta é:
```
SELECT id, title, rating FROM Movie
WHERE id = "001";
```

b) A resposta é:
```
SELECT * FROM Movie
WHERE title = "Deus é Brasileiro";
```

c) A resposta é:
```
SELECT id, title, rating FROM Movie
WHERE rating > 7;
```