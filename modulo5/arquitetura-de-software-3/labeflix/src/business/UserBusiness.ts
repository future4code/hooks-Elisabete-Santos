import { UserDatabase } from "../data/UserDatabase"
import { InputUserDTO } from "../model/inputUserDTO"
import { generateID } from "../services/generateID"
import { User } from "../model/User"
import { InvalidRequest } from "../error/InvalidRequest"
import { InvalidEmail } from "../error/InvalidEmail"
import { ShortName } from "../error/ShortName"
import { CustomError } from "../error/CustomError"

export class UserBusiness {
  async create({ email, name, password }: InputUserDTO):Promise<void> {
    try {
      if (!email || !name || !password) {
        throw new InvalidRequest()
      }
  
      if (!email.includes("@")) {
        throw new InvalidEmail()
      }
  
      if (name.length < 3) {
        throw new ShortName()
      }
  
      const id = generateID()
  
      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }
  }  

  public getAllUsers = async():Promise<User[]> => {
    const userDatabase = new UserDatabase()
    const getResult = await userDatabase.getAllUsers()

    return getResult
  }

}
