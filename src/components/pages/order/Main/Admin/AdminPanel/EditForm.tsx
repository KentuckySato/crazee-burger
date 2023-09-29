import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "../Form/AdminForm";

export default function EditForm() {

    const { productSelected, setProductSelected, handleEditMenuProduct, handleEditBasketProduct, titleFieldRef } = useContext(OrderContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const productBeingUpdated = {
            ...productSelected,
            [name]: value
        };

        setProductSelected(productBeingUpdated); // update EditForm
        handleEditMenuProduct(productBeingUpdated); // update menu
        handleEditBasketProduct(productBeingUpdated); // update basket
    }

    return (

        <AdminForm
            product={productSelected}
            onChange={handleChange}
            inputRef={titleFieldRef}
        >
            <EditInfoMessage />
        </AdminForm>

    )
}