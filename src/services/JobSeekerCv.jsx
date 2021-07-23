import axios from "axios";

export default class JobSeekerCvService{
    getJobSeekerCv(){
        return axios.get("http://localhost:9090/api/jobAdvertisement/getall")
    }
}