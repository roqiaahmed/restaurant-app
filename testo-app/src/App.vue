<template>
  <nav>
    <router-link to="/"></router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  font-size: 45px;
  margin-top: 0;
  font-weight: bolder;
}

.info-box {
  display: inline-block;

  input {
    display: block;
    width: 350px;
    padding: 6px;
    margin-top: 30px;
    border: #c9edf3 1px solid;
    color: #757373;
    padding-left: 20px;
  }

  input:focus {
    outline: none;
    box-shadow: #ccf0fba1 2px 4px;
  }

  button {
    background-color: #a0dde6;
    width: 350px;
    border: none;
    padding: 6px;
    font-weight: bolder;
    margin-top: 30px;
    color: #fff;
  }
}
</style>
