<template>
  <div class="request">
    <v-container>
      <div class="wrapper">
        <h1>
          Leave a request
        </h1>
        <h4>leave your data so we can contact you soon</h4>
        <v-row>
          <v-col cols="12 " xs="12" sm="5"
            ><input type="text" name="" placeholder="your name"
          /></v-col>
          <v-col cols="12 " xs="12" sm="5">
            <input type="text" name="" placeholder="your mail address" />
          </v-col>
          <v-col cols="12 " xs="12" sm="2"
            ><button class="custom custom-success">send</button></v-col
          >
        </v-row>
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
