import React, { useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContextProvider";

const CartWidget = () => {

    const {cart} = useContext(CartContext);

    console.log(cart)

    const [cantidad, setCantidad] = useState(0);

    useEffect(() => {
        let sum = 0
        for (const i of cart) {
            sum += i.count
        }
        setCantidad(sum);
    
    },[cart])
    

    return (
    <>  
        <Link to='/cart'>
        <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-cart-e-commerce-and-business-xnimrodx-lineal-gradient-xnimrodx.png" alt="cart" widht="30px"/>    
        <p style={{color: 'white'}}>{cantidad}</p>
        </Link>
    </>
    );
}

export default CartWidget