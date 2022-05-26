import React, { useContext, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../Context/CartContextProvider';
import s from './ItemCount.module.css'
import {useNavigate} from 'react-router-dom';

function ItemCount({producto}) {
    const [count, setCount] = useState(1);

    const {addToCart} = useContext(CartContext);

    const {isInCart} = useContext(CartContext);

    const {setEnCarrito} = useContext(CartContext);

    const{enCarrito} = useContext(CartContext);

    const navigate = useNavigate();

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
        if(isInCart(item)) {
            alert('ya en carrito');
        } else {
            addToCart(item);
            setEnCarrito(true);
        }
    }

    useEffect(() => {
        setEnCarrito(false);
    },[])

    return (
    <>  
    {!enCarrito ? 
        <div>
        <div style={{ display: 'flex', gap: '20px' }}>
        <Button variant="secondary" onClick={restar}>-</Button>
        <h2>{count}</h2>
        <Button variant="secondary" onClick={sumar}>+</Button>
        </div>
        <Button variant="success" onClick={onAdd}>Comprar</Button>
        </div> :
        <div>
            <p>Agregaste al carrito</p>
            <Button onClick={() => navigate('/cart')}>Ir al carrito</Button>
            <Button onClick={() => navigate('/')}>Seguir comprando</Button>
        </div>
    }
    </>
);
};

export default ItemCount;