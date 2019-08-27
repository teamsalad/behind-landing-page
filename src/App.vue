<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ title }}</span>
        <span class="font-weight-light">{{ subtitle }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2"></span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <LandingPage
        v-bind:title="title"
        v-bind:subtitle="subtitle"
        v-bind:oneLiner="oneLiner"
        v-bind:purposes="purposes"
      />
    </v-content>
  </v-app>
</template>

<script>
import LandingPage from "./components/LandingPage";

export default {
  name: "App",
  components: {
    LandingPage
  },
  data: () => ({
    title: "behind",
    subtitle: "what really happens behind the curtain",
    oneLiner:
      "이직/구직 희망자들이 익명의 현직자들로부터 생생한 정보를 제공받을 수 있게 연결해주는 서비스",
    purposes: ["사내 문화 질문", "인터뷰 준비"]
  })
};
</script>
