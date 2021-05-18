<template>
  <div class="fakultet_item">
    <button>
      <img :src="data.image" height="30" class="btn-image" />
      <p>{{ data.fakultetName }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "MapaFakulteta",
  props: ["data"],
};
</script>

<style>
.fakultet_item button {
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