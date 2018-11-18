<template>
  <div>
    <a href="http://149.28.72.128/chart">
      <div class="full-screen">
        <img src="../assets/imgs/icon/full-screen.png" alt="" class="icon">
        <div class="text">查看</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
