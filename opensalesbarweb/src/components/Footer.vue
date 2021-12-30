<template>
  <div id="Footer">
    <footer class="footer">
        <p>Open Sales Bar オープンセールスバー新橋（Bar）</p>
        <p>東京都東京都港区新橋3-18-3 三青ビル2階</p>
        <p>TEL 0364356977</p>
        <p><small>Open Sales Bar&copy;All rights are reserved.</small></p>
    </footer>
  </div>
</template>




<style>

.footer {
  display: flex;
  flex-flow: column;
  width: 50%;
  padding-left: 10em;
  margin: 0 auto;
  background: url("~@/assets/images/logo.png") no-repeat top 0 left ;
  text-align: center;
}

@media screen and (max-width: 768px) {
  
  .footer {
    width: 80%;
    background-position: top 50% left 50%;
    background-size: contain;
    padding: 10em 0 0 0;
    text-align: center;
  }
  
}

</style>