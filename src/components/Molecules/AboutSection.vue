<template>
  <div class="AboutSection">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.AboutSection {
  margin: 0 0 32px;
  h3 {
    font-size: 1.45rem;
    margin: 0 0 16px;
  }
  p {
    font-size: 1.3rem;
    line-height: 1.5;
  }
  ul {
    margin: 12px 0 0;
  }
  li {
    font-size: 1.3rem;
    line-height: 1.5;
    padding: 0 0 0 1rem;
  }
}
</style>
