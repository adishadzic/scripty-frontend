<template>
  <div class="sidebarRow">
    <h3 class="sidebarRow__title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "SidebarRow",
  props: {
    title: String,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

.sidebarRow {
  padding: 20px 10px 20px 20px;
}

.sidebarRow__title {
  margin-left: 40px;
  font-weight: 300;
  font-size: 14px;
  color: white;
  font-family: "Roboto Mono", monospace;
}

.sidebarRow:hover {
  background-color: #424242;
  cursor: pointer;
}

.sidebarRow:hover > .sidebarRow__title {
  font-weight: bold;
}
</style>