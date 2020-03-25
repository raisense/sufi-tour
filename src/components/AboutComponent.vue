<template>
  <div class="about-content">
    <h1 class="loader text-center" v-if="loading == true">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </h1>
    <div class="tour-single" v-if="loading != true">
      <div class="about-item">
        <div class="about-item__details">
          <p class="about-item__title">{{ item.data.title[0].text }}</p>

          <richtext :desc="item.data.description"></richtext>
          <div class="about-item__image">
            <img :src="item.data.image.url" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
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
  props: ["itemId"],

  data() {
    return {
      loading: false,
      currentItem: null,
      item: [],
      id: this.itemId
    };
  },
  computed: {
    currentLang() {
      if (this.$store.state.language.language == "en") {
        return "en-us";
      } else if (this.$store.state.language.language == "de") {
        return "de-de";
      } else return this.$store.state.language.language;
    }

    // sortedList() {
    //   return _.orderBy(this.tems, "data.order");
    // }
  },
  methods: {
    getItem() {
      this.loading = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.id", this.itemId), {
          lang: this.currentLang
        })
        .then(response => {
          this.item = response.results[0];
          this.loading = false;
        });
    }
  },
  watch: {
    currentLang(newValue) {
      this.getItem();
    },

    itemId(newValue) {
      this.getItem();
    }
  }
};
</script>

<style lang="scss" scoped>
.loader {
  position: sticky;
  top: 100px;
}

.about-content {
  margin-left: 32px;
  width: 100%;
}
.about-item {
  color: #432a49;
  display: flex;

  .about-item__details {
    width: 100%;
  }

  .about-item__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
  }
}

.about-item__image {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 16px;
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
  .about-content {
    width: 100% !important;
    margin-left: 0 !important;
  }
  .about-item {
    flex-direction: column-reverse;
  }
  .about-item__details,
  .about-item__image {
    width: 100% !important;
    padding-right: 0 !important;
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
