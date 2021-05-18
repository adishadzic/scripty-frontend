<template>
  <div class="sidebar">
    <div class="logo">
      <img class="menu__icon" src="../assets/burger-menu.svg" />
      <img
        src="../assets/logo.svg"
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
    img: require("../assets/home.svg"),
    title: "Home",
    route: "/home",
  },
  {
    img: require("../assets/bookmark.svg"),
    title: "Saved",
    route: "/saved",
  },
  {
    img: require("../assets/chat.svg"),
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

<style>
.logo {
  padding: 1%;
  padding-left: 40px;
  display: flex;
  align-items: center;
  font-size: 23px;
  font-family: "Roboto Mono", sans-serif;
  font-weight: 600;
  color: #f95555;
}

.menu__icon {
  margin-right: 20px;
  cursor: pointer;
}
.sidebar {
  background-color: #f2f2f2;
  height: 100%;
  top: 0;
  width: 15%;
  position: fixed;
  padding-top: 20px;
  overflow-x: hidden;
}

.sidebar hr {
  height: 1px;
  border: 0;
  background-color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sidebar__row {
  padding-top: 20px;
}
</style>
