<template>
  <div>
    <p v-for="comment in comments" :key="comment.id" class="comment-item">
      {{ comment.body }}
      <span class="text-secondary">{{ comment.email }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.comment-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
</style>