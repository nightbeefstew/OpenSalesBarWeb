<template>
  <div>
    <global-header/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>


@charset "utf-8";
/* CSS Document */
#app {
	color: inherit;
  width: 100%; /*1349px*/
	color: #fff;
  font-size: 100%;
  background: #000;
  font-family: "メイリオ", "小塚ゴシック Pr6N B", sans-serif;
}

ul {
    list-style: none;
}

@media screen and (max-width: 768px) {
  html, body {
    font-size: 0.9em; /*14.4px*/
  }
}

img {
  max-width: 100%;
}

h1 {
  font-size: 2em;
}

</style>

<script>
  import GlobalHeader from'./components/GlobalHeader'
  export default { 
      components: {
      GlobalHeader,
    }
  }
</script>
