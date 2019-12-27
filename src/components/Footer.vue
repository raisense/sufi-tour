<template>
  <div class="footer" id="contact-us">
    <v-container>
      <RequestComponent></RequestComponent>
      <div class="wrapper">
        <v-row>
          <v-col cols="6" sm="4">
            <div class="footer-logo">
              <img src="../assets/logo.svg" alt />
              <p>
                © Copyright {{ new Date().getFullYear() }} Sufi Tour.
                {{ $t("footer.copyright") }}
              </p>
            </div>
          </v-col>
          <v-col class="d-flex justify-center" cols="6" sm="4">
            <div class="footer-nav">
              <ul>
                <li>
                  <a href="#">{{ $t("navigation.tours") }}</a>
                </li>
                <li>
                  <a href="#">{{ $t("navigation.about") }}</a>
                </li>
                <li>
                  <a href="#">{{ $t("navigation.feedback") }}</a>
                </li>
                <li>
                  <a href="#">{{ $t("navigation.contact_us") }}</a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="d-flex justify-center justify-sm-end" cols="12" sm="4">
            <div class="social-networks">
              <a
                href="tel:+998 90 123 45 67"
                class="phone-number"
                style="color: #f1f1f1; text-decoration:none; "
                >+998 71 252 13 35</a
              >
              <p class="text-center text-sm-left mt-2">
                {{ $t("footer.social") }}
              </p>
              <div d-flex>
                <a href="https://www.facebook.com/sufitouruz/" class="p-4">
                  <img src="../assets/icons/fb.svg" alt />
                </a>
                <a href="https://www.twitter.com/sufitouruz" class="p-4">
                  <img src="../assets/icons/twitter.svg" alt />
                </a>
                <a href="https://www.instagram.com/sufitour.uz/" class="p-4">
                  <img src="../assets/icons/instagram.svg" alt />
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
        <p class="mt-8 mt-sm-2" align="center">
          Designed by
          <a href="https://raisense.uz">RAISENSE LLC</a>
        </p>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: #432a49;
  color: #fff;
  font-size: 12px;
}

.footer-logo p {
  margin-top: 20px;
  width: 150px;
  color: #979797;
}

.footer-nav ul {
  list-style: none;
}

.footer-nav ul a {
  color: #979797;
}

.social-networks a {
  margin: 0 10px;
}

.social-networks a:first-child {
  margin-left: 0;
}
</style>

<script>
import RequestComponent from "../components/RequestComponent";
export default {
  components: {
    RequestComponent
  }
};
</script>
