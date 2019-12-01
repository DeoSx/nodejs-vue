<template>
  <div class="container">
    <h1>home page</h1>
    <form @submit.prevent="fetchItems">
      <button type="submit" class="btn waves-effect waves-light">
        Show items
      </button>
    </form>
    <ul class="collection">
      <li
        class="collection-item"
        v-for="i of items.data"
        :key="i._id"
        :id="i._id"
      >
        <div class="content">
          <h6 class="title">
            <b>{{ i.title }}</b>
          </h6>
          <p class="text">{{ i.text }}</p>
        </div>
        <div class="buttons">
          <router-link
            tag="button"
            :to="`/edit/${i._id}`"
            class="btn blue waves-effect waves-light btn-small"
          >
            <i class="material-icons">edit</i>
          </router-link>
          <button class="btn red waves-effect waves-light btn-small">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  methods: {
    async fetchItems() {
      try {
        const items = await this.$store.dispatch('fetch');
        console.log(items);
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped>

.collection-item
  display: flex
  justify-content: space-between
  align-items: center
.content
.buttons
  display: flex
  justify-content: cener
  align-items: center
  button
    width: 35px
    height: 35px
    position: relative
    text-align: center
    border-radius: 50%
    &:first-child
      margin-right: 5px
    i
      position: absolute
      top: 50%
      width: 50%
      transform: translate(-50%, -50%)
</style>
