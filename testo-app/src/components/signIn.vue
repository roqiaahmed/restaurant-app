<template>
  <div class="container">
    <img src="../assets/resto.png" alt="" style="width: 140px" />
    <h1 class="logo">Sign In</h1>
    <div class="info-box">
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button type="button" @click="signIn">Sign In</button>
      <p>
        <RouterLink to="/SignView">sign Up</RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signIn",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push("/");
        console.log("pass");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/");
    }
  },
};
</script>
