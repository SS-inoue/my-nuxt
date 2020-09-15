<template lang="pug">
.container
  h1.red Hello {{ name }}!
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class AboutPages extends Vue {}
</script>
