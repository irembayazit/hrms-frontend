import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobSeekerList from '../pages/JobSeekerList'
import EmployerList from '../pages/EmployerList'
import JobPositionsList from '../pages/JobPositionList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn width={4}>
                        <JobPositionsList/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <JobAdvertisementList/>
                        <br/>
                        <JobSeekerList/>
                        <br/>
                        <EmployerList/>
                    </GridColumn>
                </Grid.Row>
            </Grid>

        </div>
    )
}
