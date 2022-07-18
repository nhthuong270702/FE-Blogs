<template>
  <div>
    <h1>Edit User</h1>
    <form @submit.prevent="editUser(user)">
      <label for="">Name</label>
      <br />
      <input type="text" name="name" v-model="user.name" /><br />
      <br />
      <label for="">Age</label>
      <br />
      <input type="number" name="age" v-model="user.age" /><br />

      <br />
      <label for="">Address</label>
      <br />
      <input type="text" name="address" v-model="user.address" /><br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>
<script lang="ts">
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  created() {
    this.$store.dispatch('userModule/findUser', this.id)
  },
  methods: {
    ...mapActions('userModule', [
      'editUser'
    ]),
  },
  computed: {
    ...mapGetters({
      user: 'userModule/userDetail'
    })
  }
}
</script>
<style>
</style>
