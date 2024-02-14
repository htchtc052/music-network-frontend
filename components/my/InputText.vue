<script setup lang="ts">
import {cn} from '@/lib/utils'
import {Input} from "~/components/ui/input";
</script>

<template>
  <div :class="cn(
          'flex flex-col  space-y-5',
      $attrs.class ?? '',
    )">
    <label class="ml-2 text-sm cursor-pointer" for="password">Password</label>
    <input class="
									transition
									border p-2 rounded-lg
		 					    hover:border-indigo-500
									focus:outline-none
								" id="password" placeholder="Password"/>
    <div class="text-destructive">Enter your password</div>
  </div>
</template>