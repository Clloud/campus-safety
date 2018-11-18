<template>

  <div class="container">
    <router-view></router-view>

    <div class="search">
      <router-view name="search"></router-view>
      <router-view name="result"></router-view>
    </div>

    <router-view name="event"></router-view>
  </div>

</template>

<script>

export default {
  data: function () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.search{
  display: flex;
  flex-direction: column;
}
</style>
