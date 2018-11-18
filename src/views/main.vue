<template>
  <div class="container main-container"> 
    <div class="background">
        <img class="background" src="../assets/imgs/background.jpg">
    </div>

    <div class="nav">
      <a class="item">About</a>
      <a class="item">Help</a>
      <a class="item" href="../../static/Campus Safety API Documentation.html">API Documentation</a>
      <a class="item">Register</a>
      <a class="item">Login</a>
    </div>

    <div class="header">
      <span>CAMPUS </span>
      <span class="orange"> SAFETY MAP</span>
      <div class="sub-header">Helping everyone build a safer campus.</div>
    </div>

    <div class="main">
      <div class="search-box">
        <input class="search-box-input" type="text" v-model="query">
        <img class="search-box-icon" 
          src="../assets/imgs/icon/search.png"
          @click="search">
      </div>
    </div>

    <div class="footer">
      ©2018 campus-safety.com ALL RIGHTS RESERVED
    </div>

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
    },
    toAPI: function () {
      this.$route.push()
    }
  }
}
</script>

<style scoped>
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 1750px;
  height: 1030px;
  z-index:-1;
}

.main-container{
  z-index: 999;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header{
  color: rgb(12, 132, 132);
  font-size: 45px;
  margin-top: 90px;
  margin-bottom: 45px;
}

.orange{
  color:#DE3700;
}

.sub-header{
  margin-top: 15px;
  font-size: 20px;
  display: flex;  
  justify-content: center;
}

.search-box{
  display: flex;
  align-items: center;

  margin-bottom: 40vh;
  padding: 10px;
  height: 55px;
  width: 700px;

  box-sizing: border-box;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 4px #bbb;
  background: #fff;
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

.nav{
  position: fixed;
  right: 30px;
  top: 20px;
  display: flex;
  font-size: 18px;
}

.nav .item{
  cursor: pointer;
  padding: 10px;
}

.footer{
  color: #888;
  position: fixed;
  bottom: 20px;
}

</style>