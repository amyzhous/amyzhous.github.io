import React from "react";
import Intro from "./intro/Intro";
import MainPage from "./mainPage/MainPage";

// import '@material/react-card/index.scss';
// import '@material/react-card/dist/card.css';
import { Card, Container } from "react-bootstrap";
import "./App.css";
// import shiba from '../assets/img/favicon.gif';
// import email from '../assets/img/email.png';
// import linkedin from '../assets/img/linkedin.png';
// import github from '../assets/img/github.png';
import MyNavBar from "./navbar/MyNavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Petco from "./projectPage/petco";
import amylogo from "../assets/img/amylogo.svg";
import email from "../assets/img/gmail.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import dribble from "../assets/img/dribble.svg";
import About from "./about/About";
import ReactGA from "react-ga";
import Login from "./projectPage/login";
import MassComm from "./projectPage/masscomm";
import Designsystem from "./projectPage/designsystem";
import ConflictSced from "./projectPage/conflictsched.jsx";

ReactGA.initialize("UA-172380537-1");
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTransitionalState(state) {
        this.setState({ transitionalState: state });
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:wght@700&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Rozha+One&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>

                <Switch>
                    <Route path="/project_one">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <Designsystem />
                    </Route>
                    <Route path="/project_two">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <Login />
                    </Route>
                    <Route path="/project_three">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <MassComm />
                    </Route>
                    <Route path="/project_four">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <ConflictSced />
                    </Route>
                    <Route path="/project_five">
                        <MyNavBar
                            show={false}
                            redirectToProjectSection={true}
                        />
                        <Petco />
                    </Route>
                    <Route path="/about">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <About />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>

                <footer className="my-footer" id="contact">
                    <div className={"my-contacts"}>
                        <p style={{ fontFamily: "dm sans", fontWeight: "400" }}>
                            Say hello at
                        </p>
                        <div className="footer-icon">
                            <a
                                target="_blank"
                                href="mailto:ayjzhou@gmail.com"
                                className="footer-icon-anchor"
                            >
                                <Card.Img
                                    src={email}
                                    className="footer-icon-img hover-up"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/amyyjzhou/"
                                className="footer-icon-anchor"
                            >
                                <Card.Img
                                    src={linkedin}
                                    className="footer-icon-img"
                                />
                            </a>

                            <a
                                target="_blank"
                                href="https://dribbble.com/amyjz"
                                className="footer-icon-anchor"
                            >
                                <Card.Img
                                    src={dribble}
                                    className="footer-icon-img"
                                />
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/ayjzhou"
                                className="footer-icon-anchor"
                            >
                                <Card.Img
                                    src={github}
                                    className="footer-icon-img"
                                />
                            </a>
                        </div>
                    </div>

                    <p style={{ fontFamily: "dm sans", color: "#7A838B" }}>
                        Powered with lots of ☕️.
                    </p>
                    {/* <img src={amylogo} width="24px"/> */}
                </footer>
            </Router>
        );
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
