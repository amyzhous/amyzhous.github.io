import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material/react-card/index.scss';
import Typed from 'react-typed';

import {Button, Nav, Container, Row, Col, Card} from 'react-bootstrap';
import MyNavBar from "../navbar/MyNavBar";
import "./ldpc.css";
import "./text.css";

class Text extends React.Component{
    constructor(props){
        super(props);
        this.statement = props.statement
    }
    render() {

        return(
            <div style={{"marginBottom":"3rem"}}>
                <Col style={{padding: "0 0"}}>
                    {this.props.header &&
                        <h4 style={{fontWeight:"bold",fontFamily: "poppins", color:"#555555", letterSpacing: "1px"}}>
                            {this.props.header}
                        </h4>
                    }

                    {this.props.title &&
                        <h3 style={{fontSize: "1.2rem", fontWeight: "bold", fontFamily: "poppins", color:"#885A89" ,textTransform: "uppercase", letterSpacing: "2px"+
                                ""}}>
                            {this.props.title}
                        </h3>
                    }
                    {(this.props.content || this.props.children) &&
                        <p className={this.statement&&this.statement===true&&"statement"} style={{fontFamily: "Avenir", color:"#555555", letterSpacing: "0.5px"}} >
                            {this.props.content}
                            {this.props.children}
                        </p>
                    }

                </Col>
            </div>

        )
    }
}


export default Text;