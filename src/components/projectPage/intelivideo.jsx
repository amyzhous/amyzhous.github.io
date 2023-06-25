import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import { Button, Nav, Container, Row, Col, Card } from "react-bootstrap";
import MyNavBar from "../navbar/MyNavBar";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import intelivideohero from "../../assets/intelivideo/intelivideohero.png";
import allvideos from "../../assets/intelivideo/allvideos.png";
import videoplayer from "../../assets/intelivideo/videoplayer.png";
import search from "../../assets/intelivideo/search.png";
import resumevideo from "../../assets/intelivideo/resumevideo.png";
import nofilters from "../../assets/intelivideo/nofilters.png";
import filterresults from "../../assets/intelivideo/filterresults.png";
import mylib_fav_playlist_empty from "../../assets/intelivideo/mylib_fav_playlist_empty.png";
import filters from "../../assets/intelivideo/filters.png";
import filtering from "../../assets/intelivideo/filtering.png";
import filterhome from "../../assets/intelivideo/filterhome.png";
import featuredvid from "../../assets/intelivideo/featuredvid.png";
import solution from "../../assets/intelivideo/solution.png";




class Intelivideo extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            {"title": "Role", "content": "Product Designer"},
            {"title": "Platform", "content": "Web, Mobile Responsive"},
            {"title": "Team", "content": "Product Manager, 4 Developers, 3 Designers, UX Researcher, Intelivideo team"},
            {"title": "Timeline", "content": "Released in v3.8 (shipped Nov 2021)"},
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
                        <Card.Img variant="top" src={intelivideohero} />
                    </Card>
                </div>


                <Container className="nav-container">
                    <Col sm={12}>
                        <Text Title="Video-on-Demand Integration" />
                    </Col>
                    <ProjectInfo contents={this.projectInfoContent} />
                          

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="Navigating campus recreation in a post-pandemic era " />
                                <Text content="After a year of lockdowns, higher-ed institutions needed to adapt to the changing landscape of campus recreation. We wanted to explore innovated ways to distribute recreation services for our clients to provide to their students amidst this post-pandemic era." />
                            
                            </Col>


                            <Col sm={12}>
                                <Text header="Framing the opportunity" />
                                <Text content="How can we better support institutions to provide recreational fitness and wellness programming in a post-pandemic environment?" />
                            </Col>

                            <Col sm={12}>
                                <Text header="Our solution" />
                            </Col>
                            <Col sm={12}>
                                <Text content="We partnered with Intelivideo, a Video On Demand (VOD) platform, to provide a medium for campus recreation departments to create content, services, and resources for their patrons." />
                               <div  style={{ marginBottom: "4rem"}}>
                                <Button style={{ borderColor: "#FF7812", backgroundColor: "#FFFFFF", letterSpacing: "0.5px", fontSize: "1rem", fontWeight: "700px"}}>
                                    <a href="https://www.fusionfamily.com/release/3-8?wvideo=rje9cb3sud">FUSION v3.8 RELEASE →</a>
                                    </Button>
                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                     <Card.Img src={solution} />
                                </div>
                            </Col>


                            <Col sm={12}>
                                <Text header="Client Member Portal" />
                                <Text content="I collaborated with a Senior Designer on the patron experience from the Client Member Portal and another designer worked on the workflows for the Intelivideo integration." />
                                <Text title="Video-on-demand page states" />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={allvideos} />
                                    <Text Content="All videos" />

                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={featuredvid} />
                                    <Text Content="Featured videos" />
                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={mylib_fav_playlist_empty} />
                                    <Text Content="My library empty state" />

                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={filterhome} />
                                    <Text Content="Filtering from homepage" />
                                </div>


                                <Text title="Filter flows"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={filters} />
                                    <Text Content="New filters side sheet" />
                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={filtering} />
                                    <Text Content="Filtering" />

                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={nofilters} />
                                    <Text Content="No filter results" />

                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={filterresults} />
                                    <Text Content="Filtered results" />

                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={search} />
                                    <Text Content="Searching on video-on-page" />
                                </div>

                                <Text title="Video player"/>
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={videoplayer} />
                                    <Text Content="Video player with the ability to add videos to playlists or favorites" />
                                </div>

                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={resumevideo} />
                                    <Text Content="Resume video" />
                                </div>


                            </Col>


                            <Col sm={12}>
                                <Text header="Impacts" />
                                <Text content="Video-on-demand was launched on client portals in November 2021 as students made their way back to campus in person. The partnership with Intelivideo resulted in increased engagement from all audiences and provided campus recreation administrators with tools to implement hybrid programming in a post-pandemic era." />
                                
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

                                <li  style={{ color: "#7A838B" }}>
                                        Video-on-Demand Integration
                                </li>
                                
                            </ul>
                        </nav>
                    </Container>
                 </Container>

            </div>
        );
    }
}

export default Intelivideo;
