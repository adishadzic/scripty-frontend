<template>
  <div class="sidebar">
    <div class="logo">
      <router-link to="/">
        <img
          class="menu__icon"
          src="../assets/sidebar-icons/burger-menu.svg"
          style="margin-top: 8px"
      /></router-link>
      <img
        src="../assets/sidebar-icons/logo.svg"
        height="35vh"
        style="margin-right: 10px"
      />Scripty
    </div>
    <div class="sidebar__row">
      <SidebarRow
        :key="sidebarRow.id"
        v-for="sidebarRow in sidebarData"
        :sidebar="sidebarRow"
      />
    </div>
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow";

let sidebarData = [];

sidebarData = [
  {
    img: require("../assets/sidebar-icons/home.svg"),
    title: "Fakulteti",
    route: "/fakulteti",
  },
  {
    img: require("../assets/sidebar-icons/scripts.svg"),
    title: "Scripts",
    route: "/scripts",
  },
  {
    img: require("../assets/sidebar-icons/bookmark.svg"),
    title: "Saved",
    route: "/saved",
  },
];

export default {
  name: "Sidebar",
  components: {
    SidebarRow,
  },
  data() {
    return {
      sidebarData,
    };
  },
};
</script>

<style scoped>
@import "../assets/css/Sidebar.css";
</style>
