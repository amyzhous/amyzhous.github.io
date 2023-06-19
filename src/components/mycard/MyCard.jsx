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
                    <Card style={{display: 'inline-block' , "borderRadius": '4px','border': 'none'}}>
                        <Card  style={{width: '100%', boxShadow: 'none', border:'none', height: '100%'}}>
                            <Card.Img
                                // variant="top"
                                src={this.props.imgSrc}
                                style={{"borderRadius":"4px", height: '100%'}}
                            />
                        </Card>
                        <Card.Body>
                        <Card.Title style={{color: '#1E2126' ,fontSize:"1.3em", fontWeight:"500", textAlign:"center", marginLeft:"30px", marginRight: "30px", fontFamily: "dm sans"}}>{this.props.title}</Card.Title>
                        <Card.Subtitle style={{color: '#7A838B',fontSize:"1.125rem",fontWeight:"400", marginBottom: "10px", textAlign: "center", marginLeft:"30px", marginRight: "30px", fontFamily: "dm sans"}}>{this.props.subtitle}
                        </Card.Subtitle>
                        {/* <Card.Text style={{color: '#353839',fontSize:"16px",textAlign: "center", marginLeft:"30px", marginRight: "30px", fontFamily: "dm sans"}}>{this.props.text} */}
                            {/* {this.props.text || ""} */}
                        {/* </Card.Text> */}
                        </Card.Body>
                    </Card>
    
                </div>
                <div className="my-card-wrapper-mobile hover-up container">
                    <Card style={{display: 'inline-block' , "borderRadius": '4px', border: '7A838B'}}>
                            <Card.Img
                                // variant="top"
                                src={this.props.imgSrc}
                                style={{"borderTopLeftRadius": "4px", "borderTopRightRadius": "4px", "borderBottomRightRadius": "0px", "borderBottomLeftRadius": "0px"}}
                            />
                            <Card.Body>
                            <Card.Title style={{color: '#1E2126' ,fontSize:"1em", textAlign:"center", marginLeft:"16px", marginRight: "16px",fontWeight:"700", fontFamily: "dm sans"}}>{this.props.title}</Card.Title>
                            <Card.Subtitle style={{color: "#7A838B",fontSize:"0.8em",fontWeight:"400", marginBottom: "10px", textAlign: "center", marginLeft:"16px", marginRight: "16px", fontFamily: "dm sans"}}>{this.props.subtitle}
                            </Card.Subtitle>
                            {/* <Card.Text style={{color: '#1E2126',fontSize:"12px",textAlign: "left", marginLeft:"16px", marginRight: "16px", fontFamily: "dm sans"}}>{this.props.text}
                                {this.props.text || ""}
                            </Card.Text> */}
                            </Card.Body>
                        </Card>
                </div>
             </div>

        )
    }
}

export default MyCard;