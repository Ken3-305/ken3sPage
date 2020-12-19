<template lang="html">
  <div class = "mainBox">
    <img src="http://naoto.nkmr.io/images/matsuken_kamakura.JPG" oncontextmenu="return false;" onselectstart="return false;" onmousedown="return false;">
  </div>
</template>

<script>
export default {
  }
</script>

<style lang="css" scoped>
.mainBox {
  position: fixed;
  z-index: 0;
}

.mainBox img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

</style>
