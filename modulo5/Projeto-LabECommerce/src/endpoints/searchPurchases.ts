import { Request, Response } from "express"
import { connection } from "../data/connection"

export const searchPurchases = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const userID = req.params.user_id;
      console.log("userID", userID);
  
      if ((userID as string) === ":user_id") {
         statusCode = 400
        throw new Error("Request must contain user ID.");
      }
  
      const checkUserExistance = await connection("labecommerce_user").where({
        id: userID,
      });
  
      if (!checkUserExistance.length) {
         statusCode = 400
        throw new Error("User not found.");
      }
  
      const userPurchases = await connection("labecommerce_purcheses").where({
        user_id: userID,
      });
  
      if (!userPurchases.length) {
         statusCode = 404
        throw new Error("No purchases made by this user.");
      } else {
        res.status(200).send(userPurchases)
      }
  
      res.send("ok");
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}