import { CustomError } from "./CustomError";

export class Duration extends CustomError {
    constructor() {
        super(400, "duration must be a positive number")
    }
}