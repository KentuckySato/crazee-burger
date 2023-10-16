import { ProductQuantity, Products } from "../../../../../../enums/product"
import { findObjectById } from "../../../../../../utils/array"

export function calculcateSumToPay(basket: ProductQuantity[], menu: Products) {
    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        if (!menuProduct || isNaN(menuProduct.price)) return total
        return total + menuProduct.price * basketProduct.quantity
    }, 0)
}
