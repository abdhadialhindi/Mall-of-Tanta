<template>
  <v-footer class="font pt-12 pb-5">
    <v-container fluid>
      <v-row>
        <v-col md="3" sm="4" cols="12" xs="12">
          <section>
            <a href="" class="mb-3">
              <v-img src="../assets/002_logo.3485db7.png" width="147" />
            </a>
            <v-btn text class="mt-7 justify-start">
              <v-icon class="subtitle-1"> mdi-map-marker</v-icon>
              {{ $t("tanta gharbia egypt") }}
            </v-btn>
            <v-btn
              text
              class="mt-9 text-h5 font-weight-regular justify-start"
              block
            >
              <v-icon class="display-1"> mdi-phone</v-icon>
              16962
            </v-btn>
            <div>
              <v-btn icon class="justify-start ms-8 mt-8">
                <v-icon class="font-wieght-bold">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon class="justify-start ms-8 mt-8">
                <v-icon class="font-wieght-bold">mdi-instagram</v-icon>
              </v-btn>
            </div>
          </section>
        </v-col>
        <v-col sm="4" md="3" lg="2" cols="12" xs="12">
          <article>
            <h3>{{ $t("shop") }}</h3>

            <a href="" class="text-decoration-none">
              <v-list-item dense class="mt-1 px-0">
                <small>
                  {{ $t("Pharmacy") }} / {{ $t("Health") }} /
                  {{ $t("Beauty") }} / {{ $t("Fitness") }} /
                  {{ $t("Cosmetics") }} / {{ $t("Perfumes") }}</small
                >
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>
                  {{ $t("Household") }} /{{ $t("Furniture") }}/{{
                    $t("Carpet")
                  }}
                  /{{ $t("Home Accessories") }}/{{ $t("Texttile") }}</small
                >
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("Sports Wear") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("Fashoin") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>
                  {{ $t("Books") }}/{{ $t("Stationery") }}/{{ $t("Toys") }}/{{
                    $t("Games")
                  }}/ {{ $t("Gifts") }}</small
                >
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>
                  {{ $t("Elctronic") }}/{{ $t("Home Applainces") }}/
                  {{ $t("Computers") }}/{{ $t("Mobailes") }}</small
                >
              </v-list-item>
            </a>
          </article>
        </v-col>
        <v-col sm="4" md="3" lg="2" cols="12" xs="12">
          <article>
            <h3>{{ $t("dine") }}</h3>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="mt-1 px-0">
                <small>{{ $t("Resturants") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>{{ $t("Cofee Shop") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("Specialty") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("Fast Food") }}</small>
              </v-list-item>
            </a>
          </article>
        </v-col>
        <v-col sm="4" md="3" lg="2" cols="12">
          <article>
            <h3>{{ $t("Other") }}</h3>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="mt-1 px-0">
                <small>{{ $t("entertain") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>{{ $t("cinema") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("services") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small> {{ $t("event") }}</small>
              </v-list-item>
            </a>
          </article>
        </v-col>
        <v-col sm="4" md="3" lg="2" cols="12">
          <article>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="mt-1 px-0">
                <small>{{ $t("leasing") }}</small>
              </v-list-item>
            </a>
            <a href="" class="text-decoration-none">
              <v-list-item dense class="px-0">
                <small>{{ $t("advertising") }}</small>
              </v-list-item>
            </a>
          </article>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="pt-12">
        <v-col xs="12" sm="12" md="1" lg="1">
          <v-img src="../assets/Footerimg.png" width="100" sm="12" />
        </v-col>
        <v-col xs="12" sm="12" md="4" lg="2" class="d-flex align-center">
          <v-menu offset-y top open-on-hover sm="12">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text color="#000000DE" dark v-bind="attrs" v-on="on">
                {{ $t("view All Group Entities") }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-spacer />
        <div>
          <p class="pt-0 pb-0 mb-0">
            &copy; {{ $t("Copyright") }} {{ $t("Marakez") }} 2020.
            {{ $t("All Rights Reserved") }}.
          </p>
          <a href="" style="color: #000000de">{{ $t("Privacy Policy") }}</a>
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "D5M" },
      { title: "Town Center" },
      { title: "Mall Of Tanta" },
    ],
  }),
};
</script>
<style>
.font {
  /* font-family: "BauPro"; */
}
</style>
