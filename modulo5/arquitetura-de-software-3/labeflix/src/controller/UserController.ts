import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { InputUserDTO } from "../model/inputUserDTO";
import { User } from "../model/User"

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input:InputUserDTO = { 
        email, 
        name, 
        password 
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input)

      res.status(201).send({ message: "User created successfuly" })
    } catch (error: any) {
      res.status(400).send(error.message)
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
