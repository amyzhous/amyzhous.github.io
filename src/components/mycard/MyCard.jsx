import React from "react";
import { UserCard } from "react-ui-cards";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import '@material/react-card/index.scss';
import "./MyCard.css";
import cutebb from "../../assets/img/cutebb.png";
import banner_LD from "../../assets/pcexp/banner_LD.jpg";

import { Button, Nav, Container, Row, Col } from "react-bootstrap";

class MyCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="my-card-wrapper-web hover-up container">
                    <Card
                        style={{
                            display: "inline-block",
                            borderRadius: "8px",
                            border: "none",
                        }}
                    >
                        <Card
                            style={{
                                width: "100%",
                                boxShadow: "none",
                                border: "none",
                                height: "100%",
                            }}
                        >
                            <Card.Img
                                // variant="top"
                                src={this.props.imgSrc}
                                style={{ borderRadius: "8px", height: "100%" }}
                            />
                        </Card>

                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: "#101010",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    marginLeft: "30px",
                                    marginRight: "30px",
                                    fontFamily: "dm sans",
                                }}
                            >
                                {this.props.title}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    color: "#9E9FA0",
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    marginBottom: "10px",
                                    textAlign: "center",
                                    marginLeft: "30px",
                                    marginRight: "30px",
                                    fontFamily: "dm sans",
                                }}
                            >
                                {this.props.subtitle}
                            </Card.Subtitle>
                            {/* <Card.Text style={{color: '#353839',fontSize:"16px",textAlign: "center", marginLeft:"30px", marginRight: "30px", fontFamily: "dm sans"}}>{this.props.text} */}
                            {/* {this.props.text || ""} */}
                            {/* </Card.Text> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="my-card-wrapper-mobile hover-up container">
                    <Card
                        style={{ display: "inline-block", borderRadius: "8px" }}
                    >
                        <Card.Img
                            // variant="top"
                            src={this.props.imgSrc}
                            style={{
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "0px",
                                borderBottomRightRadius: "0px",
                                borderBottomLeftRadius: "0px",
                            }}
                        />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    color: "#37373F",
                                    fontSize: "27px",
                                    textAlign: "left",
                                    marginLeft: "24px",
                                    marginRight: "24px",
                                    fontWeight: "700",
                                    fontFamily: "dm sans",
                                }}
                            >
                                {this.props.title}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    color: "#666666",
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    marginBottom: "10px",
                                    textAlign: "left",
                                    marginLeft: "30px",
                                    marginRight: "30px",
                                    fontFamily: "dm sans",
                                }}
                            >
                                {this.props.subtitle}
                            </Card.Subtitle>
                            <Card.Text
                                style={{
                                    color: "#37373F",
                                    fontSize: "12px",
                                    textAlign: "left",
                                    marginLeft: "24px",
                                    marginRight: "24px",
                                    fontFamily: "dm sans",
                                }}
                            >
                                {this.props.text}
                                {this.props.text || ""}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default MyCard;
