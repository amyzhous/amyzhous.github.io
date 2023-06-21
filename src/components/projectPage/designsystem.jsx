import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import { Button, Nav, Container, Row, Col, Card } from "react-bootstrap";
import MyNavBar from "../navbar/MyNavBar";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import SGbanner from "../../assets/img/ui/SG.svg";
import loginhero from "../../assets/login/loginhero.png";
import Carousel from "react-bootstrap/Carousel";
import color from "../../assets/designsystem/color.gif";
import responsive from "../../assets/designsystem/responsive.png";
import tables from "../../assets/designsystem/tables.png";
import snackbars from "../../assets/designsystem/snackbars.png";
import elevation from "../../assets/designsystem/elevation.png";
import playbuttons from "../../assets/designsystem/playbuttons.png";
import adminds from "../../assets/designsystem/adminds.png";
import sidesheets from "../../assets/designsystem/sidesheets.png";
import playdash from "../../assets/designsystem/playdash.png";
import waveeditor from "../../assets/designsystem/waveeditor.png";
import wavedash from "../../assets/designsystem/wavedash.png";
import playform from "../../assets/designsystem/playform.png";
import mvp from "../../assets/designsystem/mvp.jpg";
import slack from "../../assets/designsystem/slack.png";





class Designsystem extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            {"title": "Role", "content": "Led and managed the design system initiative"},
            {"title": "Platform", "content": "Web CMS (Content Management System)"},
            {"title": "Team", "content": "Design Team, 4 Product Teams, Director of Product"},
            {"title": "Timeline", "content": "Ongoing"},
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
                        <Card.Img variant="top" src={adminds} />
                    </Card>
                </div>


                <Container className="nav-container">
                            <Col sm={12}>
                                <Text Title="Admin CMS Design System" />
                            </Col>
                            <ProjectInfo contents={this.projectInfoContent} />

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="Overview" />
                                <Text content="When I first joined InnoSoft, we didn’t have a design system. Designers were tasked with owning 1-2 products within the product suite and we often prioritized speed over consistency. As time passed, this approach led to the accumulation of front-end debt and prompted internal discussions regarding the definition of consistency for the admin experience across our product suites." />
                           </Col>


                           <Col sm={12}>
                                <Text header="Things are everywhere" />
                                <Text content="The lack of a single and centralized source of truth for design was evident as we integrated more products into our suite. This led to designers spending a significant amount of time searching or re-building components instead of deep diving into the problem space." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={slack} />
                                    <Text Content= "Due to the lack of documentation, we often receive messages like this from Product Managers or Developers." />
                                </div>
                           </Col>


                           <Col sm={12}>
                                <Text header="My Role" />
                                <Text content="I led the initiative by facilitating a kickoff meeting with the design team and aligning our goals for what the system will be. We began to have weekly meetings afterwards to audit and determine what types of components each products CMS needs. Amidst this, our design team also migrated tools from Adobe Xd to Figma where I spreheaded the migration of the components into our Figma library." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={mvp} />
                                    <Text Content= "As a team, we came up with a list of things we wanted to tackle first." />

                                </div>
                           </Col>

                           <Col sm={12}>
                                <Text header="The Foundations" />
                                <Text title= "Colour"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={color} />
                                    <Text Content= "We collaborated with an external marketing agency to re-brand our products." />
                                </div>


                                <Text title= "Responsiveness"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={responsive} />
                                    <Text Content= "We worked on defining the breakpoints for our web-based products." />
                                </div>


                                <Text title= "Elevation"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={elevation} />
                                    <Text Content= "Elevation plays a huge role as our CMS is dark mode." />
                                </div>

                                <Text title= "Buttons"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={playbuttons} />
                                    <Text Content= "Buttons with the Fusion Play branding." />
                                </div>


                                <Text title= "Tables"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={tables} />
                                    <Text Content= "Tables are used heavily throughout the CMS." />
                                </div>


                                <Text title= "Side Sheets"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={sidesheets} />
                                    <Text Content= "We use side sheets primarily for filtering." />
                                </div>


                                <Text title= "Snackbars"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={snackbars} />
                                    <Text Content= "Snackbars are another commonly used component in the CMS." />
                                </div>


                                <Text header= "In Context"/>

                                <Text title= "Fusion Play Dashboard"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={playdash} />
                                </div>

                                <Text title= "Fusion Play Forms & Wizard"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={playform} />
                                </div>

                                <Text title= "Fusion Wave Dashboard"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={wavedash} />
                                </div>

                                <Text title= "Fusion Wave Playlist Page Editor"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={waveeditor} />
                                </div>


                                {/* <Text title= "Fusion Club Financials"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={clubtables} />
                                </div> */}

                            </Col>    
                            

                            <Col sm={12}>
                                <Text header="Outcome" />
                                <Text content="Currently, the MVP version of our design system is utilized by 4/5 of our products and we’re working closer with development on how we can continue to improve on the process. This is an ongoing process as we add more components and iterate on our design process and principles." />
                           </Col>
                        </Row>
                    </Container>
                  

                    

                  

                    <Container className="bottom-breadcrumbs">
                        <nav style={{ fontFamily: "dm sans" }}>
                            <ul className="breadcrumb justify-content-center">
                            <li>
                                    <a href="projects#">All Projects</a>
                                </li>
                                <li style={{ color: "#7A838B" }}>
                                <a href="project_one#">External Login</a>
                                </li>

                                <li  style={{ color: "#7A838B" }}>Admin CMS Design System
                                </li>
                               
                                <li>
                                    <a href="project_three#">
                                        Mass Communication
                                    </a>
                                </li>
                                <li>
                                    <a href="project_four#">
                                        Conflict Scheduling
                                    </a>
                                </li>
                                {/* <li><a href="project_five#">UX PLAYGROUND</a></li> */}
                                {/* <li><a href="project_three#">eMERGE</a></li> */}
                            </ul>
                        </nav>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Designsystem;
