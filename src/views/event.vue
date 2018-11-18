<template>
  <div class="container">
    <div class="nav">
      <div class="item green">Campus Safety Map</div>
      <div class="item">Register</div>
      <div class="item">Login</div>
    </div>

    <div class="map"></div>
    <div class="event">
      <div class="event-title">{{ event.title }}</div>

      <div class="event-detail">
        <div class="item">
          <div class="name">时间</div>
          <div class="value">{{ event.date }} {{ event.time }}</div>
        </div>
        <div class="item">
          <div class="name">地点</div>
          <div class="value">{{ event.location }}</div>
        </div>

        <div class="item">
          <div class="name">类型</div>
          <div class="value">{{ type[event.type] }}</div>
        </div>

        <div class="item">
          <div class="name">状态</div>
          <div class="value">{{ status[event.status] }}</div>
        </div>
      </div>

      <div class="event-description">{{ event.description }}</div>
    </div>

    <el-amap :zoom="zoom" :mapStyle="mapStyle" :events="events" class="amap-demo">
    </el-amap>

    <button class="report">I WANT TO REPORT</button>
  </div>
</template>

<script>
import $ from '../assets/libs/util';
export default {
  data () {
    return {
      event: {},
      type: ["火灾", "盗窃", "陌生人骚扰", "打架斗殴", "交通事故", "酗酒", "传销诈骗", "其他"],
      status: ['未解决', '已解决'],
      zoom:16,
      mapStyle: 'amap://styles/whitesmoke',
      center: [121.59996, 31.197646],
      events: {
        init(o) {
          let marker = new AMap.Marker({
            position: [121.59996, 31.197646]
          });
          marker.setMap(o);
        }
      }
    }
  },
  methods: {

  },
  mounted: function () {
    var _this = this;
    $.ajax.get('event/' + this.$route.params.id)
      .then(function (response) {
        console.log(response);
        _this.event = response;
    })
  },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items:center;
}

.nav{
  position: fixed;
  right: 30px;
  top: 20px;
  display: flex;
  font-size: 18px;
}

.nav .item{
  cursor:pointer;
  padding: 10px;
}

.green{
  color: rgb(12, 132, 132);
  font-weight: bold;
}

.map{

}

.event{
  width: 700px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.event-title{
  font-size: 30px;
  color: #001BAA;
  margin-bottom: 10px;
}

.event-detail{
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.event-detail .item{
  display: flex;
  line-height: 26px; 
  font-size: 17px;
}

.event-detail .item .name{
  margin-right: 20px;
} 

.event-detail item .value{
  
}

.event-description{
  font-size: 18px;
  line-height: 29px;
}

.report{
  margin-top: 45px;
  cursor: pointer;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;
  border:1px solid rgb(12, 132, 132);
  color: rgb(12, 132, 132);
  background: #fff;
}

.amap-demo {
  width: 700px;
  height: 200px;
}
</style>