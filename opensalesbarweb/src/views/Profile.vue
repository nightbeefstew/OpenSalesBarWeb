<template>
  <div id="profile">
    <h1>Profile</h1>
    <main>
      <div class="container">
        <div class="profimg">
          <p>Taro Tanaka</p>
        </div>
        <table>
          <tr>
            <td>199X</td>
            <td>XX県生まれ</td>
          </tr>
          <tr>
            <td rowspan="4">201X</td>
            <td>高校卒業後、大学進学のため上京</td>
          </tr>
          <tr>
            <td>XX大学でXXを専攻</td>
          </tr>
          <tr>
            <td>学業の傍ら、「XX」でバーテンダーとしての修業を積む</td>
          </tr>
          <tr>
            <td>在学中に「マイスターバーテンダー」の資格を取得</td>
          </tr>
          <tr>
            <td>201X</td>
            <td>大学卒業、XXに就職</td>
          </tr>
          <tr>
            <td>201X</td>
            <td>XXを退職、「XX」やXXで修業を積む</td>
          </tr>
          <tr>
            <td>202X</td>
            <td>OPEN SALES BAR開店</td>
          </tr>
        </table>
      </div><!--container-->
   </main>
  </div>
</template>


<script>

</script>

<style scoped>

#profile {
  margin: 0 auto;
  padding-top: 40px;
}

#profile h1 {
  text-align: center;
}

#profile .container {
  display: flex;
  justify-content: space-between;
}

.profimg {
  width: 300px;
  height: 300px;
  background: url("~@/assets/images/noimage.jpg") center/cover;
  margin-left: 5em;
}

#profile p {
  font-size: 20px;
  padding-top: 300px;
  text-align: center;
}

#profile table {
  padding: 20px;
  text-align: left;
  width: 50%;
}

#profile table td {
  padding: 20px;
}

@media screen and (max-width: 768px) {
  
  #profile .container {
    flex-direction: column;
  }
  
  .profimg {
    margin: 0 auto;
  }

  #profile table {
    margin-top: 5em;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}

</style>