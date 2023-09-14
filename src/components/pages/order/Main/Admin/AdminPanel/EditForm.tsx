import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import { getInputTextsConfig } from "./inputTextConfig";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "../Form/AdminForm";

export default function EditForm() {

    const { productSelected, setProductSelected, handleEditProduct, titleFieldRef } = useContext(OrderContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        };

        setProductSelected(productBeingUpdated); // update EditForm
        handleEditProduct(productBeingUpdated); // update menu
    }

    const inputTexts = getInputTextsConfig(productSelected);

    return (

        <AdminForm
            product={productSelected}
            inputs={inputTexts}
            onChange={handleChange}
            inputRef={titleFieldRef}
        >
            <EditInfoMessage />
        </AdminForm>

    )
}