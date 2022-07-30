<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="editPost(post)">
      <label for="">Title</label>
      <br />
      <input type="text" name="title" v-model="post.title" /><br />
      <br />
      <label for="">Author</label>
      <br />
      <input type="text" name="author" v-model="post.author" /><br />

      <br />
      <label for="">Content</label>
      <br />
      <input type="text" name="content" v-model="post.content" /><br />
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
    this.$store.dispatch('postModule/findPost', this.id)
  },
  methods: {
    ...mapActions('postModule', [
      'editPost'
    ]),
  },
  computed: {
    ...mapGetters({
      post: 'postModule/postDetail'
    })
  }
}
</script>
