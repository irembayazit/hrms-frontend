import React from 'react'
import { useState,useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobSeekerService from '../services/JobSeekerService';

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(()=>{
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobSeekers.map((jobSeeker) => (
                    <Table.Row key={jobSeeker.userId}>
                        <Table.Cell>{jobSeeker.name}</Table.Cell>
                        <Table.Cell>{jobSeeker.surname}</Table.Cell>
                        <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
                        <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="12">
                        <Menu floated="right" pagination>
                            <Menu.Item as="a" icon>
                            <Icon name="chevron left" />
                            </Menu.Item>
                            <Menu.Item as="a">1</Menu.Item>
                            <Menu.Item as="a">2</Menu.Item>
                            <Menu.Item as="a">3</Menu.Item>
                            <Menu.Item as="a">4</Menu.Item>
                            <Menu.Item as="a" icon>
                            <Icon name="chevron right" />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
       

    
    </div>
    )
}
