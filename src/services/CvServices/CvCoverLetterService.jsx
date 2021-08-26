import axios from "axios";

export default class CvCoverLetterService{
    add(cvCoverLetter) {
        let add = axios.post("http://localhost:9090/api/cvCoverLetter/addOrUpdate", cvCoverLetter);
        return add;
    }
}