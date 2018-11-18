<template>
  <div>
    <div class="events">
      <div v-for="event in events" 
        :key="event.id" 
        @click="toEvent(event.id)"
        class="event">
        <div class="event-header">
          <div class="event-header-title">{{ event.title }}</div>
        </div>
        <div class="event-content">
          <div class="event-content-description">
            {{ event.description }}
          </div>
        </div>
        <div :class="[event.status === 0 ? 'event-footer-alert' : 'event-footer']">
          <div class="event-footer-time">
            {{ event.date }}
          </div>
          <div class="event-footer-status">
            {{ event.status === 0 ? '未解决' : '已解决' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from '../assets/libs/util';

export default {
  computed: {
    events () {
      return this.$store.state.events;
    }
  },
  methods: {
    toEvent: function (id) {
      this.$router.push('/event/' + id);
    }
  },
  mounted: function () {
    this.$store.dispatch('getEvents');
  },
  
}
</script>

<style scoped>
.events{
  display: flex;
  flex-direction: column;
  margin: 0 60px;
  margin-top: 30px;
}

.event{
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 750px;
  margin-bottom: 20px;
}

.event-header{
  display: flex;
  line-height: 45px;
}

.event-header-title{
  font-size: 22px;
  color: #001BAA;
}

.event-content{
  line-height: 24px;
}

.event-content-description{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.event-footer{
  display: flex;
  font-size: 14px;
  line-height: 26px;
  color: #006D21;
}

.event-footer-alert{
  display: flex;
  font-size: 15px;
  line-height: 22px;
  color:#DE3700;
}

.event-footer-time{
  margin-right: 5px;
}


</style>
