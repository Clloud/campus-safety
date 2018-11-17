<template>
  <div id="container">
    <div class="header"></div>
    <div class="main">
      <input type="text" v-model="counter">
      {{ counter }}
      <button @click="add">add</button>

      <input type="text" v-model="query">
      <button @click="search">search</button>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import $ from './assets/libs/util';

export default {
  data: function () {
    return {
      counter: 0,
      query: ''
    }
  },
  methods: {
    add: function () {
      this.counter ++;
    },
    search: function () {
      console.log(this.query);

      $.ajax.get('event?query=' + this.query)
      .then(function (response) {
        console.log(response);
      })


    }
  }
}
</script>

<style>
  @import "./assets/style/index.css";

  .container{
    
  }

</style>
