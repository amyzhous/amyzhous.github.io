import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@material/react-card/index.scss';

import "./MyNavBar.css";
import navbarpic from "../../assets/img/navbar.svg";

import {
    Button,
    Nav,
    Navbar,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

class MyNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="top-nav-bar">
                <Container className="nav-container">
                    <Row>
                        <Col>
                            <Navbar collapseOnSelect expand="sm" sticky="top">
                                <Link to="/">
                                    {/* <Navbar.Brand style={{color: '#585b5c', fontSize:"2.5rem", fontWeight:"600", fontFamily:"Sacramento"}}>amyzhou.</Navbar.Brand> */}
                                    <Navbar.Brand
                                        style={{
                                            color: "#37373F",
                                            fontSize: "1.3rem",
                                            fontWeight: "400",
                                        }}
                                    >
                                        Amy Zhou
                                    </Navbar.Brand>
                                    {/*    color: #9F6BA0*/}
                                </Link>

                                <Navbar.Toggle
                                    aria-controls="responsive-navbar-nav"
                                    style={{ width: "30%", border: "0" }}
                                />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    {this.props.show && (
                                        <Nav
                                            pullRight
                                            className="justify-content-end ml-auto"
                                        >
                                            {/*<Nav.Item>*/}
                                            {/*    <AnchorLink href="#landing" className="top-nav-bar-button">Home</AnchorLink>*/}
                                            {/*</Nav.Item>*/}
                                            {/*<Nav.Item>*/}
                                            {/*<a href="/about" className="top-nav-bar-button">about</a>*/}
                                            {/*</Nav.Item>*/}
                                            <Nav.Item>
                                                {this.props
                                                    .redirectToProjectSection && (
                                                    <a
                                                        href="/#projects"
                                                        className="top-nav-bar-button"
                                                    >
                                                        Work
                                                    </a>
                                                )}
                                                {!this.props
                                                    .redirectToProjectSection && (
                                                    <AnchorLink
                                                        href="#projects"
                                                        className="top-nav-bar-button"
                                                    >
                                                        Work
                                                    </AnchorLink>
                                                )}
                                            </Nav.Item>
                                            <Nav.Item>
                                                <AnchorLink
                                                    href="#contact"
                                                    className="top-nav-bar-button"
                                                >
                                                    Contact
                                                </AnchorLink>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <a
                                                    href="/about"
                                                    className="top-nav-bar-button"
                                                >
                                                    About
                                                </a>
                                            </Nav.Item>
                                        </Nav>
                                    )}
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MyNavBar;
