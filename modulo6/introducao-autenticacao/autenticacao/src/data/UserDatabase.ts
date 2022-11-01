import { userSignupDTO } from './../model/userDTO'
import { BaseDatabase } from "./BaseDatabase"

export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "User_aut"

    public async signup(input:userSignupDTO):Promise<void> {
        await BaseDatabase.connection
            .insert({
                id: input.id,
                email: input.email,
                password: input.password,
            })
            .into(UserDataBase.TABLE_NAME)
    }

    public async getUserByEmail (email: string): Promise<any> {
        const result = await BaseDatabase.connection
          .select("*")
          .from(UserDataBase.TABLE_NAME)
          .where({ email })
     
        return result[0]
    }

    public async getUserById (id: string): Promise<any> {
        const result = await BaseDatabase.connection
          .select("*")
          .from(UserDataBase.TABLE_NAME)
          .where({ id })
     
        return result[0]
    }

}