import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@material/react-card/index.scss';
import Typed from "react-typed";
import { Button, Nav, Container, Row, Col, Card } from "react-bootstrap";
import MyNavBar from "../navbar/MyNavBar";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import affmap1 from "./../../assets/circles_f/affinity mapping 1.jpg";
import affmap2 from "./../../assets/circles_f/affinity mapping 2.jpg";
/// import minapersona from "./../../assets/circles_f/persona.svg";
import minapersona from "./../../assets/circles_f/minapersona.jpg";

import hifi1 from "../../assets/circles_f/circlesmockup/hifi1.svg";

import hifi4 from "../../assets/circles_f/circlesmockup/hifi4.svg";

import hifi8 from "../../assets/circles_f/circlesmockup/hifi8.svg";

import uibanner from "../../assets/img/ui/uihero.svg";
import dui002 from "../../assets/img/ui/002_2.svg";
import dui001 from "../../assets/img/ui/001.svg";
import dui003 from "../../assets/img/ui/002_3.svg";
import dui004 from "../../assets/img/ui/002_4.png";

import Carousel from "react-bootstrap/Carousel";

const InsightUnorderedList = () => {
    return (
        <ul style={{ paddingLeft: "15px", color: "#555555" }}>
            <li>83% of our users said they like to shop with their eyes</li>
            <li>
                33% of our users search and filter based on identifying the
                brand they usually purchase
            </li>
            <li>25% of our users have tried shopping for groceries online</li>
            <li>
                Users would like to have information with regards to the expiry
                dates
            </li>
            <li>
                When it comes to fruit and produce, users are worried about the
                quality of their products when shopping online
            </li>
        </ul>
    );
};
const KpiOrderedList = () => {
    return (
        <ol style={{ paddingLeft: "15px", color: "#555555" }}>
            <li>
                Decreased time in full funnel conversion (e.g Entering the
                platform and purchasing at least 1 item [cohort X])
            </li>
            <li>
                Number of individuals from [cohort X] that make a return
                purchase within 3 weeks
            </li>
            <li>
                Decreased duration spent on platform within search functionality
            </li>
            <li>Decreased number of search terms within a session</li>
        </ol>
    );
};

const IdeasUnorderedList = () => {
    return (
        <ul
            style={{
                paddingLeft: "15px",
                color: "#555555",
                fontFamily: "Source Sans Pro",
                fontSize: "1.1rem",
            }}
        >
            <li>Social Meetup</li>
            <li>Advisor Helper</li>
            <li>Digital Mental Health Tool</li>
            <li>Simple Student Portal</li>
            <li>Newsfeed Board</li>
            <li>Study Buddy</li>
        </ul>
    );
};

const NextStepUnorderedList = () => {
    return (
        <ul
            style={{
                paddingLeft: "15px",
                color: "#555555",
                fontFamily: "Source Sans Pro",
            }}
        >
            <li>Conduct usability testing for MVP</li>
            <li>
                Determine the technical feasibility of certain features with
                developers
            </li>
            <li>Iterate MVP after gathering usability testing feedback</li>
        </ul>
    );
};

class Petco extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            // {"title": "Duration", "content": "2 weeks"},
            // {"title": "Role", "content": "Interaction Design, Ideation, Wireframes, High Fidelity, Product Management"},
            // {"title": "Team", "content": "Sole Designer + Researcher"},
            // {"title": "Tools", "content": "Invision Studio, Sketch, Pen + Paper"},
        ];
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center", marginBottom: "7rem" }}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card
                        className="projectBanner"
                        style={{ display: "inline-block", cursor: "default" }}
                    >
                        <Card.Img variant="top" src={uibanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent} />

                <Container className="nav-container">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text Title="UI Snippets" />
                            </Col>
                            <Col sm={12}>
                                <Text content="This is a collection of some of the UI and visual design work over the years from hackathons to projects and practice." />
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                {/* <Text Titlee="RESEARCH PROCESS"/> */}
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="DAILY UI — E-Commerce App" />
                            </Col>
                            {/* <Col sm={12}><Text content=""/></Col> */}
                            <Col sm={12}>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={dui002} />
                                </div>
                            </Col>
                            {/* <Col sm={12}><Text Content="Daily UI"/></Col> */}
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="DAILY UI — Delivery App" />
                            </Col>
                            {/* <Col sm={12}><Text content=""/></Col> */}
                            <Col sm={12}>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={dui004} />
                                </div>
                            </Col>
                            {/* <Col sm={12}><Text Content="Daily UI"/></Col> */}
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="DAILY UI — Receipe" />
                            </Col>
                            {/* <Col sm={12}><Text content=""/></Col> */}
                            <Col sm={12}>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={dui001} />
                                </div>
                            </Col>
                            {/* <Col sm={12}><Text Content="Daily UI"/></Col> */}
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="HACKATHON — Motivation Screens for GDM Tracking App" />
                            </Col>
                            {/* <Col sm={12}><Text content=""/></Col> */}
                            <Col sm={12}>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={dui003} />
                                </div>
                            </Col>
                            {/* <Col sm={12}><Text Content="Daily UI"/></Col> */}
                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="CIRCLES — a social app to build your circle of connections " />
                            </Col>
                            <Col sm={12}>
                                <Text content="As part of a user experience design course, we were tasked with designing a mobile app from end-to-end to solve a problem that students at the University of Waterloo might be facing." />
                            </Col>
                            <Col sm={12}>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hifi1}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        {/* <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={hifi3}
                                alt="Third slide"
                                />
                            </Carousel.Item> */}
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hifi4}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        {/* <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={hifi5}
                                alt="Third slide"
                                />
                            </Carousel.Item> */}
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={hifi8}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        {/* <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={designsys}
                                alt="Third slide"
                                />
                            </Carousel.Item> */}
                                    </Carousel>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <Text Content="Capstone Project (Jan - Apr 2019)" />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="bottom-breadcrumbs">
                        <nav style={{ fontFamily: "karla" }}>
                            <ul className="breadcrumb justify-content-center">
                                <li>
                                    <a href="projects#">ALL</a>
                                </li>
                                <li>
                                    <a href="project_one#">PC EXPRESS</a>
                                </li>
                                {/* <li><a href="project_two#">COMMUNITECH</a></li> */}
                                <li>
                                    <a href="project_three#">
                                        SEARCH AND GATHER
                                    </a>
                                </li>
                                <li style={{ color: "#E8998D" }}>
                                    UI SNIPPETS
                                </li>
                                {/* <li><a href="project_three#">eMERGE</a></li> */}
                            </ul>
                        </nav>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Petco;
