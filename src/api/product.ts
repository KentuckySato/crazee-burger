import { doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { Product } from "../enums/product"

export const syncBothMenu = (userId: string, menuUpdated: Product[]) => {
    const docRef = doc(db, "users", userId)

    const data = {
        username: userId,
        menu: menuUpdated,
    }
    setDoc(docRef, data)
}
