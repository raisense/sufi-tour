<template>
  <v-app>
    <!-- <v-parallax height="400" class="tours-parallax" src="../assets/bg.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">UPCOMING TOURS</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="tours-list-big upcoming-tours">
      <v-container>
        <div class="tour-item d-flex flex-sm-row" v-for="(item, i) in 3" :key="i">
          <div class="tour-img">
            <img src="../assets/card-1.png" alt />
          </div>
          <div class="tour-details pl-8">
            <div class="tour-date">DECEMBER 12 - 24</div>
            <div class="tour-name">Salvation tour</div>
            <div class="tour-desc">
              This tour is about seven days of salvation of your soul. During
              tour you will be brought to 2 religion centers and 7 out of 13
              sufi saints.
            </div>
            <div class="tour-footer">
              <v-row>
                <v-col cols="3">
                  <p class="duration-label">duration:</p>
                  <p class="duration-text">7 days / 6 nights</p>
                </v-col>
                <v-col cols="3">
                  <p class="price-label">price:</p>
                  <p class="price-text">from $ 450</p>
                </v-col>
              </v-row>
            </div>
          </div>
          <button class="custom custom-success">
            <router-link :to="'/tours/' + i + 1">details</router-link>
          </button>
        </div>
      </v-container>
    </div>-->
    <v-parallax height="400" class="tours-parallax" src="../assets/bg-2.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">ALL TOURS</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="tours-list-big upcoming-tours">
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
        <div
          class="tour-item d-flex flex-sm-row"
          v-for="(item, i) in tours"
          :key="i"
        >
          <div class="tour-img">
            <img :src="item.data.image.url" alt />
          </div>
          <div class="tour-details pl-8">
            <div class="tour-date">
              {{ getDifference(item.data.start_date, item.data.end_date) }}
            </div>
            <div class="tour-name">{{ item.data.name[0].text }}</div>
            <div class="tour-desc">
              {{ item.data.description[0].text | truncate(194) }}
            </div>
            <div class="tour-footer">
              <v-row>
                <v-col cols="3">
                  <p class="duration-label">duration:</p>
                  <p class="duration-text">
                    {{ getDuration(item.data.start_date, item.data.end_date) }}
                    days
                  </p>
                </v-col>
                <v-col cols="3">
                  <p class="price-label">price:</p>
                  <p class="price-text">from ${{ item.data.price }}</p>
                </v-col>
              </v-row>
            </div>
          </div>
          <router-link :to="`/tours/${item.id}`">
            <button class="custom custom-success">details</button>
          </router-link>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  inject: ["theme"],
  data() {
    return {
      loading: false,
      tours: null
    };
  },
  filters: {
    truncate: function(text, stop, clamp) {
      return text.slice(0, stop) + (stop < text.length ? clamp || "..." : "");
    }
  },
  computed: {},
  methods: {
    getAllTours() {
      this.loading = true;
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "tour"))
        .then((response) => {
          this.tours = JSON.parse(JSON.stringify(response.results));
          this.loading = false;
        });
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

  created() {
    this.getAllTours();
  },

  mounted() {
    console.log(this.tours);
  }
};
</script>

<style lang="scss">
.upcoming-tours {
  transform: translateY(-10vh);
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
    min-height: 240px;
    max-width: 40%;

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
</style>
