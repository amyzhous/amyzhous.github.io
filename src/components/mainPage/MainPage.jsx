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
import moodilybanner from '../../assets/moodily/moodilybanner.png';
import parkitbanner from '../../assets/parkit/parkitbanner_.jpg';
import petcobanner from '../../assets/petco/petcobanner.jpg';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import coupletcs from '../../assets/img/coming_soon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ldbanner from "../../assets/pcexpss/ldbanner@4x.svg";
import SGbanner from'../../assets/img/ui/SG.svg';
import communitech from'../../assets/img/ui/Communitech.svg';
import uibanner from'../../assets/img/ui/uihero.svg';




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
                        <MyCard  imgSrc={ldbanner} title="PC Express Search" subtitle="A capstone project to explore and redefine search relevancy in the online grocery space." />
                    </a>
                    {/*</Link>*/}
                    {/* <a href="/project_two">
                        <MyCard imgSrc={SGbanner} title="Communitech" subtitle="A collection of some of the visual designs I have worked on."/>
                    </a> */}
                     <a href="/project_three">
                       <MyCard imgSrc={SGbanner} title="Search and Gather" subtitle="Designing for growth and conversion."/>
                    </a>
                    {/* <a href="/project_four">
                       <MyCard imgSrc={uibanner} title="UX Playground" subtitle="A collection mini design challenges or prompts I have worked on."/>
                    </a> */}
                    <a href="/project_five">
                       <MyCard imgSrc={uibanner} title="UI Snippets" subtitle="A collection of visual designs I have worked on."/>
                    </a>
                    {/*<a href="/project_four">
                    {/*    <MyCard imgSrc={parkitbanner} title="Daily UI" subtitle="UI Design, Motion Design"/>*/}
                    {/*</a>*/}
                    {/* <a href="/project_five">
                       <MyCard imgSrc={petcobanner} title="Pet&Co."/>
                   </a>   */}
                    {/*<a href="/project_six">*/}
                    {/*    <MyCard imgSrc={coupletcs} title="CoupLet"/>*/}
                    {/*</a>*/}
                </div>
            </div>

        )
    }
}

export default MainPage;