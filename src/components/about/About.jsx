import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@material/react-card/index.scss';
import "./About.css";
import cutebb from "../../assets/img/cutebb.png";
import amy from "../../assets/img/amy.jpg";
import meme from "../../assets/img/meme3.jpg";
import abouthero from "../../assets/img/abouthero.svg";

import { Button, Image, Container, Row, Col, Nav } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-body" id="about">
                <Container>
                    <Row>
                        <Col lg={12} md={12} style={{ textAlign: "center" }}>
                            <h1
                                style={{
                                    color: "#222222",
                                    fontFamily: "dm sans",
                                    fontWeight: "700",
                                    textAlign: "center",
                                    marginBottom: "1em",
                                }}
                            >
                                Welcome to my corner of the internet
                                <span className="wave"> 👋🏼</span>
                            </h1>
                        </Col>

                        <Col lg={5} md={12} className="about-image-container">
                            <Image
                                src={amy}
                                roundedCircle
                                className="about-image"
                            />
                        </Col>
                        <Col lg={12} md={12} className="about-bio-container">
                            <span className="about-bio">
                                <h3
                                    style={{
                                        color: "#222222",
                                        fontFamily: "dm sans",
                                        fontWeight: "500",
                                        marginBottom: "1em",
                                    }}
                                >
                                    — I'm a product designer based in{" "}
                                    <div className="my-story-location">
                                        📍Toronto.{" "}
                                    </div>
                                </h3>
                                <div
                                    className="my-story"
                                    style={{ fontSize: "1.125rem" }}
                                >
                                    <p>
                                        {" "}
                                        As a designer, I've always been
                                        fascinated by the impact design has on
                                        our daily lives. From the products we
                                        use to the services we rely on, I've
                                        seen firsthand how good design can make
                                        a difference in the way we experience
                                        the world around us.
                                    </p>
                                    <p>
                                        I am currently a product designer at
                                        InnoSoft, responsible for owning the 1 → 2 growth phase of Fusion Play.
                                        Prior to that, I worked on 0 → 1
                                        solutions for a new business vertical
                                        and helped design for our core product,
                                        Fusion.
                                    </p>
                                    <p>
                                        Outside of design, I've been exploring
                                        brunch restaurants 🥞, trying and
                                        failing climbing V2s and V3s at the gym
                                        🧗🏻, and travelling and
                                        immersing myself into the local culture
                                        🗺️.
                                    </p>
                                </div>
                                {/*<div  style={{ marginTop: "2rem"}}>*/}
                                {/*<a href="https://drive.google.com/file/d/1OThL8EtMv0QNwQyipVv-WowdD41SlzRG/view?usp=sharing">*/}
                                {/*    <Button className="button-attribute">Resume</Button>*/}
                                {/*</a>*/}
                                {/*</div>*/}
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
