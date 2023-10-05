import { useContext } from "react";
import { OrderContext } from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import AdminForm from "../Form/AdminForm";

export default function EditForm() {

    const { username, productSelected, setProductSelected, handleEditMenuProduct, titleFieldRef } = useContext(OrderContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // @TODO: think a better way to do this
        // Use case: when user type a price with a french comma, the amount to pay is not handle correctly.
        // Replace french comma with dot in real time.
        let newPrice;
        if (name === "price") {
            newPrice = value.replace(",", ".")
        }

        const productBeingUpdated = {
            ...productSelected,
            [name]: name === "price" ? newPrice : value,
        }

        setProductSelected(productBeingUpdated) // update EditForm
        handleEditMenuProduct(productBeingUpdated, username) // update menu
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