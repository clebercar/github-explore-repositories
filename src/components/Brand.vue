<template>
  <div class="brand">
    <img src="@/assets/brand.png" />
    <h1>github<span>_explorer</span></h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Brand extends Vue {}
</script>

<style scoped lang="scss">
.brand {
  display: flex;
  height: 32px;
  align-items: center;
}

img {
  width: 32px;
  height: auto;
  margin-right: 16px;
}

h1 {
  font-size: 28px;
  color: #6a6a6a;

  span {
    color: #aeaeae;
  }
}
</style>
