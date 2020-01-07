<template>
  <div class="contact">
    <v-parallax height="400" class="tours-parallax" src="../assets/bg-2.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-bold mb-4">Contact Us</h1>

          <div class="tour-date">group travels across uzbekistan</div>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <div class="contact-content my-4">
        <v-row>
          <v-col class="green-bg">
            <h1 class="mb-4">Contact information</h1>
            <div class="adress-info mb-4">
              <img src="../assets/icons/placeholder-filled-point.svg" width="18" alt /> Bukhara street 26, Tashkent Asiatour 100123, Uzbekistan
            </div>
            <div class="phone-info mb-4">
              <img src="../assets/icons/telephone.svg" width="18" alt />+ 998 71 252 1335
            </div>
            <div class="email-info">
              <p>
                <img src="../assets/icons/global.svg" width="18" alt />
                <a href="#">www.asiatour.uz</a>
              </p>
              <p>
                <img src="../assets/icons/global.svg" width="18" alt />
                <a href="#">www.mototour.uz</a>
              </p>
              <p>
                <img src="../assets/icons/global.svg" width="18" alt />
                <a href="#">www.mice-tours.uz</a>
              </p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.929751389673!2d69.26847651521626!3d41.310391808728035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2406100bc7%3A0xa6947826fd57ff0a!2zMjYg0YPQu9C40YbQsCDQkdGD0YXQvtGA0L4sINCi0LDRiNC60LXQvdGCIDEwMDAyOSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1578319696212!5m2!1sru!2s"
              width="100%"
              height="300"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              class="my-2"
            ></iframe>
          </v-col>
          <v-col class="right-form">
            <v-form>
              <h1>Send Us A Message</h1>
              <p>{{ $t("tour_item.form.subtitle") }}</p>
              <form action="https://formspree.io/xknondeb" method="post">
                <v-row>
                  <v-col cols="12">
                    <input type="text" name="name" :placeholder="$t('inputs.nameInput')" required />
                  </v-col>
                  <v-col cols="12">
                    <input
                      type="email"
                      name="email"
                      :placeholder="$t('inputs.emailInput')"
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <input
                      type="phone"
                      name="phone-number"
                      :placeholder="$t('inputs.phoneInput')"
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <button class="custom custom-success" type="submit">{{ $t("inputs.sendBtn") }}</button>
                  </v-col>
                </v-row>
              </form>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.contact-content {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  input {
    border: 1px solid #e4e4e4;
    width: 80%;
  }
}

.green-bg {
  background-color: #432a43;
  color: #fff;
  padding: 12px 48px;

  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    vertical-align: -3px;
    margin-right: 8px;
  }
}

.right-form {
  padding-left: 32px;
}
</style>

<script>
export default {};
</script>