import {Col, Row, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";



function ItemDetail ({producto}) {
    console.log(producto);
    return (
        <Container style = {{alignItems : "center"}}>
        <Row>
        <Col xs={12} md={8}>
            <img src={producto.imagen} />
        </Col>
        <Col xs={12} md={4}>
            <h2>{producto.nombre}</h2> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui possimus id eius, in deserunt neque quas! Commodi quo inventore doloremque deserunt, beatae tempora, natus optio, nemo nesciunt quis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur consequatur ipsum quos alias quaerat? Necessitatibus, at animi aliquid, corporis fugit autem asperiores repellat aliquam voluptas, corrupti quia minima quis.</p>
        </Col>
        </Row>

        <Row>
        <Col xs={12} md={12}>
            <h2>$ {producto.precio}</h2>
        </Col>
        </Row>


        <Row>
            <Col xs={12} sm={8} >
                <h2>STOCK: {producto.stock}</h2>
            </Col>
        </Row>
        <ItemCount producto={producto}/>
    </Container>
    
    );
}

export default ItemDetail