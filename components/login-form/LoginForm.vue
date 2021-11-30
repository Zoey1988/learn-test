<template>
  <form @submit="handleSubmit">
    <div class="mb-4">
      <label for="username-field">Username</label>
      <b-input
        id="username-field"
        v-model="username"
        name="username"
        type="text"
      />
    </div>
    <div class="mb-4">
      <label for="password-field">Password</label>
      <b-input
        id="password-field"
        v-model="password"
        name="password"
        type="password"
      />
    </div>
    <div>
      <b-button type="submit" :disabled="loading">Submit</b-button>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    username: '',
    password: '',

    loading: false,
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.loading = true;
      setTimeout(() => {
        this.loading = this.$store.commit('login');
        this.$router.push({ name: 'articles' });
      }, 1000);
    },
  },
};
</script>

<style>
</style>