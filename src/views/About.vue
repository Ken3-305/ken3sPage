<template lang = "html">
  <div class="about">
    <div class="title">
      <h1>ABOUT</h1>
    </div>
    <div class="aboutContent">
      <div class="photo-and-name">
        <profileDescription/>
        <h2 class="my-name">松山 直人</h2>
        <h3 class="my-name-kana">まつやま なおと</h3>
      </div>
      <div class="table-container">
        <table class="table">
          <tbody>
            <tr>
              <th>所属</th>
              <td>
                <p>
                  明治大学大学院 先端数理科学研究科
                </p>
                <p>
                   先端メディアサイエンス専攻 中村研究室 1年
                </p>
              </td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>1998年3月5日 (22歳)</td>
            </tr>
            <tr>
              <th>出身</th>
              <td>神奈川県横浜市</td>
            </tr>
            <tr>
              <th>趣味</th>
              <td>
                <p>エレクトーン</p>
                <p>音楽鑑賞</p>
                <p>ライブ鑑賞</p>
                <p>旅行・散策</p>
                <p>おいしいものを食べること</p>
              </td>
            </tr>
            <tr>
              <th>資格・検定</th>
              <td>
                <p>英検2級</p>
                <p>エレクトーングレード試験6級</p>
              </td>
            </tr>
            <tr>
              <th>言語</th>
              <td>
                <p>Processing</p>
                <p>JavaScript</p>
                <p>Vue.js</p>
                <p>React.js</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import profileDescription from '@/components/profileDescription.vue'

export default {
  components: {
    profileDescription
  }
}
</script>

<style lang="css" scoped>
.about {
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
  .about {
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

.aboutContent {
  position: relative;
  margin: 15px 0;
}

.photo-and-name {
  margin: 15px 0;
}

.my-name {
  font-size: 36px;
  /* font-weight: bold; */
}

.my-name-kana {
  font-size: 16px;
}

.table {
  position: relative;
  margin: auto;
}
</style>
