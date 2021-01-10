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
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body,
input,
button {
  font: 16px Roboto, sans-serif;
}

body {
  background: #f0f0f5 url('assets/github-background.svg') no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

#nav {
  padding: 30px 0;

  a {
    outline: none;
    text-decoration: none;
  }
}
</style>
