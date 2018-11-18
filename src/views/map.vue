<template>
  <div class="map-container" id="map-container">
    <!-- {{ events.length }} -->
    <!-- <canvas id="map" width="1500px" height="600px"></canvas> -->
    <el-amap :zoom="zoom" :mapStyle="mapStyle" :events="events" class="amap-demo">
    </el-amap>

    <a href="http://149.28.72.128">
      <div class="full-screen">
        <img src="../assets/imgs/icon/full-screen.png" alt="" class="icon">
        <div class="text">全屏</div>
      </div>
    </a>
  </div>  
</template>

<script>
import $ from '../assets/libs/util';
// let amapManager = new VueAMap.AMapManager();

export default {
  data: function () {
    return {
      // _this: this,
      // link: 'http://149.28.72.128',
      zoom:16,
      mapStyle: 'amap://styles/whitesmoke',
      center: [121.59996, 31.197646],
      events: {
        init(o) {
          // _this.addMarker(o);
          // for (event of this.eventList) {
          //   console.log(event);
          //   let marker = new AMap.Marker({
          //     position: [event.longitude, event.latitude],
          //     title: event.description
          //   });
          //   marker.setMap(o);
          // } 
          let marker = new AMap.Marker({
            position: [121.59996, 31.197646]
          });
          marker.setMap(o);
        }
      }// amapManager,
    }
  },
  computed: {
    eventList () {
      return this.$store.state.events;
    }
  },
  methods: {
    createMap: function() {
      // let map_canvas = document.getElementById("map-container");
      // console.log(map_canvas.style.width);
      // console.log(map_canvas.width);
      // let map = new AMap.Map('map', {
      //   zoom: 1
      // });
      // map.setMapStyle('amap://styles/whitesmoke');
      // var _this = this;
      // map.on("complete", function(){
      //   _this.addMarker(map);
      // });
    },
    add() {
      // let o = amapManager.getMap();
      // let marker = new AMap.Marker({
      //   position: [121.59996, 31.177646]
      // });

      // marker.setMap(o);
    },

    addMarker: function (map) {
      for (event of this.eventList) {
        console.log(event);
        let marker = new AMap.Marker({
          position: [event.longitude, event.latitude],
          title: event.description
        });
        // map.add(marker);
        marker.setMap(map);
      }
      // map.setFitView();
    }
  },
  mounted: function () {
    this.$store.dispatch('getEvents');
    // this.createMap();
  },
}
</script>

<style scoped>
.map-container{
  margin: 0;  
  width: 1600px;
  height: 100%;
}

.amap-demo {
  width: 100%;
}

.full-screen{
  cursor: pointer;
  position: fixed;
  top: 40vh;
  left: 45vw;
  background: rgba(200,200,200,0.8);
  width: 90px;
  height: 90px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 4px #bbb;
}

.full-screen .icon{
  width: 35xp;
  height: 35px;
}

.full-screen .text{
  margin-top: 10px;
}
</style>
