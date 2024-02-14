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
    'container px-4',
    {
      variants: {
        variant: {
          default: 'px-12',
          outline: 'px-12 rounded-xl shadow border outline outline-1 outline-muted-foreground',
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
    <div class="pb-5">
      <div class="text-2xl text-center"><slot name="title"></slot></div>
        <div class="text-sm text-center text-muted-foreground"> <slot name="description"></slot></div>
    </div>
    <div class="py-6">
      <slot name="content"></slot>
    </div>
  </div>
</template>