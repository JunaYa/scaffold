<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
</script>

<template>
<div class="md:container md:mx-auto">
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button class="bg-sky-600 hover:bg-sky-700 ...">
    Save changes
  </button>
  <button class="bg-sky-600 dark:bg-sky-900 hover:bg-sky-700 ...">
    Save changes
  </button>
  <div class="columns-4">
    <p>Well, let me tell you something, ...</p>
    <p class="break-after-column">Sure, go ahead, laugh...</p>
    <p>Maybe we can live without...</p>
    <p>Look. If you think this is...</p>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
