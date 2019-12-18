<template>
  <!-- <div class="hero"> -->
  <v-parallax class="hero" src="../assets/hero-img.png">
    <div class="hero-content">
      <h1 class="hero-title">What you seek is seeking you.</h1>
      <h1 class="hero-subtitle">Group travels across uzbekistan</h1>
      <div class="counters mt-12 d-flex justify-space-between">
        <div class="counter-item text-center">
          <div class="counter-item__number">1327+</div>
          <div class="counter-item__text">traveled</div>
        </div>
        <div class="counter-item text-center">
          <div class="counter-item__number">38+</div>
          <div class="counter-item__text">contries</div>
        </div>
        <div class="counter-item text-center">
          <div class="counter-item__number">13+</div>
          <div class="counter-item__text">sufi saints</div>
        </div>
      </div>
      <div class="scroll-btn">
        <a href="#" v-scroll-to="'#tours'">see our tours</a>
        <div class="icon-scroll"></div>
      </div>
    </div>
  </v-parallax>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.hero {
  height: 100vh !important;
}

.hero:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  mix-blend-mode: multiply;
  background-color: rgba(0, 5, 133, 0.47);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.hero-title {
  text-transform: uppercase;
  font-size: 45px;
  line-height: 55px;
}

.scroll-btn {
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
  }

  .icon-scroll {
    margin-bottom: 24px;
    transform: translateX(4px);
  }
}

.hero-subtitle {
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: normal;
}

.counters {
  width: 400px;

  .counter-item__number {
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
  }

  .counter-item__text {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
  }
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 30px;
  height: 50px;
  margin-left: -20px;
  bottom: 10px;
  margin-top: -35px;
  border: 2px solid #fff;
  border-radius: 25px;
}
@media (max-width: 767px) {
  .icon-scroll {
    position: relative;
  }
}
.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(26px);
  }
}
</style>

<script>
export default {};
</script>
