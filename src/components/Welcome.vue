<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Geared for Good Cottages</a>
    </nav>
    <bgimg></bgimg>
    <div class="center-div">
      <br />
      <div class="container">
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <h1>Welcome Boopathy!</h1>
          <hr />
          <div v-show="head">
            <h4>Check in process completed!</h4>
          </div>
          <div v-show="door">
            <h4>Slot booked for breakfast</h4>
          </div>
          <div v-show="loading" class="row justify-content-md-center">
            <div class="col-md-auto">
              <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Processing...
              </button>
            </div>
          </div>
          <br />
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch2" unchecked />
            <label class="custom-control-label" for="customSwitch2">Lights</label>
          </div>
          <br />
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch3" unchecked />
            <label class="custom-control-label" for="customSwitch3">Coffee Machine</label>
          </div>
          <br />
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch4" checked />
            <label class="custom-control-label" for="customSwitch4">Thermostat</label>
          </div>
          <br />
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitch5" checked />
            <label class="custom-control-label" for="customSwitch5">TV</label>
          </div>
          <br />
          <br />
          <hr />

          <b-modal id="modal-ha" size="xl" title="Hotel Amenities">
            <div class="custom-control custom-switch">
              <div class="figure">
                <img
                  src="../assets/amendities.png"
                  width="430"
                  title="modal"
                />
                <br><br><br><br><br>
                <br><br><br><br><br>
                <br><br><br><br><br>
              </div>
            </div>
          </b-modal>

          <b-modal id="modal-np" size="xxl" title="Near By Places">
            <div class="custom-control custom-switch">
              <div class="figure">
                <img
                  src="../assets/nearby.png"
                  width="430"
                  height="800"
                  title="modal"
                />
              </div>
            </div>
          </b-modal>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <button v-on:click="head = !head; loading = true" class="btn btn-primary mb-2">Proceed</button>
      <button v-on:click="door = !door; loading = false" class="btn btn-primary mb-2">door</button>
      <b-button v-b-modal.modal-ha variant="primary">Hotel Amenities</b-button>
      <b-button v-b-modal.modal-np variant="primary">Near By Places</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    proceed() {
      setTimeout(function () {
        head: false;
      }, 3000);
    },
    proceed1() {
      this.$router.push("/amendities");
    },
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      head: true,
      loading: false,
      door: false,
    };
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
