import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './DonorCard';
import CardDeck from 'react-bootstrap/CardDeck'

const NgoDashUI = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div>
            <CardDeck>
                {products.map(projectData =>
                    <ProductCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >

    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default NgoDashUI
