import * as bcrypt from "bcryptjs"
import dotenv from 'dotenv'

dotenv.config()

export class GenereteHash{
    public hash = async(password:string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(password, salt)
    }

    public compare = async(password:string, hash: string) : Promise<boolean> => {
        return bcrypt.compare(password, hash)
    }

}