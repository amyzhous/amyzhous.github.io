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
import affmap1 from "./../../assets/circles_f/affinity mapping 1.jpg";
import affmap2 from "./../../assets/circles_f/affinity mapping 2.jpg";
// import minapersona from "./../../assets/circles_f/persona.svg";
import minapersona from "./../../assets/circles_f/minapersona.jpg";
import comingsoon from '../../assets/img/coming_soon.svg';
import designdiamond from '../../assets/circles_f/designdiamond.png';
import hifi1 from'../../assets/circles_f/circlesmockup/hifi1.svg';
import hifi2 from'../../assets/circles_f/circlesmockup/hifi2.svg';
import hifi3 from'../../assets/circles_f/circlesmockup/hifi3.svg';
import hifi4 from'../../assets/circles_f/circlesmockup/hifi4.svg';
import hifi5 from'../../assets/circles_f/circlesmockup/hifi5.svg';
import hifi6 from'../../assets/circles_f/circlesmockup/hifi6.svg';
import hifi7 from'../../assets/circles_f/circlesmockup/hifi7.svg';
import hifi8 from'../../assets/circles_f/circlesmockup/hifi8.svg';
import cirsketch from '../../assets/circles_f/circles_sketches.svg';
import circleuf from '../../assets/circles_f/Circles_user_flow.svg';
import designsys from'../../assets/circles_f/designsystem.jpg';
import circlesbanner1 from'../../assets/circles_f/circlesbanner_.jpg';
import gif1 from'../../assets/circles_f/circles_gif1.gif';
import gif2 from'../../assets/circles_f/circles_gif2.gif';
import gif3 from'../../assets/circles_f/circles_gif3.gif';
import circlesutq1 from '../../assets/circles_f/circesutq1.png';
import circlesutq2 from '../../assets/circles_f/circlesutq2.jpg';



const InsightUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>83% of our users said they like to shop with their eyes</li>
            <li>33% of our users search and filter based on identifying the brand they usually purchase</li>
            <li>25% of our users have tried shopping for groceries online</li>
            <li>Users would like to have information with regards to the expiry dates</li>
            <li>When it comes to fruit and produce, users are worried about the quality of their products when shopping online</li>
        </ul>
    );
};
const KpiOrderedList = () => {
    return(
        <ol style={{ paddingLeft: "15px"}}>
            <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
            <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
            <li>Decreased duration spent on platform within search functionality</li>
            <li>Decreased number of search terms within a session</li>
        </ol>
    );
};

const IdeasUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px"}}>
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
    return(
        <ul style={{ paddingLeft: "15px"}}>
            <li>Conduct usability testing for MVP</li>
            <li>Determine the technical feasibility of certain features with developers</li>
            <li>Iterate MVP after gathering usability testing feedback</li>
        </ul>
    );
};


class Circles extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            {"title": "Duration", "content": "2 weeks"},
            {"title": "Role", "content": "Interaction Design, Ideation, Wireframes, High Fidelity, Product Management"},
            {"title": "Team", "content": "Sole Designer + Researcher"},
            {"title": "Tools", "content": "Invision Studio, Sketch, Pen + Paper"},
        ];
    }

    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={circlesbanner1} />
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
                        <Col sm={8}><Text content="The capstone project of DAC 309: Introduction to User Experience was to design a mobile app to solve a problem that a student at the University of Waterloo (UW) might be facing. The twelve week journey simulated a UX design cycle for a mobile app where we implemented design thinking to design a better online user experience for students at the university."/></Col>
                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={designdiamond}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="The Final Product"/></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={gif1} />
                            </div>
                        </Col>
                        {/*<Col sm={4}>*/}
                        {/*    <Card.Img src={gif2} />*/}
                        {/*</Col>*/}
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={gif3} />
                            </div>
                        </Col>
                    </Row>
                    <Row>

                        <Col sm={4}><Text header="Invision Prototype"/></Col>
                        <Col sm={8}>
                            {/*<div style={{ marginBottom: "4rem"}}>*/}
                            {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/zPx9O10wtEg"*/}
                            {/*        frameBorder="0"*/}
                            {/*        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*        allowFullScreen></iframe>*/}
                            {/*</div>*/}

                            <div style={{ marginBottom: "4rem"}}>
                                <a style={{color: "white"}} href="https://projects.invisionapp.com/prototype/CIRCLES-ck51nilen001q2e01rg1nkhpn">
                                    <button style={{color: "white"}}> View Invision Prototype </button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="RESEARCH PROCESS"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col sm={4}><Text header="User Interviews"/></Col>
                        <Col sm={8}><Text content="Using the unprocessed data gathered from the user interviews I re-organized them once again in an affinity diagram as well as colour-coding them in Excel for traits or feelings our users had in common to see some re-occurring themes. Once I processed the data, I created a persona of Mina Li, a second year university student studying Mathematics at UW."/></Col>
                        <Col sm={4}><Text header="Persona"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={minapersona}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="Problem Statement"/></Col>
                        <Col sm={8}>
                            <div style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="Despite being motivated individuals, our users face the challenge of finding other students on campus to listen and share advice with."/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}><Text title="IDEATE"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Affinity Mapping"/></Col>
                        <Col sm={4}>
                        {/*    < div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={affmap1}/>*/}
                        {/*    </div></Col>*/}
                        {/*<Col sm={4}></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    < div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={affmap2}/>*/}
                        {/*    </div></Col>*/}
                            < div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={affmap1}/>
                            </div></Col>
                        <Col sm={4}>
                            < div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={affmap2}/>
                            </div></Col>
                        <Col sm={8}></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text header="Brainstorming"/></Col>
                        <Col sm={8}>
                            <Text content="When brainstorming I aimed at producing quantity that can later be turned into quality. Here's some ideas I came up with:"/>
                            <IdeasUnorderedList/>
                            <Text content="I decided on an application that allows students to find a study buddy through a social meetup process. Circles, will represents a supportive social circle which allows students to find a (study) buddy to talk to. From the data, I noticed that our users value the connections they build at UW, which is an integral part of their university experience. Circles will be an outlet for students to make meaningful connections to build their supportive circle."/>
                        </Col>

                        <Col sm={4}><Text header="Goal"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                                <Text statement={true} content="Circles aims to provide UW students a way of finding and building their circle of connections."/>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="User Flow"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={circleuf}/>
                            </div>
                            {/*<div style={{ marginBottom: "4rem"}}>*/}
                            {/*</div>*/}
                        </Col>

                        <Col sm={4}><Text header="User Story"/></Col>
                        <Col sm={8}>
                            <div  style={{fontSize: "1.5rem"}}>
                            <Text statement={true} content="As a student at UW, I want to build connections with other individuals, so that I can enjoy being a student while still achieving my goals academically."/>
                            </div>
                            </Col>
                    </Row>
                </Container>
                {/*<Container >*/}
                {/*    <Row>*/}
                {/*        <Col sm={4}><Text title="HYPOTHESIS"/></Col>*/}
                {/*        <Col sm={8}></Col>*/}
                {/*        <Col sm={4}>*/}
                {/*            <Text header="Our Hypothesis"/></Col>*/}
                {/*        <Col sm={8}>*/}
                {/*            <div  style={{fontSize: "1.5rem"}}>*/}
                {/*                <Text statement={true} content="By reducing the amount of time it takes for a new user to find their grocery items, it will result in a higher conversion rate and retention."/>*/}
                {/*            </div>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}

                {/*<Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>*/}
                {/*    <Row>*/}
                {/*        <Col sm={4}><Text header="KPIs for Success"/></Col>*/}
                {/*        <Col sm={8}>*/}

                {/*            <Text content="">*/}
                {/*                <KpiOrderedList/>*/}
                {/*            </Text>*/}
                {/*        </Col>*/}


                {/*    </Row>*/}
                {/*</Container>*/}

                <Container>
                    <Row>
                        <Col sm={4}><Text title="DESIGN"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Low Fidelity Sketches"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={cirsketch}/>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text header="High Fidelity Mockups"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={hifi1}/>
                            </div>
                        </Col>

                        {/*<Col sm={4}></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    <div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={hifi2}/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={hifi3}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={hifi4}/>
                            </div>
                        </Col>

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={hifi5}/>
                            </div>
                        </Col>

                        {/*<Col sm={4}></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    <div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={hifi6}/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                        {/*<Col sm={4}></Col>*/}
                        {/*<Col sm={8}>*/}
                        {/*    <div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={hifi7}/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                        <Col sm={4}></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={hifi8}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="Visual Design"/></Col>
                        <Col sm={8}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={designsys}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={4}><Text title="USABILITY TESTING"/></Col>
                        <Col sm={8}></Col>
                        <Col sm={4}><Text header="Usability Testing 1"/></Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={circlesutq1}/>
                                These were the post-task questions we asked our users after they completed some usability tasks with our live prototype. Insights will be coming soon!
                        </div>
                        </Col>
                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={circlesutq2}/>
                            </div>
                            </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={4}><Text title="REFLECTION"/></Col>
                        <Col sm={8}><Text content=""/></Col>
                        <Col sm={4}><Text header="Conclusion"/></Col>
                        <Col sm={8}><Text content="It's really interesting to see how data that was gathered when we first did this capstone project can yield different solutions. I had a lot of fun exploring Invision Studio and researching about best practices with social meetup and dating apps. This exercise reminded that it is always important to revisit your work, even if you don't want to! I was able to design a solution that was completely different from the original one by considering the user's problem from a different perspective. I will be conducting usability testing on the prototype and updating as we move along!"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}><Text header="Next Steps"/></Col>
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

export default Circles;