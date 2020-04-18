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



class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="main-page-wrapper">
                <MyNavBar show={true}/>
                <div className="landing" id="landing">
                    <Particles
                        params={particlesParams} />
                    <LandingBody/>
                </div>
                <div className="about-wrapper">
                    <About/>
                </div>
                <div className="cards-wrapper" id="projects">
                    {/*<Link to="/project_one">*/}
                    <a href="/project_one">
                        <MyCard  imgSrc={banner} title="PC Express Search"/>
                    </a>
                    {/*</Link>*/}
                    <a href="/project_two">
                        <MyCard imgSrc={circlesbanner1} title="Circles"/>
                    </a>
                    <a href="/project_three">
                        <MyCard imgSrc={moodilybanner} title="Moodily"/>
                    </a>
                    <a href="/project_four">
                        <MyCard imgSrc={parkitbanner} title="Park It"/>
                    </a>
                    <a href="/project_five">
                        <MyCard imgSrc={petcobanner} title="Pet&Co."/>
                    </a>
                    <a href="/project_six">
                        <MyCard imgSrc={coupletcs} title="CoupLet"/>
                    </a>
                </div>
            </div>

        )
    }
}

export default MainPage;