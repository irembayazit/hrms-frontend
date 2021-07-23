import axios from "axios"

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get("http://localhost:9090/api/jobseekers/getall")
    }
}