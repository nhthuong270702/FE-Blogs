import router from "@/router";
import apiService from "../../../services/api.service";
import authApiService from "../../../services/auth.api.service";

// thuc hien goi api, khong lam thay doi state => commit sang mutations de thay doi state
export default {
	async fetchUsers({ commit }: any) {
		try {
			const data = await apiService.getAll()
			commit('SET_USERS', data.data)
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},
	async findUser({ commit }: any, id: number) {
		try {
			const data = await apiService.get(id)
			commit('SET_USER', data.data[0])
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},
	async deleteUser(context: { dispatch: (arg0: string) => void; }, id: number) {
		await apiService.delete(id)
		context.dispatch('fetchUsers')
	},
	async createUser(context: { dispatch: (arg0: string) => void; }, user: []) {
		await apiService.create(user)
		context.dispatch('fetchUsers')
	},
	async editUser(context: { dispatch: (arg0: string) => any; }, user: { id: number; }) {
		await apiService.update(user.id, user).then(() => {
			router.push('/users')
		}),
		context.dispatch('fetchUsers')
	},
};
