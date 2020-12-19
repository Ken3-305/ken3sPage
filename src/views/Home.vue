<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <mainContent/> -->
    <!-- <img src="https://naoto.nkmr.io/images/ken3Page_logo.png">
    <p>まつけんの研究成果や趣味などを共有するサイトです。</p> -->
    <newsContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainContent from '@/components/main.vue'
import newsContent from '@/components/whatsNew.vue'

export default {
  name: 'home',
  components: {
    newsContent
  }
}
</script>

<style lang="css" scoped>
.home {
  position: relative;
}

.home img {
  position: absolute;
  top: 100px;
  right: 100px;
  width: 43%;
}

.home p {
  position: absolute;
  top: 295px;
  right: 100px;
  font-size: 20px;
  color: #e0e0e0;
}

</style>
