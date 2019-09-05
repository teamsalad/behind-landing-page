<template>
  <v-app>
    <v-content>
      <LandingPage
        v-bind:title="title"
        v-bind:subtitle="subtitle"
        v-bind:oneLiner="oneLiner"
        v-bind:description="description"
        v-bind:purposes="purposes"
        v-bind:partnerEmployees="partnerEmployees"
      />
    </v-content>

    <div id="footer" class="text-center body-2 pa-1">
      <div>{{ customerService }}</div>
      <div>&copy; {{ new Date().getFullYear() }} {{ title }}</div>
    </div>

    <!-- <div class="flex-grow-1"></div> -->
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
    subtitle: "what really happens behind the scenes",
    oneLiner: "재직자를 만나는 가장 심플한 방법",
    description: "재직자와 구직자간의 생생한 라이브 Q&A 세션",
    purposes: [
      "진실된 사내 문화에 대한 대화",
      "회사 맞춤 입사준비/이력서 컨설팅"
    ],
    partnerEmployees: [
      "cj",
      "hyundai_card",
      "kakao",
      "lg_electronics",
      "naver",
      "samsung_electronics"
    ],
    customerService: "문의: behind.youngjun@gmail.com"
  })
};
</script>

<style>
#app {
  background-color: white;
}

#footer {
  background-color: lightgray;
}
</style>