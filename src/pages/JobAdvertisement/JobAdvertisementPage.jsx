import React from 'react'
import JobPositionsList from '../JobPositionList'
import JobAdvertisementList from './JobAdvertisementList'
import { Grid, GridColumn } from 'semantic-ui-react'

export default function JobAdvertisementPage() {
    return (
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
    )
    
}