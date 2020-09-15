<template>
  <div class="container">
    <div>
      <nuxt-link v-scroll-to="'#hage'" to> アンカーへリンク </nuxt-link>
    </div>
    <p class="chrome">chrome</p>
    <swiper>
      <swiper-slide>スライダー１</swiper-slide>
      <swiper-slide>スライダー２</swiper-slide>
      <swiper-slide>スライダー３</swiper-slide>
    </swiper>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <p>hoge</p>
    <div id="hage">hage</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class IndexPages extends Vue {}
</script>
<style lang="scss" scoped>
@include chrome() {
  .chrome {
    color: red;
  }
}
@include chrome(85) {
  .chrome {
    color: green;
  }
}
</style>
