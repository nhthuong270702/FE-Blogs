import { apiUser, apiAuth } from "@/utils/apiurls";
import { HTTP } from "./config.service";
import authHeader from "./auth-header.service";

class authApiService {

  register(data: []) {
    return HTTP.post(apiUser + '/register', data);
  }

  login(data: []) {
    return HTTP.post(apiAuth + '/login', data);
  }

  // logout() {
  //   localStorage.removeItem('user');
  // }

  getUser() {
    return HTTP.get(apiAuth + '/user', {headers: authHeader()});
  }

  getPostOfUser(userId: number) {
    return HTTP.get('/user/get-posts'+ `/${userId}`, {headers: authHeader()});
  }
}
export default new authApiService();
