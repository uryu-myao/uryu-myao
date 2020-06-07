<template>
  <div :class="['dlg__cookie', { '-accepted': isAccepted }]">
    <div class="dlg__cookie-txt">
      <p>
        This site uses cookies for a better experience.
        <nuxt-link to="/cookiePolicy" target="_blank" rel="noopener"
          >Cookie Policy</nuxt-link
        >
      </p>
    </div>
    <div class="dlg__cookie-btn">
      <input
        id="check__cookie"
        v-model="accept"
        type="checkbox"
        @click="cookieAccept()"
      />
      <label for="check__cookie">
        <span>got it</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAccepted: false,
      accept: false
    }
  },
  methods: {
    cookieAccept() {
      this.isAccepted = true
    }
  }
}
</script>

<style lang="scss" scoped>
.dlg__cookie {
  position: absolute;
  width: 40vw;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 2em 4em;
  background: skyblue;
  z-index: 10;
  transition: all 0.2s ease;

  &.-accepted {
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
  }

  &-txt {
    a {
      color: $black;
      text-decoration: underline;
    }
  }

  &-btn {
    background: white;
    cursor: pointer;
    text-transform: uppercase;
    color: $grey;
    font-size: 0.8rem;
    font-weight: bold;

    input {
      display: none;
    }
    label {
      position: relative;
      width: 90px;
      height: 44px;
      padding: 0.2em;
      cursor: pointer;
      user-select: none;
      display: flex;
      justify-content: center;
    }

    label > * {
      @include center(both);
      transition: opacity 0.2s ease;
    }
  }
}
</style>
