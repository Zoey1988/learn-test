<template>
  <b-card class="mb-2 position-relative">
    <b-card-title :style="{ color: titleColor }">
      {{ title }}
    </b-card-title>
    <div class="my-3 text-secondary">
      {{ text }}
      <b-button
        :to="article.path"
        variant="outline-secondary"
        size="sm"
        :data-cy="`article_${article.slug}`"
      >
        read more
      </b-button>
    </div>

    <div class="bookmark" @click="$emit('toggle-bookmark', article.articleId)">
      <img :src="bookmarkImageSrc" class="bookmark-img" />
    </div>
    <div class="d-flex justify-content-between align-items-center mt-2">
      <div>{{ articleDate }}</div>
      <div>{{ articleTimetoRead }}</div>
      <b-badge variant="info" pill>{{ article.tag }}</b-badge>
      <div><img src="/eye.svg" width="20" /> {{ articleViews }}</div>
    </div>
  </b-card>
</template>

<script>
import {
  truncate,
  formatArticleDate,
  withUnits,
  getTimeToRead,
  upperFirst,
  isCssColor,
} from '~/utils';
export default {
  props: {
    isBookmarked: Boolean,
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      const articlTitle = this.article.title;
      return upperFirst(articlTitle);
    },
    titleColor() {
      const articleColor = this.article.color;
      return isCssColor(articleColor) ? articleColor : '#333333';
    },
    text() {
      return truncate(this.article.description, 100);
    },
    articleDate() {
      return formatArticleDate(this.article.createdAt);
    },
    articleViews() {
      const result = withUnits(this.article.views);
      return `${result.count}${result.unit}`;
    },
    articleTimetoRead() {
      try {
        return getTimeToRead(this.article.timeToRead);
      } catch {
        return 'too long';
      }
    },
    bookmarkImageSrc() {
      return this.isBookmarked ? '/solid-star.svg' : '/star.svg';
    },
  },
};
</script>

<style  scoped>
.bookmark {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
}
.bookmark-img {
  width: 100%;
}
</style>