import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#68FFDC' }}><Card.Body>
                    <Card.Title>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.donorName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}> donorLocation : {props.location.projectData.donorLocation}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorFoodCategory Name : {props.location.projectData.donorFoodCategory}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorQuantityAvailable: {props.location.projectData.donorQuantityAvailable}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorFoodDetails: {props.location.projectData.donorFoodDetails}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>donorContactEmail: {props.location.projectData.donorContactEmail}</Row>


                            Booked Num oF Meals : {props.location.bookingInfo.numOfMealsRequired} <br />

                        </Col>
                    </Row>
                    <Button variant="primary"><Link to='/ngoDashboard' style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Confirm Request</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "numOfMealsRequired": props.location.bookingInfo.numOfMealsRequired

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
