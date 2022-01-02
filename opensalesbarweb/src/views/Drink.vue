<template>
  <div id="drink">
		<div class="topImage"></div>
    <h1>Drink</h1>
    <section class="container">
      <main id="contents">  
        <figure>
          
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
  padding-top: 7em; /*グローバルヘッダーと被らないように*/
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
  left: 10px;
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
