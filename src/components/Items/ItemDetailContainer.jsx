import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { CartContext } from '../Context/CartContextProvider';

function ItemDetailContainer() {    
        // fetch que me de un producto 

    // const {setEnCarrito} = useContext(CartContext);    

    const [producto , setProducto] = useState({});
    const {itemId} = useParams();

    useEffect(() =>{
        const db = getFirestore();
        const itemRef = doc(db, 'productos', itemId);

        getDoc(itemRef)
        .then((res) => {
            if (res.exists()) {
                setProducto({id: res.id, ...res.data()});
            }
        })
    },[itemId])
    return (
    <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer