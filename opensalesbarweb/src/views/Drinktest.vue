<template>
  <div id="drink">
		<div class="topImage"></div>
    <h1>Drink</h1>
    <section class="container">
      <main id="contents">  
        <figure>
          <div>{{loadingMsg}}</div>
          <div class="content" v-for="content in contents" :key="content.id">
            <span class="date">{{ content.createdAt }}</span>  
            <h3 class="name">{{ content.name }}</h3>
            <img v-bind:src=content.image.url>
            <div class="description">{{ content.description }}</div>
            <p>
            <span class="price">￥{{ content.price }}</span>
            </p>

          </div>
          <h2 id="_cocktails">Cocktails</h2>
          <div class="imglist">
              <div class="imgnaka1">
                <figcaption>Azuki</figcaption>
              </div>
              <div class="imgnaka2">
                <figcaption>Orange</figcaption>
              </div>
              <div class="imgnaka3">
                <figcaption>Milk</figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_whisky">Whisky</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_brandy">Brandy</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_spirits">Spirits</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_wine">Wine</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_beer">Beer</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_champagne">Champagne</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_softdrink">Soft Drink</h2>
          <div class="imglist">
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
          </div><!--imglist-->

        </figure>
      </main>
        <aside class="sidebar">
          <table>
            <tr>
              <td><a href="#_cocktails">Cocktails</a></td>
            </tr>
            <tr>
              <td><a href="#_whisky">Whisky</a></td>
            </tr>
            <tr>
              <td><a href="#_brandy">Brandy</a></td>
            </tr>
            <tr>
              <td><a href="#_spirits">Spirits</a></td>
            </tr>
            <tr>
              <td><a href="#_wine">Wine</a></td>
            </tr>
            <tr>
              <td><a href="#_beer">Beer</a></td>
            </tr>
            <tr>
              <td><a href="#_champagne">Champagne</a></td>
            </tr>
            <tr>
              <td><a href="#_softdrink">Soft Drink</a></td>
            </tr>
          </table>
        </aside>
      </section><!--.container-->
  </div><!--#drink-->
</template>


<script>
import { onMounted, ref } from '@vue/runtime-core'
import axios from 'axios'
// @ is an alias to /src


export default {
  name: 'blog',

    setup() {
      const contents = ref([]);
      const loaded = ref(false);
      const loadingMsg = ref("Loading...");

      //async無名関数にしないとダメ
      onMounted(async () => {
        console.log('App.vue is mounted!');

        //axiosを使ったgetリクエスト
        await axios
          .get(
            "https://osbtest.microcms.io/api/v1/drink",
            //headers: リクエストヘッダー
            {
              headers: {'X-MICROCMS-API-KEY': process.env.VUE_APP_CMS_API_KEY}
              
            })
          //thenはリクエストが成功or失敗したら動く
          .then(
            (response) => {
              console.log(response);
              contents.value = response.data.contents
              loaded.value = true;
              loadingMsg.value ="Loaded!";
              console.log(loaded);
            })
          .catch(
            (error) => { console.log(error) });


          //catchはリクエストが失敗したら動く
          //.catch(console.log(err))
      });

    /*  console.log(`API KEY: ${process.env.VUE_APP_CMS_API_KEY}`); */

      return {
        contents,
        loaded,
        loadingMsg,
      }
    },

    components: {
      
    }
  
}

</script>

<style scoped>

#drink {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 200px;
}

.topImage {
	display: block;
	height: 70vh;
  margin: -10em 0 10em 0;
  width: 100%;
  background: url("~@/assets/images/top2.jpg") no-repeat center/cover;
  position: relative;
  z-index: 9; /*サイドメニュー<トップ画像<グローバルメニュー となるようにしたい*/
}

#drink main {
  padding-top: 0;
}

#drink h2 {
  padding-top: 10em; /*グローバルヘッダーと被らないように*/
}

#drink figure {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
}

#drink figure .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#drink figure .imglist div {
  width: 200px;
  height: 300px;
  margin: 50px 5px;
  background: url("~@/assets/images/azuki.jpg") no-repeat; 
}

#drink figure .imglist div figcaption {
  padding-top: 300px;  
}

#drink figure .imglist .imgnaka1 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

#drink figure .imglist .imgnaka2 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

#drink figure .imglist .imgnaka3 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

aside {
  position: fixed;
  top: 50%;
  left: 2em;
}

@media screen and (max-width: 768px) {
  
  #drink {
    padding-top: 100px;
  }
  
  #drink figure {
    width: 100%;
  }

  aside {
    display: none;
  }
}

</style>
