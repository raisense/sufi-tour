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
              >{{item.data.title[0].text}}</a>
            </li>
          </ul>
        </nav>
        <span class="go-back show-on-mobile" @click="showListOnMobie = true">
          <img src="../assets/icons/arrow-point-to-right.svg" alt srcset /> Go back
        </span>

        <About :itemId="currentItem" class="about-item-content"></About>
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

@media screen and (max-width: 768px) {
  .about-list {
    flex-direction: column;

    nav {
      min-width: 100% !important;
    }
  }

  nav {
  }
}
</style>

<script>
import About from "../components/AboutComponent";
export default {
  components: {
    About
  },
  data() {
    return {
      loading: false,
      currentItem: null,
      aboutItems: [],
      showListOnMobie: true
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

    setItem(id) {
      this.currentItem = id;
      this.showListOnMobie = false;
    }
  },
  watch: {
    currentLang(newValue) {
      this.getAbout();
    }
  },

  created() {
    this.getAbout();
  }
};
</script>
