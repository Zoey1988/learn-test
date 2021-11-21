<template>
  <b-container class="mt-3">
    <b-row>
      <b-col cols="12" md="6">
        <article-list-item
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          :text="item.text"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ArticleListItem from './ArticleListItem.vue'

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
}
</script>

<style>
</style>