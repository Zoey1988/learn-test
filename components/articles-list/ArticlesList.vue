<template>
  <b-container class="mt-3">
    <b-row>
      <b-col v-for="item in items" :key="item.slug" cols="12" class="mb-3">
        <article-list-item
          :article="item"
          :is-bookmarked="!!bookmarks.includes(item.articleId)"
          @toggle-bookmark="toggleBookmark"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ArticleListItem from '../articles-list-item/ArticlesListItem.vue';

export default {
  components: {
    ArticleListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    bookmarks: [1],
  }),
  methods: {
    toggleBookmark(id) {
      let bookmarks = this.bookmarks;
      if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter((item) => item !== id);
      } else {
        bookmarks = [...bookmarks, id];
      }
      this.bookmarks = bookmarks;
    },
  },
};
</script>

<style>
</style>