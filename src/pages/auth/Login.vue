<template>
    <div>

        <h1>Login User</h1>
        <div v-if="error">
            <i style="color:red">{{ error.message }}</i>
        </div>
        <br>
        <form @submit.prevent="login()">
            <label for="">Email</label>
            <input type="email" name="email" v-model="email" required><br>

            <label for="">Password</label>
            <input type="text" name="password" v-model="password" required><br>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>

    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            email: '',
            password: '',
            error: {}
        }
    },
    methods: {
        login() {
            let data = {
                username: this.email,
                password: this.password,
            }
            this.$store.dispatch('authModule/login', data).then((res) => {
                localStorage.setItem('user', res.data.access_token)
                alert('Login successfully !!!')
                this.$router.push('/auth/home-page')
            }).catch((error: { request: { response: string; }; }) => {
                if (error) {
                    this.error = JSON.parse(error.request.response);
                }
            });

        }
    }
}
</script>
<style>
</style>