<template>
  <div class="login">
    <div class="form-wrapper">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="field">
          <label>Email</label>
          <input type="text" v-model="email" />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="text" v-model="password" />
        </div>
        <div class="field">
          <p>
            Don't have an account?
            <router-link to="/register">Register</router-link>.
          </p>
        </div>
        <div class="btn-login">
          <button>Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Auth } from "@/services";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let success = await Auth.login(this.email, this.password);
        console.log("Rezultat prijave", success);

        if (success == true) {
          this.successNotification();
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        this.errorNotification();
      }
    },
    successNotification() {
      Vue.$toast.open({
        message: "Welcome back!",
        type: "success",
        position: "top",
        size: "xl",
        duration: 5000,
      });
    },
    errorNotification() {
      Vue.$toast.open({
        message: "Something went wrong",
        type: "error",
        position: "top",
        size: "xl",
        duration: 5000,
      });
    },
  },
};
</script>

<style>
@import "../../assets/css/Login.css";
</style>