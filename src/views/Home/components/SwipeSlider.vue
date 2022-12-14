<template>
  <div class="py-12 px-sm-5">
    <v-container fluid>
      <v-row align="center">
        <v-col sm="12" md="4">
          <article>
            <h2 style="font-size: 36px; color: #562d5f">{{ $t("shop") }}</h2>
            <p class="paragraph">
              {{ $t("The ultimate shopping destination.") }}
            </p>
            <a href="" style="opacity: 0.5; color: #562d5f">{{
              $t("See more")
            }}</a>
          </article>
        </v-col>
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
              <v-slide-item v-for="n in 6" :key="n">
                <v-card class="back" height="200" width="200" hover>
                  <h3 class="font">
                    <small>{{ $t(title[n]) }} </small>
                  </h3>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </div>
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    isXs: false,
    title: [
      "",
      "Pharmacy/ Health/ Beauty/ Fitness/ Cosmetics/ Perfumes",
      "Electronics/Home Appliances/ Computers/ Mobiles",
      "Books / Stationery / Toys / Games / Gifts",
      "Household /Furniture /Carpet / Home Accessories/ Textile",
      "Fashion",
      "Sport Wear",
    ],
  }),
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 1150;
    },
  },
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
  z-index: 1;
  top: 37%;
  height: 50px;
}
.move {
  position: absolute;
  z-index: 1;
  right: 0%;
  top: 37%;
  height: 50px;
}
@media (width<920px) {
  .back {
    width: 264px !important;
    height: 258px !important;
  }
}
</style>
