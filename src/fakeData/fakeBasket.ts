import { Product } from "../enums/product"

const EMPTY: [] = []

const SMALL: Product[] = [
    {
        id: "1",
        imageSource: "/images/burger1.png",
        title: "Burger Meal",
        quantity: 1,
        price: 1.2,
        isAvailable: true,
        isPublicised: false,
    },
]

const MEDIUM: Product[] = [
    {
        id: "1",
        imageSource: "/images/burger1.png",
        title: "Burger Smoke BBQ",
        price: 5,
        quantity: 2,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "2",
        imageSource: "/images/burger6.png",
        title: "Vegan Burger",
        price: 5,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "3",
        imageSource:
            "https://www.ecomiam.com/images/Image/Frites-du-bistro-Code-Menlog.jpg",
        title: "Burger House",
        price: 5,
        quantity: 4,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "4",
        imageSource: "/images/drink1.png",
        title: "Cheese Burger",
        price: 5,
        quantity: 4,
        isAvailable: true,
        isPublicised: false,
    },
]

const LARGE: Product[] = [
    {
        id: "1",
        imageSource: "/images/fries3.png",
        title: "New York Fries",
        price: 3.1678,
        quantity: 13,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "2",
        imageSource: "/images/drink1.png",
        title: "Coke 25cl",
        price: 3.568,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "3",
        imageSource: "/images/burger3.png",
        title: "Burger poulet",
        price: 5.367,
        quantity: 5,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "4",
        imageSource: "/images/burger-vegan.png",
        title: "Vegan Burger",
        price: 5.4985,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "5",
        imageSource: "/images/drink2.png",
        title: "Pepsi 25cl",
        price: 3.487,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "6",
        imageSource: "/images/drink3.png",
        title: "Iced Tea 25cl",
        price: 3.356,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "7",
        imageSource: "/images/burger-bacon-egg.png",
        title: "Burger Smoke Bdhbedhbeheb",
        price: 5.598,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "8",
        imageSource: "/images/frites1.png",
        title: "Frites Paprika",
        price: 2.567,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "9",
        imageSource: "/images/wedges1.png",
        title: "Crispy Potatoes",
        price: 3.7,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "10",
        imageSource: "/images/ice-cream.png",
        title: "Glaces artisanales",
        price: 4.678,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
]

const LARGE_WEIRD: Product[] = [
    {
        id: "1",
        imageSource: "/images/fries3.png",
        title: "New York Fries",
        price: 3.1678,
        quantity: 13,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "2",
        imageSource: "/images/drink1.png",
        title: "Coke 25cl",
        price: 3.568,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "3",
        imageSource: "/images/burger3.png",
        title: "Burger poulet chanmé",
        price: 0.0,
        quantity: 5,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "4",
        imageSource: "/images/burger-vegan.png",
        title: "Vegan Burger",
        price: 5.4985,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "5",
        imageSource: "/images/drink2.png",
        title: "Pepsi 25cl MEGA OUF XXXL",
        price: 3.487,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "6",
        imageSource: "/images/drink3.png",
        title: "",
        price: 3.356,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "7",
        imageSource: "/images/burger-bacon-egg.png",
        title: "Burger Smoke Bdhbedhbeheb",
        price: 5.598,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "8",
        imageSource: "/images/frites1.png",
        title: "Frites Paprika",
        price: 2.567,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "9",
        imageSource: "/images/wedges1.png",
        title: "Crispy Potatoes",
        price: 3.7,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
    {
        id: "10",
        imageSource: "/images/ice-cream.png",
        title: "Glaces artisanales",
        price: 4.2,
        quantity: 1,
        isAvailable: true,
        isPublicised: false,
    },
]

export const fakeBasket = {
    EMPTY,
    SMALL,
    MEDIUM,
    LARGE,
    LARGE_WEIRD,
}
