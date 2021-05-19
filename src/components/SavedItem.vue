<template>
  <div class="saved_item">
    <button>
      <img :src="item.img" height="30" class="btn-image" />
      <p>{{ item.folderName }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "SavedItem",
  props: ["item"],
};
</script>

<style>
@import "../assets/css/SavedItem.css";
</style>