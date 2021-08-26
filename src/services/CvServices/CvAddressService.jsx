import axios from "axios";

export default class CvAddressService{
    add(cvAddress) {
        let add = axios.post("http://localhost:9090/api/cvAddress/addOrUpdate", cvAddress);
        return add;
    }
}