import React, { Component } from 'react'
import CvPhotoService from '../../services/CvServices/CvPhotoService';
import { toast } from "react-toastify";
import { Label } from 'semantic-ui-react';

export default class JobSeekerCvImage extends Component{

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        let cvPhotoService = new CvPhotoService();
        cvPhotoService.add(4,fd).then(res => {
            toast.success(res.data.message);
            //console.log(res);
        })
    }    

    render(){
        return(
            <div>
                <Label style={{marginTop:"1em",color:"black",backgroundColor:"#339999",width:"58em"}}>Cv File</Label>
                <input
                    style={{marginTop:"1em",width:"40em",float:"left"}}
                    id="file"
                    name="file"
                    type="file" 
                    onChange={this.fileSelectedHandler}
                />
                <button 
                style={{marginTop:"1.3em",backgroundColor:"green"}} 
                onClick={this.fileUploadHandler} 
                disabled={this.state.selectedFile==null}
                >
                    Upload
                </button>
            </div>
        );        
    }
}
