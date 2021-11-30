<template>
  <div class="position-relative">
    <nav class="header-footer header">
      <nuxt-link to="/articles" class="mr-3"> Home </nuxt-link>
      <nuxt-link v-if="!isLoggedIn" to="/login"> Login </nuxt-link>
      <b-button v-else @click="logout">Logout</b-button>
    </nav>
    <div class="nuxt-body">
      <Nuxt />
    </div>
    <footer class="header-footer footer">
      All Rights Reserved For Fronteam
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.commit('logout');
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5ee;
}
.header-footer {
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  text-align: center;
}
.footer {
  bottom: 0;
}
.header {
  top: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.nuxt-body {
  margin-top: 70px;
  margin-bottom: 70px;
}
.nuxt-link-active {
  color: #333;
}
</style>