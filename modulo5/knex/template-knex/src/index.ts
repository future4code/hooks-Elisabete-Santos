import express, { Request, Response } from "express";
import connection from "./database/connection";
import cors from "cors";
import { Employee } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", async (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(`
        SELECT * FROM Funcionarios
        WHERE nome = "${search}";
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM Funcionarios;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.post("/users", async (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const { nome, email} = req.body

    if (!nome || !email ) {
      errorCode = 422
      throw new Error("Passe o nome e email, por favor.")
    }

    if (!email.includes("@")){
      errorCode = 422
      throw new Error("Email deve conter o @")
    }

    const newEmployee: Employee = {
      id: Number(Date.now()),
      nome,
      email
    }

    await connection.raw(`
      INSERT INTO Funcionarios(id, nome, email)
      VALUES(${newEmployee.id}, "${newEmployee.nome}", "${newEmployee.email}")
    `)

    res.status(200).json({
      mensage: "Funcionário adicionado",
      newEmployee
    })

  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.put("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id
    const email = req.body.email

    const employee = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = "${id}";
    `)

    if (employee[0].length === 0) {
      errorCode = 422
      throw new Error("Funcionário não encontrado")
    }

    if (!email) {
      errorCode = 422
      throw new Error("É necessário passar o novo email")
    }

    if (!email.includes("@")){
      errorCode = 422
      throw new Error("Email deve conter o @")
    }

    await connection.raw(`
    UPDATE Funcionarios
    SET email = "${email}"
    WHERE id = "${id}";
  `)

    res.status(200).send("Email alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.delete("/users/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const employee = await connection.raw(`
      SELECT * FROM Funcionarios
      WHERE id = "${id}";
    `)

    if (employee[0].length === 0) {
      throw new Error("Funcionário não encontrado")
    }

    await connection.raw(`
      DELETE FROM Funcionarios
      WHERE id = "${id}";
    `)

    res.status(200).send("Funcionário deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});