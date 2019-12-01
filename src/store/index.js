import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    async create({ commit }, { title, text }) {
      try {
        const fb = await axios.post('http://localhost:3000/create', {
          title,
          text
        });
        console.log(fb);
      } catch (e) {
        throw e;
      }
    },
    async fetch({ commit }) {
      try {
        const items = await axios.get('http://localhost:3000/');
        commit('setItems', items);
        return items;
      } catch (e) {
        throw e;
      }
    },
    async fetchById({ commit }, id) {
      try {
        return await axios.get(`http://localhost:3000/edit/${id}`);
      } catch (e) {
        throw e;
      }
    },
    async edit({ dispatch }, { title, text, id }) {
      try {
        await axios.put(`http://localhost:3000/edit/${id}`, { title, text });
        await dispatch('fetch');
      } catch (e) {
        throw e;
      }
    }
  },
  getters: {
    items: s => s.items
  },
  modules: {}
});
