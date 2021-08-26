import { Formik,Form } from 'formik'
import React from 'react'
import { Button, FormGroup, Label } from 'semantic-ui-react'
import HrmsTextInput from '../../utilities/formControls/HrmsTextInput'
import * as Yup from "yup";
import { Grid, GridColumn } from 'semantic-ui-react'
import CvAddressService from '../../services/CvServices/CvAddressService';
import CvEducationService from '../../services/CvServices/CvEducationService';
import CvExperinceService from '../../services/CvServices/CvExperinceService';
import CvLanguageService from '../../services/CvServices/CvLanguageService';
import CvSkillService from '../../services/CvServices/CvSkillService';
import CvCoverLetterService from '../../services/CvServices/CvCoverLetterService';
import JobSeekerCvImage from './JobSeekerCvImage';


export default function JobSeekerCvAdd()  {

    const initialValues = {
        github : "",
        linkedin : "",
        coverLetter:"",
        departmentName : "",
        graduationYear : "",
        schoolStartYear : "",
        schoolName : "",
        endYear : "",
        position : "",
        startYear : "",
        workplaceName : "",
        language : "",
        level : 0,
        file : "",
        skill : "",
        jobSeeker:{ userId: 4 }
    }

    const schema = Yup.object({
        github: Yup.string(),
        linkedin: Yup.string(),
        coverLetter : Yup.string()
      });

      
    
    return (
    <Grid>
        <Grid.Row>
            <GridColumn width={6}>
                <img src="https://cdn.iconscout.com/wordpress/2018/04/swingvy_all_illustrations.png" alt='hrms project'style={{marginTop:"5em"}}/>   
                <img src="https://res.cloudinary.com/adaface/image/upload/v1626247549/blog/images/Importance-of-HR.png" alt='hrms project'style={{marginTop:"7em"}}/>                
            </GridColumn>
            <GridColumn width={10}> 
                <Formik
                    initialValues = {initialValues}
                    validationSchema={schema} 
                    onSubmit = {(values) =>{
                        console.log(values)
                        new CvAddressService().add(values);
                        new CvEducationService().add(values);
                        new CvExperinceService().add(values);
                        new CvLanguageService().add(values);
                        new CvSkillService().add(values);
                        new CvCoverLetterService().add(values);
                    }}
                >
                {({
                    handleChange,
                }) => (
                <Form className="ui form" >

                    <Label style={{color:"black",backgroundColor:"#339999",width:"58em"}}>Education</Label>
                    <Form className="ui form" >    
                        <FormGroup widths="equal">             
                            <HrmsTextInput name="schoolName" placeholder="School Name"/>
                            <HrmsTextInput name="departmentName" placeholder="Department Name"/>
                        </FormGroup>   
                        <FormGroup widths="equal">                                        
                            <HrmsTextInput type="date" name="schoolStartYear" placeholder="Start Year"/>
                            <HrmsTextInput type="date"name="graduationYear" placeholder="Graduation Year"/>
                        </FormGroup> 
                    </Form>

                    <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Experience</Label>
                    <Form className="ui form">
                        <FormGroup widths="equal" >             
                            <HrmsTextInput name="workplaceName" placeholder="Workplace Name"/>
                            <HrmsTextInput name="position" placeholder="Position"/>
                        </FormGroup>   
                        <FormGroup widths="equal" >             
                            <HrmsTextInput type="date" name="startYear" placeholder="Start Year"/>
                            <HrmsTextInput type="date" name="endYear" placeholder="Graduation Year"/>
                        </FormGroup> 
                    </Form>

                    <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Skill</Label>
                    <Form className="ui form">
                        <FormGroup widths="equal" style={{marginTop:"1em"}}>             
                            <HrmsTextInput name="skill"/>
                        </FormGroup>  
                    </Form>

                    <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Address</Label>
                    <Form className="ui form">
                        <FormGroup widths="equal" >             
                            <HrmsTextInput name="github" placeholder="Github Address"/>
                            <HrmsTextInput name="linkedin" placeholder="Linkedin Address"/>
                        </FormGroup>    
                    </Form>

                    <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Language</Label>
                    <Form className="ui form">
                        <FormGroup widths="equal" >             
                            <HrmsTextInput name="language" placeholder="Language"/>
                            <HrmsTextInput type="number" name="level" placeholder="Level"/>
                        </FormGroup>  
                    </Form>

                    <JobSeekerCvImage/>

                    <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Cover Letter</Label>
                    <Form className="ui form">      
                        <textarea style={{marginTop:"1em"}} name="coverLetter" type="file" onChange={handleChange} />
                    </Form>
                        <Button style={{marginTop:"1em"}} color="red" type="submit">Ekle</Button>                                                                   
                    </Form>
                )}
                </Formik>
                
            </GridColumn>              
        </Grid.Row>
    </Grid>
    )
}
