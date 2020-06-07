<template>
  <div>TOP</div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  head() {
    return {
      titleTemplate: null,
      title: 't..top | ppp'
    }
  }
}
</script>

<style lang="scss" scoped>
.tmp {
  &_list {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;

    &_item {
      margin: 0 2rem 2rem;
      font-size: 1.3rem;
      font-weight: bold;
      text-transform: uppercase;

      a {
        color: tomato;
      }
    }
  }
}

.ttl {
  font-size: 20rem;
  color: #f3f3f3;
  text-transform: uppercase;
  text-align: center;

  &_child {
    @extend .ttl;
    font-size: 10rem;
  }
}
</style>
