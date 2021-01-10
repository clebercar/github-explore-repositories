<template>
  <div class="brand">
    <img src="@/assets/brand.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Brand extends Vue {}
</script>

<style scoped lang="scss">
.brand {
  img {
    width: auto;
    height: 32px;
  }
}
</style>
