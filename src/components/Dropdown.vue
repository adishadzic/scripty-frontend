<template>
  <div
    class="menu-item"
    @click="isOpen = !isOpen"
    v-on-clickaway="hideDropdown"
  >
    <img
      class="header__icon-last"
      src="../assets/header-icons/triangle-icon.svg"
    />

    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div class="menu-item">
          <a href="#">My profile</a>
        </div>
        <div class="menu-item">
          <a @click="logout">Logout</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { Auth } from "@/services";
export default {
  name: "dropdown",
  props: ["items"],
  data() {
    return {
      isOpen: false,
    };
  },
  mixins: [clickaway],
  methods: {
    hideDropdown() {
      this.isOpen = false;
    },
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>

<style>
@import "../assets/css/Dropdown.css";
</style>
