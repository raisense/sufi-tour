<template>
  <div class="about">
    <v-parallax height="400" class="tours-parallax" src="../assets/bg-2.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">Golden Chain</h1>

          <div class="tour-date">group travels across uzbekistan</div>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <h1 class="loader text-center" v-if="loading == true">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h1>
      <section class="about-list full-section">
        <nav class="pt-8">
          <ul>
            <li v-for="(item, i) in aboutItems" :key="i">
              <a
                :href="`#${item.slugs}`"
                @click.prevent="setItem(item.id)"
                @click="dialog = true"
              >{{item.data.title[0].text}}</a>
            </li>
          </ul>
        </nav>
        <div class="about-item-content">
          <About :itemId="currentItem" class="hide-on-mobile"></About>

          <v-dialog
            v-model="dialog"
            width="500"
            v-if="windowSize < 768"
            fullscreen
            transition="slide-x-transition"
          >
            <v-card>
              <h1 class="loader text-center" v-if="loadingDialog == true">
                <div class="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </h1>
              <div v-if="loadingDialog == false" class="px-4 py-4">
                <p class="goBack" @click="dialog = false">
                  <img
                    src="../assets/icons/arrow-point-to-right.svg"
                    width="12px"
                    style="transform: rotate(180deg); vertical-align: -2px; margin-right: 8px;"
                    alt
                  /> go back
                </p>

                <h4 class="mb-4">{{currentDialog.data.title[0].text}}</h4>
                <richtext style="font-size: 14px" :desc="currentDialog.data.description"></richtext>
                <img width="100%" :src="currentDialog.data.image.url" alt />
              </div>
            </v-card>
          </v-dialog>
        </div>
      </section>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.about-list {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;

  .go-back {
    img {
      transform: rotate(180deg);
    }
  }

  nav {
    width: 40%;
    min-width: 338px;
    ul {
      // position: sticky;
      // position: -webkit-sticky;
      top: 100px;
      background-color: #fff;
      list-style: none;
      border: 1px solid #d9d4db;
      padding: 0 24px;
      border-radius: 5px;

      li {
        padding: 16px 0;
        &:not(:last-child) {
          border-bottom: 1px solid #d9d4db;
        }

        a {
          text-decoration: none;
          color: #432a39;
          font-weight: bold;
          font-size: 13px;
        }
      }
    }
  }
}

.about-item-content {
  width: 70%;
}

.v-dialog {
  max-height: 100%;
  margin: 0;
}

.v-application p {
  font-size: 14px !important;
}

@media screen and (max-width: 768px) {
  .about-list {
    flex-direction: column;

    nav {
      min-width: 100% !important;
    }
  }

  .about-item-content {
    width: 100%;
  }
}

.v-overlay.v-overlay--active.theme--dark,
.v-overlay__scrim,
.theme--dark.v-overlay {
  display: none !important;
}
</style>

<script>
import About from "../components/AboutComponent";
import Vue from "vue";

Vue.component("richtext", {
  props: ["desc"],
  render: function(createElement) {
    var self = this;
    if (self.desc.length > 0) {
      return createElement(
        "div",
        self.desc.map(el => {
          return createElement("p", el.text);
        })
      );
    }
  }
});

export default {
  components: {
    About
  },
  data() {
    return {
      showListOnMobie: true,
      loading: false,
      loadingDialog: false,
      currentItem: null,
      aboutItems: [],
      windowWidth: 0,
      dialog: false,
      currentDialog: null
    };
  },
  computed: {
    currentLang() {
      if (this.$store.state.language.language == "en") {
        return "en-us";
      } else return this.$store.state.language.language;
    },

    sortedList() {
      return _.orderBy(this.aboutItems, "data.order");
    },

    windowSize() {
      return window.innerWidth;
    }
  },
  methods: {
    getAbout() {
      this.loading = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "about"), {
          lang: this.currentLang
        })
        .then(response => {
          this.aboutItems = response.results;
          this.loading = false;

          if (this.currentItem == null) {
            this.setItem(this.aboutItems[0].id);
            console.log(this.currentItem);
          }
        });
    },

    getItem(id) {
      this.loadingDialog = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.id", id), {
          lang: this.currentLang
        })
        .then(response => {
          this.currentDialog = response.results[0];
          console.log(this.currentDialog);
          this.loadingDialog = false;
        });
    },

    setItem(id) {
      this.currentItem = id;
      this.showListOnMobie = false;
      this.getItem(id);
    }
  },
  watch: {
    currentLang(newValue) {
      this.getAbout();
    },
    windowWidth(newWidth, oldWidth) {
      console.log(`it changed to ${newWidth} from ${oldWidth}`);
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  onResize() {
    this.windowWidth = window.innerWidth;
  },

  created() {
    this.getAbout();
  }
};
</script>
