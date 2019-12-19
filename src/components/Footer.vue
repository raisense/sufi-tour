<template>
  <div class="footer" id="contact-us">
    <v-container>
      <RequestComponent></RequestComponent>
      <div class="wrapper">
        <v-row>
          <v-col>
            <div class="footer-logo">
              <img src="../assets/logo.svg" alt />
              <p>© Copyright {{new Date().getFullYear()}} Sufi Tour. {{$t("footer.copyright")}}</p>
            </div>
          </v-col>
          <v-col class="d-flex justify-center">
            <div class="footer-nav">
              <ul>
                <li>
                  <a href="#">{{$t("navigation.tours")}}</a>
                </li>
                <li>
                  <a href="#">{{$t("navigation.about")}}</a>
                </li>
                <li>
                  <a href="#">{{$t("navigation.feedback")}}</a>
                </li>
                <li>
                  <a href="#">{{$t("navigation.contact_us")}}</a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="d-flex justify-end">
            <div class="social-networks">
              <p>{{$t("footer.social")}}</p>
              <div d-flex>
                <a href="#" class="p-4">
                  <img src="../assets/icons/fb.svg" alt />
                </a>
                <a href="#" class="p-4">
                  <img src="../assets/icons/twitter.svg" alt />
                </a>
                <a href="#" class="p-4">
                  <img src="../assets/icons/instagram.svg" alt />
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
        <p align="center">Designed by RAISENSE LLC</p>
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
