<template>
  <div v-if="loading" class="g_loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.g_loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-family: sans-serif;
  font-size: 10rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.2);
  z-index: 10;
}
</style>
