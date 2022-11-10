import * as jwt from "jsonwebtoken";
import { PayloadObjectDTO } from "../model/PayloadObjectDTO";
import dotenv from "dotenv";

dotenv.config();

export class TokenManager {
  public getToken = (payload: PayloadObjectDTO): string => {
    const options = { expiresIn: "1h" };

    const token = jwt.sign(payload, process.env.JWT_KEY as string, options);

    return token;
  };

  public verifyToken = (token: string) => {
    const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload

    return { id: tokenData.id as string }

    //return tokenData
  }
}
