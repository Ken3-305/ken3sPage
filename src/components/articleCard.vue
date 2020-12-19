<template lang="html">
  <div class="articleCard">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <!-- <ul>
      <li v-for="{ id, name } in list" :key="id">
        {{ name }}
      </li>
    </ul> -->
    <div class="card" v-on:click="isShowModal = true">
      <header class="card-header">
        <p class="card-header-title">
          {{ article_title }}
        </p>
        <span class="tag is-medium">
          {{ article_date }}
        </span>
      </header>

      <div class="card-content">
        <div class="content">
          <div class="card-image">
            <!-- <figure>
              <img v-bind:src = "img" alt="Placeholder image" v-on:click="isShowModal = true">
            </figure> -->
          </div>

          <div class="card-description" v-html="article_content">
          </div>

          <footer>
            <div class = "card-tag">
              <span class="tag is-light">
                {{ article_tag }}
              </span>
            </div>
            <div class="more-info" v-if="article_moreInfo !== ''">
              <a class="button" :href = "article_moreInfo" target = "_blank">
                <i class = "fas fa-link"></i>
                More
              </a>
            </div>
          </footer>

        </div>
      </div>

    </div>

    <!-- <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
      <div class="modal-background" v-on:click="isShowModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
        </header>
        <section class="modal-card-body">

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div> -->

  </div>
</template>

<script>
import _ from 'lodash'
import newsArticle from '../api/news_article.js'

export default {
  name: 'card',
  data() {
    return {
      isShowModal: false,
    }
  },
  data: {
    // list: () => products.fetch()
  },

  props: {
 		article_title: {
 			type: String,
 			required: true
 		},
 		article_date: {
 			type: String,
 			required: true
 		},
    article_content: {
 			type: String,
 			required: true
 		},
    article_moreInfo: {
      type: String,
      required: true
    },
    article_tag: {
      type: String,
      required: true
    }
 	}
}
</script>

<style lang="css" scoped>
.articleCard {
  position: relative;
  width: 80%;
  /* height: 40vh; */
  margin: 25px auto;
}

@media(max-width: 670px){
  .articleCard {
    position: relative;
    width: 100%;
    /* height: 40vh; */
    margin: 25px auto;
  }
}

.articleCard header {
  font-size: 20px;
  background: #E8E8E8;
}

.articleCard .card {
  position: relative;
  margin: 25px 0;
  text-align: left;
}

.card-header .tag {
  margin: auto 0;
  font-size: 14px;
  background: #E8E8E8;
}

.card-description {
  font-size: 14px;
}

.articleCard .card-content {
  position: relative;
  width: 100%;
}

.articleCard footer {
  position: relative;
  height: 30px;
}

.card-tag .tag {
  position: absolute;
  margin: 10px 0 0 0;
}

.articleCard .more-info {
  margin: 15px 0 0 0;
  text-align: right;
}

</style>
