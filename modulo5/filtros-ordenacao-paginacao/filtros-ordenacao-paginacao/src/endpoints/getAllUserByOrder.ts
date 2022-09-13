import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name
        let type = req.query.type
        let order = req.query.order
        let sort = req.query.sort

        if (type === '') {
            throw new Error("Tipo é obrigatório!")
        }

        if (sort !== 'type' && sort !== 'name') {
            sort = 'email'
        }

        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }
        const result = await connection("aula48_exercicio")
            .select("*")
            .where("type", "like", `%${type}%`)
            .where("name", "like", `%${name}%`)
            .orderBy(sort, order)

        if (result.length < 1) {
            throw new Error("Nenhum usuário com esses parametros foi encontrada.")
        }
        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}