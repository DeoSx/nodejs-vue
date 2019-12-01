<template>
  <div class="container">
    <h1>create page</h1>
    <div class="row">
      <form class="col s12" @submit.prevent="createItem">
        <div class="row">
          <div class="input-field col s12">
            <input id="input_text" type="text" v-model="title" />
            <label for="input_text">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea
              id="textarea2"
              class="materialize-textarea"
              v-model="text"
            ></textarea>
            <label for="textarea2">Write text</label>
          </div>
        </div>
        <div>
          <button class="btn waves-effect waves-light" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: '',
    text: '',
    loader: true
  }),
  methods: {
    async createItem() {
      try {
        await this.$store.dispatch('create', {
          title: this.title,
          text: this.text
        });
        this.title = '';
        this.text = '';
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped></style>
