<template>
  <div class="my-1 py-12 px-sm-5">
    <v-container fluid>
      <v-row>
        <v-col sm="12" md="6" cols="12">
          <div class="back-ground1">
            <article class="contain">
              <h3 class="text-capitalize display-1 mb-5">
                {{ $t("leasing") }}
              </h3>
              <p class="mb-4">
                {{
                  $t(
                    "Connect to submit your leasing interest in our shopping malls"
                  )
                }}.
              </p>
              <a href="" style="color: #ffffff"> {{ $t("See more") }} </a>
            </article>
          </div>
        </v-col>
        <v-col sm="12" md="6" cols="12">
          <div class="back-ground2">
            <article class="contain">
              <h3 class="text-capitalize display-1 mb-5">
                {{ $t("advertising") }}
              </h3>
              <p class="mb-4">
                {{
                  $t(
                    "Mall of Tanta offers your business unlimited media options to advertise and promote your brand"
                  )
                }}
              </p>
              <a href="" style="color: #ffffff"> {{ $t("See more") }} </a>
            </article>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.back-ground2 {
  background-image: url("../../../assets/photo-of-setting-landing-page-advertising_1626939097.jpg");
  border-radius: 20px;
  height: 250px;
  background-size: cover;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: relative;
}
.back-ground1 {
  background-image: url("../../../assets/photo-of-setting-landing-page-leasing_2129580771.jpg");
  border-radius: 20px;
  height: 250px;
  background-size: cover;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: relative;
}
.contain {
  margin-top: 40px;
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
