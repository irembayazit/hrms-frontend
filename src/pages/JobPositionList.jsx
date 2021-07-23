import React from 'react'
import { useState,useEffect } from "react";
import { Input, Menu, Label } from "semantic-ui-react";
import JobAdvertisementService from '../services/JobAdvertisementService'

export default function JobPositionsList() {

    const [jobadvertisements, setJobAdvertisement] = useState([])

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisement(result.data.data))
    })

    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>

                {jobadvertisements.map((jobadvertisement) => (
                    <Menu.Item name='inbox' key={jobadvertisement.id}>
                        <Label color='teal'>{jobadvertisement.openPoisitons}</Label>
                        {jobadvertisement.jobPositionId.title}              
                    </Menu.Item>
                ))}

            </Menu>
    </div>
    )
}
