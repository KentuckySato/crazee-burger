import Button from "../../../../../shared/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({ isSubmitted }: { isSubmitted: boolean }) {
    return (
        <>
            <Button
                type="submit"
                className="submit-button"
                label={"Ajouter un nouveau produit au menu"}
                version="success"
            />
            {isSubmitted && <SubmitMessage />}
        </>
    )
}
