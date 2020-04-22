import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar.css";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import designdiamond from '../../assets/circles_f/designdiamond.png';
import moodilyhifi1 from '../../assets/moodily/moodily1.jpg';
import moodilyhifi2 from '../../assets/moodily/moodily2.jpg';
import moodilyhifi3 from '../../assets/moodily/moodily3.jpg';
import moodilyhifi4 from '../../assets/moodily/moodily4.jpg';
import moodilygif1 from '../../assets/moodily/moodily_gif1.gif';
import moodilygif2 from '../../assets/moodily/moodily_gif2.gif';
import moodilygif3 from '../../assets/moodily/moodily_gif3.gif';
import moodilygif4 from '../../assets/moodily/moodily_gif4.gif';
import moodilydesignsys from '../../assets/moodily/vd_moodily.png';
import moodilybanner from '../../assets/moodily/moodilybanner.png';



// const InsightUnorderedList = () => {
//     return(
//         <ul style={{ paddingLeft: "15px"}}>
//             <li>83% of our users said they like to shop with their eyes</li>
//             <li>33% of our users search and filter based on identifying the brand they usually purchase</li>
//             <li>25% of our users have tried shopping for groceries online</li>
//             <li>Users would like to have information with regards to the expiry dates</li>
//             <li>When it comes to fruit and produce, users are worried about the quality of their products when shopping online</li>
//         </ul>
//     );
// };
//


const StressUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>Family (23%)</li>
            <li>Friends and peer pressure (13%)</li>
            <li>Worrying about college (7%)</li>
            <li>Employment (17%)</li>
            <li>Intimate relationships (14%)</li>
            <li>Performing academically well (27%)</li>
        </ul>
    );
};

const IdeasUnorderedList = () => {
    return(
        <ol style={{ paddingLeft: "15px"}}>
            <li>Upload moments</li>
            <li>Input mood using emoticons</li>
            <li>Journaling</li>


        </ol>
    );
};

const NextStepUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>Abode Xd allowed me to design faster by reusing components and prototyping interactions right away.</li>
            <li>It's not just about designing interfaces but interactions are equally as important.</li>
            <li>Sometimes there's a lot of features you want to include, but it is better to stick to one or your MVP before trying to validate other features.</li>
        </ul>
    );
};


class Moodily extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            {"title": "Duration", "content": "8 Hours"},
            {"title": "Role", "content": "Interaction Design, Ideation, Wireframes, High Fidelity"},
            {"title": "Team", "content": "Sole Designer + Researcher"},
            {"title": "Tools", "content": "Adobe Xd, Pen + Paper"},
        ];
    }

    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={moodilybanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container>
                    <Row>
                        <Col sm={4} id="overview-3"><Text title="OVERVIEW" /></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>
                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Prompt"/></Col>
                        <Col sm={8}><Text content="As a designer, I wanted to sharpen my UX/ UI skills so I decided to participate in the Abode Xd Daily Creative Challenge. For Day 1's challenge, the topic was usability. We want to design an experience that focuses on improving a user's mental wellness."/></Col>
                        <Col sm={4}><Text header="How Might We"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="How might we empower data-driven emotional tracking for high schoolers?"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="The Final Product"/></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilygif1} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilygif2} />
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilygif3} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilygif4} />
                            </div>
                        </Col>
                        <Col sm={4}><Text header=""/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Text content="Moodily, which stands for mood + daily, is an emotions tracking app aimed for highschool students. There are three main ways to track your mood which include:"/>
                                <IdeasUnorderedList/>
                                The graphs are used to visualize the data gathered from the users to allow them to see their progress so far with recording, reflections and moods. Lastly, a calendar to visualize how long they have been using the app to retain our users.
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4} id="research-process-3"><Text title="THE PROCESS"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Research"/></Col>
                        <Col sm={8}>
                            <Text content="I first research the existing products available and did a competitive analysis on the ones who have similar functionalities. Then I proceeded to research about our users, highschool students. High schoolers encompasses a large category as some are seniors, and others are entering freshmen but one thing they all share is stress."/>
                        </Col>
                        <Col sm={4}><Text header="Stress"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Text content="According to a study conducted with 348 highschool students, a list of stress factors they face include:"/>
                                <StressUnorderedList/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="Mood Tracking Apps"/></Col>
                        <Col sm={8}>
                            <Text content="In another research done, it has been found that there are 4 stages of a mood tracking app: self-tracking, preparation, collection, reflection and action. With health and lifestyle apps dominating the app store market, it has been found that there's a lack of support in the preparation and action stage. Nonetheless, users who use mood tracking apps improve their mood and self manage their mental illness by learning about their mood patterns. With this, the solution we create should empower our users to have a more active role over their own well-being."/>
                        </Col>

                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4} id="deate-3"><Text title="IDEATE"/></Col>
                        <Col sm={8}></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Brainstorming"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Text content="When brainstorming, I reviewed the research regarding mood tracking apps and realized that self-reflection and incentives are important features to include. I looked into Nir Eyal's Hook Model as inspiration. I wanted to include features that reward the user to keep using the app."/>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="User Story"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="As a highschool senior, I want to be able to track my moods, so that I can be aware and manage my mental health."/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="DESIGN"/></Col>
                        <Col sm={8}></Col>
                    </Row>
                </Container>


                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="High Fidelity Mockups"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilyhifi1}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilyhifi2}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilyhifi3}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilyhifi4}/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="Visual Design"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={moodilydesignsys}/>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col sm={4}><Text title="REFLECTION"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="Key Takeaways"/></Col>
                        <Col sm={8}>
                            <Text content="">
                                <NextStepUnorderedList/>
                            </Text>
                        </Col>
                    </Row>
                </Container>


                <footer className="my footer" id="contact">
                    <Container  className="bottom-breadcrumbs">

                        <nav style={{fontFamily: "poppins"}}>
                            <ul className="breadcrumb justify-content-center">
                                <li><a href="projects#">All</a></li>
                                <li><a href="project_one#">PC Express</a></li>
                                <li><a href="project_two#">Circles</a></li>
                                <li style={{color:"#9F6BA0"}}>Moodily</li>
                            </ul>
                        </nav>

                    </Container>
                </footer>

                <nav id="navbar-example3" className="navbar navbar-light">
                    {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#overview-3">Overview</a>
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link ml-3 my-1" href="#item-1-1">Prompt</a>
                            <a className="nav-link ml-3 my-1" href="#item-1-2">The Final Product</a>
                            <a className="nav-link ml-3 my-1" href="#item-1-3">Invision Prototype</a>
                        </nav>
                        <a className="nav-link" href="#research-process-3">Research Process</a>
                        <a className="nav-link ml-3 my-1" href="#item-2-1">User Interviews</a>
                        <a className="nav-link ml-3 my-1" href="#item-2-2">Persona</a>
                        <a className="nav-link ml-3 my-1" href="#item-2-3">Problem Statement</a>
                        <nav className="nav nav-pills flex-column">
                        <a className="nav-link" href="#deate-3">Ideate</a>
                        <a className="nav-link ml-3 my-1" href="#item-3-1">Brainstorming</a>
                        <a className="nav-link ml-3 my-1" href="#item-3-2">Goal</a>
                        <a className="nav-link ml-3 my-1" href="#item-3-3">User Flow</a>
                        <a className="nav-link ml-3 my-1" href="#item-3-4">User Story</a>
                        {/*<nav className="nav nav-pills flex-column">*/}
                        {/*</nav>*/}
                            <a className="nav-link" href="#design-4">Design</a>
                            <a className="nav-link ml-3 my-1" href="#item-4-1">Low Fidelity</a>
                            <a className="nav-link ml-3 my-1" href="#item-4-2">High Fidelity</a>
                            <a className="nav-link ml-3 my-1" href="#item-4-3">Visual Design</a>
                            <a className="nav-link" href="#item-5">Usability Testing</a>
                            <a className="nav-link" href="#item-5">Reflection</a>
                            <a className="nav-link ml-3 my-1" href="#item-5-1">Conclusion</a>
                            <a className="nav-link ml-3 my-1" href="#item-5-2">Next Steps</a>
                        </nav>
                    </nav>
                </nav>

                <div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
                    <h4 id="overview-3">Overview</h4>
                    <p>...</p>
                    <h5 id="item-1-1">Prompt</h5>
                    <p>...</p>
                    <h5 id="item-1-2">The Final Product</h5>
                    <p>...</p>
                    <h5 id="item-1-2">The Final Product</h5>
                    <p>...</p>
                    <h5 id="item-1-2">The Final Product</h5>
                    <p>...</p>
                    <h4 id="research-process-3">Research Process</h4>
                    <p>...</p>
                    <h4 id="ideate-3">Ideate</h4>
                    <p>...</p>
                    <h5 id="item-3-1">Item 3-1</h5>
                    <p>...</p>
                    <h5 id="item-3-2">Item 3-2</h5>
                    <p>...</p>
                    <h4 id="design-4">Design</h4>
                    <p>...</p>
                    <h4 id="item-5">Usability Testing</h4>
                    <p>...</p>
                    <h4 id="item-6">Reflection</h4>
                    <p>...</p>
                </div>



            </div>

        )
    }
}

export default Moodily;
