import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        const id = Date.now().toString()

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser = new User(id, email, password)
    
        //await connection(TABLE_USERS).insert(newUser)

        await connection(TABLE_USERS).insert({
            id: newUser.getId(),
            email: newUser.getEmail(),
            password: newUser.getPassword()
        })
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}