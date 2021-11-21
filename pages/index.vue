<template>
  <articles-list :items="items" />
</template>

<script>
import ArticlesList from '~/components/ArticlesList.vue'

export default {
  components: { ArticlesList },
  data: () => ({
    items: [{ id: 1, title: 'salam', text: 'halet chetore' }],
  }),
}
</script>
