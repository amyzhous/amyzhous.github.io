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

// import minapersona from "./../../assets/circles_f/persona.svg";
import minapersona from "./../../assets/circles_f/minapersona.jpg";

import hifi1 from'../../assets/circles_f/circlesmockup/hifi1.svg';

import hifi4 from'../../assets/circles_f/circlesmockup/hifi4.svg';

import hifi8 from'../../assets/circles_f/circlesmockup/hifi8.svg';

import SGbanner from'../../assets/img/ui/SG.svg';
import dui002 from'../../assets/img/ui/002_2.svg';
import dui001 from'../../assets/img/ui/001.svg';
import dui003 from'../../assets/img/ui/002_3.svg';
import dui004 from'../../assets/img/ui/002_4.png';

import Carousel from 'react-bootstrap/Carousel'



const InsightUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px",color:"#555555"}}>
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
        <ol style={{ paddingLeft: "15px", color:"#555555"}}>
            <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
            <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
            <li>Decreased duration spent on platform within search functionality</li>
            <li>Decreased number of search terms within a session</li>
        </ol>
    );
};

const IdeasUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px", color:"#555555", fontFamily: "Source Sans Pro", fontSize: "1.1rem"}}>
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
        <ul style={{ paddingLeft: "15px", color:"#555555",fontFamily: "Source Sans Pro"}}>
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
            // {"title": "Duration", "content": "2 weeks"},
            // {"title": "Role", "content": "Interaction Design, Ideation, Wireframes, High Fidelity, Product Management"},
            // {"title": "Team", "content": "Sole Designer + Researcher"},
            // {"title": "Tools", "content": "Invision Studio, Sketch, Pen + Paper"},
        ];
    }

    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={SGbanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container className="nav-container">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text Title="Designing for conversion and growth"/>
                        </Col>
                        <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row style={{marginBottom:"4rem"}}>
                      
                        <Col sm={12}>
                            <div style={{fontFamily: "Karla", marginBottom:"2rem", fontSize: "1rem", color: "#666666"}}>
                                <b style={{color:"#37373F",fontFamily: "karla", fontWeight:"700"}}>Role /</b> Digital Designer
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "Karla", marginBottom:"2rem", fontSize: "1rem", color: "#666666"}}>
                                <b style={{color:"#37373F",fontFamily: "karla",fontWeight:"700"}}>Duration /</b> Aug 2020 - Present
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "Karla", marginBottom:"2rem", fontSize: "1rem", color: "##666666"}}>
                                <b style={{ color:"#37373F", fontFamily: "karla",fontWeight:"700"}}>Work /</b> Under NDA, contact me at <a href="mailto:ayjzhou@gmail.com">ayjzhou@gmail.com</a> to learn more about my work!
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "Karla", marginBottom:"2rem", fontSize: "1rem", color: "##666666"}}>
                                <b style={{ color:"#37373F", fontFamily: "karla",fontWeight:"700"}}>Tools /</b> Figma, Sketch, Adobe CC, Unbounce, Asana
                            </div>
                        </Col>
                       
                    </Row>
                </Container>

                        <Col sm={12}><Text content="Search + Gather is a digital marketing agency based in Toronto, Canada. Their clients range from small businesses to the best startups in Toronto and North America. The agency provides performance marketing with outstanding creatives and user experiences that drive conversions and growth for clients."/>
</Col>
                    </Row>
                </Container>

                <Container >
                    <Row>
                        <Col sm={12}><Text content="My role as the Digital Designer & Integration Specialist consists of designing creatives and solutions to landing page optimization. Rooted deep into marketing, I help optimized and drive conversion goals for user acquisition and improve customer experience through the use of data."/>
                        </Col>
                        {/* <Col sm={12}><Text content=""/></Col> */}
                    </Row>
                </Container>

                <Container >
                    <Row>
                        <Col sm={12}><Text content="Some of the clients I worked with within this role range from e-commerce companies to B2B and SaaS startups like HeyOrca, HiMama, Nix Color Sensors, Ipppinka, and Kritik to name a few."/>
                        </Col>
                        {/* <Col sm={12}><Text content=""/></Col> */}
                    </Row>
                </Container>

                <Container >
                    <Row>
                        <Col sm={12}><Text content="My projects are currently under NDA, but if you are interested in learning more you feel free to email me."/> 
                        </Col>
                        {/* <Col sm={12}><Text content=""/></Col> */}
                    </Row>
                </Container>
           

                <Container  className="bottom-breadcrumbs">

                    <nav style={{fontFamily: "karla"}}>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="projects#">ALL</a></li>
                            <li><a href="project_one#">PC EXPRESS</a></li>
                            {/*<li><a href="project_two#">Circles</a></li>*/}
                            <li style={{color:"#E8998D"}}>COMMUNITECH</li>
                            <li><a href="project_four#">UI SNIPPETS</a></li>
                            <li><a href="project_five#">UX PLAYGROUND</a></li>
                            {/* <li><a href="project_three#">eMERGE</a></li> */}
                        </ul>
                    </nav>

                </Container>
                </Container>


            </div>

        )
    }
}

export default Circles;