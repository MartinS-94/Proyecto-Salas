import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Item({producto}) {
    return (
        <>
            {/* le pongo el estilo aca provisoriamente */}
            <Card key={producto.id} style={{ width: '12rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link to = {`/item/${producto.id}`}>
                <Card.Img className="foto-producto" variant="top" src={producto.imagen} />
                </Link>
                <Card.Body>
                <Card.Title className="nombre-producto">{producto.nombre}</Card.Title>
                </Card.Body>
                <Card.Text className="stock-producto"> Disponibles: {producto.stock} </Card.Text>
            </Card>
        </>
    )
}

export default Item