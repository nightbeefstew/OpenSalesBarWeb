<template>
  <div id="food">
		<div class="topImage"></div>
    <h1>Food</h1>
    <section class="container">
      <main id="contents">  
        <figure>
          
          <h2 id="_special">Special</h2>
          <div class="imglist">
            <div class="content" v-for="content in contents" :key="content.id"> 
              <h3 class="name">{{ content.name }}</h3>
              <img v-bind:src=content.image.url>
              <figcaption class="description">{{ content.description }}</figcaption>
              <p><span class="price">￥{{ content.price }}</span></p>
            </div>
            <div class="content" v-for="content in contents" :key="content.id"> 
              <h3 class="name">{{ content.name }}</h3>
              <img v-bind:src=content.image.url>
              <figcaption class="description">{{ content.description }}</figcaption>
              <p><span class="price">￥{{ content.price }}</span></p>
            </div>
            <div class="content" v-for="content in contents" :key="content.id"> 
              <h3 class="name">{{ content.name }}</h3>
              <img v-bind:src=content.image.url>
              <figcaption class="description">{{ content.description }}</figcaption>
              <p><span class="price">￥{{ content.price }}</span></p>
            </div>
          </div>

        </figure>
      </main>
        <aside class="sidebar">
          <table>
            <tr>
              <td><a href="#_special">Special</a></td>
            </tr>
            <tr>
              <td><a href="#_appetizer">Appetizer</a></td>
            </tr>
            <tr>
              <td><a href="#_soup">Soup</a></td>
            </tr>
            <tr>
              <td><a href="#_main">Main</a></td>
            </tr>
            <tr>
              <td><a href="#_pasta">Pasta</a></td>
            </tr>
            <tr>
              <td><a href="#_dessert">Dessert</a></td>
            </tr>
          </table>
        </aside>
      </section><!--.container-->
  </div><!--#food-->
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
            "https://osbtest.microcms.io/api/v1/food",
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

#food {
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
  background: url("~@/assets/images/Topfood.jpg") no-repeat center/cover;
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

figure {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  background: #ccc;
}

.imglist /*各列に画像が3つ並ぶように*/ {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #bbb;
}

.content /*imgnakaに対応*/ {
  margin: 50px 5px;
}

.content img {
  width: 300px;
  height: 250px;
}

figcaption {
  width: 80%;
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
  background: #eee;
}

aside table td {
  padding: 0.5em 0;
}

@media screen and (max-width: 768px) {
  
  #food {
    padding-top: 100px;
  }
  
  figure {
    width: 100%;
  }

  .imglist /*スマホ版はすべての画像が縦並び*/ {
    flex-direction: column;
  }

  .content {
    margin: 0 5px;
  }

  aside {
    display: none;
  }
}

</style>
