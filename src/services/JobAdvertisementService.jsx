import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:9090/api/jobAdvertisement/getall")
    }
}