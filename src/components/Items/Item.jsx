import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function Item({stock,initial,id, imagen}) {
    const destino = `/item/${id}`
    return (
        <>
            {/* le pongo el estilo aca provisoriamente */}
            <Card key={id} style={{ width: '12rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link to = {destino}>
                <Card.Img variant="top" src={imagen} />
                </Link>
                <Card.Body>
                <Card.Title>Item {id}</Card.Title>
                <Card.Text> Alguna descripcion del item{id} </Card.Text>
                </Card.Body>
                <ItemCount stock={stock} initial={initial}/>
                <Card.Text> Disponibles: {stock} </Card.Text>
            </Card>
        </>
    )
}

export default Item