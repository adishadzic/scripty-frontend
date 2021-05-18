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
.sidebarRow {
  padding: 20px 10px 20px 20px;
  display: flex;
  align-items: center;
  padding-left: 40px;
}
.sidebarRow a {
  text-decoration: none;
}
.sidebarRow__title {
  padding-left: 15px;
  font-weight: 400;
  font-size: 14px;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

.sidebarRow:hover {
  border-left: 10px solid #8a0000;
  background: lightcoral;
}

.sidebarRow:hover > .sidebarRow__title {
  font-weight: bold;
}
</style>