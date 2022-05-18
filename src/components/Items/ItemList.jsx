import React from 'react'
import Item from './Item'

function ItemList({productos}) {
    
    return (
            productos.map(e => (
            <Item 
            stock={e.stock} 
            id={e.id}
            imagen = {e.imagen}
            />
            ))
    )
}

export default ItemList 