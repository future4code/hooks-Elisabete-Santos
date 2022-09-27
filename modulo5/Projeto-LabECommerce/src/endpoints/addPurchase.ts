import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateID } from "uuid";

export const addPurchase = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const { userID, productID, quantity } = req.body;
  
      if (!userID || !productID || !quantity) {
         statusCode = 400
        throw new Error("Body of the request must contain userID, productID and quantity.");
      } else if (isNaN(quantity)) {
         statusCode = 400
        throw new Error("Quantity must be a number.");
      }
  
      const checkUserID = await connection("labecommerce_user").where({
        id: userID,
      });
      if (!checkUserID.length) {
         statusCode = 404
         throw new Error("User not found.");
      }
  
      const checkProductID = await connection("labecommerce_products").where({
        id: productID,
      });
      
      if (!checkProductID.length) {
         statusCode = 404
         throw new Error( "Product not found.",);
      }
  
      const productPriceObject = await connection("labecommerce_products")
         .select("price")
         .where({ id: productID });
      const productPrice = productPriceObject[0].price;

      await connection("labecommerce_purcheses").insert({
         id: generateID(),
         user_id: userID,
         product_id: productID,
         quantity,
         total_price: productPrice * quantity,
      });

      res.status(201).send("Purchase successfully recorded.");
         
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}

