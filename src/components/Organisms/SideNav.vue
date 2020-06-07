<template>
  <div
    ref="Side"
    :class="['SideNavigation', { '-active': isActive }]"
    tabindex="-1"
  >
    <header class="SideNavigation_header">
      <h2>SNOWARD</h2>
    </header>

    <section class="SideNavigation_body">
      <nav>
        <NavList />
      </nav>
    </section>

    <footer class="SideNavigation_footer">
      <small>2020 snoward</small>
    </footer>
  </div>
</template>

<script>
import NavList from '@/components/Molecules/NavList'

export default {
  components: {
    NavList
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100vh;
  z-index: 2;
  padding: 3rem 4.5rem;
  background: #f7f8f9;
  transition: all 0.2s ease-in;

  &.-active {
    transform: translateX(-100%);
    display: none;
  }

  &_header {
    margin: 0 0 40px;
  }

  &_body {
    h1 {
      font-size: 20px;
      margin-bottom: 40px;
    }
  }

  &_footer {
  }
}
</style>
