<template>
  <div class="responsive">
    <v-container fluid>
      <v-row class="media">
        <h2 class="heading-tow" :class="$vuetify.rtl == true ? 'space' : ''">
          {{ $t("What's Happening") }}
        </h2>
      </v-row>
      <v-row justify="center" class="responsive">
        <div style="width: 444px; text-align: center; margin-bottom: 20px">
          <v-carousel
            :continuous="false"
            cycle
            :show-arrows="false"
            hide-delimiters
            height="80"
          >
            <v-carousel-item v-for="(title, i) in titles" :key="i" class="img">
              <h2>{{ $t(title) }}</h2>
              <p>{{ $t(paraghraph[i]) }}</p>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-row>
      <div
        elevation="24"
        class="mx-auto mb-7 round responsive"
        height="320"
        style="border-radius: 20px"
      >
        <v-carousel
          :continuous="false"
          cycle
          :show-arrows="false"
          hide-delimiters
          height="320"
          style="border-radius: 20px"
          v-model="onboarding"
          reverse-transition="fade-transition"
        >
          <div class="overlay"></div>
          <v-carousel-item
            v-for="n in 3"
            :key="n"
            class="img"
            :src="slides[n - 1]"
          >
            <!-- <v-img :src="slides[n - 1]" width="444" height="300" /> -->
          </v-carousel-item>
        </v-carousel>
        <v-card flat tile class="mt-2 responsive">
          <v-card-actions class="justify-center">
            <v-item-group class="text-center" mandatory v-model="onboarding">
              <v-item v-for="n in 3" :key="n" v-slot="{ active, toggle }">
                <v-btn :input-value="active" icon @click="toggle" x-large>
                  <v-icon large>mdi-minus</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
          </v-card-actions>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paraghraph: [
        "Mazaya Now Open!",
        "Your summer just got a lot more exciting at MOT!",
        "you can now enjoy your shopping experience",
      ],
      onboarding: 0,
      titles: ["Mazaya", "MOT Summer Sale", "WIFI"],
      slides: [
        {
          src: require("../../../assets/photo_3.jpg"),
        },
        {
          src: require("../../../assets/photo_5.png"),
        },
        {
          src: require("../../../assets/photo_6.jpeg"),
        },
      ],
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.slides ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.slides - 1 : this.onboarding - 1;
    },
  },
};
</script>
<style scoped>
.heading-tow {
  position: absolute;
  top: 540px;
  margin-left: 30px;
  font-size: 35px;
}
.img {
  /* position: fixed; Sit on top of the page content */
  /* display: none; Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  max-height: 100%; /* Full height (cover the whole page) */

  /* background-color: rgba(0,0,0,0.5); Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  background-size: cover;
}
.round {
  border-radius: 25px;
  max-width: 444px;
  height: 320px;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 3;
}
@media (max-width< 920px) {
  .media {
    justify-content: center;
    width: 300px;
  }
  .heading-tow {
    transform: translateX(-10%);
    top: 510px;
  }
  .responsive {
    width: 200px;
  }
}
.space {
  margin-right: 40px;
}
</style>
