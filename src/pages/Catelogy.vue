<template lang="">

    <!-- Header -->

    <div class="home_cate">
        <div class="home_background parallax-window" data-parallax="scroll" data-speed="0.8" style="background-image: url('../assets/images/category.jpg'); background-size: cover; background-position: center center;"></div>
    </div>

    <!-- Content -->

    <div class="page_content">
        <div class="container">
            <div class="row row-lg-eq-height">

                <!-- Main Content -->

                <div class="col-lg-9">
                    <div class="main_content">

                        <!-- Category -->

                        <div class="category">
                            <div class="section_panel d-flex flex-row align-items-center justify-content-start">
                                <div class="section_title">Don't Miss</div>
                                <div class="section_tags ml-auto">
                                    <ul>
                                        <li class="active"><a href="category.html">all</a></li>
                                        <li><a href="category.html">style hunter</a></li>
                                        <li><a href="category.html">vogue</a></li>
                                        <li><a href="category.html">health & fitness</a></li>
                                        <li><a href="category.html">travel</a></li>
                                    </ul>
                                </div>
                                <div class="section_panel_more">
                                    <ul>
                                        <li>more
                                            <ul>
                                                <li><a href="category.html">new look 2018</a></li>
                                                <li><a href="category.html">street fashion</a></li>
                                                <li><a href="category.html">business</a></li>
                                                <li><a href="category.html">recipes</a></li>
                                                <li><a href="category.html">sport</a></li>
                                                <li><a href="category.html">celebrities</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="section_content">
                                <div class="grid clearfix">

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_10.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_15.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_13.jpg"
                                            alt="https://unsplash.com/@jakobowens1">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_11.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_16.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_14.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Default Card With Background -->
                                    <div class="card card_default card_default_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_12.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most</router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Default Card With Background -->
                                    <div class="card card_default card_default_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_6.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most</router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_19.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_5.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_10.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_20.jpg"
                                            alt="https://unsplash.com/@jakobowens1">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_4.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Background -->
                                    <div class="card card_default card_small_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_21.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card With Image -->
                                    <div class="card card_small_with_image grid-item">
                                        <img class="card-img-top" src="../assets/images/post_22.jpg" alt="">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Small Card Without Image -->
                                    <div class="card card_default card_small_no_image grid-item">
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in
                                                    Physics?</router-link>
                                            </div>
                                            <small class="post_meta"><a href="#">Katy Liu</a><span>Sep 29, 2017 at 9:48
                                                    am</span></small>
                                        </div>
                                    </div>

                                    <!-- Default Card With Background -->
                                    <div class="card card_default card_default_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_23.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most</router-link>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Default Card With Background -->
                                    <div class="card card_default card_default_with_background grid-item">
                                        <div class="card_background"
                                            style="background-image:url(../assets/images/post_24.jpg)">
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title card-title-small">
                                                <router-link @click="scrollToTop()" :to="{name: 'post'}"> How Did van
                                                    Gogh’s Turbulent Mind Depict One of the Most</router-link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="load_more">
                        <div id="load_more" class="load_more_button text-center trans_200">Load More</div>
                    </div>
                </div>

                <!-- Sidebar -->

                <TheSidebar />

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import '../../public/assets/js/category'
import '../../public/assets/plugins/parallax-js-master/parallax.min.js'

import TheSidebar from '../components/TheSidebar.vue'

export default {
    name: 'Catelogy_Page',
    components: {
        TheSidebar
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>
<style scoped>
/* @import '../../public/assets/plugins/jquery.mb.YTPlayer-3.1.12/jquery.mb.YTPlayer.css'; */
@import '../../public/assets/styles/category.css';
@import '../../public/assets/styles/category_responsive.css';
</style>