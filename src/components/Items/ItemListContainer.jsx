import React, { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection } from 'firebase/firestore';
// import customFetch from '../../utils/customFetch';
// import listaProductos from '../../utils/listaProductos';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {
    const [productos , setProductos] = useState([]);

    // useEffect(() =>{
    //     customFetch(500, listaProductos)
    //     .then(res => setProductos(res))
    //     .catch(err => console.log(err))
    // },[productos])

    useEffect(() =>{
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');

        // const q = query(productsCollection, where('categoria', '===', 'Ipa'));
        // if category ? query : completa
        getDocs(productsCollection)
        .then((res) =>{
            if (res.size === 0) {
                console.log('No Results')
            }
            setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
        })
    },[])

    return (
        <main className={s.contenedorProductos}>
            <ItemList productos={productos} />
        </main>
    )
} 