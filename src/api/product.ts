import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { Products } from "../enums/product"

export const syncBothMenu = (userId: string, menuUpdated: Products) => {
    const docRef = doc(db, "users", userId)

    const data = {
        username: userId,
        menu: menuUpdated,
    }
    setDoc(docRef, data)
}

export const getMenu = async (userId: string) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const { menu } = docSnapshot.data()
        return menu as Products
    }
}
