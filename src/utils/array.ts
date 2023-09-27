import { Product, ProductId } from "../enums/product"

/**
 * This function is used to deep clone an object.
 * It is used in the context to avoid the mutation of the state.
 * @param {T} value - The object to clone.
 * @template T
 * @returns {T} - The cloned object.
 */
export const deepClone = <T>(value: T): T =>
    JSON.parse(JSON.stringify(value)) as T

/**
 * This function is used to find an item in array
 * Return 1 Product
 *
 * @param {ProductId} id - id of Product
 * @param {Product[]} array - Array of Products (menu, basket)
 * @returns {Product} - Product object.
 */
export const findObjectById = (id: ProductId, array: Product[]) =>
    array.find((itemInArray) => itemInArray.id === id)

/**
 * This function is used to find index in given array
 * Return the index of item
 *
 * @param {ProductId} id - id of Product
 * @param {Product[]} array - Array of Products (menu, basket)
 * @returns {number} - Index.
 */
export const findIndexById = (id: ProductId, array: Product[]) =>
    array.findIndex((itemInArray) => itemInArray.id === id)

/**
 * This function is used to find index in given array
 * Return the index of item
 *
 * @param {ProductId} id - id of Product
 * @param {Product[]} array - Array of Products (menu, basket)
 * @returns {number} - Index.
 */
export const removeObjectById = (id: ProductId, array: Product[]) =>
    array.filter((itemInArray) => itemInArray.id !== id)

/**
 * This function is used to check if array is isEmpty
 * Return boolean
 *
 * @param {[]} array - Array of items
 * @returns {boolean}
 */
export const isEmpty = (array: [] | Product[]) => array.length === 0
