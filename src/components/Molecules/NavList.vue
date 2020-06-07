<template>
  <ul class="NavList">
    <li>
      <nuxt-link to="/">Top</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/history">history</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.NavList {
  padding: 0;

  li {
    list-style: none;
    font-size: 1.4rem;
    letter-spacing: 0.01em;
    margin: 0 0 16px;

    a {
      color: #000;
      text-decoration: none;
      opacity: 0.5;
      &.nuxt-link-exact-active {
        opacity: 1;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
