<template>
  <h1 class="ttl_child">kandatsu</h1>
</template>

<script>
import Meta from '@/assets/mixins/meta'

export default {
  name: 'Kandatsu',
  components: '',
  layout: 'layout_base',
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: 'k..kandatsu',
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
