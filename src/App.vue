<template lang="">
    <div class="super_container">

        <!-- Header -->

        <TheHeader />
        <!-- Menu -->

        <TheMenu />
        <!-- Page Content -->

        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>

        
        <!-- Footer -->

        <TheFooter />

    </div>
</template>
<script lang="ts">
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import TheMenu from "@/components/TheMenu.vue"


export default {
    name: 'MasterPage',
    components: {
        TheHeader,
        TheFooter,
        TheMenu
    }
}
</script>
<style>
</style>