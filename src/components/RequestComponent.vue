<template>
  <div class="request">
    <v-container>
      <div class="wrapper">
        <h1>{{$t("request.title")}}</h1>
        <h4>{{$t("request.subtitle")}}</h4>
        <form action="https://formspree.io/xknondeb" method="POST">
          <v-row>
            <v-col cols="12" xs="12" sm="5">
              <input type="text" name="name" :placeholder="$t('inputs.nameInput')" required />
            </v-col>
            <v-col cols="12" xs="12" sm="5">
              <input type="text" name="email" :placeholder="$t('inputs.emailInput')" required />
            </v-col>
            <v-col cols="12" xs="12" sm="2">
              <button class="custom custom-success" type="submit">{{$t("inputs.sendBtn")}}</button>
            </v-col>
          </v-row>
        </form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.request {
  background-color: #432a49;
  color: #fff;
  padding: 36px 0;

  text-align: left;
  h1 {
    margin-bottom: 5px;
  }

  input {
    width: 100%;
  }

  h4 {
    font-size: 14px;
    font-weight: normal;
    color: #f1f1f1;
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {};
</script>
