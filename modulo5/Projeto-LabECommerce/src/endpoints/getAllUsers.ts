import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
      const userList = await connection("labecommerce_user")
      .select()

      if (!userList.length) {
         res.status(200).send("No users have been registered");
      } else {
         const userListWithPurchases = await Promise.all(
          userList.map(async (user) => {
            const userPurchases = await connection("labecommerce_purcheses").where({
               user_id: user.id,
         });
         const userList = await connection("labecommerce_user").select();

         if (!userList.length) {
            res.status(200).send("No users have been registered");
         } else {
            const userListWithPurchases = await Promise.all(
               userList.map(async (user) => {
               const userPurchases = await connection("labecommerce_purcheses").where({
                  user_id: user.id,
               });
               console.log("userPurchases", userPurchases);
               const completeUser = { ...user, purchases: userPurchases };
         
               return completeUser;
               })
            );
         
            console.log("enviando o complete");
         
            res.status(200).send(userListWithPurchases);
         }
         console.log("userPurchases", userPurchases);
         const completeUser = { ...user, purchases: userPurchases };

         return completeUser;
         })
      )
         res.status(200).send(userListWithPurchases);
      }
   }catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}