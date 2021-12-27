<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
      <y-input 
        :value.sync="username"
        class="mb-4"
        name="username"
        label="Username"
        :rules="{ required: true, min: 6, alpha: true }"
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
    onSubmit(e) {
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