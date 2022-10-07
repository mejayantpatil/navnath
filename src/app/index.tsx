import React from 'react';
// import { Route, Switch } from 'react-router';
// import { App as TodoApp } from 'app/containers/App';
import { hot } from 'react-hot-loader';
// import Login from './components/Login';
// import Home from './components/Home';
// import { Col, Container, Row, ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Main from './containers/App/test';
import { Switch, Route } from 'react-router';
// import Login from './components/Login';
// import Orders from './components/Orders';
// import Customer from './components/Customer';
// import { Offcanvas, ListGroup, Navbar, Container } from 'react-bootstrap';


export const App = hot(module)(() => (
  <Switch>
      <Route path="/" component={Main} />
      </Switch>
));
