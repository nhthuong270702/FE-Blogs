<template>
  <div>
    <h1>Post List Of User</h1>
    <button class="btn btn-success">
      <router-link to="/auth/home-page">Home</router-link>
    </button>
    <button class="btn btn-success">
      <router-link to="/posts/create">Create</router-link>
    </button>
    <button class="btn btn-success">
      <router-link :to="{ name: 'PostTrash' }">Post List Trash</router-link>
    </button>

    <ul v-if="postsList">
      <li v-for="post in postsList.data[0].posts" :key="post.id">
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
    <br>
  </div>
</template>
<script lang="ts" type="text/javascript">
import { mapGetters } from "vuex";

export default {
  props: ['user'],
  data() {
    return {
      user: this.user
    };
  },
  created() {
    this.getPostOfUser()
    this.$store.dispatch('authModule/getUser')
  },
  methods: {
    getPostOfUser() {
      this.$store.dispatch('authModule/getPostOfUser', this.user.data.id);
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
      postsList: 'authModule/getPostOfUser',
      getUser: 'authModule/getUser'
    }),
    imagePath() {
      let url = `http://localhost:4000/posts/file/`
      return url
    },
    idUser() {
      return this.$store.state.authModule.user.data
    }
  },
};
</script>