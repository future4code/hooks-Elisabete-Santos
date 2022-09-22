import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const result = await connection("labecommerce_user")
      .select("*")
      .from("labecommerce_user")

      if (!result.length) {
        statusCode = 404
        throw new Error("No users have been registered")
      }
  
      res.status(200).send(result)
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}