<template>
  <div id="plan">
		<div class="topImage"></div>
    <h1>Plan</h1>
    <section class="container">
      <main id="contents">  
        <figure>
          
          <h2 id="_special">Special（期間限定プラン）</h2>
          <div class="imglist">
              <div class="imgnaka1">
                <figcaption>【ランチタイム限定】パティシェ特製スイーツセット</figcaption>
              </div>
              <div class="imgnaka2">
                <figcaption>【ランチタイム限定】本日のパスタセット</figcaption>
              </div>
          </div><!--imglist-->

          <h2 id="_regular">Regular（通常プラン）</h2>
          <div class="imglist">
              <div class="imgnaka1">
                <figcaption>【20時までご入店のお客様限定】0次会プラン</figcaption>
              </div>
              <div class="imgnaka2">
                <figcaption>2時間飲み放題ライトプラン</figcaption>
              </div>
              <div class="imgnaka3">
                <figcaption>2時間飲み放題ミディアムプラン◆生ビール飲み放題</figcaption>
              </div>
              <div class="imgnaka4">
                <figcaption>2時間飲み放題リッチプラン◆スパークリングワイン飲み放題</figcaption>
              </div>
          </div><!--imglist-->

        </figure>
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
  z-index: 9;
}

#plan main {
  padding-top: 0;
}

#plan h2 {
  padding-top: 7em;
}

#plan figure {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
}

#plan figure .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

#plan figure .imglist div {
  width: 400px;
  height: 300px;
  margin: 50px 5px;
  background: url("~@/assets/images/azuki.jpg") no-repeat; 
}

#plan figure .imglist div figcaption {
  padding-top: 300px;  
}

#plan figure .imglist .imgnaka1 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

#plan figure .imglist .imgnaka2 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

#plan figure .imglist .imgnaka3 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

#plan figure .imglist .imgnaka4 {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

aside {
  position: fixed;
  top: 50%;
  left: 10px;
}

@media screen and (max-width: 768px) {
  
  #plan {
    padding-top: 100px;
  }
  
  #plan figure {
    width: 100%;
  }

  aside {
    display: none;
  }
}

</style>
