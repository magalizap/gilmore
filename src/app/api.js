

import { collection, getDocs, query,  addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from './FirebaseConfig'

// CREATE
export const createItem = async(obj) => {
    const colRef = collection(db, 'Orders')
    const data = await addDoc(colRef, obj)
    return data.id
}



// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'Productos')
    const result = await getDocs(query(colRef))
    return getArrayFromCollection(result);
}



// UPDATE
export const updateItem = async (id, stock) => {
    const colRef = collection(db, 'Productos');
    await updateDoc(doc(colRef, id), {stock})
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
}





