import { CustomError } from "./CustomError";

export class Release extends CustomError {
    constructor() {
        super(400, "Make sure that release date is correct")
    }
}