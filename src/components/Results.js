import "../Result.css" 
import Card from "react-bootstrap/CardColumns";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

function Results() {
    return(
        <div>
            <div className="header">
                <h1>HELLO ALEXANDRIA</h1>
            </div>
            <div className="flex-container">
                <div className="column">
                    <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar"></img>
                </div>
                <div className="scroll">
                    <img className="scroll" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618070627/scrollonce_hpjsq7.gif" alt="scroll"/>
                    <h1 className="result">TITLE</h1>
                    <h1 className="author">AUTHOR</h1>

                </div>
                <div className="column">
                    <img className="pillar" src="https://res.cloudinary.com/carolinaurrea/image/upload/v1618028409/pillars_kl2tke.png" alt="pillar"></img>
                </div>
            </div>
        </div>
    )
}

export default Results;