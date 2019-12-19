<template>
  <div class="faq">
    <div class="faq-header d-flex justify-space-between align-center mb-8">
      <h3>F.A.Q</h3>
      <button class="custom custom-success" @click.stop="dialog = true">leave a question</button>
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
        <span>all questions</span>
        <img src="../assets/icons/arrow-point-to-right.svg" alt />
      </router-link>
    </div>
    <v-dialog v-model="dialog" max-width="500">
      <v-form>
        <v-container>
          <h1>Leave your question</h1>
          <p>we will answer to your question via personal mail</p>
          <v-row>
            <v-col cols="12">
              <input type="text" name placeholder="your name" required />
            </v-col>
            <v-col cols="12">
              <input type="email" name placeholder="your mail address" required />
            </v-col>
            <v-col cols="12">
              <input type="text" name placeholder="type your question here" required />
            </v-col>
            <v-col cols="12">
              <button class="custom custom-success">send</button>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-dialog>
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

.v-form {
  background-color: #fff !important;
  padding: 32px 48px;
}

@media screen and (max-width: 576px) {
  .v-form {
    padding: 24px;
  }
}
</style>