import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})

    const onChange = (e) => {

        console.log(e.target.value);

        setBookingInfo({ "numOfMealsRequired": e.target.value })
    }

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff' }}>
                            <br />

                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.donorName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}> donorLocation : {props.location.projectData.donorLocation}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorFoodCategory Name : {props.location.projectData.donorFoodCategory}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorQuantityAvailable: {props.location.projectData.donorQuantityAvailable}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorFoodDetails: {props.location.projectData.donorFoodDetails}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorContactEmail: {props.location.projectData.donorContactEmail}</Row>

                                    <br />

                                    <Form>

                                        <Form.Group controlId="numOfMealsRequired" onChange={onChange}>
                                            <Form.Label>Number Of Meals Required</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number of Meals" name="numOfMealsRequired" />
                                        </Form.Group>

                                        <br /> <br /> <br />

                                    </Form>

                                    <h2> Requested Quantity: {bookingInfo.numOfMealsRequired}</h2>

                                    <Row>projectData Details
                                         <Link to={{
                                            pathname: '/ngoDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: bookingInfo

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Check Out</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

}

export default DetailsComponent
