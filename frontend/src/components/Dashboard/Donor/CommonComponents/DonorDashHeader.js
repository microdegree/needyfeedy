import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const DonorDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/donorDashboard">  <Navbar.Brand href="#home">NeedyFeedy</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/donorDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/donorDashboard/uploadDonorImage"> <Nav.Link href="#features">Add Donor Info</Nav.Link></Link>
                    <Link to="/donorDashboard/showMyInfo"> <Nav.Link href="#features">My Info</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default DonorDashHeader
