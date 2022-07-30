<template lang="">
  <!-- Header -->

  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header_content d-flex flex-row align-items-center justify-content-start">
            <div class="logo"><a href="#">avision</a></div>
            <nav class="main_nav">
              <ul>
                <li exact>
                  <router-link @click="scrollToTop()" :to="{name: 'home'}">Home</router-link>
                </li>
                <li>
                  <router-link @click="scrollToTop()" :to="{name: 'regular'}">Regular</router-link>
                </li>
                <li>
                  <router-link @click="scrollToTop()" :to="{name: 'post_nosidebar'}">Post NoSidebar</router-link>
                </li>
                 <li>
                  <router-link @click="scrollToTop()" :to="{name: 'PostList'}">Post List</router-link>
                </li>
                <li><a href="#">Video</a></li>
                <li>
                  <router-link @click="scrollToTop()" :to="{name: 'contact'}">Contact</router-link>
                </li>
              </ul>
            </nav>
            <div class="search_container ml-auto">
              <div class="weather">
                <div class="temperature">+10°</div>
                <img class="weather_icon" src="../assets/images/cloud.png" alt="">
              </div>
              <form action="#">
                <input type="search" class="header_search_input" required="required" placeholder="Type to Search...">
                <img class="header_search_icon" src="../assets/images/search.png" alt="">
              </form>

            </div>
            <div class="hamburger ml-auto menu_mm">
              <i class="fa fa-bars trans_200 menu_mm" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: 'TheHeader',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>