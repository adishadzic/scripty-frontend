<template>
  <div class="fakultet_item">
    <button>
      <img :src="data.image" height="100" class="btn-image" />
      <br>
      <br>
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
.fakultet_item button {
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  padding: 60px;
  background-color: rgb(236, 236, 236);
  border: 0;
  cursor: pointer;
  width: 350px;
  height: 300px;
  margin-right: 25px;
  margin-top: 25px;
  border-radius: 5px;
}

.fakultet_item p{
  font-size: 15px;
  };

</style>