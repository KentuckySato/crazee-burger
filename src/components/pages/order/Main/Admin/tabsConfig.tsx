import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";

interface TabConfig {
    index: string;
    label: string;
    Icon: JSX.Element;
    Content?: JSX.Element;
}

export const tabsConfig: TabConfig[] = [
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
        Content: <EditForm />,

    },
];

export const getTabSelected = (tabs: TabConfig[], currentTabSelected: string) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
};
