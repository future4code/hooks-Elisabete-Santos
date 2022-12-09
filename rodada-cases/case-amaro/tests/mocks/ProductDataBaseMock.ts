import { Products } from "../../src/model/products";
import { productMockDois, productMockUm } from "./ProductMock";

export class ProductDatabaseMock {

    public async insertProduct(product: Products): Promise<void> { }



    public async getProductById(productId: string): Promise<Products | undefined> {
        switch (productId) {
            case "123":
                return productMockUm
            case "123456":
                return productMockDois
            default:
                return undefined
        }
    }

    public async getProductByTag(productTag: string): Promise<Products | undefined> {
        switch (productTag) {
            case "Inverno":
                return productMockUm
            case "Outono":
                return productMockDois
            default:
                return undefined
        }
    }

}