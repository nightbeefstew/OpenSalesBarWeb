<template>
  <section id="homeContentBox">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'HomeContentBox',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeContentBox {
  border: solid;

}

.title {
  font-size: 2em;
}

</style>
