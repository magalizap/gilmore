import campera from '../assets/img/campera-bordada.jpg'
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
    },
    {
        id: 2,
        nombre:  "Remera bordada Talampaya",
        imagen: remera, 
        stockDescripcion: "Stock disponible: 16",
        stock:16,
        categoria: "remera",
    },
    {
        id: 3,
        nombre: "Remera bordada Amberes",
        imagen: remera2, 
        stockDescripcion: "Stock disponible: 12",
        stock:12,
        categoria: "remera",
    },
    {
        id: 4,
        nombre: "Campera Parka",
        imagen: campera2, 
        stockDescripcion: "Stock disponible: 20",
        stock:20,
        categoria: "campera",
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

})







