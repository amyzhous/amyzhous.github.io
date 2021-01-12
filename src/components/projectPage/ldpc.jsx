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

import ProjectInfo from "./projectInfo"

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
import iterationld from "../../assets/pcexpss/iterations.png";
import ldbanner from "../../assets/pcexpss/ldbanner@4x.svg";
import ldpcfinal from "../../assets/pcexpss/ldpcfinal.gif";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ldpcteam from "../../assets/pcexpss/ldpcteam.png";
import review1 from "../../assets/pcexpss/reviews1.svg";
import review2 from "../../assets/pcexpss/reviews2.svg";
import inabuggy from "../../assets/pcexpss/inabuggy.svg";
import instacart from "../../assets/pcexpss/instacart.svg";
import groceryget from "../../assets/pcexpss/groceryget.svg";
import Carousel from 'react-bootstrap/Carousel'


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
            // {"title": "Role", "content": "UX/UI Design, Product Management"},
            // {"title": "Team", "content": "Tony Cheng (PM), William To (PM)"},
            // {"title": "Tools", "content": "Balsamiq, Sketch, Invision"},
            // {"title": "Timeline", "content": "8 weeks (2019)"},
        ];
    }


    render() {
        return(
            <div>
                <div style={{textAlign: "center", marginBottom: "7rem"}}>
                    <Card className="projectBanner" style={{display: 'inline-block', cursor: "default"}}>
                        <Card.Img variant="top" src={ldbanner} />
                    </Card>
                </div>

                <ProjectInfo contents={this.projectInfoContent}/>

                <Container className="nav-container">
              
                    <Row>
                        <Col sm={12}>
                            <Text Title="Grocery click and collect search system"/>
                           
                        </Col>
                        <Col sm={12} >
                            {/* <div  style={{fontSize: "25px", fontStyle: "italic", fontFamily: "Source Sans Pro",  marginBottom:"4rem", color: "#6c757d"}}>
                                —discovering preferred products on PC Express
                            </div> */}
                        </Col>
                    </Row>
                    
            

                </Container>
                



             

                <Container >
                    <Row>
                    <Col sm={12}>
                            {/* <Text Titlee="The problem"/> */}
                        </Col>
                    <Col sm={12}>
                            <Text title="PC Express Click & Collect"/>
                        </Col>
                    <Col sm={12}>
                    <Text content="Loblaws' PC Express is a grocery click and collect platform that allows users to shop and pick up their groceries from convenient locations in the city. Customers can shop at their favourite grocery stores online and personal shoppers will fulfill their orders. Our task was to explore the search and discovery process on the app by applying design thinking and product management methodologies."/>

                    </Col>
                        
                        <Col sm={12}>
                            <Text title="A frustrating search process"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="First time online grocery shoppers struggle with discovering preferred products within the PC Express platform which results in a decreased in retention and engagement with the app."/>
                        </Col>
                        <Col sm={12}>
                            <Text header="HOW MIGHT WE"/>
                        </Col>
                        <Col sm={12}>
                            <Text statement={true} contentt="For first time PC Express users, how might we support our users in the search process to give them confidence to purchase and decrease the number of incomplete orders."/>
                        </Col>
                        <Col sm={12}>
                            <Text title="Current workflow and opportunities"/>
                        </Col>
                        <Col sm={12}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={wfopp}/>
                                <Text Content="I evaluated the app alongside my teammates to determine the current workflow and opportunities we can leverage."/>
                            </div>
                        </Col>
                        <Col sm={12}>

                    <Text title="Online grocery shopping space"/>

                    </Col>

                    <Col sm={12}>

                    <Text content="Out of 1004 Canadians, 62% of these shoppers purchase their groceries online with eCommerce platforms like Amazon, Walmart and Loblaws. The online grocery market in Canada is expected to grow to $3.6 billion by 2019 which means businesses in this sector need to understand their shoppers’ wants and goals."/>

            </Col>
                    </Row>
                    <Row>
                        {/* <Col sm={4}>
                            <Text header="How might we..."/>
                        </Col> */}
                      
                    </Row>
                {/*</Container>*/}


                {/*<Container>*/}
                    <Row>
                        <Col sm={12}>
                            <Text title="Assumptions"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color: "#666666",fontFamily: "rubik", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>It is hard for users to visualize the product size, colour, and quality</li>
                                <li>Users cannot attest to the freshness of the product through online shopping which makes them less confident in their purchase</li>
                                <li>The search process is confusing for prospective customers</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text title="Constraints"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="Due to the time constraint of this project, we decided to focus solely on first-time users as the metric we picked as a team to focus and improve on is engagement and retention. "/>
                        </Col>
                        <Col sm={12}>

                            <Text title="The Final Product"/>

                            </Col>
                            <Col sm={8}>
                            <Text header="DECODING THE SEARCH PROCESS"/>
                            <Text content="At the end of the 8 week journey, we presented our findings and solution to a panel of stakeholders."/>

                            <a style={{ fontFamily: "karla",fontSize: "1.125rem" ,marginBottom: "4rem",textTransform: "uppercase", letterSpacing: "0px",color: "#999999", fontWeight:"bold"}} href="#lddesignprocess">Show me the design process 👇🏻</a>

                            <div style={{marginBottom: "4rem", marginTop: "4rem"}}></div>
                            <div style={{marginBottom: "4rem", marginTop: "4rem"}}>

                            <Card.Img src={ldpcteam}/>

                            <Text Content="My team and I presenting our solution."/>

                            </div>
                            </Col>
                            {/* <Col sm={4}></Col> */}

                            <Col sm={4}>

                            <div style={{ marginBottom: "4rem"}}>

                            <Card.Img src={ldpcfinal}/>

                            </div>

                            </Col>
                    </Row>

                    <Row>
                        <Col sm={12}>
                            <Text title="The Process"/>
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
                            <Text header="SOME USE CASES"/>
                        </Col>
                        <Col sm={12}>
                            <Text statement={true} contentt="How do our first-time users discover products once they sign up?"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color: "#37373F",fontFamily: "KARLA", fontSize:"1.125rem", marginBottom:"2rem"}}>
                                <li>Quickly discover favourites</li>
                                <li>Find everyday products</li>
                                <li>Discover popular products</li>
                            </ul>
                        </Col>
                
                    </Row>
                </Container>

                <Container >
                    <Row>
                        <Col sm={12}>
                            {/* <Text Titlee="Research process"/> */}
                        </Col>
                        <Col sm={12}>
                            <Text title="01. Research"/>
                        </Col><Col sm={12}>
                            <Text header="CUSTOMER INTERVIEWS"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="The purpose of conducting customer interviews is to gather some insights on our users’ thoughts of online grocery shopping, experiences, and emotions throughout their discovery-to-checkout journey."/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Text header="PRIMARY RESEARCH"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="For our research, we interviewed 12 users in total. Their experiences of using online grocery apps varies. Majority are first time users, some have used PC Express in the past, while others have used competitor apps like Instacart. "/>
                        </Col>
                    </Row>

                    <Row>
                    <Col sm={12}>
                            <Text header="INSIGHTS FROM OUR USERS"/>
                            </Col>
                        <Col sm={12}>
                            {/* <Text header="Insights on our users"/> */}
                            <ul style={{ paddingLeft: "15px" ,color: "#37373F", fontFamily: "karla", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>Would like to have information on <b>expiry dates</b> for items</li>
                                <li>When it comes to fruit and produce, users are worried about the <b>quality of their products</b> when shopping online</li>
                                <li>Needs more <b>refinement in search</b> parameters</li>
                            </ul>
                        </Col>
                        <Col sm={12}></Col>
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
                            <Text content="“Navigating the app was a pain. There’s too much clicking around with no outcomes”-Nicole"/>
                            <Text content="“Because online grocery doesn’t give me confidence in the quality of my products” -Kristina"/>
                            <Text content="“It takes too long to compare items and lots of endless scrolling” -Daniel"/>
                        </Col>
                        <Col sm={12}></Col>
                        <Col sm={12}>
                        <div style={{ marginBottom: "4rem"}}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={review1}
                                alt="First slide"
                                />
                            
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={review2}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                                <Text Content="Reviews from current users."/>
                            </div>
                        </Col>
                    </Row>

                    

                    <Row>
                        <Col sm={12}>
                            <Text header="TARGET USER"/>
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
                        {/* <Col sm={12}>
                            <Text title="Mapping out the process"/>
                        </Col> */}
                        <Col sm={12}>
                        <Text header="EMPATHY MAPPING"/>
                        </Col>
                        <Col sm={12}>
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
                            <Text header="COMPETITIVE ANALYSIS"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="To gain a better understanding of the online grocery shopping space, I explored Instacart, Grocery Getaway, and Inabuggy."/>
                        </Col>

                        <Col sm={12}></Col>
                        <Col sm={12}>
                        
                 <div style={{ marginBottom: "4rem"}}>
                                            <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={inabuggy}
                                alt="First slide"
                                />
                            
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={groceryget}
                                alt="Third slide"
                                />

                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={instacart}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                            </Carousel>
                      </div>
                      </Col>
                    
                        <Col sm={12}>
                            <Text header="TAKEAWAYS"/>
                        </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color: "#37373F", fontFamily: "karla", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>Browse departments, sub departments and aisles were popular ways to filter and recreate the physical shopping experience</li>
                                <li>Allowing users to create a shopping list and searching multiple items on the list at a time</li>
                                <li>Re-order items from previous purchases</li>
                            </ul>
                        </Col>
                    </Row>

                </Container>

                <Container >
                    <Row>
                        <Col sm={12}>
                            <Text title="02. Ideation"/>
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
                            <Text title="Hypothesizing for success"/>
                        </Col>
                        <Col sm={12}>
                            <Text content="By reducing the amount of time it takes for a new user to find their grocery items, it will result in a higher conversion rate and retention."/>
                        </Col>
                        <Col sm={12}>
                        <Text header="KPIs to consider"/>
                        </Col>
                        <Col sm={12}>
                           
                            <ol style={{ paddingLeft: "15px" ,color: "#37373F", fontFamily: "karla", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>Decreased time in full funnel conversion (e.g Entering the platform and purchasing at least 1 item [cohort X])</li>
                                <li>Number of individuals from [cohort X] that make a return purchase within 3 weeks</li>
                                <li>Decreased duration spent on platform within search functionality</li>
                                <li>Decreased number of search terms within a session</li>
                            </ol>
                         
                        </Col>
                    </Row>

                </Container>

                <Container >
                    <Row>
                        <Col sm={12} id="lddesignprocess">
                            
                        </Col>
                        <Col sm={12}>
                            {/* <Text Titlee="Design Explorations"/> */}
                        </Col>
                        <Col sm={12}>
                            <Text title="03. Design Flow — the search cases"/></Col>

                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={homepage}/>
                            </div>
                            
                        </Col>

                   

                        <Col sm={7}>
                            <Text title="Homepage"/>
                            <Text content="Instead of populating random product cards in the homepage, for first time users, we wanted to display what is most important to them. For new users, the weekly sales card will display. For returning users, the past orders card will display before the weekly sales card."/>
                        </Col>
                        {/* <Col sm={12}>
                            <Text title="The search cases"/>
                        </Col> */}

                        <Col sm={7}>
                            <Text title="Categorizing products using Gestalt Principles"/>
                            <Text content="Applying the Gestalt’s Principle of Similarity, we can group different types of apples into categories to organize and better support search. "/>
                            <Text title="Error in spelling"/>
                            <Text content="When the user inputs the wrong search term like an error in spelling. There should be an acceptance to the error in the spelling, returning the most relevant products for that input. E.g. aaples v. apples. If the variance in the error is too high, no results will display."/>
                        </Col>

                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc1}/>
                            </div>
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


                        <Col sm={7}>

                            <Text title="Exact Search"/>
                            <Text content="Inputting the exact search term should display the same results as the generic search case. Relevancy should be determined by the ranking in terms of how close the strings of the query matches the data and popularity."/>
                        </Col>
                        <Col sm={5}>
                            <div style={{ marginBottom: "4rem"}}>
                                <Card.Img src={ldpc8}/>
                            </div>
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

                <Container >
                    <Row>
                        <Col sm={12}>
                            <Text header="A familiar search experience...  "/>
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
                    <Row>
                    
                    <Col sm={12}>
                        <Text title="User Testing"/>
                    </Col>
                    <Col sm={12}>
                        <Text content="We gave our users a series of tasks to complete to determine the usability of our solution and test KPIs. We saw success in the addition of ‘past orders’ on the homepage. This allowed users to decrease their time spent on search and decreased the number of search terms within a session. The feedback we received from users was positive, with many noting the ease in navigation and simplicity of search. Due to the time constraint, we could not validate our hypothesis of whether individuals would make a purchase within 3 weeks."/>
                    </Col>

                    <Col sm={12}>
                        <Text title="Iteration"/>
                    </Col>
                    <Col sm={12}>
                        <Text content="With testing, we uncovered that most users like to browse from previous orders before discovering new items. As well, users don’t just shop at one store. They would like their previous purchase items to appear in other stores they browse."/>
                    {/* </Col>
                    <Col sm={12}> */}
                        <div style={{ marginBottom: "4rem"}}>
                            <Card.Img src={iterationld}/>
                            {/* <Text Content="Using the barcode scanner to search"/> */}
                        </div>
                    </Col>
                    </Row>

                </Container>

                <Container >
                    <Row>
                        <Col sm={12}>
                            {/* <Text Titlee="Retrospective"/> */}
                        </Col>

                        <Col sm={12}>
                            <Text title="Learnings"/>
                            </Col>
                        <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color: "#37373F", fontFamily: "karla", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>A crucial factor to consider when implementing solutions was technical feasibility. While AI chatbots and AR grocery shopping sounds great to have, there is a level of complexity.</li>
                                <li>Consistency in the assets and images for grocery shopping is an important part of the process. It was difficult to maintain the consistency when handling masses of products since some will have multiple images while others will have none.</li>
                            </ul>
                        </Col>

                        <Col sm={12}>
                            <Text title="Next steps"/>
                            </Col>
                            <Col sm={12}>
                            <ul style={{ paddingLeft: "15px" ,color: "#37373F", fontFamily: "karla", fontSize:"1.125rem", marginBottom:"4rem"}}>
                                <li>Test and validate the remaining KPIs associated with our hypothesis</li>
                                {/*<li>Would love to dive into the problem in-depth by considering the other ideas we explored</li>*/}
                                <li>Explore other solutions and problems within this product area; there's always more problems to be solved</li>
                            </ul>
                        </Col>
                    </Row>
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

                    <nav style={{fontFamily: "Karla"}}>
                        <ul className="breadcrumb justify-content-center">
                        <li><a href="projects#">ALL</a></li>
                            <li style={{color:"#E8998D"}}>PC EXPRESS</li>
                            {/* <li><a href="project_two#">COMMUNITECH</a></li> */}
                            <li><a href="project_one#">SEARCH AND GATHER</a></li>
                            <li><a href="project_four#">UI SNIPPETS</a></li>
                        </ul>
                    </nav>

                </Container>
                
            </div>

        )
    }
}

export default Ldpc;