<template>
  <div class="register">
    <div class="form-wrapper">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="field">
          <label>Name</label>
          <input type="text" v-model="name" />
          <p v-if="!$v.name.required" style="color: red">Name is required</p>
          <p v-if="!$v.name.minLength" style="color: red">
            Name needs to be at least 3 characters long
          </p>
        </div>
        <div class="field">
          <label>Email</label>
          <input type="text" v-model="email" />
          <p v-if="!$v.email.required" style="color: red">Email is required</p>
          <p v-if="email && !$v.email.email" style="color: red">
            Enter valid email
          </p>
        </div>
        <div class="field">
          <label>Password</label>
          <input type="text" v-model="password" />
          <p v-if="!$v.password.required" style="color: red">
            Password is required
          </p>
          <p v-if="!$v.password.minLength" style="color: red">
            Password needs to be at least 6 characters long
          </p>
        </div>
        <div class="field">
          <label>Password repeat</label>
          <input type="text" v-model="repeatPassword" />
          <p v-if="!$v.repeatPassword.required" style="color: red">
            Repeat the password
          </p>
          <p
            v-if="repeatPassword && !$v.repeatPassword.sameAsPassword"
            style="color: red"
          >
            Passwords don't match
          </p>
        </div>
        <div class="btn-register">
          <button>Register</button>
        </div>
      </form>
      {{ error }}
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Auth } from "@/services";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",

      error: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(255),
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    async register() {
      try {
        let newUser = await Auth.register(this.name, this.email, this.password);
        console.log(newUser);
        this.successNotification();
        this.$router.push("/login");
      } catch (err) {
        console.log(err);
        this.errorNotification();
      }
    },
    successNotification() {
      Vue.$toast.open({
        message: "Welcome",
        type: "success",
        position: "top",
        buttonSize: "xl",
        duration: 5000,
      });
    },
    errorNotification() {
      Vue.$toast.open({
        message:
          "Either you didn't fill out the entire form or the user already exists",
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
@import "../../assets/css/Register.css";
</style>