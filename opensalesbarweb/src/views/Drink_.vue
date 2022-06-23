<template>
  <div id="drink">
		<div class="topImage"></div>
    <h1>Drink</h1>
    <section class="container">
      <main id="contents">  
        <div class="figure">
          <section>
            <h2 id="_cocktails">CocktailsFromS3</h2>
            <div class="imglist">
              <template v-for="content in contents" :key="content.id"> 
                <div class="content" v-if="content.category[0] === 'cocktails'">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src=content.image.url>
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category[0] }}</span></p>
                </div>
              </template>
            </div>
          </section>

          <section>
            <h2 id="_cocktails">Cocktails</h2>
            <div class="imglist">
              <template v-for="content in contents" :key="content.id"> 
                <div class="content" v-if="content.category[0] === 'cocktails'">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src=content.image.url>
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category[0] }}</span></p>
                </div>
              </template>
            </div>
          </section>

          <section>
            <h2 id="_spirits">Spirits</h2>
            <div class="imglist">
              <template v-for="content in contents" :key="content.id"> 
                <div class="content" v-if="content.category[0] === 'spirits'">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src=content.image.url>
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category[0] }}</span></p>
                </div>
              </template>
            </div>
          </section>

          <section>
            <h2 id="_wine">Wine</h2>
            <div class="imglist">
              <template v-for="content in contents" :key="content.id"> 
                <div class="content" v-if="content.category[0] === 'wine'">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src=content.image.url>
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category[0] }}</span></p>
                </div>
              </template>
            </div>
          </section>

        </div><!--.figure-->
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
    data() {
      return {
        menu: [],
      }
    },

    setup() {
      const contents = ref([]);
      const loaded = ref(false);
      const loadingMsg = ref("Loading...");

      //async無名関数にしないとダメ
      onMounted(async () => {
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
      }
      
      );


      return {
        contents,
        loaded,
        loadingMsg,
      }
    },
    

  
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

main {
  padding-top: 0;
}

h2 {
  padding-top: 10em; /*サイドバーをクリックしてページ内リンクに飛んだとき、グローバルヘッダーと被らないように*/
}

h3 {
  width: 80%;
  margin: 1em auto;
  font-size: 16px;
  background: #ddd;
}

.figure {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background: #ccc;
}

.imglist /*各列に画像が3つ並ぶように*/ {
  display: flex;
  flex-direction: row;
  background: #888;
  flex-wrap: wrap;
}

.content /*imgnakaに対応*/ {
  margin: 0;
  padding: 1em;
  width: 33.3333%;
  min-height: 100%;
  border: 5px solid #000;
}

.content img {
  width: 200px;
  height: 300px;
}

.description {
  margin: 1em auto 0;
  background: #ddd;
}

.content p {
  background: #ddd;
}

aside {
  position: fixed;
  top: 50%;
  left: 2em;
  background: #333;
}

aside table td {
  padding: 0.5em 0;
}

@media screen and (max-width: 768px) {
  
  #drink {
    padding-top: 100px;
  }
  
  .figure {
    width: 100%;
  }

  .imglist /*スマホ版はすべての画像が縦並び*/ {
    flex-direction: column;
  }

  .content {
    margin: 0 5px;
    width: 100%;
  }

  aside {
    display: none;
  }
}

</style>
