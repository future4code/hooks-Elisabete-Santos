import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  Unauthorized,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { GenereteHash } from "../services/genereteHash";
import { IdGenerate } from "../services/IdGenerate";
import { TokenGenerate } from "../services/TokenGenerate";

const idGenerator = new IdGenerate();
const tokenGenerator = new TokenGenerate();
const userDatabase = new UserDatabase();

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = idGenerator.generateId();

      const genereteHash = new GenereteHash();
      const newHash = await genereteHash.hash(password);

      const standardRole = "normal"

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: newHash,
        role: standardRole
      };

      await userDatabase.insertUser(user);
      const token = tokenGenerator.generateToken(id, standardRole);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos"email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUser(email);

      if (!user) {
        throw new UserNotFound();
      }

      const genereteHash = new GenereteHash();
      const verificationResult = await genereteHash.compare(password, user.password);

      if (!verificationResult) {
        throw new InvalidPassword();
      }

      const token = tokenGenerator.generateToken(user.id, user.role);

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, role, id, token } = input;

      if (!name || !nickname || !id || !token || !role) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name", "nickname", "token" e "role"'
        );
      }

      const data = tokenGenerator.tokenData(token);

      if (!data.id) {
        throw new Unauthorized();
      }

      if (!data.role) {
        throw new Unauthorized();
      }

      if (data.role !== "admin") {
        throw new Unauthorized();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
        role
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}