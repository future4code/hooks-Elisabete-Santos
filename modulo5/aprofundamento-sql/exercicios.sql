-- ## Exercício 1

-- Desenvolva uma query que crie uma tabela de projetos para a empresa. Um projeto será inicialmente representado no banco de dados pelas seguintes propriedades e CONSTRAINTS:

-- - id: Identificador do projeto, representado por um número em formato string. Deve ser uma chave primária.

-- - name: Nome do projeto, em formato string. Deve ser um valor único para cada projeto e não pode ser nulo.

-- - title: Título do projeto, em formato string. Não pode ser um valor nulo.

-- - date: Data de vencimento do projeto. Não pode ser um valor nulo.

-- Dica: No SQL datas devem ser cadastradas como variáveis de tipo DATE.

CREATE TABLE
    Projetos(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        name VARCHAR(55) NOT NULL UNIQUE,
        title VARCHAR(55) NOT NULL,
        date DATE NOT NULL
    );

DESCRIBE Projetos;

-- ## Exercício 2

-- Desenvolva uma query (ou queries) que insira na tabela criada no Exercício 1 os seguintes 3 usuários:

-- ```json

-- Projeto 1 = {

-- 	id: "001",

--   name: "LabeSky",

--   title: "LSy",

-- 	date: "2023/10/05"

-- };

-- Projeto 2 = {

-- 	id: "002",

-- 	name: "Labefy",

-- 	title: "LFy",

-- 	date: "2024/01/06"

-- };

-- Projeto 3 = {

-- 	id: "003",

-- 	name: "AstroZoom",

--   title: "AZm",

--   date: "2022/12/20"

-- };

-- ```

-- Dica: Para cadastrar uma data válida no SQL, é necessário que passemos a data no formato “ANO/MÊS/DIA” ou “ANO-MÊS-DIA”.

INSERT INTO
    Projetos(id, name, title, date)
VALUES (
        "001",
        "LabeSky",
        "LSy",
        "2023/10/05"
    ), (
        "002",
        "Labefy",
        "LFy",
        "2024/01/06"
    ), (
        "003",
        "AstroZoom",
        "AZm",
        "2022/12/20"
    );

SELECT * FROM Projetos;

-- ## Exercício 3

-- ### Letra A

-- Após algumas verificações, a equipe de desenvolvimento chegou a conclusão de que não seria mais necessário armazenar os títulos de cada projeto, já que o nome deles já são significativos o suficiente. Partindo desta situação, desenvolva uma query que possibilite a remoção dos dados de title (e também a coluna inteira), sem apagar a tabela inteira. Confirme o sucesso da operação.

-- Dica 1: Utilize os comandos ALTER TABLE com DROP COLUMN.

-- Dica 2: Para confirmação de mudanças na estrutura da tabela, utilize o comando DESCRIBE.

ALTER TABLE Projetos DROP COLUMN title;

DESCRIBE Projetos;

-- ### Letra B

-- Outra modificação constatada pela equipe reside em alterar o nome da propriedade que armazena os prazos de vencimento dos projetos, visto que “date” é um nome muito amplo (pode significar o início do projeto, data de previsão, entre períodos de entregas, etc). Disto isto, desenvolva uma query que altere o nome da propriedade “date” para “dueDate”, sem apagar a tabela inteira. Confirme o sucesso da operação.

-- Dica 1: Utilize os comandos ALTER TABLE com CHANGE.

-- Dica 2: Para confirmação de mudanças na estrutura da tabela, utilize o comando DESCRIBE.

ALTER TABLE Projetos CHANGE date dueDate DATE NOT NULL;

DESCRIBE Projetos;

-- ### Letra C

-- Ainda pensando nas alterações de dados do sistema da empresa, a equipe percebeu que os e-mails de usuários (criados no dia anterior) podem ser registrados mais de uma vez, quando na verdade queremos que cada usuário só tenha um único e-mail. Desta forma, desenvolva uma query que adicione a restrição de e-mail único para cada usuário na tabela de usuários, sem apagar a tabela inteira. Confirme o sucesso da operação.

-- Dica 1: Utilize os comandos ALTER TABLE e MODIFY.

-- Dica 2: Para confirmação de mudanças na estrutura da tabela, utilize o comando DESCRIBE.

ALTER TABLE Funcionarios MODIFY email VARCHAR(55) NOT NULL UNIQUE;

DESCRIBE Funcionarios;

-- ## Exercício 4

-- ### Letra A

-- Após certo tempo, a equipe de desenvolvimento chegou a conclusão da necessidade de existir uma descrição mínima do projeto, que facilite o entendimento do seu significado. Dito isto, desenvolva uma query que adicione uma propriedade chamada “description” a tabela de projetos, sem apagar a tabela inteira. Confirme o sucesso da operação.

-- Dica 1: Utilize os comandos ALTER TABLE e ADD.

-- Dica 2: Para confirmação de mudanças na estrutura da tabela, utilize o comando DESCRIBE.

ALTER TABLE Projetos ADD description VARCHAR(255) NOT NULL;

DESCRIBE Projetos;

-- ### Letra B

-- Desenvolva uma query que atualize o campo “description” de cada projeto existente no banco de dados. Tome como referência as seguintes descrições:

-- ```json

-- Projeto 1 = {

-- 	...

-- 	description: "Projeto de sistema em nuvem da Labenu."

-- };

-- Projeto 2 = {

-- 	...

-- 	description: "Projeto de sistema de gerenciamento de músicas da Labenu."

-- };

-- Projeto 3 = {

-- 	...

-- 	description: "Projeto de rede de comunicação da Labenu."

-- };

-- ```

-- Ao final, confirme o sucesso da operação.

-- Dica 1: Utilize os comandos UPDATE, SET e WHERE.

-- Dica 2: Para confirmação de mudanças na estrutura da tabela, utilize o comando DESCRIBE.

UPDATE Projetos
SET
    description = "Projeto de sistema em nuvem da Labenu."
WHERE id = "001";

UPDATE Projetos
SET
    description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = "002";

UPDATE Projetos
SET
    description = "Projeto de rede de comunicação da Labenu."
WHERE id = "003";

SELECT * FROM Projetos;

-- ## Exercício 5

-- ### Letra A

-- Desenvolva uma query que exiba todos as informações dos projetos registrados, em ordem decrescente de prazo de vencimento. Ou seja, o primeiro item deve ser o que possui o prazo mais distante e o último item possui o prazo mais próximo da data atual.

-- Dica: Utilize os comandos SELECT e ORDER BY.

SELECT dueDate FROM Projetos ORDER BY dueDate DESC;

-- ### Letra B

-- Desenvolva uma query que exiba o nome e prazo de vencimento dos projetos próximos de sua data final de entrega. Mostre apenas os 2 mais próximos de encerrarem.

-- Dica: Utilize os comandos SELECT, ORDER BY e LIMIT.

SELECT name, dueDate FROM Projetos ORDER BY dueDate ASC LIMIT 2;