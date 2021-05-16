<template>
  <div class="sidebar">
    <SidebarRow title="Home" />
    <SidebarRow title="Spremljeno" />
    <SidebarRow title="Poruke" />
    <hr />
  </div>
</template>

<style>
.sidebar {
  background-color: #202020;
  height: 100vh;
  width: 15%;
}

.sidebar hr {
  height: 1px;
  border: 0;
  background-color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
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
