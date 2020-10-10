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
import designapproach from '../../assets/moodily/designapproach.svg';
import designsprint from '../../assets/moodily/designsprint.svg';
import insightsfromrandd from '../../assets/moodily/insightsfromrandd.svg';
import emergebanner from'../../assets/moodily/emergebanner.svg';
import swot from'../../assets/moodily/swot.svg';



class Emerge extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            // {"title": "Company", "content": "eMERGE Guelph"},
            // {"title": "Role", "content": "UX Research, Service Designer"},
            // {"title": "Team", "content": "2 Designers, 1 Business Analyst, and Team Lead"},
            // {"title": "Duration", "content": "Jun-Aug 2020"},
        ];
    }

    render() {
        return(
            
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={emergebanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>


                <Container className="nav-container">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text Title="eMERGE Guelph"/>
                        </Col>
                        {/* <Col sm={12} >
                            <div  style={{fontSize: "25px", fontStyle: "italic", fontFamily: "Source Sans Pro",  marginBottom:"4rem"}}>
                                —fighting climate change
                            </div>
                        </Col> */}
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}> 
                    <Row style={{marginBottom:"4rem"}}>
                    <Col sm={12}>
                            <div style={{fontFamily: "rubik", marginBottom:"2rem", fontSize: "1.1rem", color: "#6c757d"}}>
                                <b style={{color:"#acc4ef", fontFamily: "chivo"}}>Company /</b> eMERGE Guelph
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "rubik", marginBottom:"2rem", fontSize: "1.1rem", color: "#6c757d"}}>
                                <b style={{color:"#acc4ef", fontFamily: "chivo"}}>Team /</b> 2 Service designers, 1 Business analyst, and 1 mentor
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "rubik", marginBottom:"2rem", fontSize: "1.1rem", color: "#6c757d"}}>
                                <b style={{color:"#acc4ef",fontFamily: "chivo"}}>Role /</b> Service Design, UX Research
                            </div>
                        </Col>
                        
                        <Col sm={12}>
                            <div style={{fontFamily: "rubik",fontSize: "1.1rem",color: "#6c757d" }}>
                                <b style={{color:"#acc4ef", fontFamily: "chivo"}}>Timeline /</b> Jun-Aug 2020
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                        <Row>
                        <Col sm={12}><Text title="The economic impacts of Covid-19"/></Col>
                        <Col sm={4}>
                            <Text header="eMERGE"/>
                        </Col> 
                    
                        <Col sm={8}>
                            <Text content="eMERGE is a Guelph based non-profit with a mission to fight climate change through a combination of energy efficiency projects. By 2050, eMERGE strives to achieve 100% renewable energy."/>
                        </Col>
                        </Row>
                    <Row>
                        <Col sm={4}>
                            <Text header="The current situation"/>
                        </Col>

                        <Col sm={8}>
                            <Text content="eMERGE’s revenue has been severely impacted by COVID-19 - all of its sources of regular income (home-tune ups) have been drastically reduced or eliminated. March to August projections suggest an 89% reduction in funding."/>
                        </Col>
                        <Col sm={4}>
                            <Text header="The problem"/>
                        </Col>
                        <Col sm={8}>
                            <Text content="Our goal is to aid eMERGE management by re-evaluating their programming post-COVID 19 by exploring new revenue generation strategies and continue their mission to fight climate change."/>
                        </Col>
                        <Col sm={4}>
                            <Text header="Our solution"/>
                        </Col>
                        <Col sm={8}>
                            <Text content="We started out by exploring different strategies before focusing on 1-2 long term strategies for eMERGE to implement. The main strategies of focus were exploring partnerships with charities in the environmental and climate change space and establishing a digital presence. If you are interested in the in-depth solution implemented, please reach out to me."/>
                            </Col>
                    </Row>
                </Container>
            

                <Container>
                    <Row>
                        <Col sm={12}><Text title="Business Design Approach"/></Col>
                        <Col sm={4}><Text header="Implementing design thinking"/>   </Col>
                        <Col sm={8}>
                        <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={designapproach}/>
                            </div>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={designsprint}/>
                            </div>
                            </Col>
                    </Row>
                </Container>

                <Container >
                    <Row>
                        <Col sm={4}><Text header="Deliverables for eMERGE"/></Col>
                        <Col sm={8}>
                            <ul style={{ paddingLeft: "15px" ,color: "#6c757d", fontFamily: "rubik", fontSize:"1.125rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Uncover new demographics</li>
                                <li>Generate ideas for eMERGE to create value for its audience</li>
                                <li>Explore new revenue opportunities</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
               
                <Container>
                    <Row>
                    <Col sm={4}><Text header="Initial Research"/></Col>
                        <Col sm={8}><Text content="We worked closely alongside the founders and Board of Directors to develop an internal and external analysis of the business. From here, we determine any gaps and opportunities for eMERGE."/>
                            </Col>
                            <Col sm={4}><Text header="Target audience for eMERGE"/></Col>
                        <Col sm={8}>
                            <ul style={{ paddingLeft: "15px" ,color: "#6c757d", fontFamily: "rubik", fontSize:"1.125rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Early environmental adopter</li>
                                <li>Conservative individuals (home-tune ups)</li>
                                <li>Women</li>
                                <li>Electric vehicle enthusiasts</li>
                            </ul>
                        </Col>
                        <Col sm={4}><Text header="Market Landscape Analysis"/></Col>
                        <Col sm={8}><Text content="eMERGE has been more popular with environmentally woke segments, or the early adopters. The home tune-ups further enabled them to expand their reach to households conscious about reducing their utility bills. Following an innovative approach such as political street-fight promoting EVs turned out to be a huge success. Sales promotion opportunities have been explored in the past, but to little success.
 
 The developments at City of Guelph, Guelph Hydro and COVID-19 has impacted the funding for eMERGE’s Home Tune-ups project, and hence there is an inclination to move away from this project and focus on other programming such as EV promotional shows, et al. 
 "/></Col>

                        <Col sm={4}><Text header="SWOT Analysis"/></Col>
                        <Col sm={8}> 
                         <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={swot}/>
                            </div>
                            </Col>

                        <Col sm={4}><Text header="Insights"/></Col>
                        <Col sm={8}>
                        <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={insightsfromrandd}/>
                            </div>
                        </Col>
                        <Col sm={4}><Text header="Impacts and results"/></Col>
                        <Col sm={8}><ul style={{ paddingLeft: "15px" ,color: "#6c757d", fontFamily: "rubik", fontSize:"1.125rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Vetted various business opportunities and present options that are viable for eMERGE by analyzing risks</li>
                                <li>Asked a lot of thought-provoking questions and challenged eMERGE on business practices, audience, prospects etc.</li>
                                <li>Mitigating risks associated with each strategy by exploring the topics in-depth</li>
                            </ul>
                            </Col>
                       
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12}><Text title="Reflection"/></Col>
                    
                    </Row>
                    <Row>
                        <Col sm={12}><Text header="Next Steps"/></Col>
                        <Col sm={12}>
                            <Text content="">
                               
                            </Text>
                        </Col>
                    </Row>
                </Container>

                <Container  className="bottom-breadcrumbs">

                    <nav style={{fontFamily: "rubik"}}>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="projects#">All</a></li>
                            <li><a href="project_one#">PC Express</a></li>
                            {/*<li><a href="project_two#">Circles</a></li>*/}
                            <li><a href="project_two#">Circles</a></li>
                            <li style={{color:"#947BD3"}}>eMERGE</li>
                        </ul>
                    </nav>

                </Container>
                </Container>



            </div>

        )
    }
}

export default Emerge;