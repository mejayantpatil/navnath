import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Customer = (props: any) => {

    return (<Container>
        <Row>
            <Col><br></br></Col>
        </Row>
        <Row>
            <Col>
                <h4>Customers</h4>
                <hr></hr>
            </Col>
        </Row>
        <Row>
            <Col className="justify-content-center">
                {/* <Form> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Mobile</Form.Label>
                    <Form.Control type="text" placeholder="Enter Mobile" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button onClick={props.addItems} variant="primary" type="button" >
                        Add items
                    </Button>
                    <Button onClick={props.save} variant="primary" type="button" >
                        Save
                    </Button>
                </div>
                {/* </Form> */}
            </Col>
        </Row>
    </Container>
    );
}

export default Customer;