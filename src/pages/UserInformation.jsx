import React, { Component } from "react";
import { Grid, GridColumn, Card, Image, Button, Table, Divider, Header, Icon, Portal, Segment, Form} from "semantic-ui-react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png"
import profil from "../images/profil.png"

export default class UserInformation extends Component {
  state = { activeIndex: false }
  state = { open: false }
  state = { avatar: false }
  state = { image: false }
  state = { imageChange: false }
  state = {
    selectedFile: null
}

fileSelectedHandler = event =>{
    this.setState({
        selectedFile: event.target.files[0]
    })
}

  open = () => this.setState({ open: false,image:true,avatar:false })
  close = () => this.setState({ open: false,image:false  })

  constructor(props) {
    super(props);
    this.state = {activeIndex: false};
    this.state = {imageChange: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
        activeIndex: !state.activeIndex        
    }));
  }

  openClick = () => {
    this.setState(state => ({
        open: !state.open        
    }));
  }


  clickChange = () => {
    this.setState(state => ({
        imageChange: !state.imageChange        
    }));
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append(
        "file",
        this.state.selectedFile,
        this.state.selectedFile.name        
    );    
    console.log(this.state.selectedFile);
    this.photo = this.state.selectedFile.name
} 

 render(){
    const { activeIndex } = this.state

  return (   
    <Grid>
        <Grid.Row>
            <GridColumn width={6}>
                <Card>
                    <img                    
                    src = {require('../images/avatar.png')}
                    />
                    <Card.Content >
                        <Card.Header style={{ float:"left", marginRight:"20em" }} >Matthew</Card.Header>
                        <Card.Meta style={{ float:"left",marginTop:"0.4em" }}><span className="date">Joined in 2015</span></Card.Meta>
                        <Card.Description style={{ float: "left" }}>Matthew is a musician living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra >
                        <Button inverted color='blue' style={{float:"left"}} onClick={this.clickChange}>Change</Button>
                        <Button
                            disabled={this.state.avatar===false}
                            inverted color='yellow' style={{float:"left"}}
                            content='Delete'
                            positive
                            onClick={this.openClick}
                        />
                    </Card.Content>
                </Card>
            </GridColumn>
            <GridColumn width={10}> 
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='address card' />
                        Profile
                    </Header>
                </Divider>
                <Table definition>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width={3}>Name Surname</Table.Cell>
                            <Table.Cell>Matthew</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Identity Number</Table.Cell>
                            <Table.Cell>6 ounces</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Birth Date</Table.Cell>
                            <Table.Cell>2015</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Email</Table.Cell>
                            <Table.Cell>Not Much Usually</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Password</Table.Cell>
                            <Table.Cell>
                                ******
                                <Button
                                    active={activeIndex === true}
                                    onClick={this.handleClick}
                                    style={{float:"right",}} 
                                    name="low vision"
                                >
                                    New Password
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>                    
                </Table>
                
                <Segment inverted style={{display:this.state.activeIndex ? "" : "none"}}>
                    <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Old Password' placeholder='Old Password' required style={{width:"23.5em"}} />
                        <Form>
                            <div style={{height:"60px",width:"400px"}}>
                                <Link style={{marginRight:"5em"}}>I forgot my password</Link>
                            </div>
                        </Form>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='New Password' placeholder='New Password' required />
                        <Form.Input fluid label='New Password Again' placeholder='New Password Again' required/>
                    </Form.Group>
                    <Button type='submit'>Change</Button>
                    </Form>
                </Segment>

                <Button  as={Link} to={"/JobSeekerCv/Add"} style={{float:"left",backgroundColor:"black",color:"violet"}}>Update Your CV Info</Button> 
                
                
                <Portal open={this.state.open}>
                    <Segment
                    style={{
                        left: '40%',
                        position: 'fixed',
                        top: '20%',
                        zIndex: 1000,
                        backgroundColor:"black",                        
                    }}
                    >
                    <Header style={{color:"white"}}>Are you sure you want to delete the picture?</Header>
                    <Button
                        primary
                        content='Yes'  
                        onClick={this.open}                
                    /> 
                    <Button
                        content='No'
                        negative
                        onClick={this.close}
                    />
                    </Segment>
                </Portal>

                <Segment  
                style={{
                    display:this.state.imageChange ? "" : "none",
                    left: '13%',
                    position: 'fixed',
                    top: '72%',
                    zIndex: 1000,
                    backgroundColor:"black",
                    color:"white",
                }}>
                    <input onChange={this.fileSelectedHandler} type="file"/>
                    <Button onClick={this.fileUploadHandler}  disabled={this.state.selectedFile==null}>Change</Button>
                </Segment>
                
                 
                
                            
            </GridColumn>              
        </Grid.Row>
    </Grid>

    
  );
 }
}

