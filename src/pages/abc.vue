<template>
  <div>abc</div>
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
        title: '歴史',
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
