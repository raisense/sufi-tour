<template>
  <div class="feedbacks">
    <div class="feedback-header"></div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, i) in feedbacks" :key="i">
        <div class="feedback-item">
          <div class="feedback-author d-flex">
            <div class="feedback-author__img">
              <img :src="item.data.image.url" alt />
            </div>
            <div class="feedback-author__info d-flex flex-column justify-center">
              <p class="author-name">{{item.data.client_name}}</p>
              <p class="author-desc">{{item.data.description}}</p>
              <hr class="line" />
            </div>
          </div>
          <div class="feedback-content">{{item.data.feedback_content}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.feedback-author {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.line {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em auto;
  padding: 0;
  width: 100px;
}

.feedback-item {
  box-sizing: border-box;
  padding: 25px 9px;

  .feedback-author__info {
    .author-name {
      margin-top: 16px;
      font-weight: bold;
      color: #432a49;
      font-size: 16px;
      margin-bottom: 6px;
    }

    .author-desc {
      font-size: 14px;
      color: #767676;
      margin-bottom: 0;
    }
  }

  .feedback-content {
    text-align: center;
    padding-top: 12px;
    color: #767676;
    font-size: 14px;
  }

  .feedback-author__img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 16px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}

.swiper-container {
  height: auto !important;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  min-height: 200px;
  background-color: #fff;
  border: 1px solid rgba(67, 42, 73, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 15px;
}

.swiper-control {
  position: relative;
}

.swiper-button-prev,
.swiper-button-next {
  background-size: contain;
  background-image: url("../assets/icons/arrow-point-to-right.svg");
  width: 16px;
  top: -100px;
}
.swiper-button-prev {
  right: 40px;
  left: auto;
  transform: rotate(180deg);
}

.swiper-container {
  overflow-y: inherit !important;
  overflow-x: hidden !important;
}
</style>

<script>
// require styles
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      feedbacks: null,
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 30,
        noSwiping: true,
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
    getFeedbacks() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "feedback"), {
          lang: this.currentLang
        })
        .then(response => {
          this.feedbacks = response.results;
        });
    }
  },
  watch: {
    currentLang(newValue) {
      this.getFeedbacks();
    }
  },

  created() {
    this.getFeedbacks();
  }
};
</script>
