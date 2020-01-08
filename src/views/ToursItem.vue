<template>
  <v-app>
    <div class="tour-inner">
      <!-- <v-parallax height="400" class="tours-parallax" :src="image.url"> -->
      <v-parallax height="400" class="tours-parallax" src="../assets/bg.jpg">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-4 font-weight-bold mb-4">{{ name }}</h1>

            <div class="tour-date">{{ duration }}</div>
          </v-col>
        </v-row>
      </v-parallax>
      <h1 class="loader text-center" v-if="loading == true">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </h1>

      <!-- <div class="tour-item-about">
        <v-container>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="py-0"
          >
            <v-row class="px-3">
              <v-col xs="12" sm="6" md="5">
                <v-skeleton-loader
                  class
                  max-width="100%"
                  type="image"
                ></v-skeleton-loader>
              </v-col>
              <v-col xs="12" sm="6" md="7">
                <v-skeleton-loader
                  class
                  max-width="100%"
                  type="article"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  class
                  max-width="100%"
                  type="actions"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-sheet>
          <div class="tour-item d-flex flex-sm-row">
            <div class="tour-img">
              <img :src="image.url" :alt="name" />
            </div>
            <div class="tour-details pl-8">
              <div class="tour-name">
                {{
                  $i18n.locale == "en"
                    ? "About "
                    : $i18n.locale == "ru"
                    ? "О "
                    : ""
                }}
                {{ name }} {{ $i18n.locale == "tr" ? "hakkında" : "" }}
              </div>
              <div class="tour-desc">{{ desc }}</div>
            </div>
            <button class="custom custom-success" @click.stop="dialog = true">
              {{ $t("tour_item.btn") }}
            </button>
          </div>
        </v-container>
      </div>-->
      <v-container>
        <div class="tour-big-details" v-if="loading == false">
          <div class="tour-header">
            <v-row>
              <v-col>
                <strong>{{ $t("tour_item.header.ingroup") }}:</strong>
                <span>{{ $tc("tour_item.header.people", people) }}</span>
              </v-col>
              <!-- <v-col>
                <strong>{{ $t("tour_item.header.price") }}:</strong>
                <span>
                  {{
                  $i18n.locale == "en"
                  ? "from "
                  : $i18n.locale == "ru"
                  ? "от "
                  : ""
                  }}
                  $ {{ price }}
                  {{ $i18n.locale == "tr" ? "'dan başlayan" : "" }}
                </span>
              </v-col>-->
              <v-col>
                <strong>{{ $t("tour_item.header.duration") }}:</strong>
                <span>{{ duration }}</span>
              </v-col>
              <v-col>
                <strong>{{ $t("tour_item.header.duration") }}:</strong>
                <span>{{ distance }} KM</span>
              </v-col>
              <v-col>
                <button
                  class="custom custom-success"
                  @click.stop="dialog = true"
                >
                  {{ $t("tour_item.btn") }}
                </button>
              </v-col>
            </v-row>
          </div>
          <div class="tour-big-content">
            <v-row class="mb-6">
              <v-col>
                <div class="about-tour">
                  <div class="tour-name">
                    {{
                      $i18n.locale == "en"
                        ? "About "
                        : $i18n.locale == "ru"
                        ? "О "
                        : ""
                    }}
                    {{ name }} {{ $i18n.locale == "tr" ? "hakkında" : "" }}
                  </div>
                  <div class="tour-desc">{{ desc }}</div>
                </div>
              </v-col>
              <v-col>
                <div class="d-flex offers-list">
                  <div class="included-services" v-if="included">
                    <h4 class="services-title">
                      {{ $t("tour_item.header.included.title") }}:
                    </h4>
                    <div
                      class="included-item"
                      v-for="(item, i) in included"
                      :key="i"
                    >
                      <span>{{ item.included_name }}</span>
                    </div>
                  </div>
                  <div class="not-included-services" v-if="not_included">
                    <h4 class="services-title">
                      {{ $t("tour_item.header.not_included.title") }}:
                    </h4>
                    <div
                      class="not-included-item"
                      v-for="(item, i) in not_included"
                      :key="i"
                    >
                      <span>{{ item.not_included_name }}</span>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>

            <h1 class="text-center">
              <img
                src="../assets/icons/route.svg"
                width="32px"
                style="vertical-align: -5px; "
                alt
              />
              {{ $t("tour_item.header.roadmap") }}
            </h1>
            <div class="d-flex justify-space-between">
              <div class="arrival">
                <strong>
                  <img src="../assets/icons/departures.svg" width="18px" />
                  {{ $t("tour_item.header.arrival") }}:
                </strong>
                <span>{{ arrival }}</span>
              </div>
              <div class="departure">
                <strong>
                  <img src="../assets/icons/arrivals.svg" width="18px" />
                  {{ $t("tour_item.header.departure") }}:
                </strong>
                <span>{{ departure }}</span>
              </div>
            </div>

            <div>
              <swiper
                :options="swiperOption"
                class="tour-single-swiper show-on-mobile mt-6"
              >
                <swiper-slide v-for="(item, i) in slices" :key="i">
                  <v-row>
                    <v-col cols="12">
                      <div class="tour-single-img">
                        <img :src="item.primary.image_banner.url" alt />
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <div class="tour-single-title d-flex">
                        <div>
                          <div class="day-label">
                            {{ $t("tour_item.header.day") }}:
                          </div>
                          <div class="day-number">
                            0{{ item.primary.day_number }}
                          </div>
                        </div>
                        <h3>{{ item.primary.destination_name[0].text }}</h3>
                      </div>
                      <div class="tour-single-desc">
                        {{ item.primary.description[0].text }}
                      </div>
                    </v-col>
                  </v-row>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
              <div
                v-for="(item, i) in slices"
                :key="i"
                class="tour-single hide-on-mobile"
              >
                <v-row>
                  <v-col cols="3">
                    <div class="tour-single-img">
                      <img :src="item.primary.image_banner.url" alt />
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <div class="tour-single-title d-flex">
                      <div>
                        <div class="day-label">
                          {{ $t("tour_item.header.day") }}:
                        </div>
                        <div class="day-number">
                          0{{ item.primary.day_number }}
                        </div>
                      </div>
                      <h3>{{ item.primary.destination_name[0].text }}</h3>
                    </div>
                    <div class="tour-single-desc">
                      {{ item.primary.description[0].text }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <v-dialog v-model="dialog" max-width="400">
      <v-form>
        <v-container>
          <h1>{{ name }}</h1>
          <p>{{ $t("tour_item.form.subtitle") }}</p>
          <form action="https://formspree.io/xknondeb" method="post">
            <v-row>
              <input
                type="text"
                style="display: none"
                name="tour-name"
                :value="name"
              />
              <v-col cols="12">
                <input
                  type="text"
                  name="name"
                  :placeholder="$t('inputs.nameInput')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <input
                  type="email"
                  name="email"
                  :placeholder="$t('inputs.emailInput')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <input
                  type="phone"
                  name="phone-number"
                  :placeholder="$t('inputs.phoneInput')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <button class="custom custom-success" type="submit">
                  {{ $t("inputs.sendBtn") }}
                </button>
              </v-col>
            </v-row>
          </form>
        </v-container>
      </v-form>
    </v-dialog>
  </v-app>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  inject: ["theme"],
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    currentLang() {
      if (this.$store.state.language.language == "en") {
        return "en-us";
      } else return this.$store.state.language.language;
    }
  },
  data() {
    return {
      loading: false,
      dialog: false,
      name: null,
      image: null,
      desc: null,
      people: null,
      price: null,
      duration: null,
      distance: null,
      arrival: null,
      departure: null,
      color: null,
      included: null,
      not_included: null,
      slices: [],
      alternativeLang: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },

  methods: {
    getTour(tour_id) {
      let id = tour_id || this.$route.params.id;
      this.loading = true;
      console.log(this.loading);
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.id", id), {
          lang: "*"
        })
        .then((response) => {
          const data = response.results[0].data;

          this.name = data.name[0].text;
          this.desc = data.description[0].text;
          this.people = data.group_size[0].text || data.group_size;
          this.image = data.image;
          this.distance = data.distance;
          this.arrival = data.arrival;
          this.departure = data.departure;
          this.price = data.price;
          this.duration = data.duration;
          this.color = data.tour_color;
          this.slices = data.body;
          this.alternativeLang = response.results[0].alternate_languages;
          this.included = data.included_list;
          this.not_included = data.not_included_list;
        });

      this.loading = false;
      console.log(this.loading);
    }
  },
  watch: {
    currentLang(newValue) {
      this.alternativeLang.map((el) => {
        if (el.lang == newValue) {
          this.getTour(el.id);
        }
      });
    }
  },

  created() {
    this.getTour();
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

.tour-details {
  padding: 16px 0;
  width: 60%;
}

.tour-img {
  width: 40%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.tour-item-about {
  transform: translateY(-10vh);
}

.tours-parallax {
  background-color: rgba(0, 0, 0, 0.12);
  position: relative;
}

.tours-parallax:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  mix-blend-mode: multiply;
  background-color: rgba(0, 5, 133, 0.47);
  z-index: 2;
}

.tour-single-title {
  h3 {
    font-size: 24px;
  }
}

.duration-label,
.price-label {
  font-size: 14px;
  margin-bottom: 0px !important;
}

.duration-text,
.price-text {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 0 !important;
}

.tour-item {
  color: #432a49;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  margin-bottom: 24px;

  .custom {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 12px 48px;
    font-size: 16px;
  }

  .tour-footer {
    position: absolute;
    bottom: 0;
    width: 700px;
  }

  .tour-details {
    padding: 16px 0;
    width: 100%;
  }

  .tour-img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .tour-date {
    font-size: 14px;
    color: #878ac6;
    text-transform: lowercase;
    font-weight: bold;
  }

  .tour-name {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .tour-desc {
    font-size: 14px;
    width: 70%;
  }
}
.swiper-wrapper {
  padding-top: 70px !important;
}

.tour-single {
  .tour-single-img {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.tour-single-swiper {
  .swiper-button-prev {
    right: 60px !important;
    left: auto;
    transform: rotate(180deg);
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 20px;
    background-image: url("../assets/icons/arrow-point-to-right.svg");
  }

  .tour-single-img {
    width: 100%;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.arrival {
  strong {
    margin-right: 8px;
  }
}
.departure {
  strong {
    margin-right: 8px;
  }
}

.tour-big-details {
  border-radius: 15px 0px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);

  .tour-header {
    background: #432a49;
    color: #fff;
    font-size: 14px;
    padding: 24px 48px;
    border-radius: 15px 0;

    .custom {
      margin-top: -12px;
      margin-bottom: -12px;
    }

    strong {
      text-transform: uppercase;
      margin-right: 8px;
      font-size: 14px;
    }
  }

  .tour-big-content {
    padding: 24px 64px;

    .tour-date {
      margin-bottom: 16px;
      color: #63d66e;
      font-weight: bold;
    }

    .tour-single-desc {
      padding-right: 2rem;
      font-size: 14px !important;
    }

    .tour-single-title {
      font-weight: bold;

      h3 {
        font-size: 24px !important;
        padding-left: 12px;
        margin-top: 5px;
      }
    }

    .day-label {
      font-size: 13px;
    }

    .day-number {
      color: #63d66e;
      font-size: 24px;
    }

    .scroll-area {
      height: 300px;
    }

    .services-title {
      color: #432a49;
      margin-bottom: 12px;
      text-align: left !important;
    }

    .offers-list {
      width: 500px;
    }

    .included-services {
      padding-left: 24px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      width: 50%;

      .included-item {
        position: relative;
        margin-bottom: 6px;
        text-align: left;
        width: 200px;

        span {
          margin-left: 32px;
          font-size: 14px;
        }
        &:before {
          content: url("../assets/icons/tick-inside-circle.svg");
          font-size: 24px;
          color: #432a49;
          width: 18px;
          height: 18px;
          position: absolute;
          left: 0;
          top: -5px;
        }
      }
    }

    .not-included-services {
      padding-left: 24px;
      margin: 0 auto;
      width: 50%;
      display: flex;
      flex-direction: column;

      .not-included-item {
        text-align: left;
        margin-bottom: 6px;
        position: relative;
        width: 200px;
        span {
          font-size: 14px;
          margin-left: 32px;
        }

        &:before {
          content: url("../assets/icons/multiply1.svg");
          font-size: 24px;
          color: #878ac6;
          width: 18px;
          height: 18px;
          position: absolute;
          left: 0;
          top: -5px;
        }
      }
    }
  }
}

.about-tour {
  .tour-name {
    color: #432a49;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .tour-desc {
    font-size: 14px;
  }
}

@media screen and (max-width: 576px) {
  .v-form {
    padding: 24px;
  }

  .offers-list {
    flex-direction: column;
    width: 100% !important;
  }

  .included-services,
  .not-included-services {
    width: 100% !important;
  }

  .v-parallax__content {
    h1 {
      font-size: 24px !important;
    }
  }

  .tour-single-title {
    flex-direction: column;

    div {
      display: flex;

      .day-number {
        font-size: 18px !important;
        margin-left: 8px;
      }
    }
    h3 {
      font-size: 24px !important;
      padding-left: 0 !important;
    }
  }

  .tour-single-desc {
    font-size: 14px;
  }

  .tour-big-content {
    padding: 12px !important;
    & > .d-flex {
      flex-direction: column;
      padding-left: 24px;
    }

    & > h1 {
      font-size: 24px;
      margin-bottom: 12px !important;
    }
  }
}
</style>
