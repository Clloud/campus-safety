<template>
  <div class="search-container">
    <div class="search-box">
      <input class="search-box-input" type="text" v-model="query">
      <img class="search-box-icon" 
        src="../assets/imgs/icon/search.png"
        @click="search">
      </div>

    <div class="tabs">
      <div v-for="(tab, index) in tabs" 
        :key="index"
        class="tabs-item" 
        :class="[index === current ? 'tabs-item-selected' : '']"
        @click="toggle(index)">{{ tab.name }}
      </div>
    </div>

  </div>
</template>

<script>
import $ from '../assets/libs/util';

export default {
  data: function () {
    return {
      tabs: [
        {
          name: '数据集', 
          route: '/search'
        },
        {
          name: '地图',
          route: '/search/map'
        },
        {
          name: '图表',
          route: '/search/chart'
        }
      ],
      current: 0,
      query: ''
    }
  },
  methods: {
    search: function () {
      if (this.query != '') {
        let _this = this;
        // 更新查询参数
        this.$store.commit('saveQuery', this.query);
        // 查询事件
        this.$store.dispatch('getEvents');
      }
    },
    toggle: function (id) {
      this.$router.push(this.tabs[id].route);
      this.current = id;
    },
  },
  mounted: function () {
    this.query = this.$store.state.query;
    this.search();
  }
}
</script>

<style scoped>
.search-container{
  width: 100%;
  margin: 45px 60px;
  margin-bottom: 0;
}

.search-box{
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  padding: 10px;
  height: 42px;
  width: 700px;

  box-sizing: border-box;
  border: 1px solid #ddd;
  box-shadow: 1px 2px 4px #bbb;
}

.search-box-input{
  outline: none;
  border: none;

  font-size: 17px;
  height: 90%;
  width: 100%;
}

.search-box-icon{
  width: 23px;
  height: 23px;
  padding: 8px;
  padding-right: 0;
}

.tabs{
  display: flex;
  font-size: 16px;

  padding-left: 10px;
  border-bottom: 1px solid #ddd;
}

.tabs-item{
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0 10px;
  padding: 0 15px;
  padding-bottom: 15px;
}

.tabs-item-selected{ 
  font-weight: bold;
  border-bottom: 3px solid #DE3700;
}
</style>
