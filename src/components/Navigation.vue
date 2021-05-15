<template>
  <div class="sidebar">
    <SidebarRow title="Home" />
    <SidebarRow title="Spremljeno" />
    <SidebarRow title="Poruke" />
  </div>
</template>

<style>
.sidebar {
  background-color: #202020;
  width: 15%;
  height: 100vh;
}
</style>

<script>
import SidebarRow from "./SidebarRow";

export default {
  name: "Navigation",
  components: {
    SidebarRow,
  },
};
</script>
