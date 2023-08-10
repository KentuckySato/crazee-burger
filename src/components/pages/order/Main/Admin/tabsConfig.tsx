import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

interface TabConfig {
    index: string;
    label: string;
    Icon: JSX.Element;
}

export const tabsConfig: TabConfig[] = [
    {
        index: "add",
        label: "Ajouter un produit",
        Icon: <AiOutlinePlus />,
    },
    {
        index: "edit",
        label: "Modifier un produit",
        Icon: <MdModeEditOutline />,
    },
];

export const getTabSelected = (tabs: TabConfig[], currentTabSelected: string) => {
    return tabs.find((tab) => tab.index === currentTabSelected);
};
