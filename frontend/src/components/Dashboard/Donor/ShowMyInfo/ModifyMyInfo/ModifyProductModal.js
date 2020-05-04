import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import ModifyMyInfoForm from './ModifyMyInfoForm';

const ModifyProductModal = (props) => {

    const [show, setShow] = useState(true)

    const handleClose = () => {
        console.log('inHandle close')
        setShow(false)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modify Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModifyMyInfoForm projectData={props.location.projectData} handleClose={handleClose} />
            </Modal.Body>
        </Modal>
    )
}

export default ModifyProductModal
