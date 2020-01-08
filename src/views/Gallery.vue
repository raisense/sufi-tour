<template>
  <div class="gallery">
    <v-parallax height="400" class="tours-parallax" src="../assets/bg-2.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">{{$t('gallery.title')}}</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-sheet
        v-if="loading"
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="py-0"
      >
        <v-row class="px-3">
          <v-col cols="12" sm="6" md="3" lg="4" v-for="(item, i) in 3" :key="i">
            <v-skeleton-loader class max-width="100%" type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-sheet>
      <div class="gallery-content">
        <v-row>
          <v-col cols="12" sm="6" md="3" lg="4" v-for="(item, i) in gallery" :key="i">
            <div class="gallery-item">
              <div class="gallery-img">
                <img :src="item.data.image.url" alt />
              </div>
              <p class="gallery-title" :title="item.data.title[0].text">
                <v-clamp autoresize :max-lines="1">{{item.data.title[0].text}}</v-clamp>
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.gallery-item {
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  //   overflow: hidden;

  .gallery-title {
    padding: 12px 24px;
    font-size: 13px;
    font-weight: bold;
  }
}
.gallery-img {
  height: 210px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>

<script>
export default {
  inject: ["theme"],

  data() {
    return {
      loading: false,
      gallery: null
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
    getGallery() {
      this.loading = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "gallery"), {
          lang: this.currentLang
        })
        .then(response => {
          this.gallery = response.results;
          this.loading = false;
        });
    }
  },

  watch: {
    currentLang(newValue) {
      this.getGallery();
    }
  },

  created() {
    this.getGallery();
  }
};
</script>