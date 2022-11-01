<template>
  <div class="add">
    <HeaderPage />
    <h1>This is an add page</h1>
    <div class="info-box">
      <input
        type="text"
        v-model="resrautant.name"
        placeholder="Resrautant Name"
      />
      <input type="text" v-model="resrautant.Contact" placeholder="Contact" />
      <input type="text" v-model="resrautant.Address" placeholder="Address" />
      <button type="button" @click="addResto">add</button>
    </div>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import axios from "axios";
export default {
  name: "AddResto",
  data() {
    return {
      resrautant: {
        name: "",
        Contact: "",
        Address: "",
      },
    };
  },
  components: {
    HeaderPage,
  },
  methods: {
    async addResto() {
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.resrautant.name,
        contact: this.resrautant.Contact,
        Address: this.resrautant.Address,
      });
      if (result.status == 201) {
        this.$router.push("/");
      }
    },
  },
};
</script>
