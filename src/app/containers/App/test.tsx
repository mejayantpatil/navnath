import Customer from "app/components/Customer";
import Home from "app/components/Home";
import Login from "app/components/Login";
import Orders from "app/components/Orders";
import React, { useState } from "react";
import { Navbar, Offcanvas, ListGroup, Container } from "react-bootstrap";
import { Switch, Route, RouteComponentProps } from "react-router";


export namespace App {
    export interface Props extends RouteComponentProps<void> {}
  }
  
const Main = (props: App.Props) =>{
    const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState('orders');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setMenu = (menu: string)=>{
    handleClose();
    setActiveMenu(menu);
    props.history.push(menu);
  }
  return (<div>
    <Navbar bg="light" fixed="top" expand={false} className="mb-3">
      <Container>
        <Navbar.Brand href="/">Brand Logo</Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} />
      </Container>
    </Navbar>
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup defaultActiveKey={activeMenu} variant="flush">
        <ListGroup.Item action onClick={setMenu.bind(null,'/home')}>
            <span >Home</span>
          </ListGroup.Item>
          <ListGroup.Item action onClick={setMenu.bind(null,'/orders')}>
            <span >Orders</span>
          </ListGroup.Item>
          <ListGroup.Item action onClick={setMenu.bind(null,'/customers')}>
          <span >Customers</span>
          </ListGroup.Item>
          <ListGroup.Item action onClick={setMenu.bind(null,'')}>
            <label >Profile</label>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
    <Switch>
      {/* <Route path="/" component={Login} /> */}
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/orders/new" component={Customer} />
      <Route path="/orders" component={Orders} />
    </Switch>
  </div>)

}

export default Main;