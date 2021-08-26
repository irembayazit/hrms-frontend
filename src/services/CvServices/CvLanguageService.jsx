import axios from "axios";

export default class CvLanguageService{
    add(cvLanguage) {
        let add = axios.post("http://localhost:9090/api/cvLanguage/addOrUpdate",cvLanguage);
        return add;
    }
}