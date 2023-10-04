import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    where,
} from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId: string) => {
    const docRef = doc(db, "users", userId)

    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        return docSnapshot.data()
    }
}

export const createUser = (userId: string) => {
    const docRef = doc(db, "users", userId)

    const data = {
        username: userId,
        menu: fakeMenu.SMALL,
    }

    setDoc(docRef, data)
}

export const authenticateUser = async (userId: string) => {
    // 1. Get user by userId
    // 2. If user doesn't exist, create it
    const existingUser = await getUser(userId)

    if (!existingUser) {
        createUser(userId)
    }
}

// TEST
export const createUserWithRandomId = async (username: string) => {
    const usersRef = collection(db, "users")

    const data = {
        username,
        menu: fakeMenu.LARGE,
    }

    addDoc(usersRef, data)
}

// TEST
export const getUserByUsername = async (username: string) => {
    const usersRef = collection(db, "users")

    const queryUsername = query(usersRef, where("username", "==", username))
    const querySnapshot = await getDocs(queryUsername)

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())

        if (doc.data().username === username)
            return { ...doc.data(), id: doc.id }
    })
}