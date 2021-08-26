import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisementsTrue() {
    return axios.get("http://localhost:9090/api/jobAdvertisement/getAllTrue?active=true");
  }

  addAdvertisement(advertisement) {
    let add = axios.post("http://localhost:9090/api/jobAdvertisement/add", advertisement);
    return add;
  }

  getById(id){
    return axios.get("http://localhost:9090/api/jobAdvertisement/getById?id=" + id)
  }

  
}
