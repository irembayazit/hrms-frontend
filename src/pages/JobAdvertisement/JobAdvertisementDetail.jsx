import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react' 
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdvertisementDetail() {

  let { id } = useParams();
  console.log(id)

  const [jobadvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getById(id).then(result=> setJobAdvertisement(result.data.data))
  }, [])

  console.log(jobadvertisement)

  return (
    <div>
      <Card.Group>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Meta>{jobadvertisement.id} </Card.Meta>
            <Card.Description>
            {jobadvertisement.definition} <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
