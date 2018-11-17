<template>
  <div class="map-container" id="map-container">
    {{ events.length }}
    <canvas id="map" width="1500px" height="600px"></canvas>
  </div>
</template>

<script>
// import AMap from 'AMap'

export default {
  computed: {
    events () {
      return this.$store.state.events;
    }
  },
  methods: {
    createMap: function() {
      // let map_canvas = document.getElementById("map-container");
      // console.log(map_canvas.style.width);
      // console.log(map_canvas.width);
      let map = new AMap.Map('map', {
        zoom: 1
      });
      map.setMapStyle('amap://styles/whitesmoke');
      var _this = this;
      map.on("complete", function(){
        _this.addMarker(map);
      });
      map.setFitView();
    },
    addMarker: function (map) {
      for (event of this.events) {
        console.log(event);
        let marker = new AMap.Marker({
          position: [event.longitude, event.latitude],
          title: event.description
        });
        map.add(marker);
      }
    }
  },
  mounted: function () {
    this.$store.dispatch('getEvents');
    this.createMap();
  },
}
</script>

<style scoped>
.map-container{
  margin: 0;  
  width: 100%;
  height: 100%;
}
</style>
