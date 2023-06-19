import {Col, Container, Row} from "react-bootstrap";
import Text from "./text";
import React from "react";

const ProjectInfo = (props) => {
    const content = props.contents;
    return (
        <div>
            <Container style={{"marginBottom": "3em"}}>
                <Row>
                    {content.map((c) =>
                        <Col sm={4}>
                            <Text title={c["title"]}/>
                            <Text content={[c["content"]]}/>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
};

export default ProjectInfo;


