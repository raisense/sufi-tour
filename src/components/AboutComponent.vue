<template>
  <v-container id="about">
    <section class="about-list full-section py-12">
      <div class="section-header d-flex justify-space-between mb-n8">
        <h3 class="section-title">: {{$t("navigation.about")}}</h3>
      </div>

      <swiper :options="swiperOption" class="tour-single">
        <swiper-slide v-for="(item, i) in aboutItems" :key="i">
          <div class="about-item">
            <div class="about-item__details pr-12">
              <p class="about-item__title">{{item.data.title[0].text}}</p>
              <div id="scroll-area">
                <smooth-scrollbar>
                  <richtext :desc="item.data.description"></richtext>
                </smooth-scrollbar>
              </div>
            </div>

            <div class="about-item__image">
              <img :src="item.data.image.url" alt />
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </section>
  </v-container>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Vue from "vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

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
    swiper,
    swiperSlide
  },
  data() {
    return {
      aboutItems: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        // simulateTouch: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
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
    getAbout() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "about"), {
          lang: this.currentLang
        })
        .then(response => {
          this.aboutItems = response.results;
        });
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

<style lang="scss" scoped>
#scroll-area {
  height: 500px;

  .scroll-content {
    padding-right: 24px;
  }
}

.about-item {
  color: #432a49;
  display: flex;

  .about-item__details {
    width: 50%;
  }

  .about-item__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
  }
}

.about-item__image {
  width: 50%;
  border-radius: 15px;
  overflow: hidden;
}
.about-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.swiper-button-prev {
  right: 60px !important;
  left: auto;
  transform: rotate(180deg);
}

.swiper-container {
  width: 100%;
  margin-top: 0px;
}

.swiper-button-prev,
.swiper-button-next {
  top: 20px;
  background-image: url("../assets/icons/arrow-point-to-right.svg");
}

.swiper-wrapper {
  padding-top: -20px !important;
}

.swiper-slide {
  padding-top: 50px;
}

@media screen and (max-width: 768px) {
  .about-item {
    flex-direction: column-reverse;
  }
  .about-item__details,
  .about-item__image {
    width: 100% !important;
  }

  .about-item__image {
    margin-bottom: 24px;
    height: 300px;
  }

  .about-item__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    text-align: center !important;
  }
}
</style>


