<template lang="">
    <div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
        <div class="menu_close_container">
            <div class="menu_close">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="logo menu_mm"><a href="#">Avision</a></div>
        <div class="search">
            <form action="#">
                <input type="search" class="header_search_input menu_mm" required="required"
                    placeholder="Type to Search.">
                <img class="header_search_icon menu_mm" src="../assets/images/search_2.png" alt="">
            </form>
        </div>
        <nav class="menu_nav">
            <ul class="menu_mm">
                <li class="menu_mm"><a href="/">home</a></li>
                <li class="menu_mm"><a href="#">Fashion</a></li>
                <li class="menu_mm"><a href="#">Gadgets</a></li>
                <li class="menu_mm"><a href="#">Lifestyle</a></li>
                <li class="menu_mm"><a href="#">Video</a></li>
                <li class="menu_mm"><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>
<script lang="ts">
export default {
    name: 'TheMenu'
}
</script>
<style>
</style>