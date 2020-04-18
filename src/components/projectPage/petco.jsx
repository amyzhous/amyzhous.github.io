import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import petcohifi1 from '../../assets/petco/petcohifi1.jpg';
import petcohifi2 from '../../assets/petco/petcohifi2.jpg';
import petcohifi3 from '../../assets/petco/petcohifi3.jpg';
import petcohifi4 from '../../assets/petco/petcohifi4.jpg';
import petcobanner from '../../assets/petco/petcobanner.jpg';
import petcogif1 from '../../assets/petco/petcogif1.gif';
import petcogif2 from '../../assets/petco/petcogif2.gif';
import petcogif3 from '../../assets/petco/petcogif3.gif';
import petcogif4 from '../../assets/petco/petcogif4.gif';
import petcowireframes from '../../assets/petco/petcowirframes.jpg';
import petcoideate from '../../assets/petco/petcoideation.jpg';
import petcoCA from '../../assets/petco/petco_CA.png';
import petcovd from '../../assets/petco/petcovd.jpg';


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
const PetTypesUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>Bird (5.7M)</li>
            <li>Cat (42.7M)</li>
            <li>Dog (63.4M)</li>
            <li>Horse (1.6M)</li>
            <li>Freshwater Fish (11.5M)</li>
            <li>Saltwater Fish (1.6M)</li>
            <li>Reptile (4.5M)</li>
            <li>Small animals (5.4M)</li>
        </ul>
    );
};

// const PainpointsUnorderedList = () => {
//     return(
//         <ul style={{ paddingLeft: "15px"}}>
//             <li>Users would like the task to be completed fast.</li>
//             <li>They want to have some form of confirmation.</li>
//             <li>Should be simple enough for everyone to understand.</li>
//
//
//         </ul>
//     );
// };

const NextStepUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>I will be improving features and iterating the design based on more feedback gathered from our target users</li>
            <li>I found that throughout these Creative Design Challenges I'm improving the way I design and think about MVPs by taking an iterative approach.</li>
        </ul>
    );
};


class Petco extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            {"title": "Duration", "content": "6 Hours"},
            {"title": "Role", "content": "Interactions, Ideation, Wireframes, High Fidelity"},
            {"title": "Team", "content": "Sole Designer + Researcher"},
            {"title": "Tools", "content": "Adobe Xd"},
        ];
    }

    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={petcobanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="OVERVIEW"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>
                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Prompt"/></Col>
                        <Col sm={8}><Text content="As a designer, I wanted to sharpen my UX/ UI skills so I decided to participate in the Abode Xd Daily Creative Challenge. For Day 2's challenge, the topic was simplify. We want to design an experience for finding and building friendships."/></Col>
                        <Col sm={4}><Text header="How Might We"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="How might we connect communal events for pet owners?"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="The Final Product"/></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcogif1} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcogif2} />
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcogif3} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcogif4} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="THE PROCESS"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Research"/></Col>
                        <Col sm={8}>
                            <Text content="I made a list of the potential users which included pet owners, pet babysitters, pet daycares, humane society and etc. I decided to focus this design on pet owners as 67% of US households own a family pet. Interestingly, the most common pets in a household are dogs with 26% ownership, followed by cats with 22% ownership."/>
                            <div style={{ marginBottom: "4rem"}}>
                            </div>
                        </Col>
                        <Col sm={4}><Text header="Types of Pets"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Text content="Doing some more research, I found out the most common types of pets owned in a US household. Based on the data, we will assume our user owns similar pets. These include following and the number of household that owns them in millions:"/>
                                <PetTypesUnorderedList/>
                            </div>

                        </Col>
                        <Col sm={4}><Text header="Pet Owners"/></Col>
                        <Col sm={8}><Text content="Pet keeping seems to be very common among homeowners and studies indicate that wealthy individuals are more likely to own pets than individuals that are less financially stable."/></Col>

                        <Col sm={4}><Text header="Competitive Analysis"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={petcoCA}/>
                            Our main competitors seems to be Eventbrite, Facebook Events and Meetup.com. All three offer the ability to see events nearby, filter search information and Sign In into an account. These three options are also very broad in the types of events and communities they have, hence our opportunity exists in creating a close-knit community for pet owners.
                            </div>
                            </Col>

                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="IDEATE"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Brainstorming"/></Col>
                        <Col sm={8}>
                        <div style={{ marginBottom: "4rem"}}>
                       <Card.Img src={petcoideate}/> Based on the information gathered during the research phase, I sorted features that were important to achieve our users' goals.
                        </div>
                        </Col>

                    </Row>
                </Container>

                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col sm={4}><Text header="Brainstorming"/></Col>*/}
                {/*        <Col sm={8}>*/}
                {/*            <div style={{ marginBottom: "4rem"}}>*/}
                {/*                <Text content="When brainstorming, I reviewed the research regarding mood tracking apps and realized that self-reflection and incentives are important features to include. I looked into Nir Eyal's Hook Model as inspiration. I wanted to include features that reward the user to keep using the app."/>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}


                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>

                        <Col sm={4}><Text header="User Story"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="As a pet owner, I want to be aware of events and meetups happening in my area, so that I can form a community with other pet owners."/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="Goals"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                            <Text statement={true} content="Users would like to form a community for pet owners nearby to attend or host events."/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="Primary KPI"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                            <Text  statement={true} content="Connecting pet owners to events in their specified area based on their filters."/>
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
                        <Col sm={4}><Text header="Wireframe Sketches"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcowireframes}/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="High Fidelity Mockups"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcohifi1}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcohifi2}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcohifi3}/>
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcohifi4}/>
                            </div>
                        </Col>

                        <Col sm={4}><Text header="Visual Design"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={petcovd}/>
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

            </div>

        )
    }
}

export default Petco;