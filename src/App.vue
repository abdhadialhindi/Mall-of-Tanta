<template>
  <v-app app relative>
    <header-nav
      :class="$i18n.locale == 'ar' ? 'font' : 'font-en'"
      :flat="flat"
      :color="color"
    ></header-nav>
    <v-main>
      <!-- <TheTodo></TheTodo>
      <TheSlider></TheSlider>
      <TheAdversting></TheAdversting>
      <SwipeSlider></SwipeSlider>
      <DineSection></DineSection>
      <EntertainSection></EntertainSection>
      <EventandOffer></EventandOffer>
      <ContactUs></ContactUs> -->
      <router-view></router-view>
    </v-main>
    <Footer-Tanta></Footer-Tanta>
  </v-app>
</template>

<style lang="css">
.font {
  font-family: "Frutiger-md" !important;
}
.font-en {
  font-family: "BauPro" !important;
}
</style>
<script>
import HeaderNav from "./components/HedearNav.vue";
import FooterTanta from "./components/FooterTanta.vue";
import TheTodo from "./views/Home/components/TheTodo.vue";
import TheSlider from "./views/Home/components/TheSlider.vue";
import TheAdversting from "./views/Home/components/TheAdversting.vue";
import SwipeSlider from "./views/Home/components/SwipeSlider.vue";
import DineSection from "./views/Home/components/DineSection.vue";
import EntertainSection from "./views/Home/components/EntertainSection.vue";
import EventandOffer from "./views/Home/components/EventandOffer.vue";
import ContactUs from "./views/Home/components/ContactUs.vue";
export default {
  name: "app",
  components: {
    HeaderNav,
    FooterTanta,
    // eslint-disable-next-line vue/no-unused-components
    TheTodo,
    // eslint-disable-next-line vue/no-unused-components
    TheSlider,
    // eslint-disable-next-line vue/no-unused-components
    TheAdversting,
    // eslint-disable-next-line vue/no-unused-components
    SwipeSlider,
    // eslint-disable-next-line vue/no-unused-components
    DineSection,
    // eslint-disable-next-line vue/no-unused-components
    EntertainSection,
    // eslint-disable-next-line vue/no-unused-components
    EventandOffer,
    // eslint-disable-next-line vue/no-unused-components
    ContactUs,
  },
  data: () => ({
    color: "",
    flat: null,
  }),
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
  },
};
</script>
