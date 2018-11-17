<template>

  <div class="container">
    <router-view></router-view>

    <div class="search">
      <router-view name="search"></router-view>
      <router-view name="result"></router-view>
    </div>
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
