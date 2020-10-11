<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Geared for Good Cottages</a>
    </nav>
    <div>
      <br />
      <div class="container">
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <h3>Welcome Guest!</h3>
          <br />
          <h6>
            <strong>Nearest Covid Testing Site:</strong> 100 Viking Way
            Cincinnati, OH, 45246-1139
            Tel: 513-864-1545
            Distance: ~0.63 miles
          </h6>
          <h6>Do you have any of the following?</h6>
          <ul>
            <li>Fever or chills</li>
            <li>Cough</li>
            <li>Shortness of breath or difficulty breathing</li>
            <li>Fatigue</li>
            <li>Muscle or body aches</li>
            <li>Headache</li>
            <li>New loss of taste or smell</li>
            <li>Sore throat</li>
            <li>Congestion or runny nose</li>
            <li>Nausea or vomiting</li>
            <li>Diarrhea</li>
          </ul>
          <h6>Are you ill, or caring for someone who is ill?</h6>
          <h6>In the two weeks before you felt sick, did you:</h6>
          <ul>
            <li>Have contact with someone diagnosed with COVID-19?</li>
            <li>Live in or visit a place where COVID-19 is spreading?</li>
          </ul>
          <br />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
          <button @click="welcome" class="btn btn-primary mb-2">Check-In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    loading: false,
  },
  methods: {
    welcome() {
      this.$router.push("/loading");
    },
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
