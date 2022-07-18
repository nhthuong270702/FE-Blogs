<template>
  <div>
    <h1>User Create</h1>
    <form @submit.prevent="createUser()">
      <label for="">Name</label>
      <br />
      <input type="text" name="name" v-model="name" /><br />
      <br />
      <label for="">Age</label>
      <br />
      <input type="number" name="age" v-model="age" /><br />

      <br />
      <label for="">Address</label>
      <br />
      <input type="text" name="address" v-model="address" /><br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: "UserCreate",
  data() {
    return {
      name: '',
      age: '',
      address: ''
    }
  },
  methods: {
    createUser() {
      let data = {
        name: this.name,
        age: this.age,
        address: this.address,
      };
      this.$store.dispatch('userModule/createUser', data).then(() => {
        this.$router.push('/users')
      })
    }
  }
};
</script>
<style>
</style>
