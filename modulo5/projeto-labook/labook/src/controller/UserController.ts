import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";
import { User } from "../model/user"

export class UserController {

   public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { id, name, email, password } = req.body

         const input: UserInputDTO = {
            id,
            name,
            email,
            password
         }

         const userBusiness = new UserBusiness()
         await userBusiness.createUser(input)

         res.status(201).send({ message: "Success!" })
      } catch (error: any) {
         res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
   }

   public getAllUsers = async (req: Request, res: Response):Promise<void> => {
      try {
        const userBusiness = new UserBusiness()
        const getResult:User[] = await userBusiness.getAllUsers()
  
        res.status(200).send(getResult)
      } catch (error: any) {
        res.send(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
    }
}