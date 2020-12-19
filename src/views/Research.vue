<template lang = "html">
  <div class="research">
    <div class="title">
      <h1>RESEARCH</h1>
    </div>
    <div class="researchContent">
      <articleCard
        v-for="{ id, name, date, img, content, moreInfo, tag } in sortedList"
        v-if = "tag === 'research'"
        :key="id"
        :id="id"
        :article_title = "name"
        :article_date = "date"
        :article_content = "content"
        :article_moreInfo = "moreInfo"
        :article_tag = "tag"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import articleCard from '@/components/articleCard.vue'
import newsArticle from '../api/news_article.js'

export default {
  components: {
    articleCard
  },

  name: 'ArticleCard',
  data() {
    return {
    }
  },
  data: {
    // list: () => products.fetch()
  },
  computed: {
    list: () => newsArticle.fetch(),
    sortedList: function () {
      // LodashのorderByメソッドを使用
      return _.orderBy(this.list, 'id', this.order ? 'asc' : 'desc')
    }
  }
}
</script>

<style lang="css" scoped>
.research {
  position: absolute;
  top: 75px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  margin: 50px 0 75px 0;
  padding: 25px;

  width: 65vw;

  background-color: #fff;
  /* opacity: 0.9; */
}

@media(max-width: 670px){
  .research {
    position: absolute;
    top: 75px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);

    margin: 50px 0 75px 0;
    padding: 25px;

    width: 95vw;

    background-color: #fff;
    /* opacity: 0.9; */
  }
}

.title {
  position: relative;
  margin: 15px 0;
}

.researchContent {
  position: relative;
  margin: 15px 0;
}

</style>
