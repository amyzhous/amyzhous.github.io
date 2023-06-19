import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Typed from "react-typed";
import { Button, Nav, Container, Row, Col, Card } from "react-bootstrap";
import MyNavBar from "../navbar/MyNavBar";
import "./circles.css";
import Text from "./text";
import "./text.css";
import ProjectInfo from "./projectInfo";
import loginhero from "../../assets/login/loginhero.png";
import Carousel from "react-bootstrap/Carousel";
import "./login.css";

import breakdown from "../../assets/login/breakdowncurrent.png";

const InsightUnorderedList = () => {
    return (
        <ul style={{ paddingLeft: "15px", color: "#555555" }}>
            <li>83% of our users said they like to shop with their eyes</li>
            <li>
                33% of our users search and filter based on identifying the
                brand they usually purchase
            </li>
            <li>25% of our users have tried shopping for groceries online</li>
            <li>
                Users would like to have information with regards to the expiry
                dates
            </li>
            <li>
                When it comes to fruit and produce, users are worried about the
                quality of their products when shopping online
            </li>
        </ul>
    );
};
const KpiOrderedList = () => {
    return (
        <ol style={{ paddingLeft: "15px", color: "#555555" }}>
            <li>
                Decreased time in full funnel conversion (e.g Entering the
                platform and purchasing at least 1 item [cohort X])
            </li>
            <li>
                Number of individuals from [cohort X] that make a return
                purchase within 3 weeks
            </li>
            <li>
                Decreased duration spent on platform within search functionality
            </li>
            <li>Decreased number of search terms within a session</li>
        </ol>
    );
};

const IdeasUnorderedList = () => {
    return (
        <ul
            style={{
                paddingLeft: "15px",
                color: "#555555",
                fontFamily: "Source Sans Pro",
                fontSize: "1.1rem",
            }}
        >
            <li>Social Meetup</li>
            <li>Advisor Helper</li>
            <li>Digital Mental Health Tool</li>
            <li>Simple Student Portal</li>
            <li>Newsfeed Board</li>
            <li>Study Buddy</li>
        </ul>
    );
};

const NextStepUnorderedList = () => {
    return (
        <ul
            style={{
                paddingLeft: "15px",
                color: "#555555",
                fontFamily: "Source Sans Pro",
            }}
        >
            <li>Conduct usability testing for MVP</li>
            <li>
                Determine the technical feasibility of certain features with
                developers
            </li>
            <li>Iterate MVP after gathering usability testing feedback</li>
        </ul>
    );
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.projectInfoContent = [
            { title: "Role", content: "Lead Product Designer" },
            // {"title": "Platform", "content": "Web, Mobile, Tablet"},
            {
                title: "Team",
                content: "Product Manager, 4 Developers, Director of Product",
            },
            { title: "Timeline", content: "Shipped June 2023" },
        ];
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center", marginBottom: "7rem" }}>
                    {/*<Particles params={particlesParams}/>*/}
                    {/*<Card style={{display: 'inline-block', width: "40%", cursor: "default"}}>*/}
                    <Card
                        className="projectBanner"
                        style={{
                            display: "inline-block",
                            cursor: "default",
                            height: "100%",
                            marginTop: "2em",
                        }}
                    >
                        <Card.Img variant="top" src={loginhero} />
                    </Card>
                </div>

                <Container className="nav-container">
                    <Col sm={12}>
                        <Text Title="External Login" />
                    </Col>
                    <ProjectInfo contents={this.projectInfoContent} />

                    <Container>
                        <Row>
                            <Col sm={12}>
                                <Text header="Overview" />
                            </Col>

                            <Col sm={12}>
                                <Text content="Fusion play is a multi-platform league platform product which includes an web-based Admin Content Management System (CMS), a tablet Staff App, and a mobile Player App." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                                <Text content="Presently, Fusion Play has various data dependencies on our core recreational management product, Fusion. The dependency on Fusion restricts account creation for Fusion Play participants on the mobile Player App. These obstacles create friction in the intramural experience, as League Admins must navigate between different products for different groups." />
                            </Col>

                            <Col sm={12}>
                                <Text header="Problem" />
                            </Col>
                            <Col sm={12}>
                                <Text
                                    content="Currently, we handle the account creation and login process for our client’s users if they have an organization domain. Users will be redirected to their organization single-sign-on page where they will authenticate and be redirected back into the app.

This process limits users who do not have an organization domain and clients like community centres who do not provide organization domains to their users."
                                />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Solution" />
                            </Col>
                            <Col sm={12}>
                                <Text content="In order to better support the ongoing product-wide efforts to becoming a standalone product and streamline the process of account creation for non-SSO institutions, we introduced Social-Sign-On, Organization Codes, and Participant Onboarding." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Business Problem" />
                            </Col>
                            <Col sm={12}>
                                <Text content="Because there are currently limitations to account creation for organizations, this leads to:" />
                                <ul
                                    style={{
                                        paddingLeft: "15px",
                                        color: "#37373F",
                                        marginBottom: "0rem",
                                        fontSize: "1.1rem",
                                        marginBottom: "3rem",
                                    }}
                                >
                                    <li>
                                        Our clients using different products to
                                        handle registration for users with
                                        organization email domains and those
                                        without
                                    </li>
                                    <li>
                                        Increasing our data-dependency on Fusion
                                        for imports
                                    </li>
                                </ul>
                            </Col>

                            <Col sm={12}>
                                <Text header="User Goals" />
                            </Col>
                            <Col sm={12}>
                                <Text content="We want to enable participants that do not have a single-sign-on account with their institution to be able to quickly join an organization and login to Fusion Play." />
                            </Col>

                            <Col sm={12}>
                                <Text header="Business Goals" />
                            </Col>
                            <Col sm={12}>
                                <Text content="We want to provide our clients with the ability to manage login and account creation within one platform and become less reliant on our core product, Fusion, as this is one of the main friction points for organizations looking to purchase Fusion Play." />
                            </Col>

                            <Col sm={12}>
                                <Text header="CMS Organization Code Management" />
                            </Col>
                            <Col sm={12}>
                                <Text content="We needed to introduced some tools in the CMS for League Admins to be able customized account creation for their users." />
                            </Col>

                            <Col sm={12}>
                                <Text title="Organization Code" />
                            </Col>
                            <Col sm={12}>
                                <Text content="Organization codes are a collection of codes created by League Admins which will be used for linking users to their organization." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Cross-product-integration" />
                                <Text content="These codes can be customized, allowing League Admins to integrate it with our digital signage product, Fusion Wave, to help with their intramural marketing efforts." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Nicknames" />
                                <Text content="In pair with the signage integration, we’ve also added Nicknames to help League Admins identify which code belongs to what group." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Player App Account Creation" />
                            </Col>
                            <Col sm={12}>
                                <Text title="Participants without Fusion Play installed" />
                                <Text content="If participants have not downloaded the Fusion Play app from the App Store or Google Play Store, they can click on the dynamic deep link generated when the League Admins created the organization code." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                                <Text title="Participants with Fusion Play installed" />
                                <Text content="If participants have the Fusion Play app, they can choose to click on the dynamic link which will direct them to the account creation step." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Social Single-Sign-On" />
                            </Col>
                            <Col sm={12}>
                                {/* <Text title="Player App"/> */}
                                <Text
                                    content="For users who do not have a Fusion Play account they can choose to authenticate using their organization SSO if it’s available or with Google and Apple SSO.

If a user already has an account with their organization SSO but chooses to authenticate with Google SSO, we will link those accounts together in the database."
                                />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Onboarding" />
                            </Col>
                            <Col sm={12}>
                                <Text title="Admin CMS" />
                                <Text
                                    content="Prior to supporting account creation, there was no need for onboarding as participant information would be directly imported from Fusion.

Another problem that came with importing from Fusion is that every state has different regulations on what information organizations can collect. We had to give our clients the flexibility to configure the fields they need to collect during onboarding in the CMS."
                                />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Player App" />
                                <Text content="Our initial thought with Player Onboarding is to prompt the questions after the account creation process, but we pivoted away from this method as our user goal is to get the participants playing right away." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Update Profile" />
                                <Text content="After the user authenticates using their organization SSO or social SSO, we’ve added the option to update their profile before entering the app." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="League Restrictions" />
                                <Text content="If a user has not inputted any information that is required to register for the league, we will restrict access until the user inputs the info" />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Profile Pulse" />
                                <Text content="Added pulse to the hamburger for new users to increase the discovery of where to manage their personal information." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>

                                <Text title="Snackbars" />
                                <Text content="The use of snackbars to prompt for information as a new user." />
                                <div style={{ marginBottom: "4rem" }}>
                                    <Card.Img src={breakdown} />
                                </div>
                            </Col>

                            <Col sm={12}>
                                <Text header="Outcome" />
                            </Col>
                            <Col sm={12}>
                                <Text content="In June 2023, we made this feature available to all Fusion Play clients. This update will greatly benefit our non-institutional clients by enhancing the onboarding process for their users and decreasing our dependency on Fusion." />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="bottom-breadcrumbs">
                        <nav style={{ fontFamily: "dm sans" }}>
                            <ul className="breadcrumb justify-content-center">
                                <li>
                                    <a href="projects#">ALL</a>
                                </li>
                                <li>
                                    <a href="project_one#">
                                        Fusion CMS Design System
                                    </a>
                                </li>
                                {/* <li><a href="project_two#">COMMUNITECH</a></li> */}
                                <li style={{ color: "#7A838B" }}>
                                    External Login
                                </li>
                                <li>
                                    <a href="project_three#">
                                        Mass Communication
                                    </a>
                                </li>
                                <li>
                                    <a href="project_four#">
                                        Conflict Scheduling
                                    </a>
                                </li>
                                {/* <li><a href="project_five#">UX PLAYGROUND</a></li> */}
                                {/* <li><a href="project_three#">eMERGE</a></li> */}
                            </ul>
                        </nav>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Login;
