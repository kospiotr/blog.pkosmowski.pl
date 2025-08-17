<template>
  <div>
    <div style="display: flex; flex-direction: row; gap: 10px; padding: 10px;">
      <NuxtLink to="/admin/dashboard">Admin Dashboard</NuxtLink>
      <NuxtLink to="/admin/pages/list">Pages</NuxtLink>
      <NuxtLink to="/admin/posts">Posts</NuxtLink>
      <NuxtLink to="/admin/forms">Assets</NuxtLink>
      <NuxtLink to="/admin/forms">Forms</NuxtLink>
      <NuxtLink to="/admin/menus">Menus</NuxtLink>
      <NuxtLink to="/admin/widgets">Widgets</NuxtLink>
      <NuxtLink to="/admin/sliders">Sliders</NuxtLink>
    </div>
    <slot/>
  </div>
</template>
<script setup lang="ts">
</script>