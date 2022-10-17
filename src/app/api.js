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





