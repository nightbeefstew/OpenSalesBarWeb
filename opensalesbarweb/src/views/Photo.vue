<template>
  <div id="photo">
    <h1>Photo</h1>
      <main id="contents">  
        <figure>
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
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
              <div class="imgnaka">
                <figcaption></figcaption>
              </div>
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
  </div><!--#photo-->
</template>


<script>

</script>

<style scoped>

#photo {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
}

#photo main {
  padding-top: 0;
}

#photo figure {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}

#photo figure .imglist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

#photo figure .imglist div {
  width: 400px;
  height: 300px;
  margin: 50px 5px;
  background: url("~@/assets/images/azuki.jpg") no-repeat; 
}

#photo figure .imglist div figcaption {
  padding-top: 300px;  
}

#photo figure .imglist .imgnaka {
  background: url("~@/assets/images/azuki.jpg") no-repeat top left/cover;
}

@media screen and (max-width: 768px) {
  
  #photo {
    padding-top: 100px;
  }
  
  #photo figure {
    width: 100%;
  }
}

</style>
