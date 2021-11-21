<template>
  <b-container>
    <h1>{{ title }}</h1>
    <article>{{ text }}</article>
  </b-container>
</template>

<script>
export default {
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
}
</script>

<style>
</style>