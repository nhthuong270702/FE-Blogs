<template>
  <div>
    <h1>User List</h1>
    <button class="btn btn-success">
      <router-link to="/users/create">Create</router-link>
    </button>
    <ul>
      <li v-for="user in usersList" :key="user.id">{{ user.name }} - {{ user.age }} - {{ user.address }}
        <br><button class="btn btn-warning">
          <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">Show</router-link>
        </button>
        <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
        <button class="btn btn-info">
          <router-link :to="{ name: 'UserEdit', params: { id: user.id } }">Edit</router-link>
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => vm.$store.dispatch('fetchUsers'));
  // },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch('userModule/fetchUsers');
    },
    deleteUser(id: number) {
      this.$store.dispatch(`userModule/deleteUser`, id)
    }
  },
  computed: {
    ...mapGetters({
      usersList: 'userModule/usersList'
    })
  },
};
</script>

