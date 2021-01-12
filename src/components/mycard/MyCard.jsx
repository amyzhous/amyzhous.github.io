import React from 'react';
import { UserCard } from 'react-ui-cards';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import './MyCard.css';
import cutebb from '../../assets/img/cutebb.png';
import banner_LD from "../../assets/pcexp/banner_LD.jpg";






import {Button, Nav, Container, Row, Col} from 'react-bootstrap';

class MyCard extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div>
                <div className="my-card-wrapper-web hover-up container">

                    <Card style={{display: 'inline-block' , "borderRadius": '15px', 'textAlign': 'left', 'border': 'none', height: '400px'}}>
                        <Card  style={{width: '60%', boxShadow: 'none', border:'none', height: '100%'}}>
                            <Card.Img
                                // variant="top"
                                src={this.props.imgSrc}
                                style={{"borderRadius":"15px", height: '100%'}}
                            />
                        </Card>

                        <Card  style={{width: '40%', border: 'none', boxShadow: 'none', background: 'none' , "borderRadius": '15px', verticalAlign: 'middle'}}>
                            <Card.Body>
                                <Card.Title style={{color: '#37373F' ,fontSize:"27px", textAlign:"left", paddingLeft:"30px", paddingRight: "30px", fontWeight:"700", fontFamily: "Merriweather",marginBottom: "24px"}}>{this.props.title}</Card.Title>
                                <Card.Subtitle style={{color: "#666666",fontSize:"16px",fontWeight:"400", marginBottom: "24px", textAlign: "left", marginLeft:"30px", marginRight: "30px", fontFamily: "Karla"}}>{this.props.subtitle}
                                </Card.Subtitle>
                                
                            {/* <Card.Text style={{color: '#37364d',fontSize:"16px",textAlign: "left", paddingLeft:"10px", paddingRight: "10px", fontFamily: "rubik"}}>{this.props.text} */}
                                {this.props.text || ""}
                            {/* </Card.Text> */}
                            {/* <Button style={{color:'ffffff', backgroundColor:'rgb(148,123,211,0.6)', marginBottom: '10px', border:'none', borderRadius:'15px', width:'120px'}}>Read more</Button> */}
                        
                            </Card.Body>

                        </Card>

                        
                        {/* <Card.Body>
                        <Card.Title style={{color: '#353839' ,fontSize:"24px", fontWeight:"500", textAlign:"left", marginLeft:"30px", marginRight: "30px", fontFamily: "rubik"}}>{this.props.title}</Card.Title>
                        <Card.Subtitle style={{color: '#9E9FA0',fontSize:"16px",fontWeight:"400", marginBottom: "10px", textAlign: "left", marginLeft:"30px", marginRight: "30px", fontFamily: "rubik"}}>{this.props.subtitle}
                        </Card.Subtitle>
                        <Card.Text style={{color: '#353839',fontSize:"16px",textAlign: "left", marginLeft:"30px", marginRight: "30px", fontFamily: "rubik"}}>{this.props.text}
                            {this.props.text || ""}
                        </Card.Text>
                        </Card.Body> */}
                    </Card>
                    {/* <Card style={{display: 'inline-block' , "borderRadius": '20px'}}> */}
                    
                    {/* <Card.Body> */}
                        {/* <Card.Title style={{color: '#555555' ,fontSize:"24px", fontWeight:"bold", textAlign:"center", marginLeft:"30px", marginRight: "30px", fontFamily: "open sans"}}>{this.props.title}</Card.Title> */}
                        {/* <Card.Subtitle style={{color: '#aaaaaa',fontSize:"14px",fontWeight:"bold", marginBottom: "10px", textAlign: "center", marginLeft:"30px", marginRight: "30px", fontFamily: "open sans"}}>{this.props.subtitle} */}
                        {/* </Card.Subtitle> */}
                        {/* <Card.Text style={{color: '#555555',fontSize:"16px",textAlign: "center", marginLeft:"30px", marginRight: "30px", fontFamily: "open sans"}}>{this.props.text} */}
                            {/* {this.props.text || ""} */}
                        {/* </Card.Text> */}
                    {/* </Card.Body> */}
                </div>
                <div className="my-card-wrapper-mobile hover-up container">
                    <Card style={{display: 'inline-block' , "borderRadius": '15px'}}>
                            <Card.Img
                                // variant="top"
                                src={this.props.imgSrc}
                                style={{"borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "borderBottomRightRadius": "0px", "borderBottomLeftRadius": "0px"}}
                            />
                            <Card.Body>
                            <Card.Title style={{color: '#37373F' ,fontSize:"27px", textAlign:"left", marginLeft:"30px", marginRight: "30px",fontWeight:"700", fontFamily: "Merriweather"}}>{this.props.title}</Card.Title>
                            <Card.Subtitle style={{color: "#666666",fontSize:"16px",fontWeight:"400", marginBottom: "10px", textAlign: "left", marginLeft:"30px", marginRight: "30px", fontFamily: "Karla"}}>{this.props.subtitle}
                            </Card.Subtitle>
                            <Card.Text style={{color: '#37373F',fontSize:"12px",textAlign: "left", marginLeft:"30px", marginRight: "30px", fontFamily: "Karla"}}>{this.props.text}
                                {this.props.text || ""}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                </div>
             </div>

        )
    }
}

export default MyCard;