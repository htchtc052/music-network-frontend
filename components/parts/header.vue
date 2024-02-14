<script setup lang="ts">

</script>

<template>

  <header class="py-8">
      <div class="container mx-auto max-w-screen-md">
        <div class="flex w-full justify-between">
          <div class="p-2 w-1/4 justify-self-start">
            Logo
          </div>
          <div class="flex gap-3 justify-end">
            <UiButton as-child><NuxtLink to="/register">Register</NuxtLink></UiButton>
            <UiButton as-child class="space-x-3"><NuxtLink to="/login">Login</NuxtLink></UiButton>
          </div>
        </div>
      </div>
</header>


</template>

<style scoped>
</style>