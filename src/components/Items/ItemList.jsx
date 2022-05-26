import React from 'react'
import Item from './Item'

function ItemList({productos}) {
    
    return (
            productos.map(e => (
            <Item key={e.id}
            producto = {e}
            />
            ))
    )
}

export default ItemList 