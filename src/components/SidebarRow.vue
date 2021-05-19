<template>
  <div class="sidebarRow">
    <img :src="sidebar.img" height="25" />
    <a :href="sidebar.route"
      ><h3 class="sidebarRow__title">{{ sidebar.title }}</h3></a
    >
  </div>
</template>

<script>
export default {
  name: "SidebarRow",
  props: ["sidebar"],
};
</script>

<style>
@import "../assets/css/SidebarRow.css";
</style>