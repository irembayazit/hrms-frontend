import axios from "axios";

export default class CvPhotoService{
    add(userId, file) {
        return axios.post("http://localhost:9090/api/cvPhoto/add?userId=" + userId, file)
    }
}