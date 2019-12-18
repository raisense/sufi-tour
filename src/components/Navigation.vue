<template>
  <div>
    <v-app-bar app color="transparent" absolute class="elevation-0" dark>
      <v-container class="py-0">
        <div class="d-flex">
          <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              src="../assets/logo.svg"
              transition="slide-y-transition"
              width="120"
            />
          </router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hide-on-mobile">
            <router-link class="elevation-0" to="#about" v-scroll-to="'#about'" text>about</router-link>
            <router-link class="elevation-0" to="/tours" text>tours</router-link>
            <router-link class="elevation-0" to="#feedback" v-scroll-to="'#feedback'" text>feedbacks</router-link>
            <router-link
              class="elevation-0"
              :to="this.$route == '/' ? '#contact-us' : '/'"
              v-scroll-to="'#contact-us'"
              text
            >contact us</router-link>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn dark icon v-on="on">En</v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in languages" :key="i" @click.stop>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <a href="tel:+998 90 123 45 67" class="hide-on-mobile">+998 90 123 45 67</a>

            <v-app-bar-nav-icon class="show-on-mobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </v-toolbar-items>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute dark temporary>
      <v-list-item>
        <v-img src="../assets/logo.svg"></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>
              <router-link class="elevation-0" to="/about" text>about</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.v-toolbar__items {
  a {
    text-transform: lowercase;
    font-weight: normal;
    color: #fff;
    text-decoration: none;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  a.router-link-active:before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 20px;
    height: 1.2px;
    background-color: #fff;
  }
}
</style>

<script>
export default {
  data() {
    return {
      languages: [
        {
          title: "en"
        },
        {
          title: "uz"
        },
        {
          title: "ru"
        }
      ],
      drawer: null
    };
  }
};
</script>
