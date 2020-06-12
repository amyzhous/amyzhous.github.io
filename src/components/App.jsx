import React from 'react';
import Intro from './intro/Intro';
import MainPage from './mainPage/MainPage';

import '@material/react-card/index.scss';
import '@material/react-card/dist/card.css';
import {Card} from 'react-bootstrap';
import './App.css';
// import shiba from '../assets/img/favicon.gif';
// import email from '../assets/img/email.png';
// import linkedin from '../assets/img/linkedin.png';
// import github from '../assets/img/github.png';
import MyNavBar from './navbar/MyNavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Ldpc from "./projectPage/ldpc";
import Circles from "./projectPage/circles";
import Moodily from "./projectPage/moodily";
import Parkit from "./projectPage/parkit";
import Petco from "./projectPage/petco";
import amylogo2 from "../assets/img/amy2.jpg";
import email from '../assets/img/gmail.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import About from './about/About';



class App extends React.Component {
    constructor(props){
        super (props);
    }

    changeTransitionalState(state){
        this.setState({transitionalState: state});
    }

    render() {

        return(
            <Router basename={process.env.PUBLIC_URL}>
                <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet"/>
                {/*<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>*/}
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet"/>
                {/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>*/}
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"/>


                <Switch>
                    <Route path="/project_one">
                        <MyNavBar show={true} redirectToProjectSection={true}/>
                        <Ldpc/>
                    </Route>
                    <Route path="/project_two">
                        <MyNavBar show={true} redirectToProjectSection={true}/>
                        <Circles />
                    </Route>
                    <Route path="/project_three">
                        <MyNavBar show={false} redirectToProjectSection={true}/>
                        <Moodily />
                    </Route>
                    <Route path="/z">
                        <MyNavBar show={false}/>
                        <Parkit />
                    </Route>
                    <Route path="/project_five">
                        <MyNavBar show={false} redirectToProjectSection={true}/>
                        <Petco />
                    </Route>
                    <Route path="/about">
                        <MyNavBar show={true} redirectToProjectSection={true}/>
                        <About/>
                    </Route>
                    <Route path="/">
                        <MainPage/>
                    </Route>
                </Switch>

                <footer className="my-footer" id="contact">
                    <div className={"my-contacts"}>
                        <div className="footer-icon">
                            <a target="_blank" href="mailto:ayjzhou@gmail.com" className="footer-icon-anchor">
                                <Card.Img src={email}  className="footer-icon-img hover-up" />
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/amyyjzhou/" className="footer-icon-anchor">
                                <Card.Img src={linkedin}  className="footer-icon-img"/>
                            </a>
                            <a target="_blank" href="https://github.com/ayjzhou" className="footer-icon-anchor">
                                <Card.Img src={github} className="footer-icon-img"/>
                            </a>
                        </div>
                    </div>

                    <p style={{fontFamily: "open sans"}}>Coded with lots of ☕+ ❤️.</p>
                    <img src={amylogo2} width="50px"/>
                </footer>
            </Router>
        )
    }
}
// function About() {
//     return <h2>Home</h2>;
// }
//
// function Users() {
//     return <h2>About</h2>;
// }


export default App;

