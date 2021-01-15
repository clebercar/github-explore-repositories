<template>
  <div class="search">
    <h1 class="search__title">Explore repositórios no Github.</h1>

    <form class="search__form">
      <input
        :value="store.name"
        placeholder="Digite aqui"
        @keyup="handleUpdateName($event.target.value)"
      />
      <button type="submit">Pesquisar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/UserModule'

@Component
export default class User extends Vue {
  private store = UserModule

  public handleUpdateName(newName: string): void {
    this.store.updateName(newName)
  }

  private get nameUpperCase() {
    return this.store.nameUpperCase
  }
}
</script>

<style scoped lang="scss">
.search {
  &__title {
    font-size: 48px;
    margin-bottom: 40px;
  }

  &__form {
    display: flex;

    input {
      width: 100%;
      height: 72px;
      padding: 20px;
      border-radius: 5px;
      border: none;
    }

    button {
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 24px 64px;
      background-color: #04d361;
    }
  }
}
</style>
