<template>
  <div class="container">
    <b-button>Click Me</b-button>
    <div>{{ $mq }}です</div>
    <div v-if="$mq === 'sm'">SMのtemplateです。</div>
    <div v-if="$mq === 'md'">MDのtemplateです。</div>
    <div v-if="$mq === 'lg'">lgのtemplateです。</div>
    <div>
      <nuxt-link v-scroll-to="'#hage'" to> アンカーへリンク </nuxt-link>
    </div>
    <p class="mobile">mobile</p>
    <p class="tablet">tablet</p>
    <p class="tablet-only">tablet-only</p>
    <p class="touch">touch</p>
    <p class="desktop">desktop</p>
    <p class="desktop-only">desktop-only</p>
    <p class="widescreen">widescreen</p>
    <p class="widescreen-only">widescreen-only</p>
    <p class="fullhd">fullhd</p>
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
    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
      hogehoge
    </div>
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
@include mobile {
  .mobile {
    color: red;
  }
}
@include tablet {
  .tablet {
    color: red;
  }
}
@include tablet-only {
  .tablet-only {
    color: red;
  }
}
@include touch {
  .touch {
    color: red;
  }
}
@include desktop {
  .desktop {
    color: red;
  }
}
@include desktop-only {
  .desktop-only {
    color: red;
  }
}
@include widescreen {
  .widescreen {
    color: red;
  }
}
@include widescreen {
  .widescreen-only {
    color: red;
  }
}
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
