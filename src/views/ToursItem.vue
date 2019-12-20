<template>
  <v-app>
    <div class="tour-inner">
      <v-parallax height="400" class="tours-parallax" :src="image.url">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-bold mb-4">{{ name }}</h1>

            <div class="tour-date">{{getDifference(start, end)}}</div>
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
              <div class="tour-name">About {{ name }}</div>
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
                <span>$ {{ price }}</span>
              </v-col>
              <v-col>
                <strong>{{$t("tour_item.header.duration")}}:</strong>
                <span>{{$tc("tour_item.header.days", getDuration(start, end))}}</span>
              </v-col>
              <v-col>
                <strong>{{$t("tour_item.header.duration")}}:</strong>
                <span>{{ distance }} KM</span>
              </v-col>
            </v-row>
          </div>
          <div class="tour-big-content">
            <h1 class="text-center">{{$t("tour_item.header.roadmap")}}</h1>
            <div class="tour-date text-center">{{getDifference(start, end)}}</div>
            <!-- <div class="d-flex justify-space-between">
              <div class="arrival">
                <strong>{{$t("tour_item.header.arrival")}}:</strong>
                <span>Tashkent</span>
              </div>
              <div class="departure">
                <strong>{{$t("tour_item.header.departure")}}:</strong>
                <span>Khiva</span>
              </div>
            </div>-->
            <div>
              <swiper :options="swiperOption" class="tour-single">
                <swiper-slide v-for="(item, i) in slices" :key="i">
                  <v-row>
                    <v-col>
                      <div class="tour-single-img">
                        <img :src="item.primary.image_banner.url" alt />
                      </div>
                    </v-col>
                    <v-col>
                      <div class="tour-single-title d-flex">
                        <div>
                          <div class="day-label">{{$t("tour_item.header.day")}}:</div>
                          <div class="day-number">0{{ item.primary.day_number }}</div>
                        </div>
                        <h3>{{ item.primary.destination_name[0].text }}</h3>
                      </div>
                      <div class="scroll-area">
                        <smooth-scrollbar>
                          <div class="tour-single-desc">{{ item.primary.description[0].text }}</div>
                        </smooth-scrollbar>
                      </div>
                    </v-col>
                  </v-row>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
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
      start: null,
      end: null,
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
          this.image = data.image;
          this.people = data.group_size[0].text || data.group_size;
          this.distance = data.distance;
          this.start = data.start_date;
          this.end = data.end_date;
          this.price = data.price;
          this.color = data.tour_color;
          this.slices = data.body;
          this.alternativeLang = response.results[0].alternate_languages;
          console.log(this.alternativeLang);
        });

      this.loading = false;
    },
    getDuration(start, end) {
      const startDate = new Date(start).getTime(),
        endDate = new Date(end).getTime(),
        difference = (endDate - startDate) / (1000 * 3600 * 24);
      return difference;
    },
    getDifference(start, end) {
      const startMonth = new Date(start).getMonth();
      const startYear = new Date(start).getYear();
      const startDay = new Date(start).getDate();
      const endMonth = new Date(end).getMonth();
      const endYear = new Date(end).getYear();
      const endDay = new Date(end).getDate();

      if (startYear == endYear) {
        return `${startMonth}/${startDay} - ${endMonth}/${endDay}`;
      } else return start + " - " + end;
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
  max-height: 240px;
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
  }

  .tour-img {
    // width: 50%;

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
    max-height: 400px;
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
