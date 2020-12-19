<template lang = "html">
  <div class="contact">
    <div class="title">
      <h1>CONTACT</h1>
    </div>
    <div class="contactContent">
      <table class="table">
        <tbody>
          <tr>
            <th>
              <i class = "fab fa-twitter"></i>
            </th>
            <td>
              <a href = "https://twitter.com/ken3_305" target="_blank">@ken3_305</a>
            </td>
          </tr>
          <tr>
            <th>
              <i class = "fab fa-instagram"></i>
            </th>
            <td>
              <a href = "https://instagram.com/ken3_305" target="_blank">@ken3_305</a>
            </td>
          </tr>
          <tr>
            <th>
              <i class = "fab fa-facebook"></i>
            </th>
            <td>
              <a href = "https://facebook.com/ken3.305" target="_blank">@ken3.305</a>
            </td>
          </tr>
          <tr>
            <th>
              <i class = "fab fa-youtube"></i>
            </th>
            <td>
              <a href = "https://www.youtube.com/channel/UCNhKjJj9BkOSnEsjUZ6pkYA?view_as=subscriber" target="_blank">Naoto Matsuyama</a>
            </td>
          </tr>
          <tr>
            <th>
              <i class = "fab fa-github"></i>
            </th>
            <td>
              <a href = "https://github.com/ken3-305" target="_blank">@ken3-305</a>
            </td>
          </tr>
          <tr>
            <th>
              <i class = "fas fa-envelope"></i>
            </th>
            <td>
              <p>
                matsukenfms7010[at]gmail.com
              </p>
              <p class="sub">
                お問い合わせの際は、[at]を@に置き換えてください。
              </p>
            </td>
          </tr>
        </tbody>
      </table>
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
.contact {
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
  .contact {
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

.contactContent {
  position: relative;
  margin: 15px 0;
}

.table {
  position: relative;
  margin: auto;
}

.sub {
  font-size: 12px;
}

</style>
