<script setup lang="ts">
import {useForm} from "vee-validate";

import {LoginSchema} from "~/validation/schema";
import {Input} from '@/components/ui/input'
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "~/components/ui/form";
import {Card, CardHeader} from "~/components/ui/card";

interface LoginForm {
  username: string;
  email: string;
}

const {handleSubmit, handleReset} = useForm<LoginForm>({
  validationSchema: LoginSchema,
})

const onSubmit = handleSubmit(values => {
  console.debug(values)
})

</script>
<template>
  <section class="py-5">
    <div class="container mx-auto max-w-sm lg:max-w-md">
      <Card class="px-12 outline outline-1">
        <CardHeader class="mb4 text-center">
          <div class="text-2xl">Login form</div>
          <div class="text-sm text-muted-card-foreground">Enter your credentials</div>
        </CardHeader>
        <form @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Email" v-bind="componentField"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem class="pb-3">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" v-bind="componentField"/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          </FormField>
          <div class="text-center py-5">
            <UiButton type="submit" @submit="handleSubmit">
              Submit
            </UiButton>
          </div>
        </form>
      </Card>
    </div>
  </section>
</template>
<style scoped>

</style>