import axios from "axios";

export default class CvSkillService{
    add(cvSkill) {
        let add = axios.post("http://localhost:9090/api/cvSkill/addOrUpdate",cvSkill);
        return add;
    }
}