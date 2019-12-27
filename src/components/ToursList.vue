<template>
  <v-container id="tours">
    <section class="tours">
      <div class="section-header d-flex justify-space-between mb-12">
        <h3 class="section-title">: {{ $t("navigation.tours") }}</h3>
        <router-link to="/tours">
          <span
            >{{
              $i18n.locale == "en"
                ? "all tours "
                : $i18n.locale == "ru"
                ? "все туры "
                : "tüm turlar"
            }}
          </span>
          <img src="../assets/icons/arrow-point-to-right.svg" alt />
        </router-link>
      </div>
      <div class="tour-cards">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="4"
            v-for="(item, i) in tours"
            :key="i"
          >
            <div class="tour-card" v-if="i < 3">
              <router-link :to="`/tours/${item.id}`">
                <div class="tour-card__img">
                  <img :src="item.data.image.url" alt />
                </div>
                <div class="tour-card__desc">
                  <p class="tour-card__title">{{ item.data.name[0].text }}</p>

                  <v-row class="tour-card__additional justify-space-around">
                    <v-col class="py-1" cols="6">
                      <strong>{{
                        $t("tour_item.header.duration") + ": "
                      }}</strong>
                      {{ item.data.duration }}
                    </v-col>
                    <v-col class="py-1" cols="6">
                      <strong>{{ $t("tour_item.header.price") + ":" }}</strong>
                      {{
                        $i18n.locale == "en"
                          ? "from "
                          : $i18n.locale == "ru"
                          ? "от "
                          : ""
                      }}
                      {{ "$" + item.data.price }}
                      {{ $i18n.locale == "tr" ? "'dan başlayan" : "" }}
                    </v-col>
                  </v-row>
                </div>
              </router-link>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
.tour-cards {
  .tour-card {
    background: #ffffff;
    border-radius: 25px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

    a {
      text-decoration: none;
      color: #432a49;
    }
    a:hover {
      border-bottom: 1px solid #432a49;
    }

    .tour-card__img {
      border-radius: 25px;
      overflow: hidden;
      width: 100%;
      height: 300px;
      overflow: hidden;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .tour-card__desc {
      padding: 24px;
    }

    .tour-card__title {
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
      color: #432a49;
      text-align: center;
      margin-bottom: 0;
    }

    .tour-card__additional {
      font-size: 14px;

      &:div:first-child {
        text-transform: uppercase;
      }

      & *:last-child {
        text-align: right;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      loading: false,
      tours: null
    };
  },
  computed: {
    currentLang() {
      if (this.$store.state.language.language == "en") {
        return "en-us";
      } else return this.$store.state.language.language;
    }
  },
  watch: {
    currentLang(newValue) {
      console.log("language changed to " + newValue);
      this.getAllTours();
    }
  },
  methods: {
    getAllTours() {
      this.loading = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "tour"), {
          lang: this.currentLang
        })
        .then((response) => {
          console.log(response);
          this.tours = JSON.parse(JSON.stringify(response.results));
          this.loading = false;
        });
    }
  },
  created() {
    this.getAllTours();
  }
};
</script>
