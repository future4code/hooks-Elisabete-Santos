import { UserDataBase } from '../data/userDataBase';
import { 
    InvalidEmail,
    InvalidPassword
} from '../error/customError';
import { User, UserInput } from '../model/user';
import { 
    IHashManager,
    IAuthenticator,
    IGenerateId
} from './ports';

export class UserBusiness {
    constructor(
        private hashManager: IHashManager,
        private authenticator: IAuthenticator,
        private generatorID: IGenerateId
    ){ }
    
    public async signup(user:UserInput): Promise<void>{ 
        let { email, password, name, role } = user;
        
        const id = this.generatorID.generate();

        if(!email.includes("@")){
            throw new InvalidEmail()
        }

        if(password.length < 6){
            throw new InvalidPassword();
        }

        const hashPassword = await this.hashManager.hash(password);

        const input = {
            id,
            name,
            email,
            password: hashPassword,
            role
        }        

        const userModel = User.toUserModel(input);
        new UserDataBase().signup(userModel);
    }

    public async login(user: any): Promise<any>{
        let { email, password } = user

        if(!email.includes("@")){
            throw new InvalidEmail()
        }

        const userDB = await new UserDataBase().getUserByEmail(email);
        if(!userDB){
            throw new InvalidEmail();
        }        

        const checkPassword = this.hashManager.compare(password, userDB.getPassword());
        if(!checkPassword){
            throw new InvalidPassword();
        }
        
        const inputToken = {
            id: userDB.getId(),
            role: userDB.getRole()
        }
        const token = this.authenticator.generateToken(inputToken);

        return token
    }
}