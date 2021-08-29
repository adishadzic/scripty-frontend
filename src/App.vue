<template>
  <div v-if="registerPage" class="app">
    <Register />
  </div>

  <div v-else-if="loginPage">
    <Login />
  </div>

  <div v-else class="app">
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
import Register from "./views/Auth/Register.vue";
import Login from "./views/Auth/Login.vue";

export default {
  components: { Header, Sidebar, Register, Login },
  data() {
    return {
      register: true,
    };
  },
  computed: {
    registerPage() {
      if (this.$route.path == "/register") {
        return true;
      } else {
        return false;
      }
    },
    loginPage() {
      if (this.$route.path == "/login") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
