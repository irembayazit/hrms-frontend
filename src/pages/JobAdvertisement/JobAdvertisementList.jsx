import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../store/actions/favoriteActions";

export default function JobAdvertisementList() {

  const dispatch = useDispatch()

  const [jobadvertisements, setJobAdvertisement] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementsTrue()
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  const handleAddToFavorite=(advert)=>{
    dispatch(addToFavorite(advert))
  }

  return (
    <div>
      <Card.Group>
        {jobadvertisements.map((jobadvertisement) => (
          <Card fluid key={jobadvertisement.id} >
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              <Card.Header>{jobadvertisement.employer?.companyName}</Card.Header>
              <Card.Meta>{jobadvertisement.city.city}</Card.Meta>
              <Card.Description>
                {jobadvertisement.definition + " "}
                <strong>{jobadvertisement.jobPosition.title}</strong> 
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Link to={`/jobAdvertisementDetail/${jobadvertisement.id}`} >
                  <Button primary>Detail</Button>
                </Link>
                <Link>
                  <Button 
                  color="green"
                  style={{ marginLeft: "0.5em" }} 
                  onClick={()=>handleAddToFavorite(jobadvertisement)}>Save</Button>
                </Link>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
