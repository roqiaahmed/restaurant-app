<template>
  <div class="header">
    <div class="container">
      <div class="logo"><img src="../assets/logo.png" alt="" /></div>
      <div class="menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="Add">Add Restaurant</RouterLink>
        <a href="#" @click="clear">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerPage",
  methods: {
    clear() {
      let User = localStorage.getItem("user-info");
      if (User) {
        localStorage.clear();
        this.$router.push("/SignIn");
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  margin-bottom: 30px;
  background-color: #c9edf3;
  padding: 15px;
  height: 87px;

  .logo img {
    width: 65px;
    float: left;
  }
  .menu {
    float: right;
    padding-top: 15px;
    font-size: 19px;

    a {
      text-decoration: none;
      margin-left: 20px;
      color: #fff;
      font-weight: bolder;
      transition: 0.5s;
    }
    :hover {
      background: #b0e2ea;
      padding: 29.5px;
    }
  }
}
</style>
