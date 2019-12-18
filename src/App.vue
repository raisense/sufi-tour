<template>
  <v-app>
    <Navigation />
    <router-view></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
  methods: {
    changeLang() {
      this.$vuetify.lang.current = "ru";
    }
  },
  created() {
    this.changeLang();
  }
};
</script>
