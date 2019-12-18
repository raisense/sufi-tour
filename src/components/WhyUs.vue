<template>
  <section class="why-us">
    <v-container>
      <div class="wrapper">
        <h1>WHY US?</h1>
        <h4>
          Sufi Tour conduct surveys and research on quality of our services. We
          make sure to provide you high-end quality tours by leaving you
          concentration on your goal from travel.
        </h4>

        <v-row>
          <v-col sm="12" md="3">
            <div class="card">
              <div class="card-icon">
                <img src="../assets/icons/verified.svg" alt="" />
              </div>
              <div class="card-title">Safety</div>
              <div class="card-desc">
                we think safety is most important aspect of travel
              </div>
            </div>
          </v-col>
          <v-col sm="12" md="3">
            <div class="card">
              <div class="card-icon">
                <img src="../assets/icons/transportation.svg" alt="" />
              </div>
              <div class="card-title">Transportation</div>
              <div class="card-desc">
                we think safety is most important aspect of travel
              </div>
            </div>
          </v-col>
          <v-col sm="12" md="3">
            <div class="card">
              <div class="card-icon">
                <img src="../assets/icons/hotel.svg" alt="" />
              </div>
              <div class="card-title">Hotels</div>
              <div class="card-desc">
                we think safety is most important aspect of travel
              </div>
            </div>
          </v-col>
          <v-col sm="12" md="3">
            <div class="card">
              <div class="card-icon">
                <img src="../assets/icons/tour-guide.svg" alt="" />
              </div>
              <div class="card-title">Guides</div>
              <div class="card-desc">
                we think safety is most important aspect of travel
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <RequestComponent></RequestComponent>
  </section>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 12px 18px;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(67, 42, 73, 0.2);
  border-radius: 5px;

  .card-icon {
    height: 89px;
    display: flex;
    align-items: center;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
    line-height: 17px;
    text-align: center;
    text-transform: capitalize;
    color: #432a49;
    margin-bottom: 16px;
  }

  .card-desc {
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    font-weight: normal;
    color: #767676;
  }
}

.why-us {
  text-align: center;

  h1 {
    line-height: 39px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: normal;
    margin-bottom: 40px;
  }
}
</style>

<script>
import RequestComponent from "../components/RequestComponent";

export default {
  components: {
    RequestComponent
  },
  methods() {
    return {
      getImageUrl(img) {
        let images = require.context("../assets/", false, /\.png$/);
        return images("./" + img + ".png");
      }
    };
  }
};
</script>
