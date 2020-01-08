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

              <button
                class="custom custom-success"
                @click.stop="dialog = true"
                style="margin: -12px 0"
              >{{$t('faq.formTitle')}}</button>
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

    <v-dialog v-model="dialog" max-width="500">
      <v-form>
        <v-container>
          <h1>{{$t("faq.formTitle")}}</h1>
          <p>{{$t("faq.formSubtitle")}}</p>
          <v-row>
            <v-col cols="12">
              <input type="text" name :placeholder="$t('inputs.nameInput')" required />
            </v-col>
            <v-col cols="12">
              <input type="email" name :placeholder="$t('inputs.emailInput')" required />
            </v-col>
            <v-col cols="12">
              <input type="text" name :placeholder="$t('inputs.questionInput')" required />
            </v-col>
            <v-col cols="12">
              <textarea
                name="additional-info"
                :placeholder="$t('inputs.textarea')"
                style="width: 100%"
                required
              ></textarea>
            </v-col>
            <v-col cols="12">
              <button class="custom custom-success">{{$t('inputs.sendBtn')}}</button>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
}

.v-form {
  background-color: #fff !important;
  padding: 32px 48px;
}
.v-expansion-panel-header {
  font-weight: normal;
  font-size: 14px;
}
.v-expansion-panel {
  font-size: 13px;
  opacity: 0.9;
  line-height: 20px;
}

@media screen and (max-width: 576px) {
  .v-form {
    padding: 24px;
  }
}
</style>

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
  },

  data() {
    return {
      dialog: false
    };
  }
};
</script>
