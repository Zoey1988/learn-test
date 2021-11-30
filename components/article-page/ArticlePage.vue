<template>
  <b-container class="bg-white p-3">
    <h1 class="text-info">{{ article.title }}</h1>

    <nuxt-content :document="article" />

    <b-card class="mt-5">
      <h3>Comments</h3>
      <comments-list :comments="comments" />
    </b-card>
  </b-container>
</template>

<script>
import CommentsList from '../comments-list/CommentsList.vue';
export default {
  components: { CommentsList },
  props: {
    article: {
      type: Object,
      required: true,
    },
    comments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
</style>