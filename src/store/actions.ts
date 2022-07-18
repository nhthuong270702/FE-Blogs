import router from "@/router";
import apiService from "../services/api.service";

export default {
  //goi api
	async editUser(context: { dispatch: (arg0: string) => any; }, user: { id: number; }) {
		await apiService.update(user.id, user).then(() => {
			router.push('/users')
		}),
		context.dispatch('fetchUsers')
	},
};
