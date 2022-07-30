<template>
  <div>
    <h1>Post Create</h1>
    <form @submit.prevent="createPost(user.data.id)">
      <label for="">Title</label>
      <br />
      <input type="text" name="title" v-model="title" /><br />
      <br />
      <label for="">Author</label>
      <br />
      <input type="text" name="author" v-model="author" /><br />

      <br />
      <label for="">Content</label>
      <br />
      <input type="text" name="content" v-model="content" /><br />
      <br />
      <br>
      <div class="large-12 medium-12 small-12 cell">
        <label>Image
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
        </label>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
    <ul style="color: red">
      <li v-for="(err, index) in error.message" :key="index">{{ err }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "PostCreate",
  data() {
    return {
      title: '',
      author: '',
      content: '',
      image: '',
      // user: this.$store.state.authModule.user,
      error: ''
    }
  },
  created() {
    this.$store.dispatch('authModule/getUser')
  },
  methods: {
    createPost(userId: number) {

      let formData = new FormData();

      /*
          Add the form data we need to submit
      */
      formData.append('file', this.file);

      /*
        Make the request to the POST /single-file URL
      */
      this.$store.dispatch('postModule/uploadFile', formData
      ).then(function () {
        console.log('SUCCESS!!');
      })
        .catch(function () {
          console.log('FAILED!!');
        });


      let data = {
        title: this.title,
        author: this.author,
        content: this.content,
        image: this.image,
        userId: userId,
      };
      this.$store.dispatch('postModule/createPost', data).then(() => {
        this.$router.push('/posts/list-of-user')
      }).catch((error: { request: { response: string; }; }) => {
        if (error) {
          this.error = JSON.parse(error.request.response);
        }
      });
    },
    /*
      Handles a change on the file upload
    */
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.image = this.$refs.file.files[0].name;
    },
  },
  computed: {
    ...mapGetters({
      user: 'authModule/getUser',
    })
  }
};
</script>
