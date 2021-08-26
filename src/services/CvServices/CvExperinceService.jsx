import axios from "axios";

export default class CvExperinceService{
    add(cvExperince) {
        let add = axios.post("http://localhost:9090/api/cvExperience/addOrUpdate",cvExperince);
        return add;
    }
}