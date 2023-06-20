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
import cshero from "../../assets/conflictsched/cshero.png";
import conflictmodal from "../../assets/conflictsched/conflictmodal.png";
import editgame from "../../assets/conflictsched/editgame.png";
import reviewlist from "../../assets/conflictsched/reviewlist.png";
import bracketview from "../../assets/conflictsched/bracketview.png";
import listview from "../../assets/conflictsched/listview.png";
import stepper from "../../assets/conflictsched/stepper.png";
import randoschedconflict from "../../assets/conflictsched/rando_sched_conflict.gif";
import reviewconflict from "../../assets/conflictsched/review_conflict.gif";
import oneoff from "../../assets/conflictsched/oneoff.gif";
import doublelim from "../../assets/conflictsched/double_elim.gif";




class ConflictSced extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            {"title": "Role", "content": "Lead Product Designer"},
            {"title": "Platform", "content": "Web, Mobile"},
            {"title": "Team", "content": "Product Manager, 4 Developers, Director of Product"},
            {"title": "Tools", "content": "Releasing in V2 (Sept 2023)"},
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
                        <Card.Img variant="top" src={cshero} />
                    </Card>
                </div>

                <Container className="nav-container">
                    <Col sm={12}>
                        <Text Title="Conflict Scheduling" />
                    </Col>
                    <ProjectInfo contents={this.projectInfoContent} />



                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="Overview" />
                                <Text content="Fusion Play is a multi-platform league management software introduced in August 2022 as an upgraded and improved solution to our existing intramural software, Fusion IM. Both products are data depend on our core recreation management product, Fusion for imports.

In efforts with our product vision of having Fusion Play become a standalone app in version 2, we had to address one of the main dependencies which is scheduling." />
                            </Col>


                            <Col sm={12}>
                                <Text header="Problem" />
                                <Text content="Give League Admins the ability to quickly create games and schedules for leagues, while checking for conflicts." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={conflictmodal} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Solution" />
                                <Text content="Give League Admins the ability to quickly create games and schedules for leagues, while checking for conflicts." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={stepper} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Conflict checking" />
                                <Text content="Conflicts only check for facilities and times." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={randoschedconflict} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>

                                <Text content="Admins can hover on the games with conflicts to delete or edit." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={reviewconflict} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>


                                <Text content="Admins can hover on the games with conflicts to delete or edit." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={oneoff} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>


                                <Text content="Admins can hover on the games with conflicts to delete or edit." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={doublelim} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>


                                <Text content="Admins can hover on the games with conflicts to delete or edit." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={editgame} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>

                                
                                <Text content="Admins can hover on the games with conflicts to delete or edit." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={editgame} />
                                    <Text Content= "Account creation for the tablet Staff App and mobile Player App." />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Outcome" />
                                <Text content="This feature will be shipping to Fusion Play clients in September 2023 and we’ve already heard positive sentiments from clients in our special interest group." />
                            </Col>



                        </Row>
                    </Container>

                    <Container>
                        <Row>
                            <Col sm={12}>
                                
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
                                <li style={{ color: "#E8998D" }}>
                                    SEARCH AND GATHER
                                </li>
                                <li>
                                    <a href="project_four#">UI SNIPPETS</a>
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

export default ConflictSced;
