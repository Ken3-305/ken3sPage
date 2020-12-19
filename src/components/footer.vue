<template lang="html">
  <footer class="footer-box">
    <div class="content has-text-centered">
      <p>
        Copyright © 2020 Naoto Matsuyama
      </p>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .footer-box {
    position: fixed;
    width: 100vw;
    height: 50px;
    bottom: 0;
    background-color: #000b00;
    opacity: 0.75;
    z-index: 10;
  }

  .footer-box p {
    position: relative;
    margin: 0 auto;
    color: #fff;
  }
</style>
