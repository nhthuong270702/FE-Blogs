<template>
  <div>
    <h1>Detail Post</h1>
    <img :src="post.image" alt=""><br>
    <strong>Title:</strong> {{ post.title }} - <strong>Author:</strong> {{ post.author }}
    <br>
    <strong>Content:</strong>
    <p>{{ post.content }}</p>
    <br>
    <small>{{ post.created }}</small>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('postModule/findPost', this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      post: 'postModule/postDetail'
    })
  }
};
</script>
