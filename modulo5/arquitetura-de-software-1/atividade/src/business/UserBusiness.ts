import { UserDatabase } from "../data/UserDatabase"
import { user } from "../types/user"

export class UserBusiness {
   public createUser = async (input: any) => {
      try {
        const { email, name, password } = input

        if (!email || !name || !password) {
            throw new Error('Please fill all the fields "name","nickname", "email" and "password"')
        }

        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id: string = Date.now().toString()

        const userDatabase = new UserDatabase()

        await userDatabase.insertUser({
            id,
            email,
            name,
            password
         })

      } catch (error: any) {
         throw new Error(error.message)
      }
   }
   
   async get(): Promise<user[]>  {
				
      return await new UserDatabase().get();
   }

   async deleteUser(input: {id:string}) {
				
      if(!input.id){
         throw new Error("Insira um id!")
      }

  return await new UserDatabase().deleteUser(input.id);
}
}