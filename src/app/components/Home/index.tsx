import React from "react";
import { Container, Row, Col, Table, Button, InputGroup, Form } from "react-bootstrap";
import { connect } from "react-redux";
// import { Dispatch } from "redux";

const Home = (props: any) => {
    const newOrder = () => {
        props.history.push('/orders/new')
    }
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
                <Col className="">
                    <Button className="primary" onClick={newOrder}><i className="bi bi-person-plus"></i>{' '}New</Button>{' '}
                    <Button className="warning float-end" ><i className="bi bi-search"></i>{' '}Search</Button>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={12}>
                    <div className="search-box">
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Search
                            </InputGroup.Text>

                        </InputGroup>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <br></br>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Order Date</th>
                                <th>Due Date</th>
                                <th>Progress</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>9977665544</td>
                                <td>12/11/2022</td>
                                <td>12/12/2022</td>
                                <td>In progress</td>
                                <td>...</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>9977665544</td>
                                <td>12/11/2022</td>
                                <td>12/12/2022</td>
                                <td>Not started</td>
                                <td>...</td>
                            </tr>
                            {/* <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>9977665544</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

// const getOrders = ()=>{
    // return new Promise();
// }

const mapStateToProps = (state: any) => {
    return {
        test: state.data
    }
}

const mapDispatchToProps = (/*dispatch: Dispatch*/) => {
    return {
        // getOrder: () => dispatch(getOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;