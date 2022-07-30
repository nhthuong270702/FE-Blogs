import router from "@/router";
import postApiService from "@/services/post.api.service";

// thuc hien goi api, khong lam thay doi state => commit sang mutations de thay doi state
export default {
	async fetchPosts({ commit }: any) {
		try {
			const data = await postApiService.getAll()
			commit('SET_POSTS', data.data)
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},

	async findPost({ commit }: any, id: number) {
		try {
			const data = await postApiService.get(id)
			commit('SET_POST', data.data)
		}
		catch (error) {
			alert(error)
			console.log(error)
		}
	},

	async deletePost(context: { dispatch: (arg0: string) => void; }, id: number) {
		await postApiService.delete(id)
		context.dispatch('fetchPosts')
		router.push('/posts/list-of-user')
	},

	async softDelete(context: { dispatch: (arg0: string) => void; }, id: number) {
		await postApiService.softDelete(id)
		context.dispatch('fetchPosts')
		context.dispatch('getPostTrash')
	},

	async getPostTrash({ commit }: any) {
	try {
		const data = await postApiService.getPostTrash()
		commit('SET_POSTS_TRASH', data.data)
	}
	catch (error) {
		alert(error)
		console.log(error)
	}
	},

	async restore(context: { dispatch: (arg0: string) => void; }, id: number) {
		await postApiService.restore(id)
		context.dispatch('fetchPosts')
		context.dispatch('getPostTrash')
		router.push('/posts/list-of-user')
	},

	async createPost(context: { dispatch: (arg0: string) => void; }, post: []) {
		await postApiService.create(post)
		context.dispatch('fetchPosts')
	},

	async editPost(context: { dispatch: (arg0: string) => any; }, post: { id: number; }) {
		await postApiService.update(post.id, post).then(() => {
			router.push('/posts/list-of-user')
		}),
		context.dispatch('fetchPosts')
	},

	async uploadFile(context: { dispatch: (arg0: string) => void; }, data: any) {
		await postApiService.uploadFile(data)
	},

	// async getFile(context: { dispatch: (arg0: string) => void; }) {
	// 	const fileName = '';
	// 	await postApiService.getFile(fileName)
	// },


};
