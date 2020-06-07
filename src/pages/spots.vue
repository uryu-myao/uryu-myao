<template>
  <main class="container">
    <div>
      <h1 class="ttl">spots</h1>
      <nuxt-child />
    </div>
  </main>
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
        title: 's..spots',
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
