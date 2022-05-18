import React from 'react';
import { useParams } from 'react-router-dom';

function CheckoutDone() {

    const {orderId} = useParams()

    return (
        <p>{orderId}</p>
    )
}

export default CheckoutDone