<template>
  <div class="container"></div>
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  components: '',
  layout: 'default',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'h..history',
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
