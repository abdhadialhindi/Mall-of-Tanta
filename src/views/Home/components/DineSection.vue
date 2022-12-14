<template>
  <div class="py-12 px-sm-5">
    <v-container fluid>
      <v-row align="center">
        <v-col sm="12" md="8">
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
              <v-slide-item v-for="n in 4" :key="n">
                <v-card class="back" height="200" width="200" hover>
                  <h3 class="font">
                    <small>{{ title[n] }} </small>
                  </h3>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </div>
        </v-col>
        <v-col sm="12" md="4" cols="12">
          <article>
            <h2 style="font-size: 36px; color: #562d5f">{{ $t("dine") }}</h2>
            <p class="paragraph">
              discover and exciting seletion of dining options. Dine in style
              with more than 40 restaurants and cafes
            </p>
            <a href="" style="opacity: 0.5; color: #562d5f">see more</a>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    title: ["", "Specialty", "Cofee Shop", "Fast Food", "Resturants"],
  }),
};
</script>
<style scoped>
.back {
  background-image: url("../../../assets/photo-of-shop-category-1_179280744.png");
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  margin-right: 17px;
}
.font {
  font-weight: bold;
  margin: 10px;
  font-size: 15px;
  color: "#562d5f";
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
  z-index: 3;
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
@media (width<920px) {
  .back {
    width: 264px !important;
    height: 258px !important;
  }
}
</style>
