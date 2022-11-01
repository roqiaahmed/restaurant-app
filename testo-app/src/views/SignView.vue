<template>
  <div class="home">
    <signUp />
  </div>
</template>

<script>
// @ is an alias to /src
import signUp from "@/components/signUP.vue";

export default {
  name: "HomeView",
  components: {
    signUp,
  },
};
</script>
