<template>
  <div id="plan">
		<div class="topImage"></div>
    <h1>Plan</h1>
    <section class="container">
      <main id="contents">  
        <div class="figure">

          <section>
            <h2 id="_special">Special</h2>
            <div class="imglist">
              <template v-for="content in menu" :key="content.id"> 
                <div class="content" v-if="content.subcategory[0] === 'special'">
                  <h3 class="name">{{ content.name }}</h3>
                  <img v-bind:src="content.picture_url">
                  <div class="description">{{ content.description }}</div>
                  <p><span class="price">￥{{ content.price }}</span></p>
                  <p><span class="category">{{ content.category }}</span></p>
                </div>
              </template>
            </div>
          </section>

          <section>
            <h2 id="_regular">Regular</h2>
            <div class="imglist">
              <template v-for="content in menu" :key="content.id"> 
                <div class="content" v-if="content.subcategory[0] === 'regular'">
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
              <td><a href="#_special">Special</a></td>
            </tr>
            <tr>
              <td><a href="#_regular">Regular</a></td>
            </tr>
          </table>
        </aside>
      </section><!--.container-->
  </div><!--#plan-->
</template>


<script>

export default {
  name: 'plan',
  
  data() {
    return {
      menu: [],
      firstMenuName: null,
    }
  },

  mounted() {
    this.getMenu('plan');

  },

  methods: {
    /* メニュー取得 */
    getMenu(category) {
      const payload = {
        category: category,
      };

      this.$store.dispatch('getMenu', payload)
        .then((res) => {
          this.menu = res.contents;
          console.log(res);
        });
    }
  }


  
}

</script>

<style scoped>

#plan {
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
  background: url("~@/assets/images/2hAsYouWantMedium.jpg") no-repeat center/cover;
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
  width: 400px;
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
  
  #plan {
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
