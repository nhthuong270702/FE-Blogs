<template>
  <div>
    <h1>Post List</h1>
    <button class="btn btn-success">
      <router-link to="/auth/home-page">Home</router-link>
    </button>
    <button class="btn btn-success">
      <router-link to="/posts/create">Create</router-link>
    </button>
    <button class="btn btn-success">
      <router-link :to="{ name: 'PostTrash' }">Post List Trash</router-link>
    </button>
    <ul>
      <li v-for="post in postsList" :key="post.id">
        <img :src="imagePath + post.image" alt="" style="width:100px">
        <br>
        <strong>{{ post.title }} </strong> - {{ post.author }}
        <small>{{ post.created }}</small>
        <p>{{ post.content }}</p>
        <br><button class="btn btn-warning">
          <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">Show</router-link>
        </button>
        <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
        <button class="btn btn-info">
          <router-link :to="{ name: 'PostEdit', params: { id: post.id } }">Edit</router-link>
        </button>
        <button @click="softDelete(post.id)" class="btn btn-danger">Soft Delete</button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" type="text/javascript">
import postApiService from "@/services/post.api.service";
import { mapGetters } from "vuex";
import authHeader from '@/services/auth-header.service';

export default {
  data() {
    return {
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   next(vm => vm.$store.dispatch('fetchposts'));
  // },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('postModule/fetchPosts');
    },

    deletePost(id) {
      this.$store.dispatch(`postModule/deletePost`, id)
    },

    softDelete(id) {
      this.$store.dispatch(`postModule/softDelete`, id)
    },
  },
  computed: {
    ...mapGetters({
      postsList: 'postModule/postsList'
    }),
    imagePath() {
      let url = `http://localhost:4000/posts/file/`
      return url
    }
  },
};
</script>