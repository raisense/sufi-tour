<template>
  <div class="faq">
    <div class="faq-header justify-end d-flex mb-8">
      <h3 class="section-title" align="right">F.A.Q</h3>
    </div>
    <div class="faq-body">
      <v-expansion-panels :accordion="true" class="elevation-0">
        <v-expansion-panel v-for="(item, i ) in questions" :key="i">
          <div v-if="i < 5">
            <v-expansion-panel-header>{{item.data.question}}</v-expansion-panel-header>
            <v-expansion-panel-content>{{item.data.answer}}</v-expansion-panel-content>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="faq-footer d-flex justify-end">
      <router-link to="/tours">
        <span>{{$t('faq.link')}}</span>
        <img src="../assets/icons/arrow-point-to-right.svg" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      questions: null
    };
  },
  computed: {
    currentLang() {
      if (this.$store.state.language.language == "en") {
        return "en-us";
      } else return this.$store.state.language.language;
    }
  },
  methods: {
    getFaq() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "faq"), {
          lang: this.currentLang
        })
        .then(response => {
          this.questions = response.results;
        });
    }
  },
  watch: {
    currentLang(newValue) {
      this.getFaq();
    }
  },

  created() {
    this.getFaq();
  }
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  border: 1px solid rgb(204, 204, 204);
}

.v-expansion-panel {
  border: 1px solid rgba(67, 42, 73, 0.2);
}

.v-expansion-panel::before {
  box-shadow: none;
}
</style>