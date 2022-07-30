import router from "@/router";
import authApiService from "../../../services/auth.api.service";

// thuc hien goi api, khong lam thay doi state => commit sang mutations de thay doi state
export default {

	//Authorization
	async register(context: { dispatch: (arg0: string) => void; }, user: []) {
		await authApiService.register(user)
		router.push('/auth/login')
	},

	async login({ commit }, user: any) {
		return await authApiService.login(user)
	},

	// async logout(context: { dispatch: (arg0: string) => void; }) {
	// 	return await authApiService.logout()
	// },

	async getUser({commit}: any) {
		try{
		const user = await authApiService.getUser()
		commit('SET_USER', user)
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},

	async getPostOfUser({commit}: any, userId: number) {
		try{
		const posts = await authApiService.getPostOfUser(userId)
		commit('SET_POSTS', posts)
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},
};
