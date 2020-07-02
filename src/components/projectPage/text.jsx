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
                        <h4 style={{fontWeight:"bold",fontFamily: "open sans", color:"#1a1a1a", letterSpacing: "1px",fontSize: "1.5625rem"}}>
                            {this.props.header}
                        </h4>
                    }

                    {/*{this.props.title &&*/}
                    {/*    <h3 style={{fontSize: "1.2rem", fontWeight: "bold", fontFamily: "open sans", color:"#1a1a1a" ,textTransform: "uppercase", letterSpacing: "2px"+*/}
                    {/*            ""}}>*/}
                    {/*        {this.props.title}*/}
                    {/*    </h3>*/}
                    {/*}*/}
                    {this.props.title &&
                    <h3 style={{fontSize: "1.1rem", fontWeight: "bold", fontFamily: "open sans", color:"#885A89" ,textTransform: "uppercase", letterSpacing: "3px"+
                            ""}}>
                        {this.props.title}
                    </h3>
                    }
                    {this.props.Title &&
                    <h1 style={{ fontWeight: "bold", fontFamily: "open sans", color:"#1a1a1a" , letterSpacing: "2px"+
                            ""}}>
                        {this.props.Title}
                    </h1>
                    }
                    {(this.props.content || this.props.children) &&
                        <p className={this.statement&&this.statement===true&&"statement"} style={{fontFamily: "Source Sans Pro", color: "1a1a1a", letterSpacing: "0.5px", fontSize: "1.1rem"}} >
                            {this.props.content}
                            {this.props.children}
                        </p>
                    }
                    {(this.props.Content || this.props.children) &&
                    <p className={this.statement&&this.statement===true&&"statement"} style={{fontFamily: "Source Sans Pro", color: "rgb(26,26,26,0.7)", letterSpacing: "0.5px", fontSize: "1.1rem", fontStyle:"italic", textAlign:"center", marginTop:"1rem"}} >
                        {this.props.Content}
                        {this.props.children}
                    </p>
                    }
                </Col>
            </div>

        )
    }
}


export default Text;