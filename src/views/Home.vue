<template>
  <div class="home">
    <Hero></Hero>
    <!-- <About></About> -->
    <Tours></Tours>
    <v-container>
      <section class="feedback-faq" id="feedback">
        <v-row>
          <v-col xs="12" sm="6" md="5" lg="5">
            <div class="section-header d-flex justify-space-between mb-4">
              <h3 class="section-title">: {{$t('navigation.feedback')}}</h3>
            </div>
            <Feedback></Feedback>
          </v-col>
          <v-col xs="12" sm="6" md="7" lg="7" class="pl-md-12">
            <Faq></Faq>
          </v-col>
        </v-row>
      </section>
    </v-container>
    <WhyUs></WhyUs>
  </div>
</template>

<script>
import Hero from "../components/Hero";
import About from "../components/AboutComponent";
import Tours from "../components/ToursList";
import WhyUs from "../components/WhyUs";
import Faq from "../components/Faq";
import Feedback from "../components/Feedbacks";

export default {
  name: "home",
  components: {
    Hero,
    About,
    Tours,
    WhyUs,
    Faq,
    Feedback
  }
};
</script>
