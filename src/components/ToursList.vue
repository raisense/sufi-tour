<template>
  <v-container id="tours">
    <section class="tours">
      <div class="section-header d-flex justify-space-between mb-2">
        <h3 class="section-title">{{ $t("navigation.tours") }}</h3>
      </div>
      <div class="tour-cards">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="4" v-for="(item, i) in tours" :key="i">
            <div class="tour-card" v-if="i < 3">
              <div class="tour-card__img">
                <img :src="item.data.image.url" alt />
                <div class="tour-link">
                  <router-link :to="`/tours/${item.id}`">Details</router-link>
                </div>
              </div>
              <div class="tour-card__desc">
                <p class="tour-card__title">{{ item.data.name[0].text }}</p>

                <v-row class="tour-card__additional justify-space-around">
                  <v-col class="py-1" cols="6">
                    <strong>
                      {{
                      $t("tour_item.header.duration") + ": "
                      }}
                    </strong>
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
            </div>
          </v-col>
        </v-row>
        <router-link to="/tours">
          <button class="custom custom-success">
            {{
            $i18n.locale == "en"
            ? "all tours "
            : $i18n.locale == "ru"
            ? "все туры "
            : "tüm turlar"
            }}
          </button>
        </router-link>
      </div>
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
.section-title {
  text-transform: capitalize !important;
}
.tour-cards {
  display: flex;
  flex-direction: column;
  align-items: center;

  .custom {
    margin-top: 32px !important;
  }

  .tour-card {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      a {
        text-decoration: none;
      }

      .tour-link {
        opacity: 1 !important;
        transition: 0.4s all ease;
      }

      .tour-card__img img {
        filter: blur(10px);
        transform: scale(1.1);
        transition: 0.4s all ease;
      }
    }
    a:hover {
      border-bottom: 1px solid #432a49;
    }

    .tour-card__img {
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      width: 100%;
      height: 300px;
      overflow: hidden;
      position: relative;

      .tour-link {
        position: absolute;
        z-index: 200;
        top: 0;
        left: 0;
        display: flex;
        opacity: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #432a496c;
        transition: 0.4s all ease;

        a {
          color: #fff;
          text-decoration: none;

          &:hover {
            border-bottom-color: #fff;
          }
        }
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;

        transition: 0.4s all ease;
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
      margin-bottom: 16px;
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 16px;
    }

    .tour-card__additional {
      font-size: 12px;
      text-align: center;

      .col:first-child {
        border-right: 1px solid #e4e4e4;
      }

      strong {
        display: block;
      }

      &:div:first-child {
        text-transform: uppercase;
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
        .then(response => {
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
