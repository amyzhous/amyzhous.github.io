import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';

import './MyNavBar.css';

import {Button, Nav,Navbar, Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'


class MyNavBar extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div className="top-nav-bar">
                <Container>
                    <Row>
                        <Col >
                            <Navbar collapseOnSelect expand="sm" sticky="top">
                                <Link to="/">
                                    <Navbar.Brand>amy zhou</Navbar.Brand>
                                </Link>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                            {this.props.show &&
                                <Nav pullRight className="justify-content-end ml-auto" >
                                    {/*<Nav.Item>*/}
                                    {/*    <AnchorLink href="#landing" className="top-nav-bar-button">Home</AnchorLink>*/}
                                    {/*</Nav.Item>*/}
                                    <Nav.Item>
                                    <AnchorLink href="#about" className="top-nav-bar-button">About</AnchorLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <AnchorLink href="#projects" className="top-nav-bar-button">Projects</AnchorLink>
                                    </Nav.Item>
                                    {/*<Nav.Item>*/}
                                    {/*    <AnchorLink href="#challenges" className="top-nav-bar-button">Challenges</AnchorLink>*/}
                                    {/*</Nav.Item>*/}
                                    <Nav.Item>
                                        <AnchorLink href="#contact" className="top-nav-bar-button">Contact</AnchorLink>
                                    </Nav.Item>
                                </Nav>
                            }
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default MyNavBar;