import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './LandingBody.css'
import heropagepic from '../../assets/img/heropage_asset.svg'
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import me3 from "../../assets/img/me3.svg";

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
                    {/*</div>*/}
                  <div>
                    <h1 className="landing-body-hero-title"  style={{ marginBottom: "1.5rem"}}>
                       <span className="my-story-location" style={{color: "#947BD3"}}>amy zhou</span>—product designer based in <div className="my-story-location">📍toronto</div>
                    </h1>
                      <h3 className="landing-body-hero-body" style={{ lineHeight: "2.5rem"}}>
                        currently designing at communitech✌🏼
                      </h3>
                  </div>
        
                
            </div>

        )
    }
}

export default LandingBody;