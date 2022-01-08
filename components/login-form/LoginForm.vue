<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form class="login-form" @submit.stop.prevent="handleSubmit(onSubmit)">
      <y-input
        :value.sync="username"
        class="mb-4"
        name="username"
        label="Username"
        :rules="{ required: true, min: 6, alpha: true }"
        data-cy="username"
      />
      <y-input
        :value.sync="password"
        class="mb-4"
        name="password"
        label="Password"
        type="password"
        data-cy="password"
      />
      <div>
        <b-button type="submit" :disabled="loading" data-cy="login_submit">
          Submit
        </b-button>
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
    onSubmit(e) {
      this.loading = true;
      setTimeout(() => {
        this.loading = this.$store.dispatch('login');
        this.$router.push({ name: 'articles' });
      }, 1000);
    },
  },
};
</script>

<style>
</style>