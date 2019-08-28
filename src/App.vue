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
        v-bind:description="description"
        v-bind:purposes="purposes"
        v-bind:partnerEmployees="partnerEmployees"
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
    oneLiner: "현직자를 만나는 가장 심플한 방법",
    description: "현직자와 구직자간의 생생한 Q&A 서비스",
    purposes: [
      "진실된 사내 문화에 대한 대화",
      "회사 맞춤 입사준비/이력서 컨설팅"
    ],
    partnerEmployees: ["kakao", "LG전자", "삼성전자", "CJ", "현대카드", "NAVER"] // 로고 이미지로 변환
  })
};
</script>
