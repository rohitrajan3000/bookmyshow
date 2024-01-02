import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";



export default function SelectSeat() {



    const [selectedSeats, setSelectedSeats] = useState([]);
    const location = useLocation();

    const navigate = useNavigate();
    const {title} = location.state;
    const [seatsMatrix, setSeatsMatrix] = useState([]);
    const createSeats = () => {
        let totalRows = 5;
        let numberOfSeats = 8;
        let tempSeats = [];
        let row = 0;
        let ch = 'A';

        while (row < totalRows) {
            let col = 1;
            let rowArr = [];

            while (col <= numberOfSeats) {
                rowArr.push(ch + col);
                col++;
            }
            tempSeats.push(rowArr);
            row++;
            ch = String.fromCharCode(ch.charCodeAt(0) + 1);

        }
        setSeatsMatrix(tempSeats);
    }

    useEffect(() => {
        createSeats();
    }, [])

    const handleSelect = (newSeat) => {
        setSelectedSeats([...selectedSeats, newSeat]);
    }

    return (
        <div style={{padding:20}}>
            <h5>{title}</h5>
            <div style={{ marginLeft: 100 }} className="d-inline-block">Screen this side</div>
            <div style={{ marginTop: 20 }}>
                {
                    seatsMatrix.map((seatsArr) => {
                        return (

                            <Row style={{ marginBottom: 20 }}>
                                {seatsArr.map((seat) => {
                                    let isSelected = selectedSeats.indexOf(seat) > -1;
                                    return <Col>

                                        <Button style={{ backgroundColor: isSelected ? 'green' : 'blue' }} onClick={() => handleSelect(seat)}>{seat}</Button></Col>
                                })
                                }
                            </Row>
                        )
                    })
                }
            </div>
            <div style={{ marginTop: 45 }}>
                {
                    selectedSeats.length > 0 ?
                        <div>{selectedSeats.map((seat)=>{
                            return <span style = {{marginRight: 5}}>{seat}</span>
                        })}
                        seats selected
                        <div>
                            <h4>Total Rs: {selectedSeats.length * 200}</h4>
                            <Button on onClick={() => navigate('/succes')}>Cheakout</Button>
                            </div>
                        </div> :
                        <div> no seats selected

                        </div>
                }

            </div>
        </div>
    )
}