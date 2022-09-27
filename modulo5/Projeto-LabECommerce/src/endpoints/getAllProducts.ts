import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllProducts = async (req: Request, res: Response) => {
   let statusCode = 500

   try {
      let name = req.query.name as string;
      let order = req.query.order as string

      if(!name){
         name ="%"
        }

      if (!order || order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
          order = "ASC"
      }

      const result = await connection("labecommerce_products")
      .select()
      .where("labecommerce_products.name", "like", `%${name}%`)
      .orderBy("labecommerce_products.price", order)
     
      res.status(200).send(result)
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}