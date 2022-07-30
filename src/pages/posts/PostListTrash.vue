<template>
  <div>
    <h1>Post List Trash</h1>
    <router-link to="/posts/list">Back</router-link>
    <ul>
      <li v-for="post in postsTrash" :key="post.id">
        <img :src="imagePath + post.image" alt="" style="width:100px">
        <br>
        <strong>{{ post.title }} </strong> - {{ post.author }}
        <small>{{ post.created }}</small>
        <p>{{ post.content }}</p>
        <br>
        <button @click="restorePost(post.id)" class="btn btn-danger">Restore</button>
        <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('postModule/getPostTrash');
    },
    restorePost(id) {
      this.$store.dispatch(`postModule/restore`, id)
    },
    deletePost(id) {
      this.$store.dispatch(`postModule/deletePost`, id)
    },
  },
  computed: {
    ...mapGetters({
      postsTrash: 'postModule/postsTrash'
    }),
    imagePath() {
      return `http://localhost:4000\\posts\\file\\`
    }
  },
};
</script>