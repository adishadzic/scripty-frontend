<template>
  <div class="fakultet_item">
    <button>
      <img :src="data.image" height="100" class="btn-image" />
      <br />
      <br />
      <h3>{{ data.fakultetName }}</h3>
      <p>{{ data.uni }}</p>
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
@import "../assets/css/MapaFakulteta.css";
</style>