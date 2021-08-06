import axios from "axios"

export default class TypeOfWorkService{
    getTypeOfWork(){
        return axios.get("http://localhost:9090/api/typeOfWork/getall")
    }
}