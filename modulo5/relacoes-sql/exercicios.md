# Exercício - 1

No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas. Para isso, teremos que criar uma tabela para guardar essas informações.

As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme. Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira. Abaixo, há a Query que cria essa tabela

```SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
   comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
   movie_id VARCHAR(255),
   FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
```

## A. Explique o que é uma chave estrangeira

Chave estrangeira é para referenciar a ligação de uma tabela com a outra. Ela deve fazer referência a uma chave primária de outra tabela.

## B. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

```SQL
CREATE TABLE Movies (
	id VARCHAR(55) PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   description VARCHAR(255) NOT NULL,
	genre VARCHAR(100) NOT NULL,
)
```

```SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Filme com uma historia interessante", 7, "002"),
       ("002", "O enredo supreendeu bastante", 8.9, "002"),
       ("003", "Uma romance lindo", 8.8, "003");
```

## C. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

Como não temos esse id, deu erro já que o banco não consegue adicionar o que passamos a ele, a chave estrangeira tem uma restrição.

## D. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

```SQL
ALTER TABLE Movies DROP COLUMN rating;
```

## E. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

Não conseguimos apagar pois como o id é referenciado de outra tabela isso nos impede, por questão de hierarquia.

# Exercício - 2

Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação **N:M.**

Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de `MovieCast` ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.

```SQL
CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
   FOREIGN KEY (movie_id) REFERENCES Movie(id),
   FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

## A. Explique, com as suas palavras, essa tabela.

É uma tabela que contém duas colunas. Uma vai recerber a id do filme e a outra a id do ator. Como as ids originalmente não fazem parte dessa tabela, elas serão uma chave estrangeira, e serão relacionadas por esta tabela.

## B. Crie, ao menos, 6 relações nessa tabela .

```SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001", "004"),
      ("001", "005"),
      ("001", "003"),
      ("002", "001"),
      ("002", "002"),
      ("003", "007");
```

## C. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Os ids não existem, assim ele não consegue referenciar os valores.

## D. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

```SQL
DELETE FROM MovieCast WHERE id = 1;
```

Não é possível deletar ou atualizar uma linha pai: falha de restrição de chave estrangeira

# Exercício - 3

Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já **juntar** informações delas duas. Isso pode ser feito através do operador `JOIN`.

Vamos começar estudando o `INNER JOIN`. Esse operador retorna somente os dados que possuem **correspondentes** **nas duas tabelas**. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim:

```SQL
SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

## A. Explique, com suas palavras, a query acima. O que é o operador ON?

Está selecionando a tabela Movie com a tabela Rating e o operador ON está indicando qual condição é para ser comparado nas duas tabelas para impimir o resultado.

## B. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

```SQL
SELECT m.id as movie_id, m.title as name, r.rate as rating
FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```
