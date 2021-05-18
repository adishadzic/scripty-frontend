<template>
  <div class="app">
    <Header />
    <Sidebar />

    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}
</style>

<script>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header";
export default {
  components: { Header, Sidebar },
};
</script>
