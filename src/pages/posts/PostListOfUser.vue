<template>
  <div>
    <post-list-of-user1-vue :user="user" />
  </div>
</template>
<script lang="ts" type="text/javascript">
import { mapGetters } from "vuex";
import PostListOfUser1Vue from "./PostListOfUser1.vue";

export default {
  components: {
    PostListOfUser1Vue
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('authModule/getUser')
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      user: 'authModule/getUser'
    }),
  },
};
</script>