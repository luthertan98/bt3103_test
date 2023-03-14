<template>
  <!-- <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div v-if="user.loggedIn">
              <div class="card-header">Welcome, {{ user.data.displayName }}</div>
              <div class="card-body">
                <div class="alert alert-success" role="alert">
                  You are logged in!
                </div>
              </div>
            </div>
            <div v-else class="alert alert-danger" role="alert">
              You are not logged in!
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="container">
    <h2>Fitness Made Easy</h2>
    <h5>An all-in-one platform that caters to you and your fitness trainer</h5>

    <CButton component="a" shape="rounded-pill" href="/signup">SIGN-UP</CButton>
    <CButton component="a" shape="rounded-pill" href="/signin">SIGN-IN</CButton>
  </div>

  <div class="container">
    <h2>ABOUT GYMMBUDDY</h2>
    <h5>
      Established in October 2010, GYMMBOXX started as a single gym situated at
      the top of a multi-storey car park in Singapore (Bedok Reservoir). Over
      the years, GYMMBOXX has made its mark as Singapore’s affordable premium
      gym brand, serving the residential neighbourhoods and heartlands. With a
      total of 8 gyms island-wide currently, GYMMBOXX will continue to expand
      and bring quality gym facilities and service to the rest of Singapore and
      beyond.
    </h5>
  </div>

  <div class="container">
    <h2>WHY GYMMBUDDY</h2>
    <div class="row">
      <div class="col">Tracking</div>
      <div class="col">Personalised Training</div>
      <div class="col">Simple to use</div>
    </div>
  </div>
</template>

<script>
import { CButton } from "@coreui/vue";

export default {
  name: "LandingPage",
  components: { CButton },
};
</script>

<style scoped>
.btn {
  background-color: rgb(237, 31, 36);
  margin: 4px;
}
</style>
