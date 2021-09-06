<template>
  <div class="header">
    <div class="header__input">
      <input type="text" placeholder="Pretraži.." />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <div class="header__icons">
      <NewScriptForm />

      <img
        class="header__icon"
        src="../assets/header-icons/bell-icon.svg"
        style="height: 33px; margin-right: 2px"
      />

      <img class="header__icon" src="../assets/header-icons/avatar-icon.svg" />
      <Dropdown />
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import NewScriptForm from "./NewScriptForm.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
    NewScriptForm,
  },
};
</script>

<style>
@import "../assets/css/Header.css";
</style>
