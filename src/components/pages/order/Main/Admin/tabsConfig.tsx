import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";
import { Product } from "../../../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../../../enums/product";

interface TabConfig {
    index: string;
    label: string;
    Icon: JSX.Element;
    Content?: JSX.Element;
}

export const getTabsConfig = (productSelected: Product): TabConfig[] => [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
        Content: <AddForm />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
        Content: productSelected === EMPTY_PRODUCT ? <HintMessage /> : <EditForm />,
    },
];

export const getTabSelected = (tabs: TabConfig[], currentTabSelected: string) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
};
