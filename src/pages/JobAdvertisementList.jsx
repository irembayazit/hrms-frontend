import React from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { useState,useEffect } from "react";
import { Button, Card, Image } from 'semantic-ui-react'



export default function JobAdvertisementList() {

  const [jobadvertisements, setJobAdvertisement] = useState([])

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisement(result.data.data))
    },[])

    return (
        <div>
          <Card.Group>
            {jobadvertisements.map((jobadvertisement) => (
              <Card fluid>
                <Card.Content >
                  <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  />
                  <Card.Header>{jobadvertisement.employer.companyName}</Card.Header>
                  <Card.Meta>{jobadvertisement.city.cities}</Card.Meta>
                  <Card.Description>
                  {jobadvertisement.definition} <strong>{jobadvertisement.jobPositionId.title}</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'> 
                    <Button basic color='green'>
                      Approve
                    </Button>
                    <Button basic color='red'>
                      Decline
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
    )
}