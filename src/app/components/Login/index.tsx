import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";

const Login = (props: any) => {
    const login = () => {
        props.history.push('/home')
    }
    return (<Container>
        <Row>
            <Col>
            <br></br>
                <h4>
                    Login To App
                </h4>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <div className="d-grid gap-2">
                <Button onClick={login} variant="primary" type="submit" >
                    Login
                </Button>
                </div>
                {/* </Form> */}
            </Col>
        </Row>
    </Container>
    )
}
export default Login;