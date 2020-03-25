<template>
  <div>
    <div class="dropdown hide-on-mobile">
      <v-menu bottom :offset-y="true" left>
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on" :ripple="false">
            <img class="lang" v-if="currentLanguage == 'en'" src="../assets/icons/en.svg" alt />
            <img class="lang" v-if="currentLanguage == 'ru'" src="../assets/icons/ru.svg" alt />
            <img class="lang" v-if="currentLanguage == 'tr'" src="../assets/icons/tr.svg" alt />
            <img class="lang" v-if="currentLanguage == 'de'" src="../assets/icons/de.svg" alt />
            {{
            getLanguageName(currentLanguage)
            }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(lang, index) in getOtherLanguage"
            :key="index"
            v-on:click="changeLanguage(lang)"
            class="lang-btn"
          >
            <img class="lang" v-if="lang == 'en'" src="../assets/icons/en.svg" alt />
            <img class="lang" v-if="lang == 'ru'" src="../assets/icons/ru.svg" alt />
            <img class="lang" v-if="lang == 'tr'" src="../assets/icons/tr.svg" alt />
            <img class="lang" v-if="lang == 'de'" src="../assets/icons/de.svg" alt />
            <v-list-item-title>
              {{
              getLanguageName(lang)
              }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="radioLang show-on-mobile">
      <v-list>
        <v-list-item
          v-for="(lang, index) in getAllLanguage"
          :key="index"
          v-on:click="changeLanguage(lang)"
          class="lang-btn"
          :class="{active: currentLanguage == lang}"
        >
          <img class="lang" v-if="lang == 'en'" src="../assets/icons/en.svg" alt />
          <img class="lang" v-if="lang == 'ru'" src="../assets/icons/ru.svg" alt />
          <img class="lang" v-if="lang == 'tr'" src="../assets/icons/tr.svg" alt />
          <img class="lang" v-if="lang == 'de'" src="../assets/icons/de.svg" alt />
          <v-list-item-title>
            {{
            getLanguageName(lang)
            }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "languagePicker",
  data() {
    return {
      dropdown: false
    };
  },
  computed: {
    currentLanguage() {
      return this.$store.state.language.language || this.$i18n.locale || "en";
    },

    getOtherLanguage() {
      switch (this.currentLanguage) {
        case "en":
          return ["ru", "tr", "de"];
        case "ru":
          return ["en", "tr", "de"];
        case "tr":
          return ["en", "ru", "de"];
        case "de":
          return ["en", "ru", "tr"];
      }
    },
    getAllLanguage() {
      return ["en", "ru", "tr", "de"];
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("language/setLanguage", lang);

      // this.$router.go();
    },

    getLanguageName(lang) {
      switch (lang) {
        case "tr":
          return "türkçe";
        case "en":
          return "english";
        case "ru":
          return "русский";
        case "de":
          return "deutsche";
      }
    }
  }
};
</script>

<style lang="scss" scoped >
.dropdown button {
  text-transform: lowercase;
  background-color: transparent !important;
  box-shadow: none;
  padding-top: 0 !important;
  display: flex !important;
  align-items: flex-start !important;
  margin-top: -7px;
  font-weight: normal;

  &:before {
    content: none;
  }
}
.v-ripple__container {
  display: none !important;
  opacity: 0 !important;
}

.dropdown {
  float: right;
  overflow: hidden;
}
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 0 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
.dropdown-content {
  /* display: none; */
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  font-size: 14px;
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}

.v-list-item__title {
  font-size: 14px;
}

.lang-btn {
  display: flex !important;
  align-items: center;
  color: #432a49 !important;
}

.lang {
  width: 24px;
  margin-right: 8px;
}

.radioLang .active {
  background: #432a49;
}
/* 
.dropdown-content a:active .dropdown-content {
  display: none;
} */

/* .dropdown:hover .dropdown-content {
  display: block;
} */
</style>
