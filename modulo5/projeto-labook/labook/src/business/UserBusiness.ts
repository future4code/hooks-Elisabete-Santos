import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRequest } from "../error/InvalidRequest";
import { ShortName } from "../error/ShortName";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/generateId";
import { User } from "../model/user"


export class UserBusiness {
   public createUser = async (input: UserInputDTO) => {
      try {
         const { name, email, password } = input
   
         if (!name || !email || !password) {
            throw new InvalidRequest()
         }

         if (!email.includes("@")) {
            throw new InvalidEmail()
         }

         if (name.length < 3) {
            throw new ShortName()
         }

         if (password.length < 6) {
            throw new Error("Your password must contain more than 6 digits");
        }
   
         const id: string = generateId()

         const userDatabase = new UserDatabase()
   
         await userDatabase.insertUser({
               id,
               name,
               email,
               password
            })

   
      } catch (error:any) {
         throw new CustomError(error.statusCode, error.message || error.sqlMessage)
      }
   }

   public getAllUsers = async():Promise<User[]> => {
      const userDatabase = new UserDatabase()
      const getResult = await userDatabase.getAllUsers()
  
      return getResult
    }
}
