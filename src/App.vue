<template>
  <div class="app">
    <Header />
    <Navigation />
  </div>
</template>

<style>
* {
  margin: 0;
}
.app {
  background-color: #181818;
}
</style>

<script>
import Header from "./components/Header";
import Navigation from "./components/Navigation";
export default {
  components: { Header, Navigation },
};
</script>
