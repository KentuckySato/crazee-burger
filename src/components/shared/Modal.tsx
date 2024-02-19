import styled from "styled-components"
import Button from "./Button"
import { theme } from "../../theme"
import { ReactElement } from "react"

type ModalProps = {
    title?: string
    content?: ReactElement | string
    isSuccessButton?: boolean
    isCancelButton?: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ title, content, isSuccessButton = false, isCancelButton = false, setIsModalOpen }: ModalProps) {
    return (
    <ModalStyled>
        <div className={"darkBG"} onClick={() => setIsModalOpen(false)} />
            <div className={"centered"}>
              <div className={"modal"}>
                    {title && <div className={"modalHeader"}>
                        <h5 className={"heading"}>{title}</h5>
                    </div>}
                    <div className={"modalContent"}>
                        {content && content}
                    </div>
                    <div className={"modalActions"}>
                      <div className={"actionsContainer"}>
                          {isSuccessButton && <Button className="successBtn" label="Payer" type="button" version="success" onClick={() => setIsModalOpen(false)} />}
                          {isCancelButton && <Button className="cancelBtn" label="Annuler" type="button" version="danger" onClick={() => setIsModalOpen(false)} />}
                        </div>
                    </div>
            </div>
        </div>
    </ModalStyled>
  )
}

const ModalStyled = styled.div`
    .darkBG {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100vw;
        height: 100vh;
        z-index: 8;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }

    .centered {
        z-index: 9;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .modal {
        width: 350px;
        height: auto;
        background: white;
        color: white;
        z-index: 10;
        border-radius: 16px;
        box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    }

    .modalHeader {
        height: 50px;
        background: white;
        overflow: hidden;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    .heading {
        margin: 0;
        padding: 10px;
        color: #2c3e50;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
    }

    .modalContent {
        padding: 10px;
        font-size: 14px;
        color: #2c3e50;
        text-align: center;
    }

    .modalActions {
        position: absolute;
        bottom: 2px;
        margin-bottom: 10px;
        width: 100%;
    }

    .actionsContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .deleteBtn {
        margin-top: 10px;
        cursor: pointer;
        font-weight: 500;
        padding: 11px 28px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: none;
        color: #fff;
        background: #ff3e4e;
        transition: all 0.25s ease;
    }

    .deleteBtn:hover {
        box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
        transform: translateY(-5px);
        background: #ff3e4e;
    }

    .successBtn {
        margin-top: 10px;
        cursor: pointer;
        font-weight: 500;
        padding: 11px 28px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: none;
        color: #fff;
        background: ${theme.colors.success};
        transition: all 0.25s ease;
    }

    .successBtn:hover {
        box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
        transform: translateY(-5px);
        background: ${theme.colors.success};
    }

    .cancelBtn {
        margin-top: 10px;
        cursor: pointer;
        font-weight: 500;
        padding: 11px 28px;
        border-radius: 12px;
        font-size: 0.8rem;
        border: none;
        color: #2c3e50;
        background: #fcfcfc;
        transition: all 0.25s ease;
    }

    .cancelBtn:hover {
        box-shadow: none;
        transform: none;
        background: whitesmoke;
    }
`;