import { apiUsers } from "@/utils/apiurls";
import { HTTP } from "./config.service";

class ApiService {
  getAll() {
    return HTTP.get(apiUsers);
  }
  get(id: number) {
    return HTTP.get(apiUsers + `/${id}`);
  }
  create(data: any) {
    return HTTP.post(apiUsers, data);
  }
  update(id: number, data: any) {
    return HTTP.put(apiUsers + `/${id}`, data);
  }
  delete(id: number) {
    return HTTP.delete(apiUsers + `/${id}`);
  }
  deleteAll() {
    return HTTP.delete(apiUsers + ``);
  }
  findByTitle(name: string) {
    return HTTP.get(apiUsers + `?name=${name}`);
  }
}
export default new ApiService();
