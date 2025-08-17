<template>
  <main v-if="page">
    <h1 class="text-3xl font-bold">{{ page.title }}</h1>
    <div v-html="page.content"></div>
    <div v-if="page.meta">
      <h2>Page Metadata</h2>
      <p>SEO Title: {{ page.meta.title }}</p>
      <p>Custom Layout: {{ page.meta.layout }}</p>
    </div>
  </main>
  <div v-else>
    <p>Page not found.</p>
  </div>
</template>

<script setup>
import { useRoute, useAsyncData, useHead } from '#imports';

const route = useRoute();
const path = Array.isArray(route.params.slug) ? `/${route.params.slug.join('/')}` : `/${route.params.slug}`;

const { data: page } = await useAsyncData(`page-${path}`, () => {
  return $fetch(`/api/page?path=${path}`);
});

// const keys = await useStorage('redis').getKeys()
// console.log({keys})

// If the page is not found, you can handle a 404
if (!page.value) {
  // In a real application, you would set a proper status code and show a 404 page
  console.log('Page not found, path:', path);
}

// Dynamically set page metadata using useHead
if (page.value) {
  useHead({
    title: page.value.meta.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: page.value.meta?.description || '',
      },
      // You can add more meta tags here based on your database fields
    ],
  });
}
</script>