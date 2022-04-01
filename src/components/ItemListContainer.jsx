import React from "react";
import { Badge } from "react-bootstrap";


export default function ItemListContainer(greeting) {
    return (
        <>
            <h2> Hola, {greeting.name} <Badge bg="secondary">New</Badge></h2>;
        </>
    )
}