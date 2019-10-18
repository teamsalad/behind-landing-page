<template>
  <v-app>
    <div id="top-bar">
      <v-row>
        <v-col cols="6" class="d-flex justify-space-around align-center">
          <v-img id="top-bar-logo" src="@/assets/logo-text-only.png" alt="로고" contain />
        </v-col>
        <v-col v-if="!isMobile()" cols="6" class="d-flex justify-space-around align-center">
          <a href="#" v-scroll-to="'#top-bar'" class="title">Home</a>
          <a href="#" v-scroll-to="'#key-features'" class="title">Features</a>
          <a href="#" v-scroll-to="'#how-it-works'" class="title">How it works</a>
          <a href="#" v-scroll-to="'#FAQs'" class="title">FAQs</a>
        </v-col>
      </v-row>
    </div>
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
  </v-app>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue";

export default {
  name: "home",
  components: {
    LandingPage
  },
  data: () => ({
    title: "behind",
    subtitle: "what really happens behind the scenes",
    oneLiner: "재직자를 만나는\n가장 심플한 방법",
    description:
      "재직자와 구직자간의 생생한 라이브 채팅 세션\n여기저기 헤매지 말고\n지금 재직자에게 직접 물어보세요",
    purposes: [
      "진실된 사내 문화에 대한 대화",
      "회사 맞춤 입사준비/이력서 컨설팅"
    ],
    partnerEmployees: [
      "cheil",
      "cj-enm",
      "dhl",
      "facebook",
      "fedex",
      "hyundai-card",
      "hyundai-motors",
      "ibkbank",
      "kakao",
      "kbbank",
      "lg-electronics",
      "line",
      "lockheedmartin",
      "naver",
      "samsung-electronics"
    ],
    customerService: "문의: support@thebehind.com"
  }),
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
#app {
  background-color: white;
}
#footer {
  background-color: lightgray;
}
#top-bar {
  background-color: lightgray;
}
#top-bar-logo {
  max-height: 4vh;
}
a {
  text-decoration: none;
  color: black !important;
}
</style>