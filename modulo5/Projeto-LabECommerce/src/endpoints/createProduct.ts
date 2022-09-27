import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateID } from "uuid";

export const createProduct = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const { name, price, image_url } = req.body;
  
      if (!name || !price || !image_url) {
         statusCode = 400
         throw new Error( "Body of the request must contain name, price and imageURL.");
      }
  
      if (isNaN(price)) {
         statusCode = 400
        throw new Error( "Price must be a number.");
      }
  
      await connection("labecommerce_products")
        .insert({
          id: generateID(),
          name,
          price: Number(price),
          image_url
        })
      
      res.status(201).send("Product created successfully")
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}