import { apiPosts } from "@/utils/apiurls";
import authHeader from "./auth-header.service";
import { HTTP } from "./config.service";

class postApiService {

  getAll() {
    return HTTP.get(apiPosts, {headers: authHeader()});
  }

  get(id: number) {
    return HTTP.get(apiPosts + `/${id}`, {headers: authHeader()});
  }

  create(data: any) {
    return HTTP.post(apiPosts, data, {headers: authHeader()});
  }

  update(id: number, data: any) {
    return HTTP.put(apiPosts + `/${id}`, data, {headers: authHeader()});
  }

  delete(id: number) {
    return HTTP.delete(apiPosts + `/${id}`, {headers: authHeader()});
  }

  softDelete(id: number) {
    return HTTP.delete(apiPosts + `/soft-delete/${id}`, {headers: authHeader()});
  }

  getPostTrash() {
    return HTTP.get(apiPosts + `/posts-trash`, {headers: authHeader()});
  }

  restore(id: number) {
    return HTTP.delete(apiPosts + `/restore/${id}`, {headers: authHeader()});
  }

  uploadFile(data: any) {
    return HTTP.post(apiPosts +'/file', data, {headers: authHeader()});
  }

  getFile(fileName: string) {
    return HTTP.get(apiPosts +`/file/${fileName}`, {headers: authHeader()});
  }

}
export default new postApiService();
