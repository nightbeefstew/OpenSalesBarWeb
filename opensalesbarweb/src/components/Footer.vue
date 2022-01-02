<template>
  <footer>
    <div id="Footer">
      <div class="footerDesc">
          <p>Open Sales Bar オープンセールスバー新橋（Bar）</p>
          <p>東京都東京都港区新橋3-18-3 三青ビル2階</p>
          <p>TEL: 03-6435-6977</p>
          <p><small>Open Sales Bar&copy;All rights reserved.</small></p>
      </div>
    </div>
  </footer>
</template>




<style scoped>

#Footer {
  display: flex;
  flex-flow: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
  background: url("~@/assets/images/logo.png") no-repeat top -3em left 25%;
}

.footerDesc {
  text-align: left;
  width: 50%;
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  
  #Footer {
    background-position: top 50% left 0%;
    background-size: 100px;
    padding: 0 0 0 10em;
  }
  
  .footerDesc {
    width: 100%;
  }
}

</style>