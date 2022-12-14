<!-- eslint-disable prettier/prettier -->
<template>
  <div class="relative">
    <v-navigation-drawer
      app
      class="conten"
      temporary
      v-model="drawer"
      fixed
      dark
      color="#562d5f"
      data-booted="true"
    >
      <v-list>
        <v-list-item
          ><a href="" class="mb-5">
            <v-img src="../assets/white_logo.695b6b2.png" alt="malloftanta" width="100" />
          </a>
        </v-list-item>
        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653"
            ><span color="white">{{ $t("shop") }}</span>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white">{{ $t("dine") }}</span>
          </v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white"> {{ $t("entertain") }}</span></v-btn
          >
        </v-list-item>

        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white">{{ $t("cinema") }}</span>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white"> {{ $t("event") }} </span>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white">{{ $t("services") }} </span>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn depressed float min-width="200" class="justify-start" color="#4b2653">
            <span color="white">{{ $t("offers") }}</span>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list flat>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" @click="i=3?changeRTL():'' ">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="$t(item.text)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item>
          <v-list-item-icon>
            "mdi-web"
          </v-list-item-icon>
          <v-list-item-content>
          <v-list-item-title @click="changeRTL()">
            {{ $t("ع") }}
          </v-list-item-title>
          </v-list-item-content>
          </v-list-item> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="white"
      :style="`opacity: ${isTop ? '0.8' : '1'}; `"
      light
      app
      fixed
      flat
      :height="breakpoint"
    >
    <v-toolbar v-if="isXs" flat>
        
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
            class="mr-4"
            
            color="#562d5f"
          ></v-app-bar-nav-icon>
        
        <v-spacer />
        
        <a href="" style="text-align: start; margin-bottom: 2px;">
          <v-img src="../assets/002_logo.3485db7.png" width="170"/>
        </a>
        
    
    </v-toolbar>
    

      <v-toolbar light v-else class="relative" height="auto" flat style="z-index: 2;" @click="$router.push('/')">
        <div>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-clock-time-nine</v-icon>
            {{ $t("opening hours") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-bag-personal</v-icon>
            {{ $t("careers") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-phone</v-icon>
            162962
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-map-marker</v-icon>
            {{ $t("tanta gharbia egypt") }}
          </v-btn>
        </div>
        <v-spacer />
        <div>
          <a href="">
            <v-img src="../assets/002_logo.3485db7.png" width="150" />
          </a>
        </div>
        <v-spacer />
        <div>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-phone</v-icon>
            {{ $t("contact us") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-help</v-icon>
            {{ $t("about us") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-phone</v-icon>
            {{ $t("advertising") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-phone</v-icon>
            {{ $t("leasing") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun text-capitalize">
            <v-icon class="subtitle-1"> mdi-map-marker</v-icon>
            {{ $t("mall map") }}
          </v-btn>

          <v-btn text color="#562d5f" class="bottun" x-small @click="changeRTL()">
            <v-icon class="subtitle-1"> mdi-web</v-icon>
            {{ $t("ع") }}
          </v-btn>
        </div>
      </v-toolbar>
    </v-app-bar>
    <v-app-bar
      app
      class="mt-5 elevation-1 media"
      style="top: 50px ;z-index: 1;"
      color="transparent"
      elevation="0"
      hide-on-scroll
    >
      <v-container>
        <section class="two-header py-2">
          <v-btn text color="#562d5f" class="bottun text-capitalize" @click="$router.push('/Shop')">
            {{ $t("shop") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("dine") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("entertain") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("cinema") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("event") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("services") }}
          </v-btn>
          <v-btn text color="#562d5f" class="bottun text-capitalize">
            {{ $t("offers") }}
          </v-btn>
        </section>
      </v-container>
    </v-app-bar>
    <!-- <v-app-bar></v-app-bar>
        <v-container fixed>
          
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
        <v-btn text color="#562d5f" class="bottun text-capitalize">
          {{ $t("shop") }}
        </v-btn>
      </v-container> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      rtl: false,
      drawer: null,
      isXs: false,
      isTop: false,
      selectedItem: 1,
      items: [
        { text: "Opening Time", icon: "mdi-clock" },
        { text: "careers", icon: "mdi-bag-personal" },
        { text: "contact us", icon: "mdi-phone" },
        { text: "about us", icon: "mdi-help" },
        { text: "advertising", icon: "mdi-help" },
        { text: "leasing", icon: "mdi-key" },
        { text: "mall map", icon: "mdi-map-marker" },
        { text: "ع", icon: "mdi-web" },
      ],
    };
  },
  computed: {
    breakpoint() {
      if (
        this.$vuetify.breakpoint.name == "xs" ||
        this.$vuetify.breakpoint.name == "sm"
      ) {
        return "80";
      } else {
        return "64";
      }
    },
  },
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 1150;
    },
    changeRTL() {
      this.$vuetify.rtl = !this.$vuetify.rtl;
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "ar";
      } else {
        this.$i18n.locale = "en";
      }
      // this.changeLocale();
      // this.$vuetify.lang.t("mall map");
    },
    // changeLocale() {
    //   this.$vuetify.lang.current = "ar";
    // },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.onscroll = () => {
      let bottomOfWindow = window.pageYOffset === 0;

      if (bottomOfWindow) {
        this.isTop = true; // replace it with your code
      } else {
        this.isTop = false;
      }
    };
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style scoped>
.conten {
  overflow-y: auto;
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 256px;
  /* z-index: 5; */
  /* position: absolute; */
}
.bottun {
  font-size: 12px;
}
.two-header {
  position: fixed;
  top: 0;
  z-index: 5;
  left: 2rem;
  right: 2rem;
  background-color: #fff;
  border-radius: 10px;
  /* margin-top: 75px; */
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
.content {
  padding: 4px 8px;
}
@media (width<922px) {
  .media {
    display: none;
  }
} ;
</style>
