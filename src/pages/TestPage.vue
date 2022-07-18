<template>
  <div>
    <h1>Test View Is Run!</h1>
    <b-button variant="success">Button</b-button>
    <app-alert-vue />
  </div>
</template>
<script lang="ts">
import AppAlertVue from "@/components/AppAlert.vue";

export default {
  components: {
    AppAlertVue
  }
};
</script>
<style>
</style>
