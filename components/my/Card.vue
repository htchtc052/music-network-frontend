<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
      :class="
      cn(
        'px-12 rounded-xl bg-card text-card-foreground shadow border outline outline-1 outline-muted-foreground',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
