export type ProductId =
    | number
    | string
    | `${string}-${string}-${string}-${string}-${string}`;
export interface Product {
    id: ProductId;
    imageSource: string;
    title: string;
    price: number;
    quantity: number;
    isAvailable?: boolean;
    isAdvertised?: boolean;
}

export const EMPTY_PRODUCT: Product = Object.freeze({
    id: "",
    title: "",
    imageSource: "",
    price: 0,
    quantity: 0,
});

export const IMAGE_BY_DEFAULT = "/images/coming-soon.png";
