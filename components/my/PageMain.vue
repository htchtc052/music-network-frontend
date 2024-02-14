<script setup lang="ts">
import { cn } from '@/lib/utils'

</script>

<template>
  <main
      :class="cn(
          'container mx-auto max-w-md',
      $attrs.class ?? '',
    )"
  >
    <slot />
  </main>
</template>