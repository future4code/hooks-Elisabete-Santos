import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersName = async(req: Request,res: Response): Promise<void> =>{
    try {
  
      let name = req.query.name

       if(name === '') {
        throw new Error("Nome é obrigatório!")
      }

      if (!name) {
         name = "%"
      }

      const result = await connection("aula48_exercicio")
      .select()
      .where("name", "like", `%${name}%`)


      res.status(200).send(result)
  
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }