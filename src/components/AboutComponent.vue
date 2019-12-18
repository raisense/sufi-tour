<template>
  <v-container id="about">
    <section class="about-list full-section py-12">
      <div class="section-header d-flex justify-space-between mb-12">
        <h3 class="section-title">: about</h3>
      </div>

      <div class="about-item">
        <v-row>
          <v-col xs="12" sm="6">
            <div class="about-item__details pr-12">
              <p class="about-item__title">Uzbekistan</p>
              <p class="about-item__desc">
                Uzbekistan is famous with sufi saints such as Jalaliddin Rumi.
                Also, Uzbekistan is known as Bukhariah across islamic countries
                and it leads us to conclusion that Uzbekistan had many
                contributors in popularisation of islam and sufism to be
                precise. Islamic regions such as Bukhara, Khiva, Samarkand,
                Tashkent, Khorezm full of stories to tell you. Join our sufi
                tour and find more about sufi saints by yourself
              </p>
            </div>
          </v-col>
          <v-col xs="12" sm="6">
            <div class="about-item__image">
              <img src="../assets/about-img.png" alt />
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-container>
</template>

<style lang="scss" scoped>
.about-item {
  color: #432a49;

  .about-item__details {
    .about-item__title {
      font-weight: bold;
      font-size: 32px;
      line-height: 39px;
    }

    .about-item__desc {
      font-size: 14px;
      line-height: 24px;
    }

    .about-item__image img {
      width: 100%;
    }
  }
}
</style>

<script>
export default {};
</script>
