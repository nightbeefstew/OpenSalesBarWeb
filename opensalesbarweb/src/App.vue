<template>
  <div>
    <global-header/>
    <div class="view">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import GlobalHeader from'@/components/GlobalHeader'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    GlobalHeader, Footer,
  },

  data() {
    return {
      isAdmin: false

    }
  },

  beforeCreate() {
    // ログイン判定
    console.log('beforeCreate');
    
    this.$router.beforeEach((to, from, next) => {
      
      // 管理者権限が必要なページ
      const pagesRequireAuth = ['/admin', '/admin2'];

      if(to.matched.some(p => pagesRequireAuth.indexOf(p.path) !== -1) && !this.$store.state.isAdmin) {
        console.log(this.$store.state.isAdmin);
        next({ path: '/' });
      } else {
        next();
      }
    })

  },

  mounted() {

  }
}
</script>


<style>


@charset "utf-8";
/* CSS Document */

#app {
  width: 100%; /*1349px*/
	color: #fff;
  font-size: 100%;
  background-color: #000;
  font-family: "メイリオ", "小塚ゴシック Pr6N B", sans-serif;
}

a {
	color: inherit;
  text-decoration:none;
}

ul {
    list-style: none;
}

.view {
  padding: 14em 20px 20px 20px;
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


