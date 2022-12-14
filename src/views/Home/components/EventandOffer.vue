<template>
  <div class="my-1 py-12 px-sm-5">
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="6" xs="12">
          <div class="back-ground2">
            <article class="contain">
              <h3 class="text-capitalize display-1 mb-5">
                {{ $t("cinema") }}
              </h3>
              <p class="mb-4">
                Connect to submit your leasing interest in our shopping malls.
              </p>
              <a href="" style="color: #ffffff"> See more </a>
            </article>
          </div>
        </v-col>
        <v-col sm="12" md="6" cols="12">
          <div class="back-ground1">
            <article class="contain">
              <h3 class="text-capitalize display-1 mb-5">Event &amp; offers</h3>
              <p class="mb-4">
                Mall of Tanta offers your business unlimited media options to
                advertise and promote your brand
              </p>
              <a href="" style="color: #ffffff"> See more </a>
            </article>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.back-ground2 {
  background-image: url("../../../assets/photo-of-setting-landing-page-cinema_768964838.jpg");
  border-radius: 20px;
  height: 450px;
  background-size: cover;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: relative;
}
.back-ground1 {
  background-image: url("../../../assets/photo-of-setting-landing-page-events_913791069.jpg");
  border-radius: 20px;
  height: 450px;
  background-size: cover;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: relative;
}
.contain {
  position: absolute;
  top: 30%;
  color: white;
}
.back-ground1:hover::after,
.back-ground2:hover::after {
  content: "";
  background-image: linear-gradient(
    0deg,
    rgba(86, 45, 95, 0.85882),
    rgba(86, 45, 95, 0)
  );
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
