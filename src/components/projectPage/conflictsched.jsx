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
import calendar from "../../assets/conflictsched/calendar.png";
import hover from "../../assets/conflictsched/hove.png";



class ConflictSced extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            {"title": "Role", "content": "Lead Product Designer"},
            {"title": "Platform", "content": "Web"},
            {"title": "Team", "content": "Product Manager, 2 Developers, Director of Product"},
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
                                <Text content="Fusion Play is a multi-platform league management software introduced in August 2022 as an upgraded and improved solution to our existing intramural software, Fusion IM. Both products are data dependent on our core recreation management product, Fusion for imports. 


In efforts with our product vision of having Fusion Play become a standalone app in version 2, we had to address one of the main dependencies which is scheduling." />
                            </Col>


                            <Col sm={12}>
                                <Text header="Problem" />
                                <Text content="Currently, League Admins have to refer back to the Fusion Desktop App calendar to check for availability before scheduling any games." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={calendar} />
                                    <Text Content= "Fusion Desktop App Calendar" />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Solution" />
                                <Text content="Give League Admins the ability to quickly create games and schedules for leagues, while checking for conflicts." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={reviewlist} />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Conflict checking" />
                                <Text title="Randomized schedule creation" />
                                <Text content="When League Admins input the time and location for the game in the Schedule Creation wizard, we do a conflict check to see if there's any games overlapping." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={randoschedconflict} />
                                    <Text Content= "Randomized schedule creation wizard." />
                                </div>


                                <Text title="Double elimination schedule creation" />
                                <Text content="Similar to the randomized schedule creation, we perform the check when the time and location is inputted." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={doublelim} />
                                    <Text Content= "Double elimination schedule creation wizard." />
                                </div>
                                

                                {/* <Text title="Viewing Conflicts" />
                                <Text content="If a conflict exist during the schedule creation process, League Admins can proceed to the Review page to manage and edit the games before publishing." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={reviewconflict} />
                                    <Text Content= "Games in conflict flow." />
                                </div> */}


                                <Text content="League Admins can hover on the games in conflict to edit or delete." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={hover} />
                                    <Text Content= "Conflict modal." />
                                </div>


                                <Text title="One-off games" />
                                <Text content="Another way to create games in the CMS is adding one-off games in the Games tab. We also want to be able to do a conflict check for these games." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={oneoff} />
                                    <Text Content= "Adding one-off games." />
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
                                <a href="project_three#">
                                        Mass Communication
                                        </a>
                                </li>
                                <li style={{ color: "#7A838B" }}>
                                  
                                        Conflict Scheduling
                                    
                                </li>
                                <li>
                                    <a href="project_five#">
                                        Video-on-Demand Integration
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

export default ConflictSced;
