<template>
  <div id="home">
    <main class="contents">
      <div class="mainVisual"></div>

      <HomeContentBox class="newsTop">
        <h2>News</h2>
        <ul>
          <li>
            <dl>
              <dt>30. Jun. 2021</dt>
              <dd>緊急事態宣言中の営業について</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>29. May. 2021</dt>
              <dd>緊急事態宣言中の営業について</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>28. Apr. 2021</dt>
              <dd>緊急事態宣言中の営業について</dd>
            </dl>
          </li>
        </ul>
        <div class="showMore">
          <a href="news.html"><p>Show more&nbsp;&gt;&gt;</p></a>
        </div>
      </HomeContentBox>

      <HomeContentBox class="menuTop"><h2>Menu</h2></HomeContentBox>
      <HomeContentBox class="planTop"><h2>Plan</h2></HomeContentBox>
      <HomeContentBox class="photoTop"><h2>Photo</h2></HomeContentBox>

      <HomeContentBox class="aboutUsTop">
        <h2>About us</h2>
        <section class="aboutUsTopInner">
          <ul>
            <li>
              <dl>
                <dt>Store Name</dt>
                <dd>Open Sales Bar</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Address</dt>
                <dd>東京都港区新橋3-18-3 三青ビル2階</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Tel</dt>
                <dd>03-6435-6977</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Open</dt>
                <dd>
                  <dl>
                    <dt>月・火・水・木</dt>
                    <dd>18:00～02:00</dd>
                    <dd>※緊急事態宣言中も、通常営業になります。</dd>
                    <dd>金・土・祝前日</dd>
                    <dd>18:00～04:00</dd>
                    <dd>※緊急事態宣言中も、通常営業になります。</dd>
                  </dl>
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Close</dt>
                <dd>日曜日</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Seats</dt>
                <dd>20（カウンター8席/ソファー席2～9名様用/テーブル席2～6名様用）</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Others</dt>
                <dd>
                  <dl>
                    <dt>半個室あり</dt>
                    <dd>カップルシート＆2名個室</dd>
                    <dd>飲み放題プランあり</dd>
                  </dl>
                </dd>
              </dl>
            </li>
          </ul>
        
          <div class="mapTop">
            <img src="images/map.JPG" alt="地図">
            <div class="mapTopInner">
            <a href="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E6%96%B0%E6%A9%8B3-18-3+%E4%B8%89%E9%9D%92%E3%83%93%E3%83%AB2%E9%9A%8E+%E4%B8%89%E9%9D%92%E3%83%93%E3%83%AB2F&um=1&ie=UTF-8&sa=X&ved=2ahUKEwivh_6o6OjxAhVoyIsBHcciAxkQ_AUoAXoECAEQAw" target="_blank"><p>Google Mapで見る</p></a>
            </div>
          </div>
          
        </section><!--.aboutUsInner-->
      </HomeContentBox>
    
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContentBox from '@/components/HomeContentBox.vue'

export default {
  name: 'Home',
  components: {
    HomeContentBox,
  }
}
</script>

<style scoped>
  #inHomeContentBox {
    color: red;
  }

  .mainVisual {
    display: block;
    position: relative;
    height: 100vh;
    margin: -180px 0px 10em -20px;
    width: 100vw;
    background: url("~@/assets/images/top1.jpg") no-repeat center/cover;
  }

</style>