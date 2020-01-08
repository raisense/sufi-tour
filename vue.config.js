module.exports = {
  transpileDependencies: ["vuetify", "vue-clamp", "resize-detector"],
  publicPath: "/sufi-tour-front/",
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
