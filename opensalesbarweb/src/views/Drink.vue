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
              <template v-for="content in menu" :key="content.id"> 
                <div class="content">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src="content.picture_url">
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category }}</span></p>
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

export default {
  name: 'drink',
  
  data() {
    return {
      menu: [],
      firstMenuName: null,
    }
  },

  mounted() {
    this.getMenu();

  },

  methods: {
    /* メニュー取得 */
    getMenu() {
      this.$store.dispatch('getMenu')
        .then((res) => {
          this.menu = res.contents;
          this.firstMenuName = res.contents[0].name
          console.log(res);
          console.log(this.firstMenuName);
          console.log('hi')
        });
    }
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
