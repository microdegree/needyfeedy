import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import DonorDashHeader from './CommonComponents/DonorDashHeader';
import DonorDashUI from './DonorDashHome/DonorDashUI';
import AddDonorInfo from './AddDonorInfo/AddDonorInfo';
import { Route } from "react-router-dom";
import UploadDonorImage from './AddDonorInfo/UploadDonorImage';
import ShowMyInfo from './ShowMyInfo/ShowMyInfo';
import ModifyProductModal from './ShowMyInfo/ModifyMyInfo/ModifyProductModal';

const DonorDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <DonorDashHeader logout={props.history} />

            <Route exact path="/donorDashboard" component={DonorDashUI} />
            <Route exact path="/donorDashboard/addDonorInfo" component={AddDonorInfo} />
            <Route exact path="/donorDashboard/uploadDonorImage" component={UploadDonorImage} />

            <Route exact path="/donorDashboard/showMyInfo" component={ShowMyInfo} />
            <Route exact path="/donorDashboard/showMyInfo/modal/modifyProject" component={ModifyProductModal} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default DonorDashContainer
