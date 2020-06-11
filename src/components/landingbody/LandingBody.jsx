import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './LandingBody.css'
import heropagepic from '../../assets/img/heropage_asset.svg'
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import me3 from "../../assets/img/me3.svg";
import amy1 from "../../assets/img/logo1.svg";
import scrolldown from "../../assets/img/mousescroll.svg"
import hifi3 from "../../assets/circles_f/circlesmockup/hifi3.svg";


class LandingBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showCursor: true
        };
        this.titleRef = React.createRef();
        this.titleReftwo = React.createRef();

        this.toggleCursor = (ref, state) => {
            if (ref.current) {
                ref.current.rootElement.current.nextSibling.style.opacity = state;
            }
        }
    }
    componentDidMount() {
        this.toggleCursor(this.titleReftwo, "0");
    }

    render() {
        return(
            <div className="landing-body container" >


                {/*<div style={{position: "absolute"}}>*/}
                {/*    <br/>*/}
                    {/*<Typed*/}
                    {/*    className="typed-text-name"*/}
                    {/*    id="myshit"*/}
                    {/*    strings={[*/}
                    {/*        "Hi I'm Amy!"]}*/}
                    {/*    typeSpeed={30}*/}
                    {/*    ref = {this.titleRef}*/}
                    {/*    onComplete={() => this.toggleCursor(this.titleRef, "0")}>*/}
                    {/*</Typed>*/}
                    {/*<Typed*/}
                    {/*    className="typed-text-description"*/}
                    {/*    startDelay= {900}*/}
                    {/*    strings={[*/}
                    {/*        'I am a UX designer',*/}
                    {/*        'and a coffee lover.',*/}
                    {/*        'Check out some of my work!️ '*/}
                    {/*        ]}*/}
                    {/*    typeSpeed={30}*/}
                    {/*    backSpeed={30}*/}
                    {/*    loop*/}
                    {/*    ref ={this.titleReftwo}*/}
                    {/*    preStringTyped={() => this.toggleCursor(this.titleReftwo, "1")}>*/}
                    {/*</Typed>*/}
                  <div>
                    <h1 className="landing-body-hero-title">
                        hi! i'm <span style={{color: "#885A89"}}>amy zhou,</span>
                    </h1>
                      <h4 className="landing-body-hero-body">
                          an aspiring product designer based in 📍Toronto. Check out some of my work below.
                      </h4>
                  </div>

                {/*</div>*/}

                {/*<div className="landing-body-img-wrapper">*/}
                {/*    /!*<Card.Img variant="top"  className="landing-body-img" src={amy1} />*!/*/}
                {/*</div>*/}
            </div>

        )
    }
}

export default LandingBody;