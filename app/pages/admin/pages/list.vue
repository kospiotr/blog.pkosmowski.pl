<script setup lang="ts">

const result = await $fetch('/api/page',{
  method: 'GET',
})

</script>

<template>
  <div>
    <NuxtLink to="/admin/pages/edit">Create</NuxtLink>
  </div>
  <ul>
    <li v-for="page of result" :key="page.path">
      <NuxtLink :to="`/admin/pages/edit?path=${page.path}`">Edit</NuxtLink> |
      <NuxtLink :to="`/${page.path}`">Preview</NuxtLink> |
      {{ page.title }}
    </li>

  </ul>

</template>

<style scoped>

</style>