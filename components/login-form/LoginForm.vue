<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form class="login-form" @submit.prevent="handleSubmit(onSubmit)">
      <y-input 
        :value.sync="username"
        class="mb-4"
        name="username"
        label="Username"
        :rules="{ required: true, alpha: true, min: 6 }"
      />
      <y-input 
        :value.sync="password"
        class="mb-4"
        name="password"
        label="Password"
        type="password"
      />
      <div>
        <b-button type="submit" :disabled="loading">Submit</b-button>
      </div>
    </b-form>
  </validation-observer>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',

    loading: false,
  }),
  methods: {
    onSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.$store.dispatch('login');
        this.loading = false;
        this.$router.push({ name: 'articles' });
      }, 1000);
    },
  },
};
</script>

<style>
</style>