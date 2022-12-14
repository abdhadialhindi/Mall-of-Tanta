<template>
  <div>
    <div>
      <div class="walleper">
        <v-container calss="px-3">
          <v-row align="center">
            <div :class="$i18n.locale == 'ar' ? 'overlay2' : 'overlay'"></div>
            <h2 class="header">Shop</h2>
          </v-row>
        </v-container>
      </div>
    </div>
    <div>
      <v-container fluid class="px-5">
        <v-row>
          <v-col sm="8" cols="12" md="8">
            <v-breadcrumbs light>
              <v-breadcrumbs-item
                ><a href="" style="color: #562d2f !important"
                  >Home</a
                ></v-breadcrumbs-item
              >
              <v-breadcrumbs-item>/</v-breadcrumbs-item>
              <v-breadcrumbs-item disabled
                ><a href="" style="color: #562d2f !important"
                  >Shop</a
                ></v-breadcrumbs-item
              >
              <v-breadcrumbs-item>/</v-breadcrumbs-item>
            </v-breadcrumbs>
          </v-col>
          <v-col sm="4" md="4" cols="12">
            <v-text-field
              placeholder="send your e-mail"
              prepend-inner-icon="mdi-magnify"
              dense
              rounded
              outlined
              color="#562d2f"
              is-booted
              enclosed
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container fluid class="px-5">
      <v-row>
        <v-col sm="4" lg="3" cols="12">
          <v-list>
            <v-list-item link>All</v-list-item>
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Books - Stationary - Toys - Games - Gifts
              <span class="mx-2">(1)</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Electronics - Home Appliances - Computers - Mobiles
              <span class="mx-2">(6)</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Health &amp; beauty <span class="mx-2">(4)</span></v-list-item
            >
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Household - Furniture - Carpet - Home Accessories - Textiles
              <span class="mx-2">(5)</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Optics <span class="mx-2">(3)</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link class="my-2"
              >Shoes - Accessories - Handbags <span class="mx-2">(8)</span>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-group color="#562d2f">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    >Fashion<span class="mx-2">(39)</span></v-list-item-title
                  >
                </v-list-item-content>
              </template>
              <v-divider></v-divider>
              <v-list-item link class="my-2">
                Sports &amp; Goodwear <span class="mx-2">(1)</span>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Women <span class="mx-2">(2)</span></v-list-item
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Men <span class="mx-2">(14)</span></v-list-item
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Unisex <span class="mx-2">(12)</span></v-list-item
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2">
                Chidren &amp; Maternity <span calss="mx-2">(4)</span>
              </v-list-item>
              <!-- <v-divider></v-divider> -->
            </v-list-group>
            <v-divider></v-divider>
            <v-list-group color="#562d2f">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    Jewlery - Watches <span class="mx-2">(1)</span>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Jewlery <span class="mx-2">(1)</span></v-list-item
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Watches <span class="mx-2">(3)</span></v-list-item
              >
            </v-list-group>
            <v-divider></v-divider>
            <v-list-group color="#562d2f">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    >Services<span class="mx-2">(0)</span></v-list-item-title
                  >
                </v-list-item-content></template
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Banks <span class="mx-2">(0)</span></v-list-item
              >
              <v-divider></v-divider>
              <v-list-item link class="my-2"
                >Telecommunications <span class="mx-2">(0)</span></v-list-item
              >
            </v-list-group>
            <v-divider></v-divider>
          </v-list>
        </v-col>
        <v-col sm="8" lg="9" cols="12">
          <div>
            <section>
              <v-card class="mt-12 mb-20 shop pa-3" link hover>
                <v-row>
                  <v-col sm="4" md="3" cols="12">
                    <section class="img-wrap ratio-45">
                      <div class="img-content">
                        <img
                          src="../assets/tradeline.png"
                          class="shop-logo mw-100 white-bg radius-10"
                        />
                      </div>
                    </section>
                  </v-col>
                  <v-col sm="8" md="9" cols="12"
                    ><h3 class="shop-name">Tradeline</h3>
                    <v-row>
                      <v-col sm="6" md="4" cols="12">
                        <article>
                          <h5 class="mb-2" color="#562d2f">
                            <v-icon>mdi-location</v-icon
                            ><span>Nearset Gate</span>
                          </h5>
                          <p class="mb-0 px-4">5</p>
                        </article>
                      </v-col>
                      <v-col sm="6" md="4" cols="12">
                        <article>
                          <h5 class="mb-2" color="#562d2f">
                            <v-icon>mdi-location</v-icon
                            ><span>Nearset Gate</span>
                          </h5>
                          <p class="mb-0 px-4">5</p>
                        </article>
                      </v-col>
                      <v-col sm="6" md="4" cols="12">
                        <article>
                          <h5 class="mb-2" color="#562d2f">
                            <v-icon>mdi-location</v-icon
                            ><span>Nearset Gate</span>
                          </h5>
                          <p class="mb-0 px-4">5</p>
                        </article>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card>
            </section>
          </div>
          <v-text-field
            placeholder="search"
            prepend-inner-icon="mdi-magnify"
            dense
            rounded
            outlined
            color="#562d2f"
            is-booted
            enclosed
            v-model="username"
          ></v-text-field>
          <v-btn @click="getrepos()">xx</v-btn>
          <div v-for="(repo, i) in repos" :key="i">
            <h4>{{ repo.name }}</h4>
            <p>{{ repo.description }}</p>
          </div>
          <div id="app">
            <h1>Bitcoin Price Index</h1>
            <div v-for="(currency, i) in info" :key="i" class="currency">
              {{ currency.description }}:
              <span class="lighten">
                <span v-html="currency.symbol"></span
                >{{ currency.rate_float | currencydecimal }}
              </span>
            </div>
          </div>
          <section>
            <v-card class="mt-15 mb-12 shop" relative link hover>
              <v-row>
                <v-col sm="4" md="3" cols="12">
                  <v-layout justify-center class="mt-5">
                    <img
                      src="../assets/tradeline.png"
                      class="shop-logo mw-100 white-bg radius-10"
                      width="98"
                      height="98"
                    />
                  </v-layout>
                </v-col>
                <v-col sm="8" md="9" cols="12"
                  ><h3 class="shop-name">Tradeline</h3>
                  <v-row>
                    <v-col sm="6" md="4" cols="12">
                      <article>
                        <h5 class="mb-2" color="#562d2f">
                          <v-icon>mdi-location</v-icon><span>Nearset Gate</span>
                        </h5>
                        <p class="mb-0 px-4">5</p>
                      </article>
                    </v-col>
                    <v-col sm="6" md="4" cols="12">
                      <article>
                        <h5 class="mb-2" color="#562d2f">
                          <v-icon>mdi-location</v-icon><span>Nearset Gate</span>
                        </h5>
                        <p class="mb-0 px-4">5</p>
                      </article>
                    </v-col>
                    <v-col sm="6" md="4" cols="12">
                      <article>
                        <h5 class="mb-2" color="#562d2f">
                          <v-icon>mdi-location</v-icon><span>Nearset Gate</span>
                        </h5>
                        <p class="mb-0 px-4">5</p>
                      </article>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.walleper {
  background-image: url("../assets/photo-of-setting-page-shop_903539164.png");
  height: 238px;
  position: relative;
  /* background-size: ; */
}
.header {
  position: absolute;
  top: 30%;
  color: #fff;
  font-size: 36px;
}
.overlay {
  background: url("../assets/002.29d631c.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.25) !important;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.overlay2 {
  background: url("../assets/overlay2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100%;
  background-color: rgba(0, 0, 0, 0.25) !important;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.shop {
  border-radius: 16px !important;
  position: relative;
}
.img-wrap {
  position: relative;
}
.ratio-45 {
  padding-top: 45%;
}
.img-content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-name {
  transform: translateY(-45px);
}
.shop-logo {
  transform: translateY(-60px);
}
.img-content img {
  max-height: 100%;
  display: block;
}

@media (width<767px) {
  .walleper {
    padding-top: 20% !important;
    background-size: cover;
    height: auto;
  }
  .header {
  }
}
</style>
<script>
import axios from "axios";
export default {
  data: () => ({
    // model: 1,
    // model1: 1,
    // model2: 0,
    username: "obada",
    repos: null,
    info: null,
  }),
  methods: {
    getrepos() {
      return axios
        .get(`https://api.gethup.com/users/${this.username}/repos`)
        .then((response) => {
          this.repos = response.data.repos;
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data);
        });
    },
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi));
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>
