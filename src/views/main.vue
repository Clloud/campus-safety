<template>
  <div class="container main-container">
    <div class="header"></div>

    <div class="main">
      <div class="search-box">
        <input class="search-box-input" type="text" v-model="query">
        <img class="search-box-icon" 
          src="../assets/imgs/icon/search.png"
          @click="search">
      </div>
    </div>

    <div class="footer"></div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      query: ''
    }
  },
  methods: {
    search: function () {
      if (this.query != '') {
        this.$router.push('/search');
        this.$store.commit('saveQuery', this.query);
      }
    }
  }
}
</script>

<style scoped>
.main-container{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-box{
  display: flex;
  align-items: center;

  margin-bottom: 40vh;
  padding: 10px;
  height: 55px;
  width: 600px;

  box-sizing: border-box;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 4px #bbb;
}

.search-box-input{
  outline: none;
  border: none;

  font-size: 18px;
  height: 90%;
  width: 100%;
}

.search-box-icon{
  width: 28px;
  height: 28px;
  padding: 8px;
  padding-right: 0;
}

</style>