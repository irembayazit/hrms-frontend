import React from 'react'
import { GridColumn } from 'semantic-ui-react'
import JobAdvertisementPage from '../pages/JobAdvertisementPage'
import JobSeekerList from '../pages/JobSeekerList'
import EmployerList from '../pages/EmployerList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { JobAdvertisementAdd } from '../pages/JobAdvertisementAdd'

export default function Dashboard() {
    return (
        <Router>
            <GridColumn width={12}>                        
                <Route exact path="/JobAdvertisementAdd" component={JobAdvertisementAdd } />
                <Route exact path="/jobAdvertisementPage" component={JobAdvertisementPage}/>
                <Route exact path="/" component={JobAdvertisementPage}/>
                <Route exact path="/jobSeekers" component={JobSeekerList}/>
                <Route exact path="/employers" component={EmployerList}/> 
            </GridColumn>            
        </Router>
    )
}