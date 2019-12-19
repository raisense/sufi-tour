<template>
  <v-container id="tours">
    <section class="tours">
      <div class="section-header d-flex justify-space-between mb-12">
        <h3 class="section-title">: {{$t("navigation.tours")}}</h3>
        <router-link to="/tours">
          <span>all tours</span>
          <img src="../assets/icons/arrow-point-to-right.svg" alt />
        </router-link>
      </div>
      <div class="tour-cards">
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3">
            <div class="tour-card">
              <div class="tour-card__img">
                <img src="../assets/card-1.png" alt />
              </div>
              <div class="tour-card__desc">
                <p class="tour-card__title">Salvation tour</p>
                <v-row class="tour-card__additional justify-space-around">
                  <v-col class="py-1">DAYS: 7</v-col>
                  <v-col class="py-1">PRICE: 450$</v-col>
                </v-row>
              </div>
            </div>
          </v-col>
          <v-col xs="12" sm="6" md="4" lg="3">
            <div class="tour-card">
              <div class="tour-card__img">
                <img src="../assets/card-2.png" alt />
              </div>
              <div class="tour-card__desc">
                <p class="tour-card__title">Salvation tour</p>
                <v-row class="tour-card__additional justify-space-around">
                  <v-col class="py-1">DAYS: 7</v-col>
                  <v-col class="py-1">PRICE: 450$</v-col>
                </v-row>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <div class="tour-card">
              <div class="tour-card__img">
                <img src="../assets/card-3.png" alt />
              </div>
              <div class="tour-card__desc">
                <p class="tour-card__title">Salvation tour</p>
                <v-row class="tour-card__additional justify-space-around">
                  <v-col class="py-1">DAYS: 7</v-col>
                  <v-col class="py-1">PRICE: 450$</v-col>
                </v-row>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3">
            <div class="tour-card">
              <div class="tour-card__img">
                <img src="../assets/card-1.png" alt />
              </div>
              <div class="tour-card__desc">
                <p class="tour-card__title">Salvation tour</p>
                <v-row class="tour-card__additional justify-space-around">
                  <v-col class="py-1">DAYS: 7</v-col>
                  <v-col class="py-1">PRICE: 450$</v-col>
                </v-row>
              </div>
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
      latest: []
    };
  },
  methods: {
    getLatestTours() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "tour"))
        .then(response => {
          this.latest = JSON.parse(JSON.stringify(response.results));
        });
    }
  }
};
</script>
