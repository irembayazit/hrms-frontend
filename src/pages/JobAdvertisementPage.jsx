import React from 'react'
import JobAdvertisementList from './JobAdvertisementList'
import JobPositionsList from './JobPositionList'
import { Grid, GridColumn } from 'semantic-ui-react'
import { BrowserRouter as Router } from 'react-router-dom'

const JobAdvertisementPage = () => {
    return (
        <Router>
            <div>
                <Grid>
                    <Grid.Row>
                        <GridColumn width={4}>
                            <JobPositionsList/>
                        </GridColumn>
                        <GridColumn width={12}>                        
                            <JobAdvertisementList />
                        </GridColumn>
                    </Grid.Row>
                </Grid>
            </div> 
        </Router>
    )
    
}

export default JobAdvertisementPage