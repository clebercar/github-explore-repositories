<template>
  <div class="repository">
    <User />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '@/components/User.vue'

@Component({
  components: {
    User,
  },
})
export default class Repository extends Vue {}
</script>

<style scoped lang="scss"></style>
