<template>
  <div
    class="menu-item"
    @click="isOpen = !isOpen"
    v-on-clickaway="hideDropdown"
  >
    <img
      class="header__icon-last"
      src="../assets/header-icons/triangle-icon.svg"
    />

    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "dropdown",
  props: ["items"],
  data() {
    return {
      isOpen: false,
    };
  },
  mixins: [clickaway],
  methods: {
    hideDropdown() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
@import "../assets/css/Dropdown.css";
</style>
