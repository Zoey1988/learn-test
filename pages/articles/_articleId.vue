<template>
  <div>
    <article-page :article="article" :comments="articleComments" />
  </div>
</template>

<script>
import ArticlePage from '~/components/article-page/ArticlePage.vue';

import { requestJsonPlaceholder } from '~/utils';

export default {
  components: { ArticlePage },

  async asyncData({ $content, params }) {
    const article = await $content('articles', params.articleId).fetch();

    let articleComments = [];
    const commentsResponse = await requestJsonPlaceholder(
      `/posts/${article.articleId}/comments`
    );
    articleComments = commentsResponse.data;

    return { article, articleComments };
  },
};
</script>
