import React, { useEffect, useState } from 'react';
import customFetch from '../../utils/CustomFetch';
import listaProductos from '../../utils/ListaProductos';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'

export default function ItemListContainer() {
    const [productos , setProductos] = useState([]);

    useEffect(() =>{
        customFetch(3000, listaProductos)
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    },[productos])

    return (
        <main className={s.contenedorProductos}>
            <ItemList productos={productos} />
        </main>
    )
} 