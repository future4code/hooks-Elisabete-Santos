import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection(TABLE_USERS).select()
        res.status(200).send(result)
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}