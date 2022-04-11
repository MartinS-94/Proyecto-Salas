import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import s from './ItemCount.module.css'

function ItemCount({stock,initial}) {
    const [count, setCount] = useState(initial);

function sumar(){
    if(count < stock){
        setCount(count + 1);
    }
}

function restar(){
    if (count > 0 ){
        setCount(count - 1);
    }
}

function onAdd(){
    alert('Compraste ' + count + ' Item1')
}

return (
    <>
        <Card style={{ width: '18rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Card.Body>
            <Card.Title>Item 1</Card.Title>
            <Card.Text>
            descripcion del item1
            </Card.Text>
            <div style={{ display: 'flex', gap: '20px' }}>
            <Button variant="secondary" onClick={restar}>-</Button>
            <h2>{count}</h2>
            <Button variant="secondary" onClick={sumar}>+</Button>
            </div>
            <Button variant="success" onClick={onAdd}>Comprar</Button>
        </Card.Body>
        </Card>
    </>
);
};

export default ItemCount;