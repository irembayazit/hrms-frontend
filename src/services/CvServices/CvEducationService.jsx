import axios from "axios";

export default class CvEducationService{
    add(cvEducations) {
        let add = axios.post("http://localhost:9090/api/cvEducation/addOrUpdate",cvEducations);
        return add;
    }
}