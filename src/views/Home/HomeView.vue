<template>
  <div>
    <TheTodo></TheTodo>
    <TheSlider></TheSlider>
    <TheAdversting></TheAdversting>
    <SwipeSlider></SwipeSlider>
    <DineSection></DineSection>
    <EntertainSection></EntertainSection>
    <EventandOffer></EventandOffer>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
// @ is an alias to /src
// import HeaderNav from "./components/HedearNav.vue";
// import FooterTanta from "./components/FooterTanta.vue";
import TheTodo from "../Home/components/TheTodo.vue";
import TheSlider from "../Home/components/TheSlider.vue";
import TheAdversting from "../Home/components/TheAdversting.vue";
import SwipeSlider from "../Home/components/SwipeSlider.vue";
import DineSection from "../Home/components/DineSection.vue";
import EntertainSection from "../Home/components/EntertainSection.vue";
import EventandOffer from "../Home/components/EventandOffer.vue";
import ContactUs from "../Home/components/ContactUs.vue";

export default {
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // HeaderNav,
    // eslint-disable-next-line vue/no-unused-components
    // FooterTanta,
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
};
</script>
