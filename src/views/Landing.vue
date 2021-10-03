<template>
  <div class="landing">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-12 col-md-6 col-lg-8 text-center text-sm-left">
          <img
            src="/static/logo4.png"
            class="mt-3 mt-sm-0 img-fluid pr-md-5 w-50 mb-4"
            alt="StayWild-SaveWild Logo Transparent"
          />
          <p
            class="font-lg font-weight-bold"
          >StayWild-SaveWild is a gamified crowd sourcing platform for collecting data sets related to the illegal sale of endangered animals on the internet. This data will be used to track and monitor animal markets as well as train AI.Together WE can make a difference!</p>
          <span class="text-primary">Start contributing by registering today!</span>
        </div>
        <div v-if="!$store.state.email" class="col-12 col-md-6 col-lg-4">
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <tab-pane>
                <span slot="title">Register</span>
                <p class="description">
                  <Register />
                </p>
              </tab-pane>
              <tab-pane>
                <span slot="title">Login</span>
                <p class="description">
                  <Login />
                </p>
              </tab-pane>
            </card>
          </tabs>
        </div>
      </div>
      <div>
        <h2 class="text-center text-primary">Recent Contributions</h2>
        <hr class="my-3" />
        <Entries :entries="$store.getters.entries" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
import Entries from "@/components/Entries";

export default {
  components: {
    Login,
    Register,
    Entries
  },

  data: () => ({
    showLogin: false
  })
};
</script>

<style>
</style>