import axios from "axios";

export default class JobAdvertisementService {
  getJobAdvertisements() {
    return axios.get("http://localhost:9090/api/jobAdvertisement/getall");
  }

  addAdvertisement(advertisement) {
    let add = axios.post("http://localhost:9090/api/jobAdvertisement/add", advertisement);
    return add;

  }
}
