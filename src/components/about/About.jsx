import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './About.css'
import cutebb from '../../assets/img/cutebb.png';
import amy from '../../assets/img/amy.jpg';
import meme from '../../assets/img/meme.JPG';


import {Button, Image, Container, Row, Col, Nav} from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";

class About extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div className="about-body" id="about">
                <Container>
                    <Row>

                        <Col lg={5} md={12} className="about-image-container">
                            <Image src={meme} roundedCircle className="about-image"/>
                        </Col>
                        <Col lg={7} md={12} className="about-bio-container">
                            <span className="about-bio">
                                <h1>
                                    hello
                                   <span className="wave">  👋</span>
                                </h1>
                                <div className="my-story">
                                    <p> I am a UX designer based in <div className="my-story-location">📍Waterloo. </div></p>

                                    <p>I am looking for full-time opportunities to build my knowledge in product and design. Don't be a stranger, let's <a href="https://www.linkedin.com/in/amyyjzhou/">connect! </a><span className="hot">☕</span>️</p>
                                </div>
                                <div  style={{ marginTop: "2rem"}}>
                                <a href="https://drive.google.com/file/d/1OThL8EtMv0QNwQyipVv-WowdD41SlzRG/view?usp=sharing">
                                    <Button className="button-attribute">Resume</Button>
                                </a>
                                </div>
                            </span>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default About;