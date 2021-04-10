import { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";


export class Results extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <Container>
                <div>
                    <div>
                        <h1 style={{width: "100%"}}>HELLO ALEXANDRIA</h1>
                        <Row>
                         <Col >
                            <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar" style={{height: "400px"}}></img>
                        </Col>
                        <Col sm-6>
                            <img className="scroll" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618070627/scrollonce_hpjsq7.gif" alt="scroll" style={{height: "400px"}}/>
                        </Col>
                        <Col >
                            <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar" style={{height: "400px"}}></img>
                        </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
}
export default Results;