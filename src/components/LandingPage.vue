<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row no-gutters justify="center">
          <v-col cols="6" md="4">
            <v-img src="@/assets/logo.png" max-width="100%" />
            <span class="title">{{ title | capitalize }}</span>
          </v-col>
        </v-row>
        <br />
        {{ oneLiner }}
        <ul v-for="purpose in purposes" v-bind:key="purpose">
          <li>{{ purpose }}</li>
        </ul>
        <br />
        <br />
        <v-text-field label="email" placeholder="behind@behind.co" outlined></v-text-field>
        <v-btn>서비스 출시시 가장 먼저 연락 받기</v-btn>
      </v-col>
      <v-col cols="12" md="4">
        톡 예제 - 바꿀거
        <v-img src="@/assets/serviceExample.jpg" max-width="100%" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    oneLiner: String,
    purposes: Array
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    }
  },
  data: () => ({})
};
</script>

<style scoped>
</style>