import { createContext } from "react"
import { Product, ProductId } from "../enums/product"
import { EMPTY_PRODUCT } from "../enums/product"

export type OrderContextType = {
    isModeAdmin: boolean
    setIsModeAdmin: (setIsModeAdmin: boolean) => void

    currentTabSelected: string
    setCurrentTabSelected: (currentTabSelected: string) => void

    isCollapsed: boolean
    setIsCollapsed: (isCollapsed: boolean) => void

    menu: Product[]
    handleAddMenuProduct: (product: Product) => void
    handleDeleteMenuProduct: (id: ProductId) => void
    handleEditMenuProduct: (product: Product) => void
    resetMenu: () => void

    newProduct: Product
    setNewProduct: (newProduct: Product) => void

    productSelected: Product
    setProductSelected: (productSelected: Product) => void

    titleFieldRef: React.MutableRefObject<HTMLInputElement | null>

    basket: Product[]
    setBasket: (basket: Product[]) => void
    handleAddBasketProduct: (id: ProductId) => void
    handleDeleteBasketProduct: (id: ProductId) => void
    handleEditBasketProduct: (product: Product) => void
}

export const OrderContext = createContext<OrderContextType>({
    isModeAdmin: false,
    setIsModeAdmin: () => false,

    currentTabSelected: "add",
    setCurrentTabSelected: () => "",

    isCollapsed: false,
    setIsCollapsed: () => false,

    menu: [],
    handleAddMenuProduct: () => "",
    handleDeleteMenuProduct: () => "",
    handleEditMenuProduct: () => "",
    resetMenu: () => {},

    newProduct: EMPTY_PRODUCT,
    setNewProduct: () => "",

    productSelected: { ...EMPTY_PRODUCT },
    setProductSelected: () => {},

    titleFieldRef: { current: null },

    basket: [],
    setBasket: () => [],
    handleAddBasketProduct: () => "",
    handleDeleteBasketProduct: () => "",
    handleEditBasketProduct: () => "",
})
