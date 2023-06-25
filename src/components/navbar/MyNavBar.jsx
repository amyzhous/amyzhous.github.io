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
import amylogo from "../../assets/img/amylogo.svg";



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
                                    <Navbar.Brand
                                        style={{
                                            color: "#1E2126",
                                            fontSize: "1.125rem",
                                            fontWeight: "400",
                                        }}
                                    >
                                        <img src={amylogo} width="32px" />
                                    </Navbar.Brand>
                                </Link>

                                <Navbar.Toggle
                                    aria-controls="responsive-navbar-nav"
                                    style={{
                                        width: "30%",
                                        border: "0",
                                        color: "#1E2126",
                                    }}
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
                                                        work
                                                    </a>
                                                )}
                                                {!this.props
                                                    .redirectToProjectSection && (
                                                    <AnchorLink
                                                        href="#projects"
                                                        className="top-nav-bar-button"
                                                    >
                                                        work
                                                    </AnchorLink>
                                                )}
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                        <AnchorLink href="#contact" className="top-nav-bar-button">Contact</AnchorLink>
                                    </Nav.Item> */}

                                            <Nav.Item>
                                                <a
                                                    href="https://drive.google.com/file/d/1ux4DyQaUJtbW2Ri6k-EUkkfbTc_7MNRI/view?usp=sharing" target ="blank"
                                                    className="top-nav-bar-button"
                                                >
                                                    resume
                                                </a>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <a
                                                    href="/about"
                                                    className="top-nav-bar-button"
                                                >
                                                    about
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
