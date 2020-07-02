import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';
import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./ldpc.css";
import Particles from "react-particles-js";
import particlesParams from "../mainPage/particle";
import banner from "../../assets/pcexp/ldbanner_.jpg";
import Text from "./text";
import "./text.css";
import ep from "../../assets/pcexp/empathy map.jpg";
import idea from "../../assets/pcexp/feature ideation.svg";
import uf from "../../assets/pcexp/uf.png";
import rough from "../../assets/pcexp/rough.jpg";
import wf1 from  "../../assets/pcexp/w1.svg";
import wf2 from  "../../assets/pcexp/w2.svg";
import wf3 from  "../../assets/pcexp/w3.svg";
import chat1 from  "../../assets/pcexp/f_aichat1.png";
import chat2 from  "../../assets/pcexp/f_aichat2.png";
import chat3 from  "../../assets/pcexp/f_aichat3.png";
import chat4 from  "../../assets/pcexp/f_aichat4.png";
import sugg1 from  "../../assets/pcexp/f_sugg1a.png";
import sugg2 from  "../../assets/pcexp/f_sugg1b.png";
import sugg3 from  "../../assets/pcexp/f_sugg1c.png";
import sugg4 from  "../../assets/pcexp/f_sugg1d.png";
import milk1 from  "../../assets/pcexp/f_milk1.png";
import milk2 from  "../../assets/pcexp/f_milk2.png";
import ProjectInfo from "./projectInfo"
import search1 from "../../assets/pcexp/search1.svg"
import search2 from "../../assets/pcexp/search2.svg"
import search3 from "../../assets/pcexp/search3.svg"
import search4 from "../../assets/pcexp/search4.svg"
import search5 from "../../assets/pcexp/search5.svg"
import search6 from "../../assets/pcexp/search6.svg"
import designthinking from"../../assets/pcexp/designthinking6.jpg";
import insightsld from"../../assets/pcexpss/Insights.svg";
import mainpersona from"../../assets/pcexpss/James_Persona.svg";
import morepersona from"../../assets/pcexpss/More_Personas.svg";
import ideationld from"../../assets/pcexpss/Ideation.svg";
import custreviews from"../../assets/pcexpss/customerreviews.svg";
import emap from "../../assets/pcexpss/EmpathyMap.jpg";
import jm from "../../assets/pcexpss/jmap.png";
import process from "../../assets/pcexpss/theprocess.svg";
import wfopp from "../../assets/pcexpss/CurrentFlow.svg";
// import homepage from "../../assets/pcexpss/homepage.gif";
import ldpc1 from "../../assets/pcexpss/ldpc1.gif";
import ldpc2 from "../../assets/pcexpss/ldpc2.gif";
import ldpc3 from "../../assets/pcexpss/ldpc3.gif";
import homepage from "../../assets/pcexpss/ldpc4.gif";
import ldpc5 from "../../assets/pcexpss/lpdc5.gif";
import ldpc6 from "../../assets/pcexpss/ldpc6.gif";
import ldpc7 from "../../assets/pcexpss/ldpc7.gif";
import ldpc8 from "../../assets/pcexpss/ldpc8.gif";
import ldpcnav from "../../assets/pcexpss/ldpcnav.gif";


// const AssumpOrderedList = () => {
//     return(
//         <ol style={{ paddingLeft: "15px"}}>
//             <li>It is hard for users to visualize the product size, colour, and quality.</li>
//             <li>Users cannot attest to the freshness of the product through online shopping which makes them less confident in their purchase.</li>
//             <li>The search process is confusing for prospective customers.</li>
//         </ol>
//     );
// };
const KpiOrderedList = () => {
    return(
        <ol style={{ paddingLeft: "15px"}}>
            <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
            <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
            <li>Decreased duration spent on platform within search functionality</li>
            <li>Decreased number of search terms within a session</li>
        </ol>
    );
};

const TakeawaysUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px", color:"#555555"}}>
            <li>Browse departments, sub departments and aisles were popular ways to filter and recreate the physical shopping experience</li>
            {/*<li>Attaching key metrics into hypothesis that are comparative, ratio and behavior changing.</li>*/}
            <li>Allowing users to create a shopping list and searching multiple items on the list at a time</li>
            {/*<li>You will always find more problems you're able to fix</li>*/}
            <li>Re-order items from previous purchases</li>
        </ul>
    );
};

const NextStepUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px" ,color:"#555555"}}>
            <li>Incorporating the feedback from the judging panel into our case</li>
            <li>Conduct usability testing on our prototype</li>
            <li>Gathering more insights about our users to validate the solution</li>
            <li>Explore other solutions and problems within this product area; there's always more problems to be fixed </li>
        </ul>
    );
};
const AssumpUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px" ,color:"#555555"}}>
            <li>It is hard for users to visualize the product size, colour, and quality</li>
            <li>Users cannot attest to the freshness of the product through online shopping which makes them less confident in their purchase</li>
            <li>The search process is confusing for prospective customers</li>
        </ul>
    );
};
const UseCasesUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px" ,color:"#555555"}}>
            <li>Quickly discover favourites</li>
            <li>Find everyday products</li>
            <li>Discover popular products</li>
        </ul>
    );
};

const InsightsUnorderedList = () => {
    return(
        <ul style={{ paddingLeft: "15px" ,color:"#555555"}}>
            <li>Would like to have information on expiry dates for items</li>
            <li>When it comes to fruit and produce, users are worried about the quality of their products when shopping online</li>
            <li>Needs more refinement in search parameters</li>
        </ul>
    );
};

class Ldpc extends React.Component{
    constructor(props){
        super(props);
        this.projectInfoContent = [
            // {"title": "Overview", "content": "PC Express Search"},
            // {"title": "Role", "content": "Product Management, UX Design"},
            // {"title": "Tools", "content": "Balsamiq, Sketch, Invision"},
            // {"title": "Timeline", "content": "8 weeks"},
        ];
    }

    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={banner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text Title="Grocery click and collect search system"/>
                        </Col>
                        <Col sm={12} >
                            <div  style={{fontSize: "25px", fontStyle: "italic", fontFamily: "Source Sans Pro",  marginBottom:"4rem"}}>
                                —discovering preferred products on PC Express
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row style={{marginBottom:"4rem"}}>
                        <Col sm={12}>
                            <div style={{fontFamily: "source sans pro", marginBottom:"2rem", fontSize: "1.1rem"}}>
                                <b style={{color:"#885A89", fontFamily: "open sans"}}>Overview /</b> PC Express Search Exploration for Product Faculty
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "source sans pro", marginBottom:"2rem", fontSize: "1.1rem"}}>
                                <b style={{color:"#885A89",fontFamily: "open sans"}}>Role /</b> Product management, UX/UI Design
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "source sans pro", marginBottom:"2rem", fontSize: "1.1rem"}}>
                                <b style={{ color:"#885A89", fontFamily: "open sans"}}>Tools /</b> Balsamiq, Sketch, Invision
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div style={{fontFamily: "source sans pro",fontSize: "1.1rem" }}>
                                <b style={{color:"#885A89", fontFamily: "open sans"}}>Timeline /</b> 8 weeks
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text title="Context"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="Online grocery shopping space"/>
                        </Col>

                        <Col sm={12}>
                            <Text content="Out of 1004 Canadians, 62% of these shoppers purchase their groceries online with eCommerce platforms like Amazon, Walmart and Loblaws. The online grocery market in Canada is expected to grow to $3.6 billion by 2019 which means businesses in this sector need to understand their shoppers’ wants and goals."/>
                        </Col>

                        <Col sm={12}>
                            <Text header="PC Express Exploration"/>
                        </Col>

                        <Col sm={12}>
                            <Text content="Loblaws' PC Express is a grocery click and collect platform that allows users to shop and pick up their groceries from convenient locations in the city. Customers can shop at their favourite grocery stores online and personal shoppers will fulfill their orders. Our task was to explore the search and discovery process on the app by applying design thinking and product management methodologies. At the end of the 8 week journey, we presented our findings and solution to a panel of stakeholders."/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="Current workflow and opportunities"/>
                        </Col>
                        <Col sm={12}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={wfopp}/>
                                <Text Content="I evaluated the app alongside my teammates to determine the current workflow and opportunities we can leverage."/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text title="the problem"/>
                        </Col>
                        <Col sm={12}>
                            <Text header="A frustrating search process"/>
                        </Col>
                        <Col>
                            <Text content="First time online grocery shoppers struggle with discovering preferred products within the PC Express platform which results in a decreased in retention and engagement with the app."/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text header="How might we..."/>
                        </Col>
                        <Col>
                            <Text statement={true} content="For first time PC Express users, how might we support our users in the search process to give them confidence to purchase and decrease the number of incomplete orders."/>
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text header="Assumptions"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color:"#555555",fontFamily: "Source Sans Pro", fontSize:"1.1rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>It is hard for users to visualize the product size, colour, and quality</li>
                                <li>Users cannot attest to the freshness of the product through online shopping which makes them less confident in their purchase</li>
                                <li>The search process is confusing for prospective customers</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text header="Constraints"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="Due to the time constraint of this project, we decided to focus solely on first-time users as the metric we picked as a team to focus and improve on is engagement and retention. "/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="The Process"/>
                        </Col>
                        <Col sm={12}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={process}/>
                                <Text Content="We followed a design thinking process and applied product management methodologies learned in class."/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="Some use cases for PC Express Search"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color:"#555555",fontFamily: "Source Sans Pro", fontSize:"1.1rem",letterSpacing: "0.5px", marginBottom:"2rem"}}>
                                <li>Quickly discover favourites</li>
                                <li>Find everyday products</li>
                                <li>Discover popular products</li>
                            </ul>
                        </Col>
                        <Col sm={12}>
                            <Text statement={true} content="At the core of the problem is the question: how do our first-time users discover products once they sign up?"/>
                        </Col>
                        {/*<Col sm={12}>*/}
                        {/*    <Text header="Current workflow and opportunities"/>*/}
                        {/*</Col>*/}
                        {/*<Col sm={12}>*/}
                        {/*    <div style={{ marginBottom: "4rem"}}>*/}
                        {/*        <Card.Img src={wfopp}/>*/}
                        {/*        <Text Content="I evaluated the app alongside my teammates to determine the current workflow and opportunities we can leverage."/>*/}
                        {/*    </div>*/}
                        {/*</Col>*/}
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text title="research process"/>
                        </Col>
                        <Col sm={12}>
                            <Text header="Customer Interviews"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="The purpose of conducting customer interviews is to gather some insights on our users’ thoughts of online grocery shopping, experiences, and emotions throughout their discovery-to-checkout journey."/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text header="Primary Research"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="For our research, we interviewed 12 users in total. Their experiences of using online grocery apps varies. Majority are first time users, some have used PC Express in the past, while others have used competitor apps like Instacart. "/>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="Insights on our users"/>
                            <ul style={{ paddingLeft: "15px" ,color:"#555555", fontFamily: "Source Sans Pro", fontSize:"1.1rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Would like to have information on <b>expiry dates</b> for items</li>
                                <li>When it comes to fruit and produce, users are worried about the <b>quality of their products</b> when shopping online</li>
                                <li>Needs more <b>refinement in search</b> parameters</li>
                            </ul>
                        </Col>
                        <Col sm={12}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={insightsld}/>
                            </div>
                        </Col>

                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="We often hear..."/>
                        </Col>
                        <Col sm={12}>
                            <Text content="“Navigating the app was a pain. There’s too much clicking around with no outcomes”-User A"/>
                            <Text content="“Because online grocery doesn’t give me confidence in the quality of my products” -User B"/>
                            <Text content="“It takes too long to compare items and lots of endless scrolling” -User C"/>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={custreviews}/>
                                <Text Content="Reviews from current users."/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="User Persona"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="James was created as our main persona from the customer interviews."/>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={mainpersona}/>
                                <Text Content="Meet James a city-dwelling Product Manager."/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text title="Mapping out the process"/>
                        </Col>
                        <Col sm={12}>
                            <Text header="Empathy Mapping"/>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={emap}/>
                                <Text Content="As a team, we mapped out James' emapthy map."/>
                            </div>
                        </Col>
                        {/*<Col sm={12}>*/}
                        {/*    <Text title="Customer Journey Mapping"/>*/}
                        {/*</Col>*/}
                        {/*<div style={{ marginBottom: "4rem"}}>*/}
                        {/*    <Card.Img src={jm}/>*/}
                        {/*    <Text Content="Our initial customer search and discovery journey."/>*/}
                        {/*</div>*/}
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col sm={12}>
                            <Text header="Competitive Analysis"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="To gain a better understanding of the online grocery shopping space, I explored Instacart, Grocery Getaway, and Inabuggy."/>
                        </Col>
                        <Col sm={12}>
                            <Text header="Takeaways"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color:"#555555", fontFamily: "Source Sans Pro", fontSize:"1.1rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Browse departments, sub departments and aisles were popular ways to filter and recreate the physical shopping experience</li>
                                <li>Allowing users to create a shopping list and searching multiple items on the list at a time</li>
                                <li>Re-order items from previous purchases</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={12}>
                            <Text header="Ideation"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="As a team, we evaluated the current flow of the PC Express Search function. Then, we proceeded to ideating possible solutions."/>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ideationld}/>
                                <Text Content="Some ideas ranged from leveraging AI chatbots to simple additions to the app currently."/>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text header="Hypothesizing for success"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="By reducing the amount of time it takes for a new user to find their grocery items, it will result in a higher conversion rate and retention."/>
                        </Col>
                        <Col sm={12}>
                            <Text header="KPIs to consider"/>
                            <ol style={{ paddingLeft: "15px" ,color:"#555555", fontFamily: "Source Sans Pro", fontSize:"1.1rem",letterSpacing: "0.5px", marginBottom:"4rem"}}>
                                <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
                                <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
                                <li>Decreased duration spent on platform within search functionality</li>
                                <li>Decreased number of search terms within a session</li>
                            </ol>
                        </Col>
                    </Row>

                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={12}>
                            <Text title="Design Process"/>
                        </Col>
                        <Col sm={12}>
                            <Text header="Design Explorations"/>
                        </Col>
                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={homepage}/>
                            </div>
                        </Col>
                        <Col sm={7}>

                            <Text title="Homepage"/>
                            <Text content="Instead of populating random product cards in the homepage, for first time users, we wanted to display what is most important to them. For new users, the weekly sales card will display. For returning users, the past orders card will display before the weekly sales card"/>
                        </Col>

                        <Col sm={7}>
                            <Text title="Navigation Bar"/>
                            <Text content="Currently, PC Express has 5 options in their bottom navigation bar: Home, Departments, My Shop, Deals, Menu. Applying Hick’s Law, we want to reduce the choices our users need to make so they can focus on the shopping experience. Reducing the options down from 5 to 3, I moved departments and deals to the Browse tab and we decided as a team My Shops should be in the Menu options if users choose to use that option."/>
                        </Col>
                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpcnav}/>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container  style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={12}>
                            <Text header="The search cases"/>
                        </Col>
                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc1}/>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <Text title="Categorizing products using Gestalt Principles"/>
                            <Text content="Applying the Gestalt’s Principle of Similarity, we can group different types of apples into categories to organize and better support search. "/>
                            <Text title="Error in spelling"/>
                            <Text content="When the user inputs the wrong search term like an error in spelling. There should be an acceptance to the error in the spelling, returning the most relevant products for that input. E.g. aaples v. apples. If the variance in the error is too high, no results will display."/>
                        </Col>


                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc7}/>
                            </div>
                        </Col>
                        <Col sm={7}>
                            <Text title="Generic Search"/>
                            <Text content="When users input a generic search query (broad category) the search results would return the best match/ most relevant search results to the input term."/>
                        </Col>

                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc8}/>
                            </div>
                        </Col>
                        <Col sm={7}>

                            <Text title="Exact Search"/>
                            <Text content="Inputting the exact search term should display the same results as the generic search case. Relevancy should be determined by the ranking in terms of how close the strings of the query matches the data and popularity."/>
                        </Col>

                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc6}/>
                            </div>
                        </Col>
                        <Col sm={7}>

                            <Text title="Browsing departments"/>
                            <Text content="The current browse option lists all the departments available for the store. Since our users shop visually, we wanted to display department options with the correct visuals representing that department. Condensing the current navbar, I also placed ‘weekly flyer’ and ‘sale’ options in browse for easy browsing. "/>
                        </Col>

                    </Row>
                </Container>

                <Container style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>
                    <Row>
                        <Col sm={12}>
                            <Text header="A familiar search experience  "/>
                        </Col>

                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc2}/>
                                <Text Content="Filter and sorting"/>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc3}/>
                                <Text Content="Add to cart"/>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc5}/>
                                <Text Content="Using the barcode scanner to search"/>
                            </div>
                        </Col>
                    </Row>
                </Container>


                <Container >
                    <Col sm={12}>
                        <Text header="User Testing"/>
                    </Col>
                    <Col sm={12}>
                        <Text content="To be updated."/>
                    </Col>

                </Container>

                {/*<Container>*/}

                {/*</Container>*/}

                {/*<Container>*/}

                {/*</Container>*/}
                {/*<Container>*/}

                {/*</Container>*/}
                {/*<Container  style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>*/}

                {/*</Container>*/}
                {/*<Container  style={{"borderBottom": "2px solid rgba(230, 230, 233, 1)", "marginBottom": "3em"}}>*/}

                {/*</Container>*/}

                {/*<Container>*/}

                {/*</Container>*/}

                <Container  className="bottom-breadcrumbs">

                    <nav style={{fontFamily: "open sans"}}>
                        <ul className="breadcrumb justify-content-center">
                            <li><a href="projects#">All</a></li>
                            {/*<li><a href="project_one#">PC Express</a></li>*/}
                            <li style={{color:"#9F6BA0"}}>PC Express</li>
                            <li><a href="project_two#">Circles</a></li>
                            {/*<li style={{color:"#9F6BA0"}}>PC Express</li>*/}
                        </ul>
                    </nav>

                </Container>

            </div>

        )
    }
}

export default Ldpc;