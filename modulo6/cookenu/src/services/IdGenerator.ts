import { v4 } from "uuid";

export class IdGenerator {

    public getId = ():string => v4() 
}