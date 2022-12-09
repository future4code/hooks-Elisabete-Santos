import { User } from "../../src/model/user";
import { userMockDois, userMockUm } from "./UserMock";

export class UserDatabaseMock {

    public async createUser(user: User): Promise<void> { }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        switch (email) {
            case "manu@bol.com":
                return userMockUm
            case "joana@bol.com":
                return userMockDois
            default:
                undefined
        }
    }

}