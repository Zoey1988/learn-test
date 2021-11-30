<template>
  <articles-list :items="articles" />
</template>

<script>
import ArticlesList from '~/components/articles-list/ArticlesList.vue';

export default {
  components: { ArticlesList },
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'asc')
      .fetch();

    return {
      articles,
    };
  },
};
</script>
