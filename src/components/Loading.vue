<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Geared for Good Cottages</a>
    </nav>
    <div>
      <br />
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
          </br>
            <button class="btn btn-primary" type="button" disabled>
              <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              Processing...
            </button>
            <br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br>
            <br>
            <br>
            <br>
             <br>
            <br>
            <br>
             <br>
            <br>
            <br>
            <button @click="proceed" class="btn btn-primary mb-2">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.welcome();
  },
  methods: {
    welcome() {
      setTimeout(function () {
        this.$router.push("/loading");
      }, 3000);
    },
    proceed() {
         this.$router.push("/welcome");
    }
  },
};
</script>

<style scoped>
.center-div {
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
}
</style>