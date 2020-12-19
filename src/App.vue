<template>
  <div id="app">
    <headerBox/>
    <!-- <slideMenu/> -->
    <mainBox/>
    <router-view/>
    <footerBox/>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBox from '@/components/header.vue'
import mainBox from '@/components/main.vue'
import footerBox from '@/components/footer.vue'
import slideMenu from '@/components/slideMenu.vue'

export default {
  name: 'news',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'home',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'about',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'research',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'works',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'diary',
  components: {
    headerBox,
    mainBox,
    footerBox
  },

  name: 'contact',
  components: {
    headerBox,
    mainBox,
    footerBox
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  padding-bottom: 20vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
