<template>
  <div class="image">
    <v-carousel
      :show-arrows="false"
      height="100%"
      hide-delimiter-background
      delimiter-icon="mdi-radiobox-marked"
      class="carsousel"
      cycle
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <div class="overlay" :class="$vuetify.rtl == true ? 'scale' : ''"></div>
        <v-row justify="center" style="z-index: 7">
          <v-col>
            <v-row justify="center" class="article">
              <v-col
                class="articl"
                :class="$vuetify.rtl == true ? 'rotate' : ''"
                :style="`${
                  ($vuetify.breakpoint.name == 'xs' ||
                    $vuetify.breakpoint.name == 'sm') &&
                  $vuetify.rtl == true
                    ? 'transform:translateX(20%)'
                    : ''
                }`"
              >
                <h3 class="heading">
                  {{ $t(articles[i]) }}
                </h3>
                <p>{{ $t(paraghraph[i]) }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <div class="botton d-flex justify-center flex-column">
      <v-btn text class="d-flex justify-center align-center" color="white">
        <strong> {{ $t("Scroll Down") }}</strong>
      </v-btn>
      <v-icon class="move" color="white">mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../../../assets/photo-of-setting-landing-page-slide-1_158508143 (1).jpg"),
        },
        {
          src: require("../../../assets/photo-of-setting-landing-page-slider-2_327550835 (1).jpg"),
        },
        {
          src: require("../../../assets/photo-of-setting-landing-page-slider-3_958666508 (1).jpg"),
        },
        {
          src: require("../../../assets/photo-of-setting-landing-page-slider-4_1007654959.jpg"),
        },
      ],
      articles: ["Mall of Tanta", "Billy Beez", "Galaxy cinema", "Spinneys"],
      paraghraph: [
        "The first unconventional mall of its kind, located in Tanta. Mall of Tanta rolls out on a vast area to introduce a distinctive retail world blending both local and international brands under one roof",
        "Billy Beez is an indoors playground with lots of safe games and activities. The Play area has lots of big slides, wall climbing and games that even the older kids will enjoy",
        "The first & biggest cinema at Tanta with international specs, presenting international & 3d movies.",
        "Spinneys is Egypt’s premier purveyor of the finest quality food and household goods for families to enjoy the benefits of healthy living, with freshness and world-class service at the heart of our daily operations",
      ],
    };
  },
};
</script>
<style scoped>
.rotate {
  transform: translateX(80%);
}
.overlay {
  background-image: url("../../../assets/001.3bfad8b.png");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.image {
  height: 100vh;
  /* background-size: cover; */
  position: relative;
  top: -130px;
}
.carsousel {
  position: absolute;
  width: 100%;
  height: 100%;
}
.article {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-5%);
  width: 50%;
  padding: 50px;
  background-color: var(--transparent-color);
  color: white;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  margin-left: 75px;
}
.heading {
  font-size: 36px;
}
.botton {
  position: absolute;
  left: 50%;
  top: 80%;
  z-index: 3;
  transform: translateX(-50%);
}
@keyframes jump {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(+10px);
  }
}
.scale {
  transform: scaleX(-1);
}
.move {
  animation-name: jump;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-direction: alternate-reverse;
}
@media (width<1000px) {
  .article {
    width: 100%;
    margin: auto;
    /* top: 200px; */
    font-size: 18px;
  }
  .botton {
    visibility: hidden;
  }
  .heading {
    font-size: 24px;
  }
}
@media (width<600px) {
  .article {
    width: 100%;
    margin: auto;
    top: 75%;
    left: -38px;
    font-size: 13px;
    transform: translateY(-50%);
  }
  .articl {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .botton {
    display: none;
  }
  .heading {
    font-size: 24px;
  }
}
@media screen and (height: 400px) {
  .article {
    width: 100%;
    margin: auto;
    /* top: 110px; */
    left: -38px;
    /* left:  ; */
    font-size: 10px;
  }
}
</style>
