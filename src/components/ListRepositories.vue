<template>
  <ul v-if="repositories && repositories.length">
    <li class="item" v-for="repo in repositories" :key="repo.id">
      <router-link
        tag="div"
        class="item__container"
        :to="`/repository/${repo.id}`"
      >
        <div class="item__children-container">
          <figure class="item__image">
            <img :src="repo.owner.avatar_url" />
          </figure>

          <div class="item__description">
            <h1>{{ repo.name }}</h1>
            <p>{{ repo.description }}</p>
          </div>
        </div>

        <ChevronRight :size="28" fillColor="#C9C9D4" />
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue'

@Component({
  components: {
    ChevronRight,
  },
})
export default class List extends Vue {
  @Prop({ type: Array, required: true })
  private repositories!: []
}
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}

.item {
  background: #ffff;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 14px;
  cursor: pointer;

  &__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__children-container {
    display: flex;
    align-items: center;
  }

  &__image {
    margin: 0 14px 0 0;

    img {
      width: 84px;
      height: 84px;
      border-radius: 50%;
    }
  }

  &__description {
    text-align: left;

    h1 {
      font-weight: bold;
      font-size: 24px;
      color: #3d3d4d;
      margin: 0;
    }

    p {
      color: #a8a8b3;
      font-size: 18px;
      margin: 4px 0;
    }
  }
}
</style>
