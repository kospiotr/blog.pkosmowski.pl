<script setup lang="ts">
const route = useRoute()

const path = ref<string>(route.query.path as string)
const parent = ref<string>()
const title = ref<string>()
const content = ref<string>()


const reload = async () => {
  const {data} = await useFetch(`/api/page?path=${path.value}`);
  path.value = data?.value?.path ?? ''
  parent.value = data?.value?.parent ?? ''
  title.value = data?.value?.title ?? ''
  content.value = data?.value?.content ?? ''
  console.log('result',data.value)
}

const onsubmit = () => {
  const result = useFetch('/api/page',{
    method: 'POST',
    params: {
      path: path.value,
    },
    body: {
      title: title.value,
      content: content.value
    }
  })
}

if (path.value) {
  await reload()
}

</script>

<template>
  <div>
    <div>Path <input name="path" v-model="path"/></div>
    <div>Parent <input name="parent" v-model="parent"/></div>
    <div>Title <input name="title" v-model="title"/></div>
    <div>Content <textarea name="content" v-model="content"></textarea></div>
    <div><input type="submit" @click="onsubmit()"/></div>
  </div>
  <div>
    Path: {{ path }}
    Title: {{ title }}
    Content: {{ content }}
  </div>

</template>

<style scoped>

</style>