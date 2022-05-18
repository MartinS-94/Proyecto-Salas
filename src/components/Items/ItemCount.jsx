import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContextProvider';
import s from './ItemCount.module.css'

function ItemCount({producto}) {
    const [count, setCount] = useState(1);

    const {addToCart} = useContext(CartContext);

    const {isInCart} = useContext(CartContext);

    function sumar(){
        if(count < producto.stock){
            setCount(count + 1);
        }
    }

    function restar(){
        if (count > 0 ){
            setCount(count - 1);
        }
    }

    function onAdd(){
        let item = {...producto, count};
        isInCart(item) ? alert('ya en carrito') : addToCart(item);
    }

    return (
    <>
        <div style={{ display: 'flex', gap: '20px' }}>
        <Button variant="secondary" onClick={restar}>-</Button>
        <h2>{count}</h2>
        <Button variant="secondary" onClick={sumar}>+</Button>
        </div>
        <Button variant="success" onClick={onAdd}>Comprar</Button>
    </>
);
};

export default ItemCount;