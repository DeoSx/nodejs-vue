import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const url = 'http://localhost:3000';

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
    async create({ commit, dispatch }, { title, text }) {
      try {
        const fb = await axios.post(`${url}/create`, {
          title,
          text
        });
        dispatch('fetch')
      } catch (e) {
        throw e;
      }
    },
    async fetch({ commit }) {
      try {
        const items = await axios.get(url);
        commit('setItems', items);
        return items;
      } catch (e) {
        throw e;
      }
    },
    async fetchById({ commit }, id) {
      try {
        return await axios.get(`${url}/edit/${id}`);
      } catch (e) {
        throw e;
      }
    },
    async edit({ dispatch }, { title, text, id }) {
      try {
        await axios.put(`${url}/edit/${id}`, { title, text });
        await dispatch('fetch');
      } catch (e) {
        throw e;
      }
    },
    async remove({dispatch}, id) {
      try {
        await axios.delete(`${url}/${id}`)
        await dispatch('fetch')
      } catch (e) {
        throw e
      }
    }
  },
  getters: {
    items: s => s.items
  },
  modules: {}
});
