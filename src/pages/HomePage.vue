<template>
    <div>
        <h1>Home Page</h1>
        <div v-if="user.data.role === 'admin'">
            <router-link :to="{ name: 'PostList' }">Post List</router-link>
        </div>
        <router-link :to="{ name: 'PostListOfUser1' }">Post List Of User</router-link>

        <button v-on:click="logout()">Logout</button>
    </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'

export default {
    data() {
    },
    created() {
        this.getUser()
    },
    methods: {
        getUser() {
            this.$store.dispatch('authModule/getUser')
        },
        logout() {
            localStorage.removeItem('user');
            this.$router.push('/auth/login')
        }
    },
    computed: {
        ...mapGetters({
            user: 'authModule/getUser'
        }),
    }
}
</script>
<style>
</style>