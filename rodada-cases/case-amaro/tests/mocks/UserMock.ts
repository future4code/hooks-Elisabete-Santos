import { LoginInputDTO, User, UserRole } from "../../src/model/user"

export const userMockUm = new User(
    "123",
    "Manuel",
    "123456",
    "manu@bol.com",
    UserRole.ADMIN
)
export const userMockDois = new User(
    "123456",
    "Joana",
    "1234567",
    "joana@bol.com",
    UserRole.NORMAL

)

export const userLoginMockWrongPassword: LoginInputDTO = {
    email: "joana@bol.com",
    password: "17"
}

export const userLoginMockSuccess: LoginInputDTO = {
    email: "manu@bol.com",
    password: "123456"
}
