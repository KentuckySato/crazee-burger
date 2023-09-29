import { Product, ProductQuantity } from "../../../../../enums/product"
import { findObjectById } from "../../../../../utils/array"
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths"

export function calculcateSumToPay(basket: ProductQuantity[], menu: Product[]) {
    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        if (!menuProduct) return total
        return (
            total +
            replaceFrenchCommaWithDot(menuProduct.price) *
                basketProduct.quantity
        )
    }, 0)
}
