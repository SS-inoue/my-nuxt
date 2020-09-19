<template lang="pug">
div
  .loading(:class="{ 'is-finish': dataLoadFinish }")
    p loading...
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class FirstLoad extends Vue {
  dataLoadFinish: boolean = false
  mounted() {
    window.addEventListener('load', () => {
      this.dataLoadFinish = true
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: $primary;
  color: $white;
  &.is-finish {
    transition: opacity 1s, z-index 0s 1.01s;
    opacity: 0;
    z-index: -1;
  }
}
</style>
