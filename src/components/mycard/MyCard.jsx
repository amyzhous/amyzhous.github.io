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
            <div className="my-card-wrapper hover-up container">
                <Card style={{display: 'inline-block' }}>
                    <Card.Img variant="top" src={this.props.imgSrc} />
                    <Card.Body>
                        <Card.Title style={{color: '#555555' ,fontSize:"24px", fontWeight:"bold", textAlign:"left", marginLeft:"30px", marginRight: "30px"}}>{this.props.title}</Card.Title>
                        <Card.Subtitle style={{color: '#aaaaaa',fontSize:"14px",fontWeight:"bold", marginBottom: "10px", textAlign: "left", marginLeft:"30px", marginRight: "30px"}}>{this.props.subtitle}
                        </Card.Subtitle>
                        <Card.Text style={{color: '#555555',fontSize:"16px",textAlign: "left", marginLeft:"30px", marginRight: "30px"}}>{this.props.text}
                            {/*{this.props.text || ""}*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default MyCard;