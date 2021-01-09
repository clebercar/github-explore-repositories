<template>
  <div class="repository">Repository {{ $route.params.id }}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Repository extends Vue {}
</script>

<style scoped lang="scss"></style>
