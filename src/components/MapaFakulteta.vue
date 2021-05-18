<template>
  <div class="saved_item">
    <button>
      <img :src="fakultet.img" height="30" class="btn-image" />
      <p>{{ fakultet.fakultetName }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "MapaFakulteta",
  props: ["fakultet"],
};
</script>

<style>
.saved_item button {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  padding: 15px;
  background-color: rgb(236, 236, 236);
  border: 0;
  cursor: pointer;
  max-width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  margin-top: 15px;
}

.btn-image {
  margin-right: 10px;
}
</style>