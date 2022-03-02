import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Inbox from './Pages/Inbox';
import Sent from './Pages/Sent';
import Trash from './Pages/Trash';

function App() {
    return ( 
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Messaging App Starter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inbox</Nav.Link>
                            <Nav.Link href="/sent">Sent</Nav.Link>
                            <Nav.Link href="/trash">Trash</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" exact component={Inbox} />
                <Route path="/sent" component={Sent} />
                <Route path="/trash" component={Trash} />
            </Routes>
        </Router>
    );
}

export default App;
