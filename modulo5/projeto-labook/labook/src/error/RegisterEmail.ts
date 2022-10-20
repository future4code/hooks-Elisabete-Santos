import { CustomError } from "./CustomError";

export class RegisterEmail extends CustomError {
    constructor() {
        super(400, "Email já cadastrado!")
    }
}