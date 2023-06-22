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
import masscommhero from "../../assets/masscomm/masscommhero.png";
import announcement from "../../assets/masscomm/announcement.png";
import notification from "../../assets/masscomm/notification.png";
import stepper1 from "../../assets/masscomm/stepper1.png";
import editor from "../../assets/masscomm/editor.png";
import createann from "../../assets/masscomm/createann.gif";
import commcenter from "../../assets/masscomm/commcenter.png";




class MassComm extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            {"title": "Role", "content": "Lead Product Designer"},
            {"title": "Platform", "content": "Web, Mobile"},
            {"title": "Team", "content": "Product Manager, Lead Developer, 2 Developers"},
            {"title": "Timeline", "content": "Shipped March 2023"},
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
                        style={{
                            display: "inline-block",
                            cursor: "default",
                            height: "100%",
                            marginTop: "2em",
                        }}
                    >
                        <Card.Img variant="top" src={masscommhero} />
                    </Card>
                </div>


                <Container className="nav-container">
                    <Col sm={12}>
                        <Text Title="Mass Communications" />
                    </Col>
                    <ProjectInfo contents={this.projectInfoContent} />
                          

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="Lack of tools" />
                                <Text content="Historically, communication between League Admins and participants have been ineffective due to the lack of tools. This results in missed deadlines, confusion regarding scheduling and policy changes, and promotional marketing." />
                                {/* <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={masscommhero} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div> */}
                            </Col>


                            <Col sm={12}>
                                <Text header="Effective and flexible communication" />
                                <Text content="In an effort to remove this high friction point for our clients, our team launched a new communication tool within the Admin CMS in March 2023 to streamline the communication process." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={stepper1} />
                                    <Text Content= "Select recipients from announcement creation wizard." />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Goals" />
                            </Col>
                            <Col sm={6}>
                                <Text title="For the admins..." />
                                <Text content="We want to provide Leagues with an easy-to-use set of communication tools that allow them share targeted updates regarding activities, leagues, schedules, and marketing to specific participant groups." />
                            </Col>
                            <Col sm={6}>   
                                <Text title="For the participants..." />
                                <Text content="We want to allow participants to receive targeted updates from their admins while filtering our irrelevant information."/>
                            </Col>


                            <Col sm={12}>
                                <Text header="Admin CMS" />
                                <Text title="Manage all communications" />
                                <Text content="A Communication Center was introduced as it’s own tab which will allow League Admins to manage and create announcements to their participants." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={commcenter} />
                                    <Text Content= "Communication Center in the CMS." />
                                </div>


                                <Text title="Create announcements on the fly" />
                                <Text content="League Admins can now easily create, save, or use a template to craft announcements on the fly for their participants." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={createann} />
                                    <Text Content= "Announcement creation flow" />
                                </div>
                                <Text content= "We introduced a WYSIWYG editor for League Admins to be able to customize their messages with images and branding from their institution. Admins can also include a push-notification with their announcements." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={editor} />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Player App" />
                                <Text title="Stay up-to-date with Announcements" />
                                <Text content="Participants can now view announcements without having to go through their emails or team captain." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={notification} />
                                    <Text Content= "Enabling notifications in the mobile app." />
                                </div>


                                <Text content="To assist participants in organizing and filtering the most relevant information, we implemented an announcement expiry feature on the Admin CMS that automatically removes outdated announcements from the Player App." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={announcement} />
                                    <Text Content= "Viewing announcements from the Player App." />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Impacts" />
                                <Text content="We released this in March 2023 as part of v1.3 and within a few days, we’ve seen a spike in usage of this tool and our clients have voiced their satisfactions with the flexibility it brings to their workflow. " />
                                
                            </Col>

                        </Row>
                    </Container>

                    
                   


                    <Container className="bottom-breadcrumbs">
                        <nav style={{ fontFamily: "dm sans" }}>
                            <ul className="breadcrumb justify-content-center">
                            <li>
                                    <a href="projects#">All Projects</a>
                                </li>
                                <li>
                                <a href="project_one#">
                                   External Login
                                   </a>
                                </li>

                                <li><a href="project_two#">Admin CMS Design System</a>
                                </li>
                               
                                <li  style={{ color: "#7A838B" }}>
                                        Mass Communication
                                </li>
                                <li>
                                    <a href="project_four#">
                                        Conflict Scheduling
                                    </a>
                                </li>
                                
                            </ul>
                        </nav>
                    </Container>
                 </Container>

            </div>
        );
    }
}

export default MassComm;
