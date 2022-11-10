import * as bcrypt from "bcryptjs";
import { VerificationObjectDTO } from "../model/VerificationObjectDTO";

export class HashManager {
  public generateHash = async (password: string): Promise<string> => {
    // const count = Number(process.env.BCRYPT_COST);
    const round = 12;
    const salt = await bcrypt.genSalt(round);

    return bcrypt.hash(password, salt);;
  };

  public verifyHash = async (
    input: VerificationObjectDTO
  ): Promise<boolean> => {
    return await bcrypt.compare(input.password, input.hash);
  };
}
