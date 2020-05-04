import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const AddDonorInfo = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToAddInfo(data)

        props.history.push('./donorDashboard')
    }
    console.log(errors);

    return (
        <div>
            <center>
                <Card style={{ width: '48rem' }}>

                    <Card.Body>
                        {props.location.fileNameImage}

                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group controlId="donorName">
                                <Form.Label>Donor Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Donor name" name="donorName" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>



                            <Form.Group controlId="donorLocation">
                                <Form.Label>Donor Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Donor Location" name="donorLocation" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="donorFoodCategory">
                                <Form.Label>Food Category</Form.Label>
                                <Form.Control type="text" placeholder="Veg/Non-veg/Both" name="donorFoodCategory" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="donorQuantityAvailable">
                                <Form.Label>Quantity Available</Form.Label>
                                <Form.Control type="number" placeholder="Enter Quantity say 15 meals" name="donorQuantityAvailable" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <Form.Group controlId="donorFoodDetails">
                                <Form.Label>Additional Details</Form.Label>
                                <Form.Control type="text" placeholder="Enter any additional details" name="donorFoodDetails" ref={register({ required: false, maxLength: 400 })} />
                            </Form.Group>

                            <Form.Group controlId="donorContactEmail">
                                <Form.Label>Donor Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Donor Email" name="donorContactEmail" ref={register({ required: true, maxLength: 80 })} />
                            </Form.Group>

                            <br /> <br /> <br />
                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )

    function callServerToAddInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, "imageName": props.location.fileNameImage }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/addProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while adding Info ', error))

    }

}

export default AddDonorInfo
