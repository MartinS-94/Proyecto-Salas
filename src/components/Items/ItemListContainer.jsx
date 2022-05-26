import React, { useEffect, useState } from 'react';
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css';
import { useParams } from 'react-router-dom';


export default function ItemListContainer({promo}) {
    const [productos , setProductos] = useState([]);

    const {categoryId} = useParams();

    useEffect(() =>{
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');
        let q = [];
        if(promo) {
            q = query(productsCollection, where('promo', '==', true));
        } else if (categoryId){
            q = query(productsCollection, where('categoria', '==', categoryId));
        } else {
            q = productsCollection;
        }
        getDocs(q)
            .then((res) =>{
                if (res.size === 0) {
                    console.log('No Results');
                }else {
                    setProductos(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
                }});
        },[promo,categoryId])

    return (
        <main className={s.contenedorProductos}>
            <ItemList productos={productos} />
        </main>
    )
} 