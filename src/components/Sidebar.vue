<template>
  <div class="sidebar">
    <div class="logo">
      <img class="menu__icon" src="../assets/sidebar-icons/burger-menu.svg" />
      <img
        src="../assets//sidebar-icons/logo.svg"
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

    <hr />
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
    img: require("../assets/sidebar-icons/bookmark.svg"),
    title: "Saved",
    route: "/saved",
  },
  {
    img: require("../assets/sidebar-icons/chat.svg"),
    title: "Chat",
    route: "/chat",
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
