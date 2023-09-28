import { Product } from "../../../../../enums/product"
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths"

export function calculcateSumToPay(products: Product[]) {
    return products.reduce((total, product) => {
        return (
            total + replaceFrenchCommaWithDot(product.price) * product.quantity
        )
    }, 0)
}
