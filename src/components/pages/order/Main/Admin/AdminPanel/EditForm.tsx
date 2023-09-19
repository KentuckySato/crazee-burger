import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
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