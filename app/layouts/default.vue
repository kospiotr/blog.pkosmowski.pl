<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import AppHeader from "~/components/app-header.vue";
import AppFooter from "~/components/app-footer.vue";
</script>