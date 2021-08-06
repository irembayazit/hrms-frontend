import React from 'react'
import { useState,useEffect } from "react";
import { Input, Menu, Label } from "semantic-ui-react";
import JobPositionService from '../services/JobPositionService'

export default function JobPositionsList() {

    const [jobPositions, setJobPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, [])

    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>

                {jobPositions.map((jobPosition) => (
                    <Menu.Item name='inbox' key={jobPosition.id}>
                        {jobPosition.title}              
                    </Menu.Item>
                ))}

            </Menu>
    </div>
    )
}
