<template>
  <div class="home">
    <ListRepositories :repositories="repositories" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListRepositories from '@/components/ListRepositories.vue'
import axios from 'axios'

interface Repositories {
  id: number
  name: string
  description: string
  owner: {
    login: string
    id: number
    avatar_url: string
    url: string
  }
}

@Component({
  components: {
    ListRepositories,
  },
})
export default class Home extends Vue {
  private repositories: Repositories[] = []

  async beforeMount() {
    const { data } = await axios.get(
      'https://api.github.com/users/clebercar/repos'
    )

    this.repositories = data
  }
}
</script>

<style scoped lang="scss">
.home {
  background: #f2f2fa;
}
</style>
