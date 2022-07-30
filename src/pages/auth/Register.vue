<template>
    <div>

        <h1>Register User</h1>

        <form @submit.prevent="register()">
            <label for="">Name</label>
            <input type="text" name="name" v-model="name"><br>

            <label for="">Age</label>
            <input type="text" name="age" v-model="age"><br>

            <label for="">Email</label>
            <input type="text" name="email" v-model="email"><br>

            <label for="">Password</label>
            <input type="text" name="password" v-model="password"><br>

            <button type="submit" class="btn btn-primary">Register</button>
            <router-link :to="{ name: 'login' }">Login</router-link>
        </form>

    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            name: '',
            age: '',
            email: '',
            password: '',
        }
    },
    methods: {
        register() {
            let data = {
                name: this.name,
                age: this.age,
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch('authModule/register', data).then(() => {
                alert('Register successfully !!!')
            })

        }
    }
}
</script>
<style>
</style>