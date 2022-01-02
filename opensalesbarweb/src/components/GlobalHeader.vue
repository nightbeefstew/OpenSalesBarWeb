<template>
  <header>
  <div id="GlobalHeader">
   <!-- <div class="GlobalHeaderNav">
     <router-link to="/"></router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/News">News</router-link>
      <router-link to="/Menu">Menu</router-link>
      <router-link to="/Photo">Photo</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Access">Access</router-link> 
      <router-link to="/">Instagram</router-link> 
      <router-link to="/English">English</router-link> -->
    <nav class="gNaviWrapper">
      <ul class="gNavi">
        <li>
          <div class="gNaviLogoGroup">
            <p class="gNaviLogoDesc">新橋駅から徒歩２分<br>気軽に立ち寄れるBAR</p>
            <!-- <img class="gNaviLogoImg" src="~@/assets/images/logo.png"> -->
            
       <router-link class="gNaviLogoImg" to="/">
              <img src="~@/assets/images/logo.png">
            </router-link>
            
          </div>
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/News">News</router-link></li>
        <li class="pulldown">
          <router-link to="/Menu">Menu</router-link>
          <ul>
            <li>Drink</li>
            <li>Food</li>
            <li>Plan</li>
          </ul>
        </li>
        <li><router-link to="/Photo">Photo</router-link></li>
        <li class="pulldown">
          <router-link to="/About">About</router-link>
          <ul>
            <li>Profile</li>
            <li>Recruit</li>
            <li>Contact</li>
          </ul>
        </li>
        <li><router-link to="/Access">Access</router-link></li>
        <li>
            <ul>
                <li>
                </li>
                <li>English</li>
            </ul>
        </li><!--.headerRight-->
      </ul>
    </nav>
    <!-- </div> -->
  </div>
  </header>
</template>

<style>
#GlobalHeader {
  width: 100%;
  height: 14em; /*160px*/
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 255;
}

.gNaviWrapper {
  height: 100%;
}

.gNavi/*widthは1309px*/ {
  height: 100%;
  font-size: 1.1em;/*16px*/
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 20px 0 20px;
}

/* gNavi 以下の全ての文字色を白統一、リンクの下線を非表示*/
.gNavi * {
  color: #fff;
  text-decoration: none;
}

.gNavi >li {
  height: 100%;
  font-size: 1.1em;/*18px*/
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
 /* border: 1px solid #fff; */
}

.gNaviLogoGroup {
  height: 100%;
  padding: 5% 0 5% 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.gNaviLogoImg {
  display: block;
  max-height: 70%;
}

.gNaviLogoImg img {
  max-height: 100%;
}

.gNaviLogoDesc {
  max-height: 20%;
  margin: 0;
  font-size: 0.5em;
}

.gNavi > li:last-child {
  text-align: center;
  margin-top: 1.66666666em;/*30px*/

  display: flex;
}

.gNavi > li:last-child li:first-child {
    border: 1px solid #000 ;
    height: 3em;
}

.gNavi > li:last-child li:last-child {
  background: rgba(170,170,170,0.50);
  width: 100%;
  margin: 1.1em auto 0;
  padding: 0 0.5em;
  border-radius: 5px;
}

.pulldown ul {
    display: none;
}

</style>