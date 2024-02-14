<script setup lang="ts">
import { cn } from '@/lib/utils'

</script>

<template>
<!--  items-center gap-1.5 py-2 md:py-4 lg:py-8-->
  <header
    :class="cn(
      'container mx-auto max-w-md',
      $attrs.class ?? '',
    )"
  >
    <slot />
  </header>
</template>