<template>
  <HeaderPage />
  <div class="Home">
    <div class="container">
      <h1 style="color: #8a8a8a; margin-bottom: 85px">
        Hello <span style="color: #c9edf3">{{ UserName.name }}</span> in home
        page
      </h1>
      <table class="table table-bordered">
        <tr class="table-info">
          <td>id</td>
          <td>name</td>
          <td>contact</td>
          <td>Address</td>
          <td>Action</td>
        </tr>
        <tr v-for="item in restoData" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.Address }}</td>
          <td>
            <RouterLink :to="'Update/' + item.id"
              ><button
                type="button"
                class="btn btn-info"
                style="margin-right: 17px"
              >
                Update
              </button>
            </RouterLink>
            <button
              type="button"
              class="btn btn-danger"
              @click="testt(item.id)"
            >
              delete
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import HeaderPage from "@/components/HeaderPage.vue";
import axios from "axios";
export default {
  name: "Home-viwe",
  data() {
    return {
      UserName: {},
      restoData: {},
    };
  },
  components: {
    HeaderPage,
  },
  async mounted() {
    let result = await axios.get("http://localhost:3000/restaurant/");
    this.restoData = result.data;

    let User = localStorage.getItem("user-info");
    this.UserName = JSON.parse(User);
    if (!User) {
      this.$router.push("/SignView");
    }
  },
  methods: {
    testt(i) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
            this.del(i);
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },

    async del(i) {
      await axios.delete("http://localhost:3000/restaurant/" + i);
      window.location.reload();
    },
  },
};
</script>
