import React from 'react';
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import particlesParams from './particle'
import Particles from 'react-particles-js';
import MyNavBar from '../navbar/MyNavBar';
import LandingBody from "../landingbody/LandingBody";
import MyCard from "../mycard/MyCard";
import About from "../about/About";
import circlesbanner1 from '../../assets/circles_f/circlesbanner_.jpg';
import banner from "../../assets/pcexp/ldbanner_.jpg";
import moodilybanner from '../../assets/moodily/moodilybanner.png';
import parkitbanner from '../../assets/parkit/parkitbanner_.jpg';
import petcobanner from '../../assets/petco/petcobanner.jpg';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import coupletcs from '../../assets/img/coming_soon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'




class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="main-page-wrapper">
                <div className="landing" id="landing">
                    <MyNavBar show={true}/>
                    {/*<Particles*/}
                    {/*    params={particlesParams} />*/}
                    <LandingBody/>
                    <div id="landing-scroll">
                        <AnchorLink id="landing-scroll-inner" href="#projects"><span/></AnchorLink>
                    </div>
                </div>
                {/*<div className="about-wrapper">*/}
                {/*    <a href="/about">*/}
                {/*    </a>*/}
                {/*    <About/>*/}
                {/*</div>*/}
                <div className="cards-wrapper" id="projects">
                    {/*<Link to="/project_one">*/}
                    <a href="/project_one">
                        <MyCard  imgSrc={banner} title="PC Express Search" subtitle="Product Management, UI Design" text="PC Express is a grocery click and collect app."/>
                    </a>
                    {/*</Link>*/}
                    <a href="/project_two">
                        <MyCard imgSrc={circlesbanner1} title="Circles" subtitle="UX/UI Design, Design Thinking" text="A social app to connect circles of individuals."/>
                    </a>
                    {/*<a href="/project_three">*/}
                    {/*    <MyCard imgSrc={moodilybanner} title="Memberfy" subtitle="UX/UI Design, Web Design" text="Memberfy is a platform that centralizes information."/>*/}
                    {/*</a>*/}
                    {/*<a href="/project_four">*/}
                    {/*    <MyCard imgSrc={parkitbanner} title="eMERGE" subtitle="Business Design, UX Research" text="eMERGE is a climate change initiative in Guelph."/>*/}
                    {/*</a>*/}
                    {/*<a href="/project_five">*/}
                    {/*    <MyCard imgSrc={petcobanner} title="Pet&Co."/>*/}
                    {/*</a>*/}
                    {/*<a href="/project_six">*/}
                    {/*    <MyCard imgSrc={coupletcs} title="CoupLet"/>*/}
                    {/*</a>*/}
                </div>
            </div>

        )
    }
}

export default MainPage;