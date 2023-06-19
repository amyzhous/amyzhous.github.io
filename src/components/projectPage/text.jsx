import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@material/react-card/index.scss';
import Typed from "react-typed";

import { Button, Nav, Container, Row, Col, Card } from "react-bootstrap";
import MyNavBar from "../navbar/MyNavBar";
import "./ldpc.css";
import "./text.css";

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.statement = props.statement;
    }
    render() {
        return (
            <div style={{ marginBottom: "3rem" }}>
                <Col style={{ padding: "0 0" }}>
                    {this.props.header && (
                        <h1
                            style={{
                                fontWeight: "700",
                                fontFamily: "dm sans",
                                color: "#1E2126",
                                fontSize: "1.5rem",
                            }}
                        >
                            {this.props.header}
                        </h1>
                    )}

                    {/*{this.props.title &&*/}
                    {/*    <h3 style={{fontSize: "1.2rem", fontWeight: "bold", fontFamily: "open sans", color:"#1a1a1a" ,textTransform: "uppercase", letterSpacing: "2px"+*/}
                    {/*            ""}}>*/}
                    {/*        {this.props.title}*/}
                    {/*    </h3>*/}
                    {/*}*/}

                    {this.props.title && (
                        <h2
                            style={{
                                fontSize: "1.3rem",
                                fontWeight: "500",
                                fontFamily: "dm sans",
                                color: "#1E2126",
                                letterSpacing: "0px" + "",
                            }}
                        >
                            {this.props.title}
                        </h2>
                    )}
                    {this.props.Title && (
                        <h1
                            style={{
                                fontWeight: "900",
                                fontFamily: "dm sans",
                                color: "#1E2126",
                                fontSize: "2.5rem",
                                letterSpacing: "0px" + "",
                            }}
                        >
                            {this.props.Title}
                        </h1>
                    )}
                    {/* {this.props.Titlee &&
                    <h1 style={{ fontWeight: "500", fontFamily: "dm sans", color:"#1E2126" , fontSize:"2rem", letterSpacing: "0px"+
                            ""}}>
                        {this.props.Titlee}
                    </h1>
                    } */}
                    {(this.props.content || this.props.children) && (
                        <p
                            className={
                                this.statement &&
                                this.statement === true &&
                                "statement"
                            }
                            style={{
                                fontFamily: "dm sans",
                                color: "#40474D",
                                letterSpacing: "0px",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                            }}
                        >
                            {this.props.content}
                            {this.props.children}
                        </p>
                    )}
                    {/* {(this.props.contentt || this.props.children) &&
                        <p className={this.statement&&this.statement===true&&"statement"} style={{fontFamily: "dm sans", color: "#37373F", letterSpacing: "0px", fontSize: "1.5rem", fontWeight:"400", fontStyle:"italic"}} >
                            {this.props.contentt}
                            {this.props.children}
                        </p>
                    } */}
                    {/* {(this.props.Content || this.props.children) &&
                    <p className={this.statement&&this.statement===true&&"statement"} style={{fontFamily: "dm sans", color: "#999999)", letterSpacing: "0.5px", fontSize: "1rem", fontStyle:"italic", textAlign:"center", marginTop:"1rem"}} >
                        {this.props.Content}
                        {this.props.children}
                    </p>
                    } */}
                </Col>
            </div>
        );
    }
}

export default Text;
