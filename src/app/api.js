/*import campera from '../assets/img/campera-bordada.jpg'
import remera from '../assets/img/remera-gris.jpg'
import remera2 from '../assets/img/remera-bordada-amberes.jpg'
import campera2 from '../assets/img/campera-parka.jpg'

const productos = [
    {
        id: 1,
        nombre:"Campera bordada Caracas",
        imagen: campera,
        stockDescripcion: "Stock disponible: 27",
        stock: 27,
        categoria: "campera",
        precio: 6500
    },
    {
        id: 2,
        nombre:  "Remera bordada Talampaya",
        imagen: remera, 
        stockDescripcion: "Stock disponible: 16",
        stock:16,
        categoria: "remera",
        precio: 2500
    },
    {
        id: 3,
        nombre: "Remera bordada Amberes",
        imagen: remera2, 
        stockDescripcion: "Stock disponible: 12",
        stock:12,
        categoria: "remera",
        precio: 2300
    },
    {
        id: 4,
        nombre: "Campera Parka",
        imagen: campera2, 
        stockDescripcion: "Stock disponible: 20",
        stock:20,
        categoria: "campera",
        precio:8750
    }

]

// Array de productos --> ItemListContainer
export const getProductos = () =>{

    const task = new Promise((res, rej) =>{ 
        setTimeout(()=>{
            res(productos)
        },2000)
    })


    return task
}



export const getItem = () => new Promise((res, rej) =>{
   setTimeout(() =>{
        res(productos)
   },2000)

})*/

import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc,  where } from "firebase/firestore"
import { db } from './FirebaseConfig'

// CREATE
export const createItem = async(obj) => {
    const colRef = collection(db, 'Productos')
    const data = await addDoc(colRef, obj)
    return data.id
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db,'Productos')
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems= async ()  => {
    const colRef = collection(db, 'Productos')
    const result = await getDocs(query(colRef))
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'Productos')
    const result = await getDocs(query(colRef, where('age', '==', value)))
    return getArrayFromCollection(result)
}

export const getItemById = async (id) => {
    const colRef = collection(db,'Productos')
    const result = await getDoc(doc(colRef, id))
    return result.data()
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Productos')
    await deleteDoc(doc(colRef, id))
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
}





