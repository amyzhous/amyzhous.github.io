import React from "react";
import Intro from "./intro/Intro";
import MainPage from "./mainPage/MainPage";

// import '@material/react-card/index.scss';
// import '@material/react-card/dist/card.css';
import { Card, Container } from "react-bootstrap";
import "./App.css";
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
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
                    rel="stylesheet"
                    type="text/css"
                ></link>
                


                <Switch>
                    <Route path="/project_one">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <Login />
                    </Route>
                    <Route path="/project_two">
                        <MyNavBar show={true} redirectToProjectSection={true} />
                        <Designsystem />
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
