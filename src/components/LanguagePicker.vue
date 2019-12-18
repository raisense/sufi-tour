<template>
  <div class="dropdown">
    <button class="dropbtn" @click="dropdown = !dropdown">
      {{
        currentLanguage == "tr"
          ? "türkçe"
          : currentLanguage == "en"
          ? "english"
          : "русский"
      }}
      <!-- {{ $t("language_picker_helper") }} -->
    </button>
    <div class="dropdown-content" v-if="dropdown">
      <a
        v-for="(lang, index) in getOtherLanguage"
        :key="index"
        v-on:click="changeLanguage(lang)"
        class="lang-btn"
      >
        <img
          class="lang"
          v-if="lang == 'en'"
          src="../assets/icons/en.svg"
          alt=""
        />
        <img
          class="lang"
          v-if="lang == 'ru'"
          src="../assets/icons/ru.svg"
          alt=""
        />
        <img
          class="lang"
          v-if="lang == 'tr'"
          src="../assets/icons/tr.svg"
          alt=""
        />
        <span>
          {{
            lang == "tr" ? "türkçe" : lang == "en" ? "english" : "русский"
          }}</span
        >
      </a>
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
      return this.$store.state.language.language;
    },
    getOtherLanguage() {
      switch (this.currentLanguage) {
        case "en":
          return ["ru", "tr"];
        case "ru":
          return ["en", "tr"];
        case "tr":
          return ["en", "ru"];
      }
    }
  },
  methods: {
    changeLanguage(lang) {
      this.dropdown = false;
      this.$i18n.locale = lang;
      this.$store.dispatch("language/setLanguage", lang);
    }
  }
};
</script>
<style>
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

.lang-btn {
  display: flex !important;
  align-items: center;
  color: #432a49 !important;
}

.lang {
  width: 24px;
  margin-right: 8px;
}
/* 
.dropdown-content a:active .dropdown-content {
  display: none;
} */

/* .dropdown:hover .dropdown-content {
  display: block;
} */
</style>
