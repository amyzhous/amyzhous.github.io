import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './About.css'
import cutebb from '../../assets/img/cutebb.png';
import amy from '../../assets/img/amy.jpg';
import meme from '../../assets/img/meme.JPG';
import abouthero from '../../assets/img/abouthero.svg'


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


                    <Col lg={12} md={12} style={{textAlign: "center"}}>
                                <h1 style={{color: '#2F274C', fontFamily: "open sans", fontWeight: "bold", textAlign:"center", marginBottom: "1em"}}>
                                   hello, welcome to my portfolio
                                      <span className="wave">  👋</span>
                                </h1>
                    </Col>

                        <Col lg={5} md={12} className="about-image-container">
                            <Image src={meme} roundedCircle className="about-image"/>
                        </Col>
                        <Col lg={12} md={12} className="about-bio-container">
                            <span className="about-bio">
                                <h3 style={{color: '#2F274C', fontFamily: "open sans", fontWeight: "bold"}}>
                                   — a coffee lover, UX enthusiast, and a self-starter
                                </h3>
                                <div className="my-story" style={{fontSize: "18px"}}>
                                    <p> I am an aspiring product designer based in <div className="my-story-location">📍Toronto. </div></p>

                                    <p> My journey into UX and product design stemmed from an interest in technology, applied psychology, and art during my last year of university. Product and UX design resonates with me as I have the ability to make a social impact. Similar to development, as a designer I am able to solve complex business problems and deliver tangible results.
                                    </p>
                                    <p>
                                        Coming from a non-traditional design background I have taught myself UX and a tad bit of front-end development with lots of coffee, Youtube videos, and wonderful individuals! With my economics background, I am able to understand the market. This is beneficial as a UX designer because I am able to cater my design strategy to reflect market sentiments. Given my multidisciplinary background, I am a designer driven to create better experiences and solutions by being empathetic, curious, and strategic.
                                    </p>
                                    <p>
                                        Since then, I have been looking for opportunities to practice UX/ UI to build my knowledge in design and provide a social impact. Outside of UX, I like to travel around 🗺️, try new cuisines 🍽, and read a nice book with a cup of coffee ☕. Recently, I have been swept into the world of digital illustration ✍🏼.
                                    </p>
                                    <p>
                                        Feel free to <a href="https://www.linkedin.com/in/amyyjzhou/">connect</a> with me or contact me at <a href="mailto:ayjzhou@gmail.com">ayjzhou@gmail.com</a> if you're interested in grabbing a coffee or chatting!
                                    </p>
                                </div>
                                {/*<div  style={{ marginTop: "2rem"}}>*/}
                                {/*<a href="https://drive.google.com/file/d/1OThL8EtMv0QNwQyipVv-WowdD41SlzRG/view?usp=sharing">*/}
                                {/*    <Button className="button-attribute">Resume</Button>*/}
                                {/*</a>*/}
                                {/*</div>*/}
                            </span>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}

export default About;