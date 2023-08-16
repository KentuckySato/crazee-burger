import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import InputText from "../../../../../shared/InputText";
import { styled } from "styled-components";
import InputUrl from "../../../../../shared/InputUrl";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { OrderContext } from "../../../../../../context/OrderContext";
import { Product } from "../../../../../../fakeData/fakeMenu";

export default function AddForm() {

    const { menu, setMenu } = useContext(OrderContext)

    const [title, setTitle] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [price, setPrice] = useState("");

    const displayToastNotification = () => {

        toast.success("Ajouté avec succès !", {
            // icon: <FaUserSecret size={30} />,
            theme: "dark",
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newProduct: Product = {
            id: menu.length + 1,
            title,
            imageSource,
            price,
            quantity: 1,
            isAdvertised: false,
            isAvailable: true,
        };

        if (imageSource === "") {
            newProduct.imageSource = "/images/coming-soon.png";
        }

        // Set the new product in the menu at the beginning of the array
        setMenu([newProduct, ...menu]);

        resetForm();

        displayToastNotification();
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleChangeUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        // https://images.unsplash.com/photo-1565299507177-b0ac66763828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw2fHxidXJnZXJ8ZW58MHx8fHwxNjkxOTI4MzI0fDA&ixlib=rb-4.0.3&q=80&w=1080
        setImageSource(e.target.value);
    }
    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value);
    }

    const resetForm = () => {
        setTitle("");
        setImageSource("");
        setPrice("");
    }

    return (
        <AddFormStyled onSubmit={handleSubmit} className='addProductForm'>
            <div className="image-preview">
                {imageSource ? <img src={imageSource} alt="image preview" /> :
                    <div className="empty-image">Aucune image</div>
                }
            </div>
            <div className="text-inputs">
                <InputText
                    leftIcon={<FaHamburger />}
                    name="name"
                    placeholder="Nom du produit (ex: Super Burger)"
                    value={title}
                    onChange={handleChangeName}
                />
                <InputUrl
                    leftIcon={<BsFillCameraFill />}
                    name="url"
                    placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png/)"
                    value={imageSource}
                    onChange={handleChangeUrl}
                />
                <InputText
                    leftIcon={<MdOutlineEuro />}
                    name="price"
                    placeholder="Prix"
                    value={price}
                    onChange={handleChangePrice}
                />
            </div>
            <div className="submitButton">
                <button type="submit">Ajouter</button>
            </div>
        </AddFormStyled>
    )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: 70% 1fr;
    gap: 8px 20px;
    width: 70%;
    height: 11em;
    margin: auto 0px;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-self: flex-start;

    .empty-image {
        height: 100%;
        width: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        border: 1px solid rgb(228, 229, 233);
        line-height: 1.5;
        color: rgb(147, 162, 177);
        border-radius: 5px;
    }

    .image-preview img {
        height: 100px;
        width: 100px;
        object-fit: contain;
        object-position: center center;
        animation: 1s ease 0s 1 normal none running lFfr;
    }
    .text-inputs {
        display: grid;
    }
`;
