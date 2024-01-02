import React from "react";
import { Col, Row } from "react-bootstrap";
import img1 from '../assets/3.png';
import img2 from '../assets/8.png';

const Success = () =>{
    return(
        <div>
            <Row style={{ padding: 50, display:'flex',justifyContent:'center',alignContent:'center'}}>
                <Col style={{ padding: 50, display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                <img src ={img1} height={300} width={300} style={{marginLeft:130}}/>
                <div style={{marginLeft:0, padding: 50, display:'flex',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                    <h1>Ticket Confirmed</h1>
                    <h3>Enjoy Your Movie</h3>
                </div>
                </Col>
                <Col>
                <img src = {img2} height={400}/> 
                </Col>
            </Row>
        </div>
    )
}

export default Success;