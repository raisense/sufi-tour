<template>
  <div>
    <v-app-bar app class="elevation-0" dark>
      <v-container class="py-0">
        <div class="d-flex">
          <router-link :to="`/`">
            <v-img
              alt="Sufi Tour"
              class="shrink mr-2"
              contain
              src="../assets/logo.svg"
              transition="slide-y-transition"
              width="120"
            />
          </router-link>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hide-on-mobile">
            <router-link class="elevation-0" :to="`/golden-chain`" text>{{ $t("navigation.about") }}</router-link>
            <router-link class="elevation-0" :to="`/gallery`" text>
              {{
              $t("navigation.gallery")
              }}
            </router-link>
            <router-link
              class="elevation-0"
              :to="this.$route == '/' ? '#feedback' : '/'"
              v-scroll-to="'#feedback'"
              text
            >{{ $t("navigation.feedback") }}</router-link>
            <router-link class="elevation-0" to="contact" text>{{ $t("navigation.contact_us") }}</router-link>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <LanguagePicker class="hide-on-mobile"></LanguagePicker>
            <a href="tel:+998 90 123 45 67" class="hide-on-mobile phone-number">+998 93 184 83 93</a>

            <v-app-bar-nav-icon
              :ripple="false"
              class="show-on-mobile"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </v-toolbar-items>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute dark temporary>
      <v-list-item>
        <v-img
          alt="Sufi Tour"
          class="shrink mr-2"
          contain
          src="../assets/logo.svg"
          transition="slide-y-transition"
          width="120"
        ></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <router-link class="elevation-0" :to="`/golden-chain`">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                {{
                $t("navigation.about")
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link
          class="elevation-0"
          :to="`/tours`"
          v-scroll-to="'#about'"
          @click.stop="drawer = false"
        >
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                {{
                $t("navigation.gallery")
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link
          class="elevation-0"
          :to="this.$route == '/' ? '#about' : '/'"
          v-scroll-to="'#about'"
          @click.stop="drawer = false"
        >
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                {{
                $t("navigation.contact_us")
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link
          class="elevation-0"
          :to="this.$route == '/' ? '#about' : '/'"
          v-scroll-to="'#about'"
          @click.stop="drawer = false"
        >
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>
                {{
                $t("navigation.feedback")
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <LanguagePicker></LanguagePicker>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.v-app-bar {
  position: static;
  background-color: #432a49;
}

.v-toolbar__items {
  a {
    text-transform: lowercase;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    position: relative;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
  a.router-link-active:before {
    content: none;
    // position: absolute;
    // bottom: -5px;
    // width: 20px;
    // height: 1.2px;
    // background-color: #fff;
  }
}

.phone-number {
  font-size: 14px;
  margin-right: 0 !important;
  margin-left: 12px;
}

.v-navigation-drawer__content {
  a {
    text-decoration: none;
  }
}
</style>

<script>
import LanguagePicker from "./LanguagePicker";
export default {
  components: {
    LanguagePicker
  },
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
  },
  methods: {
    reloadPage() {
      this.$router.go();
    }
  }
};
</script>
