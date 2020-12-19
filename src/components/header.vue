<template lang="html">
  <header class="header-box">
    <div class="header-menu">
      <nav class="level">
        <figure class = "page-logo">
          <router-link to = "/">
            <img src="https://naoto.nkmr.io/images/ken3Page_logoBlack.png">
          </router-link>
        </figure>
        <p class="level-item has-text-centered">
          <router-link to = "/news">NEWS</router-link>
        </p>
        <p class="level-item has-text-centered">
          <router-link to = "/about">ABOUT</router-link>
        </p>
        <p class="level-item has-text-centered">
          <router-link to = "/research">RESEARCH</router-link>
        </p>
        <p class="level-item has-text-centered">
          <router-link to = "/works">WORKS</router-link>
        </p>
        <p class="level-item has-text-centered">
          <router-link to = "/diary">DIARY</router-link>
        </p>
        <p class="level-item has-text-centered">
          <router-link to = "/contact">CONTACT</router-link>
        </p>
        <p class="level-item-sub has-text-centered">
          <icons/>
        </p>
      </nav>
    </div>
    <div class="menuBox">
      <Slide
        class="slideMenu"
        width="200"
      >
        <!-- <router-link to="/" tag="li">
          Top
        </router-link>
        <router-link to="/about" tag="li">
          About
        </router-link> -->
        <router-link to = "/">
          <figure class = "page-logo">
            <img src="https://naoto.nkmr.io/images/ken3Page_logo.png">
          </figure>
        </router-link>
        <router-link to = "/news">
          <p class="level-item has-text-centered">
            NEWS
          </p>
        </router-link>
        <router-link to = "/about">
          <p class="level-item has-text-centered">
            ABOUT
          </p>
        </router-link>
        <router-link to = "/research">
          <p class="level-item has-text-centered">
            RESEARCH
          </p>
        </router-link>
        <router-link to = "/works">
          <p class="level-item has-text-centered">
            WORKS
          </p>
        </router-link>
        <router-link to = "/diary">
          <p class="level-item has-text-centered">
          DIARY
          </p>
        </router-link>
        <router-link to = "/contact">
          <p class="level-item has-text-centered">
            CONTACT
          </p>
        </router-link>
        <div class="menu-icons">
          <icons/>
        </div>
      </Slide>
    </div>
  </header>
</template>

<script>
import icons from '@/components/icons.vue'
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    icons,
    Slide
  }
}
</script>

<style lang="css" scoped>

.header-menu {
  display: block;
}
.menuBox {
  display: none;
}

.header-box {
  position: fixed;
  width: 100vw;
  height: 75px;
  top: 0;
  background-color: #f0f0f0;
  /* opacity: 0.9; */
  z-index: 10;
}

@media(max-width: 1000px){
  .header-menu {
    display: none;
  }
  .menuBox {
    display: block;
  }

  .header-box {
    background-color: transparent;
  }
}

.level {
  position: relative;
  width: 80vw;
  height: 75px;
  margin: 0 auto;
}

.header-menu a {
  color: #303030;
}

.header-menu a:hover, .menuBox a:hover {
  font-weight: bold;
  opacity: 0.7;
}

.page-logo {
  width: 130px;
  margin: auto;
}

.menuBox {
  position: fixed;
  left: -17px;
  top: 40px;
  z-index: 100;
}

.menuBox p {
  text-align: center;
}

.menuBox a {
  color: #e0e0e0;
}

.bm-burger-button {
  position: relative;
  top: 0;
  width: 100px;
}
.bm-item-list {
  position: relative;
  width: 100%;
  color: #b8b7ad;
  left: -17px;
  margin-top: 20px;
  margin: 0 auto;
  font-size: 20px;
  cursor: pointer;
}
.bm-item-list > *:hover {
  background-color: #707070;
}
</style>
