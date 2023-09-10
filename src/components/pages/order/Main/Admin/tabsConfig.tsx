import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import { Id } from "react-toastify";
import HintMessage from "./AdminPanel/HintMessage";

interface TabConfig {
    index: string;
    label: string;
    Icon: JSX.Element;
    Content?: JSX.Element;
}

export const getTabsConfig = (hasSelectedCard: Id | null): TabConfig[] => [
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
        Content: hasSelectedCard !== null ? <EditForm /> : <HintMessage />,

    },
];

export const getTabSelected = (tabs: TabConfig[], currentTabSelected: string) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
};
