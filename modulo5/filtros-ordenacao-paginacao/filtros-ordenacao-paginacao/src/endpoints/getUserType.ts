import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
    try {
  
       let type = req.params.type

       if(type === '') {
        throw new Error("Nome é obrigatório!")
      }

      const result = await connection("aula48_exercicio")
      .select()
      .where("type", "like", `%${type}%`)


      res.status(200).send(result)
  
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }