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
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import coupletcs from '../../assets/img/coming_soon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cshero from '../../assets/conflictsched/cshero.png';
import adminds from '../../assets/designsystem/adminds.png';
import masscommhero from '../../assets/masscomm/masscommhero.png';
import loginhero from '../../assets/login/loginhero.png';


class MainPage extends React.Component{
    constructor(props){
        super(props);
    }


    render() {
        return(
            <div className="main-page-wrapper">
                <div className="landing" id="landing">
                    <MyNavBar show={true}/>
                    <Particles
                    params={particlesParams}></Particles>
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
                        <MyCard  imgSrc={adminds} title="Admin Design System" subtitle="Company's first admin design system" />
                    </a> 
                                    
                     <a href="/project_two">
                       <MyCard imgSrc={loginhero} title="External Login" subtitle="Account creation and onboarding"/>
                    </a>
                  
                    
                    {/* <a href="/project_four">
                       <MyCard imgSrc={uibanner} title="UX Playground" subtitle="A collection mini design challenges or prompts I have worked on."/>
                    </a> */}
                    <a href="/project_three">
                       <MyCard imgSrc={masscommhero} title="Mass Communication" subtitle="Admin communication tools"/>
                    </a>
                    <a href="/project_four">
                       <MyCard imgSrc={cshero} title="Conflict Scheduling" subtitle="Game and schedule checking"/>
                    </a>
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