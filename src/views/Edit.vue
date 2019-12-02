<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <form class="col s12" @submit.prevent="editItem">
      <div class="row">
        <div class="input-field col s12">
          <input id="input_text" type="text" v-model="title" />
          <label for="input_text"></label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea
            id="textarea2"
            class="materialize-textarea"
            v-model="text"
          ></textarea>
          <label for="textarea2"></label>
        </div>
      </div>
      <div>
        <button class="btn waves-effect waves-light" type="submit">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {},
    title: '',
    text: ''
  }),
  async mounted() {
    const item = await this.$store.dispatch('fetchById', this.$route.params.id);
    this.item = { ...item.data };
    this.title = this.item.title;
    this.text = this.item.text;
  },
  methods: {
    async editItem() {
      try {
        await this.$store.dispatch('edit', {
          title: this.title,
          text: this.text,
          id: this.$route.params.id
        });
        await this.$router.push('/');
      } catch (e) {}
    }
  }
};
</script>

<style lang="sass" scoped></style>
