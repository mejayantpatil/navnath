import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Customer from "../Customer";


const Orders = (props: any) => {
    const save = () => {
        props.history.push('home')
    }
    // const addItems = () => {

    // }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <Container>
            <Row>
                <Col><br></br></Col>
            </Row>
            <Row>
                <Col>
                    <h4>Orders</h4>
                    <hr></hr>
                </Col>
            </Row>

            <Row>
                <Customer save={save} addItems={handleShow} />
                <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
            </Row>
        </Container>
    )
}

export default Orders;