import axios from "axios"

export default class WorkingTimeService{
    getWorkingTime(){
        return axios.get("http://localhost:9090/api/workingTime/getall")
    }
}