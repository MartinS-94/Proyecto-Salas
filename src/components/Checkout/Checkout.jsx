import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { CartContext } from '../Context/CartContextProvider';


function Checkout() {

    const navigate = useNavigate();

    const {cart} = useContext(CartContext);

    const {clearCart} = useContext(CartContext);

    const [nombre, setNombre] = useState('');
    const [errNom, setErrNom] = useState(false);
    const [telefono, setTelefono] = useState('');
    const [errTel, setErrTel] = useState(false);
    const [mail, setMail] = useState('');
    const [errMail, setErrMail] = useState(false);

    const handleClick = () => {

        let suma = (array) => {
            let temp = 0
            for (const i of array) {
                temp += i.count*i.precio
            }
            return temp
        }

        let order = {
            buyer: {
                nombre,
                telefono,
                mail
            },
            items: cart,
            date: serverTimestamp(),
            total: suma(cart)
        };
        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({id}) => {
            let destino = `/checkoutdone/${id}`
            navigate(destino);
            clearCart();
        });
    }

    useEffect(() =>{
        console.log(nombre, errNom)
        if(nombre.length <3){
            setErrNom(false);
        } else if (nombre.length >3){
            setErrNom(true);
        }
    },[nombre,telefono,mail])
    return (
        <>
            <h1>Ultimo Paso</h1>
            <h2>Por favor complete estos datos</h2>
            <div>
                <label>Nombre</label>
                <input value={nombre} type={'text'} onChange={(e) => {setNombre(e.currentTarget.value)}}></input>
                {!errNom && <p>Complete correctamente este campo</p>}
                <label>Telefono</label>
                <input value={telefono} type={'number'} onChange={(e) => {setTelefono(e.currentTarget.value)}}></input>
                {!errTel && <p>Complete correctamente este campo</p>}
                <label>Mail</label>
                <input value={mail} type={'mail'} onChange={(e) => {setMail(e.currentTarget.value)}}></input>
                {!errMail && <p>Complete correctamente este campo</p>}
                <button onClick={() => handleClick()}>Enviar</button>
            </div>
            
        </>
    )
}

export default Checkout