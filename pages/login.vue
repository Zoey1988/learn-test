<template>
  <b-container>
    <b-col cols="12" lg="6" class="m-auto">
      <login-form />
    </b-col>
  </b-container>
</template>

<script>
import LoginForm from '~/components/login-form/LoginForm.vue';
export default {
  components: { LoginForm },
};
</script>

<style>
</style>