import {UserRole } from "../../src/model/user"

export class AuthenticatorMock {
    public generateToken() {
        return "TOKEN"
    }

    public getData(token: string) {
        const objeto = {
            id: "id_mock",
            role: UserRole.ADMIN
        }
        return objeto
    }
}