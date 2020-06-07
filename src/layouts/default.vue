<template>
  <v-app class="app">
    <!-- <v-overlay color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <p>loading</p>
      </div>
    </v-overlay> -->
    <div class="AppContainer">
      <DlgCookie />
      <div class="SiderNavContainer">
        <SideNav />
      </div>
      <main class="MainContainer">
        <nuxt />
        <!-- <Artwork /> -->
      </main>
    </div>
  </v-app>
</template>

<script>
import DlgCookie from '@/components/Molecules/cookie'
import SideNav from '@/components/Organisms/SideNav'
// import Artwork from '@/components/Artwork/index'

export default {
  components: {
    DlgCookie,
    SideNav
    // Artwork
  }
}
</script>

<style lang="scss" scoped>
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.AppContainer {
  display: grid;
  grid-template-columns: 325px 1fr;
  grid-template-rows: auto;
  max-width: 100%;
  min-height: 100vh;
}

.SiderNavContainer {
  position: relative;
  grid-column: 1/2;
}

.MainContainer {
  height: 100vh;
  position: relative;
  grid-column: 2/3;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
