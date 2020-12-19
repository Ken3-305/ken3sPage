<template lang="html">
  <div class = "whatsNew">
    <div class = "whatsNew-title">
      <h1>
        <router-link to = "/news">
          WHAT'S NEW
        </router-link>
      </h1>
    </div>

    <div class="table-container">
      <table class="table">
        <tbody>
          <tr v-for="{ id, name, date, tag } in limitedList" :key="id">
            <th>{{ date }}</th>
            <td>
              <span class="tag is-white">
                {{ tag }}
              </span>
            </td>
            <td>
              <p>
                {{ name }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// import icons from '@/components/icons.vue'
// import { Slide } from 'vue-burger-menu'
import newsArticle from '../api/news_article.js'

export default {
  name: 'card',
  data() {
    return {
    }
  },
  computed: {
    list: () => newsArticle.fetch(),
    sortedList: function () {
      // LodashのorderByメソッドを使用
      return _.orderBy(this.list, 'id', this.order ? 'asc' : 'desc')
    },
    limitedList: function () {
      return this.sortedList.slice(0, 3)
    }
  }
}
</script>

<style lang="css" scoped>

.whatsNew {
  position: fixed;

  bottom: 85px;
  left: 35px;

  width: 500px;
  height: 190px;

  background-color: #dfdff0;
  opacity: 0.9;

  z-index: 5;
}

@media(max-width: 670px){
  .whatsNew {
    position: fixed;

    bottom: 85px;
    left: 5%;

    width: 90%;
    height: 190px;

    background-color: #dfdff0;
    opacity: 0.9;

    z-index: 5;
  }
}

.whatsNew a {
  color: #303030;
}

.whatsNew a:hover {
  opacity: 0.7;
}

.whatsNew-title {
  margin: 10px;
}

.whatsNew-title h1 {
  font-weight: bold;
  font-size: 20px;
}

.whatsNew .table-container {
  text-align: left;
}

.whatsNew table {
  background-color: transparent;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.whatsNew .tag {
  position: relative;
  margin: auto 0;
}

</style>
