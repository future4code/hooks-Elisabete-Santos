import { CustomError } from "./CustomError";

export class ShortName extends CustomError {
    constructor() {
        super(411, "The name must be at least 3 characters long")
    }
}