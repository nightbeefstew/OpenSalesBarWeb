<template>
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
    <nav>
      <ul class="gNavi">
        <li>
           <p>新橋駅から徒歩２分<br>気軽に立ち寄れるBAR</p>
        </li>
        <li>Home</li>
        <li><router-link to="/News">News</router-link></li>
        <li class="pulldown">
          Menu
          <ul>
            <li>Drink</li>
            <li>Food</li>
            <li>Plan</li>
          </ul>
        </li>
        <li>Photo</li>
        <li class="pulldown">
          About
          <ul>
            <li>Profile</li>
            <li>Recruit</li>
            <li>Contact</li>
          </ul>
        </li>
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
</template>

<style>
#GlobalHeader {
  width: 100%;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.gNavi/*widthは1309px*/ {
  font-size: 1em;/*16px*/
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background: rgba(0, 0, 0, .5);
  height: 10em; /*160px*/
	padding: 1.25em;/*20px*/
	text-align: center;
/*  box-sizing: border-box;*/
  margin: 0;
}

.gNavi >li {
  width: 20%;
  height: 30px;
  font-size: 1.1em;/*18px*/
  text-align: center;
  position: relative;
  margin-top: 3em;/*54px*/
 /* border: 1px solid #fff; */
}

.gNavi >li:first-child {
  height: 100%;
  background: url("~@/assets/images/logo.png") no-repeat center/cover;
  margin-top: 0.5em;
  text-align: center;
  border: 1px #000 solid;
  width: 12.5%;

}

.gNavi li:first-child p {
  font-size: 0.5em;/*8px*/
  margin-top: -2em;
}

.gNavi > li:last-child {
  text-align: center;
  margin-top: 1.66666666em;/*30px*/
  width: 20%; /*120px ～ 220.6011235955056px*/
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