import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function Header() {
    return (
        <header id="main-header">
            <div className="header-content justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/home">Sobre</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Contato</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </header>
    );
}

export default Header;