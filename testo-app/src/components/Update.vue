<template>
  <div class="Update">
    <h1>This is an Update page</h1>

    <div class="info-box">
      <input
        type="text"
        v-model="restaurant.name"
        placeholder="Resrautant Name"
      />
      <input type="text" v-model="restaurant.contact" placeholder="Contact" />
      <input type="text" v-model="restaurant.Address" placeholder="Address" />
      <button type="button" @click="updateResto">change</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UpdateResto",
  data() {
    return {
      restaurant: {
        name: "",
        contact: "",
        Address: "",
      },
    };
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },
  methods: {
    async updateResto() {
      let result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          contact: this.restaurant.contact,
          Address: this.restaurant.Address,
        }
      );
      if (result.status == 200) {
        this.$router.push("/");
      }
    },
  },
};
</script>
