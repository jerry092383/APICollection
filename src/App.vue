<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import GoTop from "@/components/GoTop";
export default {
  name: 'App',
  components: {
    Navbar,
    GoTop
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
.container {
  margin-top: 56px;
}

#app {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: left top;
  background-image: url("./assets/youbike.png");
  background-size: cover;
  // background-color: orange;
}
</style>
