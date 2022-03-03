import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Inbox from "./elements/Inbox";
import Dashboard from "./elements/Dashboard";
import LogIn from "./elements/LogIn";
import SignUp from "./elements/SignUp";
import Trash from "./elements/Trash";
import Sent from "./elements/Sent";
import { AuthProvider } from "./elements/Auth";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Messaging App Test</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Dashboard</Nav.Link>
                                <Nav.Link href="/inbox">Inbox</Nav.Link>
                                <Nav.Link href="/sent">Sent</Nav.Link>
                                <Nav.Link href="/trash">Trash</Nav.Link>
                                <Nav.Link href="/LogIn">LogIn</Nav.Link>
                                <Nav.Link href="/signup">SignUp</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/" exact element={<Dashboard/>} />
                    <Route path="/inbox" element={<Inbox/>} />
                    <Route path="/sent" element={<Sent/>} />
                    <Route path="/trash" element={<Trash/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<LogIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
