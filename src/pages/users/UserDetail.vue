<template>
  <div>
    <h1>Detail User</h1>
    <strong>Name:</strong> {{ user.name }} - <strong>Age:</strong> {{ user.age }} - <strong>Address:</strong> {{
        user.address
    }}
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  created() {
    this.$store.dispatch('userModule/findUser', this.id)
  },
  computed: {
    ...mapGetters({
      user: 'userModule/userDetail'
    })
  }
};
</script>
<style>
</style>
