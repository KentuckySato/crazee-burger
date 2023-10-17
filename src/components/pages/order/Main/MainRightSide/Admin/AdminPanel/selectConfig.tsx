import { GoMegaphone } from "react-icons/go";
import { Product } from "../../../../../../../enums/product";
import { FiPackage } from "react-icons/fi";
import { SelectProps } from "../../../../../../shared/Select";

export const getSelectsConfig = (newProduct: Product): SelectProps[] => [
    {
        id: 1,
        leftIcon: <FiPackage />,
        name: "availability",
        options: ["En stock", "En rupture"],
        value: newProduct.isAvailable,
        version: "minimalist",
        className: "availability",
    },
    {
        id: 2,
        leftIcon: <GoMegaphone />,
        name: "advertisement",
        options: ["Sans pub", "Avec pub"],
        value: newProduct.isAdvertised,
        version: "minimalist",
        className: "advertisement",
    },
];
