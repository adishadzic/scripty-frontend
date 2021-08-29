<template>
  <div class="my__profile">
    <h1>Moj profil</h1>

    <div class="profileCard">
      <div class="profileCardElements">
        <img class="profilePicture" src="../assets/user.png" />
        <div class="email">{{ auth.userEmail }}</div>
        <br />
        <label>Old Password</label>
        <input type="text" value="" />
        <label>New Password</label>
        <input type="text" value="" /><br />

        <button>Update password</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name: "MyProfile",
  data() {
    return {
      auth: Auth.state,
    };
  },
};
</script>

<style>
@import "../assets/css/MyProfile.css";
</style>