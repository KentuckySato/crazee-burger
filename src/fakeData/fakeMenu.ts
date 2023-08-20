export type ProductId =
    | number
    | string
    | `${string}-${string}-${string}-${string}-${string}`;
export interface Product {
    id: ProductId;
    imageSource: string;
    title: string;
    price: number | string;
    quantity?: number;
    isAvailable?: boolean;
    isAdvertised?: boolean;
}

const EMPTY: [] = [];

const SMALL: Product[] = [
    {
        id: 1,
        imageSource: "/images/burger1.png",
        title: "Burger 1",
        price: 5.297,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 2,
        imageSource: "/images/burger2.png",
        title: "Burger 2",
        price: 7.556,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
];

const MEDIUM: Product[] = [
    {
        id: 1,
        imageSource: "/images/burger-bacon-egg.png",
        title: "Burger Smoke BBQ",
        price: 5.598,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 2,
        imageSource: "/images/burger-vegan.png",
        title: "Vegan Burger",
        price: 5.4985,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 3,
        imageSource: "/images/burger3.png",
        title: "Burger poulet",
        price: 5.367,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 4,
        imageSource: "/images/drink1.png",
        title: "Coke 25cl",
        price: 3.568,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 5,
        imageSource: "/images/drink2.png",
        title: "Pepsi 25cl",
        price: 3.487,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
];

const LARGE: Product[] = [
    {
        id: 1,
        imageSource: "/images/burger-bacon-egg.png",
        title: "Burger Smoke BBQ",
        price: 5.598,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 2,
        imageSource: "/images/burger-vegan.png",
        title: "Vegan Burger",
        price: 5.4985,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 3,
        imageSource: "/images/burger3.png",
        title: "Burger poulet",
        price: 5.367,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 4,
        imageSource: "/images/drink1.png",
        title: "Coke 25cl",
        price: 3.568,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 5,
        imageSource: "/images/drink2.png",
        title: "Pepsi 25cl",
        price: 3.487,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 6,
        imageSource: "/images/drink3.png",
        title: "Iced Tea 25cl",
        price: 3.356,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 7,
        imageSource: "/images/frites1.png",
        title: "Frites Paprika",
        price: 2.567,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 8,
        imageSource: "/images/fries3.png",
        title: "New York Fries",
        price: 3.1678,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 9,
        imageSource: "/images/wedges1.png",
        title: "Crispy Potatoes",
        price: 3.7,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
    {
        id: 10,
        imageSource: "/images/ice-cream.png",
        title: "Glaces artisanales",
        price: 4.678,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    },
];

export const fakeMenu = {
    EMPTY,
    SMALL,
    MEDIUM,
    LARGE,
};
