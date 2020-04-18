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
                        <Card.Title style={{color: '#696969' }}>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.text || ""}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default MyCard;