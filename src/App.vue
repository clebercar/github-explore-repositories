<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <Brand />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Brand from '@/components/Brand.vue'

@Component({
  components: { Brand },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-style: normal;
}

#nav {
  padding: 30px;

  a {
    outline: none;
    text-decoration: none;
  }
}
</style>
