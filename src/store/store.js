import Vue from 'vue'
import Vuex from 'vuex'
import $ from '../assets/libs/util';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    query: '',
    events: []
  },
  mutations: {
    setEvents (state, data) {
      state.events = data;
      // console.log('setEvents');
      console.log(this.state.events);
    },
    saveQuery (state, query) {
      state.query = query;
    } 
  },
  actions: {
    getEvents(context) {
      if (this.state.query != '') {
        $.ajax.get('event?query=' + this.state.query)
          .then(function (response) {
            context.commit('setEvents', response)
          })
      }
    },
  }
});

export default store;