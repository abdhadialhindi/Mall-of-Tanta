<template>
  <div class="py-12 px-sm-5">
    <v-container fluid>
      <v-row align="center">
        <v-col sm="12" md="4" cols="12">
          <article>
            <h2 style="font-size: 36px; color: #562d5f">
              {{ $t("entertain") }}
            </h2>
            <p class="paragraph">
              Elevate your entertainment with MoT we've got so many ways to make
              everyone happy, both outdoors and indoors.
            </p>
            <a href="" style="opacity: 0.5; color: #562d5f">see more</a>
          </article>
        </v-col>
        <v-col sm="12" md="8" cols="12">
          <div>
            <v-slide-group v-model="model" class="d-block relative" show-arrows>
              <template v-slot:next>
                <v-icon color="#562d5f" large class="move"
                  >mdi-chevron-right-circle-outline</v-icon
                >
              </template>
              <template v-slot:prev>
                <v-icon color="#562d5f" large class="moved"
                  >mdi-chevron-left-circle-outline</v-icon
                >
              </template>
              <v-slide-item v-for="n in 3" :key="n">
                <div class="ml-5 back">
                  <v-img :src="title[n]" />
                </div>
              </v-slide-item>
            </v-slide-group>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    title: [
      {},
      {
        src: require("../../../assets/logo-of-entertain-1.jpg"),
      },
      {
        src: require("../../../assets/logo-of-entertain-2 (1).png"),
      },
      {
        src: require("../../../assets/logo-of-entertain-3.png"),
      },
    ],
  }),
};
</script>
<style scoped>
.back {
  border: none;
  height: 200px;
  width: 200px;
}
.back:hover {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.paragraph {
  opacity: 0.5;
  color: "#562d5f";
}
.moved {
  position: absolute;
  left: 1.7%;
  z-index: 2;
  top: 37%;
  height: 50px;
}
.move {
  position: absolute;
  z-index: 2;
  right: 0%;
  top: 37%;
  height: 50px;
}
@media (width>920px) {
  .move {
    display: none;
  }
  .moved {
    display: none;
  }
}
</style>
