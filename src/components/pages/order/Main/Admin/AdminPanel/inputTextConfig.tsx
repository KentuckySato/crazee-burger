import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { Product, ProductId } from "../../../../../../enums/product";

export type InputTextType = {
    id: ProductId,
    leftIcon: JSX.Element,
    name: string,
    placeholder: string,
    value: string | number,
    version: string,
}

export const getInputTextsConfig = (newProduct: Product): InputTextType[] => [
    {
        id: 1,
        leftIcon: <FaHamburger />,
        name: "title",
        placeholder: "Nom du produit (ex: Super Burger)",
        value: newProduct.title,
        version: "minimalist",
    },
    {
        id: 2,
        leftIcon: <BsFillCameraFill />,
        name: "imageSource",
        placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png/)",
        value: newProduct.imageSource,
        version: "minimalist",
    },
    {
        id: 3,
        leftIcon: <MdOutlineEuro />,
        name: "price",
        placeholder: "Prix",
        value: newProduct.price ? newProduct.price : "",
        version: "minimalist",
    },
];
