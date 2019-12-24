<template>
  <v-app>
    <div class="tour-inner">
      <v-parallax height="400" class="tours-parallax" :src="image.url">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-bold mb-4">{{ name }}</h1>

            <div class="tour-date">{{duration}}</div>
          </v-col>
        </v-row>
      </v-parallax>

      <div class="tour-item-about">
        <v-container>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            class="py-0"
          >
            <v-row class="px-3">
              <v-col xs="12" sm="6" md="5">
                <v-skeleton-loader class max-width="100%" type="image"></v-skeleton-loader>
              </v-col>
              <v-col xs="12" sm="6" md="7">
                <v-skeleton-loader class max-width="100%" type="article"></v-skeleton-loader>
                <v-skeleton-loader class max-width="100%" type="actions"></v-skeleton-loader>
              </v-col>
            </v-row>
          </v-sheet>
          <div class="tour-item d-flex flex-sm-row">
            <div class="tour-img">
              <img :src="image.url" :alt="name" />
            </div>
            <div class="tour-details pl-8">
              <div
                class="tour-name"
              >{{$i18n.locale == "en" ? "About " : $i18n.locale == "ru" ? "О " : ""}} {{ name }} {{$i18n.locale == 'tr' ? "hakkında" : ''}}</div>
              <div class="tour-desc">{{ desc }}</div>
            </div>
            <button
              class="custom custom-success"
              @click.stop="dialog = true"
            >{{$t("tour_item.btn")}}</button>
          </div>
        </v-container>
      </div>
      <v-container>
        <div class="tour-big-details">
          <div class="tour-header">
            <v-row>
              <v-col>
                <strong>{{$t("tour_item.header.ingroup")}}:</strong>
                <span>{{$tc("tour_item.header.people", people)}}</span>
              </v-col>
              <v-col>
                <strong>{{$t("tour_item.header.price")}}:</strong>
                <span>{{$i18n.locale == "en" ? "from " : $i18n.locale == "ru" ? "от " : ""}} $ {{ price }} {{$i18n.locale == 'tr' ? "'dan başlayan" : ''}}</span>
              </v-col>
              <v-col>
                <strong>{{$t("tour_item.header.duration")}}:</strong>
                <span>{{duration}}</span>
              </v-col>
              <v-col>
                <strong>{{$t("tour_item.header.duration")}}:</strong>
                <span>{{ distance }} KM</span>
              </v-col>
            </v-row>
          </div>
          <div class="tour-big-content">
            <h1 class="text-center">{{$t("tour_item.header.roadmap")}}</h1>
            <div class="d-flex justify-space-between">
              <div class="arrival">
                <strong>{{$t("tour_item.header.arrival")}}:</strong>
                <span>{{arrival}}</span>
              </div>
              <div class="departure">
                <strong>{{$t("tour_item.header.departure")}}:</strong>
                <span>{{departure}}</span>
              </div>
            </div>
            <div>
              <div v-for="(item, i) in slices" :key="i" class="tour-single">
                <v-row>
                  <v-col cols="5">
                    <div class="tour-single-img">
                      <img :src="item.primary.image_banner.url" alt />
                    </div>
                  </v-col>
                  <v-col cols="7">
                    <div class="tour-single-title d-flex">
                      <div>
                        <div class="day-label">{{$t("tour_item.header.day")}}:</div>
                        <div class="day-number">0{{ item.primary.day_number }}</div>
                      </div>
                      <h3>{{ item.primary.destination_name[0].text }}</h3>
                    </div>
                    <div class="tour-single-desc">{{ item.primary.description[0].text }}</div>
                  </v-col>
                </v-row>
              </div>

              <h4
                class="included-services-title text-center"
              >{{$t("tour_item.header.included.title")}}:</h4>
              <div class="included-services d-flex align-start justify-center">
                <div class="included-item">
                  <div class="included-item__img">
                    <img src="../assets/icons/hotel-blue.svg" alt />
                  </div>
                  <div class="included-item__desc">{{$t("tour_item.header.included.hotels")}}</div>
                </div>
                <div class="included-item">
                  <div class="included-item__img">
                    <img src="../assets/icons/flight-blue.svg" alt />
                  </div>
                  <div class="included-item__desc">{{$t("tour_item.header.included.flight")}}</div>
                </div>
                <div class="included-item">
                  <div class="included-item__img">
                    <img src="../assets/icons/food-blue.svg" alt />
                  </div>
                  <div class="included-item__desc">{{$t("tour_item.header.included.food")}}</div>
                </div>
                <div class="included-item">
                  <div class="included-item__img">
                    <img src="../assets/icons/transport-blue.svg" alt />
                  </div>
                  <div
                    class="included-item__desc"
                  >{{$t("tour_item.header.included.transportation")}}</div>
                </div>
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
          <p>Using this form we will proceed your registration further</p>
          <form action="https://formspree.io/xknondeb" method="post">
            <v-row>
              <input type="text" style="display: none" name="tour-name" :value="name" />
              <v-col cols="12">
                <input type="text" name="name" placeholder="your name" required />
              </v-col>
              <v-col cols="12">
                <input type="email" name="email" placeholder="your mail address" required />
              </v-col>
              <v-col cols="12">
                <input type="text" name="phone-number" placeholder="your phone number" required />
              </v-col>
              <v-col cols="12">
                <button class="custom custom-success" type="submit">send</button>
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
      slices: [],
      alternativeLang: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        simulateTouch: false,
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
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.id", id), {
          lang: "*"
        })
        .then(response => {
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
          console.log(this.alternativeLang);
        });

      this.loading = false;
    }
  },
  watch: {
    currentLang(newValue) {
      this.alternativeLang.map(el => {
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

@media screen and (max-width: 576px) {
  .v-form {
    padding: 24px;
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
    height: 100%;
    max-height: 300px;
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
    padding: 24px 48px;
    border-radius: 15px 0;

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
    }

    .tour-single-title {
      font-weight: bold;
      font-size: 42px;

      h3 {
        padding-left: 12px;
        margin-top: 5px;
      }
    }

    .day-label {
      font-size: 16px;
    }

    .day-number {
      color: #63d66e;
      font-size: 32px;
    }

    .scroll-area {
      height: 300px;
    }

    .included-services-title {
      color: #878ac6;
      margin: 12px 0;
    }

    .included-services {
      width: 300px;
      margin: 0 auto;

      .included-item {
        width: 100px;
        position: relative;
        &:not(:last-child):after {
          content: "+";
          font-size: 24px;
          color: #878ac6;
          width: 12px;
          height: 12px;
          position: absolute;
          right: -6px;
          top: 6px;
        }

        .included-item__img {
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .included-item__desc {
          font-size: 12px;
          text-align: center;
          text-transform: lowercase;
          color: #878ac6;
        }
      }
    }
  }
}
</style>
