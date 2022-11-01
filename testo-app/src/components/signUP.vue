<template>
  <div class="container">
    <img src="../assets/resto.png" alt="" style="width: 140px" />
    <h1 class="logo">Sign Up</h1>
    <div class="info-box">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="email" v-model="email" placeholder="Enter Email" />
      <input type="password" v-model="password" placeholder="Enter Password" />
      <button type="button" @click="signUp">Sign Up</button>
    </div>
    <p>
      <RouterLink to="/signIn">sign In</RouterLink>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push("/");
      }
    },
  },
  mounted() {
    let User = localStorage.getItem("user-info");
    if (User) {
      this.$router.push("/");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
