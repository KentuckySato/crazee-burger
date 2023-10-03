import { ProductId } from "../enums/product"

export const deepClone = <T>(value: T): T =>
    JSON.parse(JSON.stringify(value)) as T

export const findObjectById = <T extends { id: ProductId }>(
    id: ProductId,
    array: T[]
) => array.find((itemInArray) => itemInArray.id === id)

export const findIndexById = <T extends { id: ProductId }>(
    id: ProductId,
    array: T[]
) => array.findIndex((itemInArray) => itemInArray.id === id)

export const removeObjectById = <T extends { id: ProductId }>(
    id: ProductId,
    array: T[]
) => array.filter((itemInArray) => itemInArray.id !== id)

export const isEmpty = <T>(array: T[]) => array.length === 0
