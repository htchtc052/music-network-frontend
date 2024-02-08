<script setup lang="ts">
import {useForm} from "vee-validate";

import {LoginSchema} from "~/validation/schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'



interface LoginForm {
  username: string;
  email: string;
}


const { handleSubmit, handleReset}= useForm<LoginForm>({
  validationSchema: LoginSchema,
})

const onSubmit = handleSubmit(values => {
  console.debug(values)
})

</script>

<template>
  <div class="text-center mb-2 max-w-10" >
    Login
  </div>

  <form @submit="onSubmit" class="text-center">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Email" v-bind="componentField" />
        </FormControl>

        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Password" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <UiButton type="submit" @submit="handleSubmit">
      Submit
    </UiButton>
  </form>

</template>

<style scoped>

</style>