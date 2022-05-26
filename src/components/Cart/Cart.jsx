import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider'

function Cart() {

    const {cart} = useContext(CartContext);

    const {removeFromCart} = useContext(CartContext);

    const {clearCart} = useContext(CartContext);

    const [total, setTotal] = useState(0);

    const navigate = useNavigate();

    const suma = (array) => {
        let subtotal = 0
        for (const i of array) {
            subtotal += i.precio * i.count;
        }
        setTotal(subtotal);
    }

    useEffect (() => {
        suma(cart);
    },[cart]);

    return (
        <>
            <h1>Carrito</h1>
            <div>
                    <p>Nombre</p>
                    <p>Cantidad</p>
                    <p>Precio</p>
            </div>
            {cart.map(e => (
                <div key={e.id}>
                    <p>{e.nombre}</p>
                    <p>{e.count}</p>
                    <p>{e.precio}</p>
                    <p onClick={() => removeFromCart(e)}>&#10060;</p>
                </div>
            ))}
            <h2>Total: {total}</h2>
            <button onClick={() => {navigate('/checkout')}}>Finalizar Compra</button>
            <button onClick={() => {clearCart()}}>Vaciar Carrito</button>
        </>
    )
}

export default Cart