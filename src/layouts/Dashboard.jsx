import React from 'react'
import { GridColumn } from 'semantic-ui-react'
import JobAdvertisementPage from '../pages/JobAdvertisement/JobAdvertisementPage'
import JobSeekerList from '../pages/JobSeekerList'
import EmployerList from '../pages/EmployerList'
import { Route } from 'react-router-dom'
import { JobAdvertisementAdd } from '../pages/JobAdvertisement/JobAdvertisementAdd'
import JobAdvertisementDetail from '../pages/JobAdvertisement/JobAdvertisementDetail'
import { ToastContainer } from 'react-toastify'
import JobSeekerCvAdd from '../pages/JobSeekerCv/JobSeekerCvAdd'
import UserInformation from '../pages/UserInformation'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>        
            <GridColumn width={12}>                      
                <Route exact path="/" component={JobAdvertisementPage}/>                  
                <Route exact path="/jobAdvertisementPage" component={JobAdvertisementPage}/>
                <Route exact path="/JobAdvertisementAdd" component={JobAdvertisementAdd } />
                <Route exact path="/jobSeekers" component={JobSeekerList}/>
                <Route exact path="/employers" component={EmployerList}/> 
                <Route path="/jobAdvertisementDetail/:id" component={JobAdvertisementDetail}/>
                <Route path="/jobSeekerCv/Add" component={JobSeekerCvAdd}/>
                <Route path="/userInformation" component={UserInformation}/> 
            </GridColumn>      
        </div>    
    )
}