<template>
  <div class="header">
    <div class="header__input">
      <input type="text" placeholder="Pretraži.." />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <div class="header__icons">
      <img class="header__icon" src="../assets/header-icons/plus-icon.svg" />

      <img
        class="header__icon"
        src="../assets/header-icons/bell-icon.svg"
        style="height: 33px; margin-right: 2px"
      />
      <!-- <span class="badge">3</span> -->
      <img class="header__icon" src="../assets/header-icons/avatar-icon.svg" />
      <Dropdown />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "Header",
  components: {
    Dropdown,
  },
};
</script>

<style>
@import "../assets/css/Header.css";
</style>
