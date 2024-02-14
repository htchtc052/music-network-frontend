<script setup lang="ts">

import type {HTMLAttributes} from 'vue'

import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const props = withDefaults(defineProps<{
  variant?: 'default' | 'outline';
  class?: HTMLAttributes['class']
}>(), {
  // size: 'sm',
  // variant: 'default',
  // class: ''
});


const variants = cva(
    'px-12',
    {
      variants: {
        variant: {
          default: '',
          outline: 'rounded-xl shadow border outline outline-1 outline-muted-foreground',
        },
      },
      defaultVariants: {
        variant: 'default',
      },
    },
)

</script>

<template>
  <div :class="cn(variants({ variant }), props.class)">
    <div class="flex flex-col gap-y-1.5 py-6">
      <slot name="header" />
    </div>
    <div class="py-6">
      <slot name="content"></slot>
    </div>
  </div>
</template>