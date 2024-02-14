<script setup lang="ts">
import { cn } from '@/lib/utils'

</script>

<template>
  <footer
      :class="cn('container mx-auto max-w-md',
    $attrs.class ?? '',)"
  >
    <slot />
  </footer>
</template>