<template>
  <section class="artwork">
    <canvas ref="canvas" class="artwork__canvas"></canvas>
  </section>
</template>

<script>
import EventBus from '@/utils/event-bus'
import ArtworkGL from './js/ArtworkGL'

export default {
  name: 'Artwork',
  components: {},
  props: [],
  data() {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {}
  },
  computed: {},
  watch: {
    '$route.name': function evb(_new) {
      EventBus.$emit('TRANSITION', _new)
    }
  },
  mounted() {
    // canvas要素を渡す。
    if (!this.artworkGL)
      this.artworkGL = new ArtworkGL({
        $canvas: this.$refs.canvas
      })

    EventBus.$emit('TRANSITION', this.$route.name)
  },
  destroyed() {
    // canvasを作ったり壊したりする前提の場合はここに処理停止する処理を書く（今回省略）。
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
  }
}
</script>

<style>
.artwork {
  /* position: fixed;
  top: 0;
  left: 0; */
  height: 100%;
  background: #eaf2f5;
}
</style>
