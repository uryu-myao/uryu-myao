<template>
  <div v-if="error.statusCode === 404">
    <h1 class="ttl_child">404 page not find...</h1>
  </div>
  <div v-else>
    <h1 class="ttl_child">an error occurred...</h1>
  </div>
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  mixins: [Meta],
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'default',
  data() {
    return {
      meta: {
        title: '4..04',
        type: 'article',
        description: 'ページ個別のディスクリプション',
        url: 'https://example.com/test',
        image: 'https://example.com/img/ogp/test.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
