# my-nuxt

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# modules

## JS（TypeScript）

* @nuxtjs/dotenv
* nuxt-property-decorator
* nuxt-mq
* vue-scrollto

### @nuxtjs/dotenv

https://github.com/nuxt-community/dotenv-module

```
yarn add --dev @nuxtjs/dotenv
```

nuxt.config.js
```
export default {
  buildModules: [
    '@nuxtjs/dotenv'
  ],
  dotenv: {
    /* module options */
  }
}
```

### nuxt-property-decorator

https://github.com/nuxt-community/nuxt-property-decorator

### インストール
```
yarn add -D nuxt-property-decorator
```

#### 設定

nuxt.config.js
```
build: {
  babel: {
    presets({ isServer }) {
      return [
        [
          "@nuxt/babel-preset-app", { loose: true }
        ]
      ]
    }
  }
}
```

### nuxt-mq

https://github.com/vanhoofmaarten/nuxt-mq#readme

表示するHTMLをブレイクポイントで変更します。

### インストール

```
yarn add -D nuxt-mq
```

#### 設定

nuxt.config.js
```
{
  modules: [
    ['nuxt-mq']
  ],

 'mq': {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  }
}
```

### vue-scrollto

https://github.com/rigor789/vue-scrollto#readme

### インストール

```
yarn add -D nuxt-mq
```

#### 設定

nuxt.config.js
```
{
  modules: [
    'vue-scrollto/nuxt',

    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],
  ]
}
```

### aos

https://github.com/michalsnik/aos

### アンインストール

コマンド
```
yarn remove aos @types/aos
```

nuxt.config.js
```
  plugins: [
    ...
    { src: '~/plugins/aos', ssr: false }, // ←aosを使わない場合は削除
  ],
```

## CSS

* sass
* style-resources
* @mdi/font-build

### sass

#### インストール

コマンド
```
yarn add -D node-sass sass-loader
```

nuxt.config.js
```
export default {
  build: {
    postcss: {
      preset: {
        autoprefixer: { grid: 'autoplace' }
      }
    }
  },
```

stylelint.config.js
```
  plugins: ['stylelint-scss'],
  rules: {
    'declaration-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content',
        ],
      },
    ],
  },
```

### style-resources

https://github.com/nuxt-community/style-resources-module#readme

設定は`my-nuxt/nuxt.config.js`の`styleResources`を参照

### @mdi/font-build

https://github.com/Templarian/MaterialDesign-Font-Build#readme

webfontを作成

1. `/font/svg`にsvgを保存
2. `my-nuxt/font/meta.json`に設定を記載する
3. `my-nuxt/font/font-build.json`に設定を記載する
4. 以下のコマンドでwebfontに書き出す

```
cd font/
npx @mdi/font-build
```

### 設定

#### breakpoint

nuxt.config.js
```
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      sm: 767,
      md: 1024,
      lg: Infinity,
    },
  },
```

assets/scss/bulma/utilities.scss
```
// brakepoints -------------------------------

$tablet: 768px;       //LG G3など、5.5incタイプの大型スマートフォン
$desktop: 1024px;      //ipad縦 ipad横
$widescreen: 1440px;  //MackBook 12/Pro 13/Surface2/3/Pro/Nexus10
$widescreen-enabled: true !default;
$fullhd: 1344px + (2 * $gap) !default;
$fullhd-enabled: true !default;
```

## Buefy, Bulma

#### アンインストール

コマンド
```
yarn remove nuxt-buefy
```

nuxt.config.js
```
  css: [
    '~/assets/scss/bulma/core.scss', // bulmaを使わない場合は削除
  ],
  ...
  modules: [
    ...
    ['nuxt-buefy', { css: false }], // buefyを使わない場合は削除
  ],
  ...
  styleResources: {
    scss: [
      '~/assets/scss/bulma/utilities.scss', // bulmaを使わない場合は削除
    ],
  },
```


## Swiper

https://swiperjs.com/vue/

#### デフォルト設定

plugins/vue-awesome-swiper.ts
```
Vue.use(VueAwesomeSwiper) ← 削除
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */) ← コメントアウトを削除
```

#### アンインストール

コマンド
```
yarn remove swiper vue-awesome-swiper
```

nuxt.config.js
```
  css: [
    '~/assets/scss/swiper/core.scss', // swiperを使わない場合は削除
  ],
  ...
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false }, // swiperを使わない場合は削除
  ],
  ...
  vendor: [
    'vue-awesome-swiper', // swiperを使わない場合は削除
  ],
```
