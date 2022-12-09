import { ProductBusiness } from "../src/business/ProductBusiness"
import { UserBusiness } from "../src/business/UserBusiness"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMocks } from "./mocks/hashManagerMock"
import { generatorIDMock } from "./mocks/generatorIDMock"
import { ProductDatabaseMock } from "./mocks/ProductDataBaseMock"
import { productMockDois } from "./mocks/ProductMock"
import { UserDatabaseMock } from "./mocks/UserDataBaseMock"
import { userLoginMockSuccess, userLoginMockWrongPassword } from "./mocks/UserMock"

const userBusinessMock = new UserBusiness(
   new HashManagerMocks as any,
   new AuthenticatorMock,
   new generatorIDMock,
   new ProductDatabaseMock as any,
)

const productBusinessMock = new ProductBusiness(
   new generatorIDMock as any,
   new AuthenticatorMock as any,
   UserDatabaseMock as any,
)

const token = "TOKEN"

describe("User table tests!", () => {
   test("Login invalid password, failure.", async () => {
       expect.assertions(1)
       try {
           await userBusinessMock.login(userLoginMockWrongPassword)
       } catch (error: any) {
           expect(error.message).toBe("Unauthorized User.")
       }
   })
   test("Login success.", async () => {
       expect.assertions(1)
       try {
           const result = await userBusinessMock.login(userLoginMockSuccess)
           expect(result).toBe("TOKEN")
       } catch (error) {
           console.log(error)
       }
   })
})

describe("Product table tests!", () => {
   test("Create product missing field, failure.", async () => {
       expect.assertions(1)
       try {
           await productBusinessMock.getProductById(token)
       } catch (error: any) {
           expect(error.message).toBe("Fields cannot be empty")
       }
   })
   test("Get product by id, success.", async () => {
       expect.assertions(2)
       try {
           const result = await productBusinessMock.getProductById(token)
           expect(result).toBe(productMockDois)
           expect(result).toEqual({ id: "123456", productName: "Calça Jeans", tags: ["Preto", "Outono", "Elastano"] })
       } catch (error) {
           console.log(error)
       }
   })
})