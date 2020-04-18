import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import parkithifi1 from '../../assets/parkit/parkithifi1_.jpg';
import parkithifi2 from '../../assets/parkit/parkithifi2_.jpg';
import parkithifi3 from '../../assets/parkit/parkithifi3_.jpg';
import parkithifi4 from '../../assets/parkit/parkithifi4_.jpg';
import parkitgif1 from '../../assets/parkit/parkit_gif1.gif';
import parkitgif2 from '../../assets/parkit/parkit_gif2.gif';
import parkitbanner from '../../assets/parkit/parkitbanner_.jpg';
import parkituf from '../../assets/parkit/parkituf.png';

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
// const StressUnorderedList = () => {
//     return(
//         <ul style={{ paddingLeft: "15px"}}>
//             <li>Family (23%)</li>
//             <li>Friends and peer pressure (13%)</li>
//             <li>Worrying about college (7%)</li>
//             <li>Employment (17%)</li>
//             <li>Intimate relationships (14%)</li>
//             <li>Performing academically well (27%)</li>
//         </ul>
//     );
// };

const PainpointsUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>Users would like the task to be completed fast.</li>
            <li>They want to have some form of confirmation.</li>
            <li>Should be simple enough for everyone to understand.</li>
            <li>Users want the option of exiting whenever during the interaction process with the interface.</li>

        </ul>
    );
};

const NextStepUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>We often want to have strong visuals in our designs but accessibility is equally as important.</li>
            <li>It would be interesting to implement design for those with hard of hearing as well.</li>
            {/*<li>Sometimes there's a lot of features you want to include, but it is better to stick to one or your MVP before trying to validate other features.</li>*/}
        </ul>
    );
};


class Parkit extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            {"title": "Duration", "content": "5 Hours"},
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
                        <Card.Img variant="top" src={parkitbanner} />
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
                        <Col sm={8}><Text content="Some new touchscreen parking meters are being installed throughout your city. There is one meter for every 6 parking spots. Design the touchscreen interface so that drivers can pay for their parking spot for a certain duration, and parking attendants can give tickets to cars who do not pay, or whose parking has expired."/></Col>
                        <Col sm={4}><Text header="Constraints"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="The machine has a single touchscreen and the parking meters can accept credit card payments, but are not otherwise connected to the internet and are not Bluetooth enabled."/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="The Final Product"/></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkitgif1} />
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkitgif2} />
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

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Research"/></Col>
                        <Col sm={8}>
                            <Text content="I approached the problem by using a Guerrilla testing method with my preliminary low fidelity wireframes. I gave my interviewees a few scenarios with regards to parking and parking meters to get insight. Then, I proceeded to ask about their personal experience with parking and parking meters to better understand their pain points."/></Col>
                        <Col sm={4}><Text header="Pain Points"/></Col>
                            <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                            <PainpointsUnorderedList/>
                            </div>
                        </Col>
                        {/*<Col sm={4}><Text header="Stress"/></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    <div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Text content="According to a study conducted with 348 highschool students stress factors they face include:"/>*/}
                        {/*        <StressUnorderedList/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                        {/*<Col sm={4}><Text header="Mood Tracking Apps"/></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    <Text content="In a research done, it has been found that there are 4 stages of a mood tracking app: self-tracking, preparation, collection, reflection and action. With health and lifestyle apps dominating the app store market, it has been found that there's lack of support in the preparation and action stage. Nonetheless, users who use mood tracking apps improve their mood and self manage their mental illness by learning about their mood patterns. With this, the solution we create should empower our users to have a more active role over their own well-being."/>*/}
                        {/*</Col>*/}

                    </Row>
                </Container>

                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col sm={4}><Text title="IDEATE"/></Col>*/}
                {/*        <Col sm={8}></Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}

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
                        <Col sm={4}><Text header="User Flow"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkituf}/>
                            </div>
                            {/*<div style={{ marginBottom: "4rem"}}>*/}
                            {/*</div>*/}
                        </Col>
                        <Col sm={4}><Text header="User Story"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="As a user, I want to be able to purchase my parking ticket with ease, so that I can enjoy my time elsewhere."/>
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
                                <Card.Img src={parkithifi1}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkithifi2}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkithifi3}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={parkithifi4}/>
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

export default Parkit;