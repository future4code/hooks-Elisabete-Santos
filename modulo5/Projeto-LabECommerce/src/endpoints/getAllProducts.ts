import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllProducts = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const result = await connection("labecommerce_products")
      .select("*")
      .from("labecommerce_products")

      if (!result.length) {
        statusCode = 404
        throw new Error("No users have been registered")
      }
  
      res.status(200).send(result)
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}