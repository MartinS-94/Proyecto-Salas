import React from 'react'
import listaProductos from '../../utils/listaProductos';
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import customFetch from '../../utils/customFetch';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {    
        // fetch que me de un producto 

    const [producto , setProducto] = useState({});
    const {itemId} = useParams();

    useEffect(() =>{
        customFetch(500, listaProductos)
        .then(res => {
            setProducto(res.find(i => i.id == itemId));
            console.log(res);
        } )
        .catch(err => console.log(err))
    },[producto])
    console.log(producto);
    return (
    <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer