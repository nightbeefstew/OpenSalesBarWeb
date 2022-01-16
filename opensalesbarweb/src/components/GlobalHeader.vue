<template>
  <header>
  <div id="GlobalHeader">
    <nav class="gNaviWrapper">
      <ul class="gNavi">
        <li>
          <div class="gNaviLogoGroup">
            <p class="gNaviLogoDesc">新橋駅から徒歩２分<br>気軽に立ち寄れるBAR</p>           
            <router-link class="gNaviLogoImg" to="/">
              <img src="~@/assets/images/logo.png">
            </router-link>
          </div>
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/News">News</router-link></li>
        <li class="pulldown">
          <label for="menugNavi">Menu</label>
          <input type="checkbox" id="menugNavi">
          <ul>
            <li><router-link to="/drink">Drink</router-link></li>
            <li><router-link to="/food">Food</router-link></li>
            <li><router-link to="/plan">Plan</router-link></li>
          </ul>
        </li>
        <li><router-link to="/Photo">Photo</router-link></li>
        <li class="pulldown">
          
          
          <label for="aboutUsgNavi">About</label>
          <input type="checkbox" id="aboutUsgNavi">
          <ul>
            <li><router-link to="/profile">Profile</router-link></li>
            <li><router-link to="/recruit">Recruit</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </li>
        <li><router-link to="/Access">Access</router-link></li>
        <li>
          <div class="gNaviRightGroup">
            <ul>
              <li>
              </li>
              <li>English</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
  </header>
</template>

<style scoped>
#GlobalHeader {
  width: 100%;
  height: 14em;
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
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 2% 0 2%;
  margin-block-start: 0;
  margin-block-end: 0;
  position: relative;
}


.gNavi >li {
  flex-shrink: 0;
  flex-grow: 0;
  height: 100%;
  font-size: 1.1em;/*18px*/
  display: flex;
  align-items: center;
  text-align: center;
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
  display: flex;
  justify-content: center;
  height: 80%;
  
}

.gNaviLogoDesc {
  max-height: 20%;
  margin: 0;
  font-size: 0.5em;
}

.gNaviRightGroup {
  height: 100%;
  padding: 5% 0 5% 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.gNaviRightGroup li:first-child {
    border: 1px solid #000 ;
    height: 3em;
}

.gNaviRightGroup li:last-child {
  background: rgba(170,170,170,0.50);
  width: 100%;
  margin: 1.1em auto 0;
  padding: 0 0.5em;
  border-radius: 5px;
}

.pulldown {
  display: flex;
  flex-direction: column;
  margin-top: 10em;
}

.pulldown ul {
  display: none;
}

.pulldown input {
  display: none;
}

.pulldown input:checked+ul {
  display: block;
}

</style>