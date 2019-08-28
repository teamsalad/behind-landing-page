<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-row no-gutters justify="center">
          <v-col cols="4">
            <v-img src="@/assets/logo.png" alt="로고" contain />
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <div class="title text-uppercase">{{ title }}</div>
        </v-row>
        <div>{{ oneLiner }}</div>
        <div>{{ description }}</div>
        <br />
        <div
          v-for="(partnerEmployee, index) in partnerEmployees"
          v-bind:key="index"
          class="text-center"
        >
          <v-row v-if="currCompanyIndex == index" justify="center">
            <v-col cols="4">
              <v-img
                v-bind:src="require(`@/assets/companyLogos/${partnerEmployee}.png`)"
                height="10vh"
                contain
              />
            </v-col>
            <v-col cols="8" align-self="center">현직자에게 물어보세요!</v-col>
          </v-row>
        </div>
        <br />
        <v-text-field
          placeholder="ahead@behind.co"
          v-bind:label="emailLabel"
          autofocus
          outlined
          clearable
          v-model="userEmail"
          :rules="emailRules"
          v-on:keyup.enter="OnRegisterEmail"
        ></v-text-field>
        <v-btn outlined block color="indigo" v-on:click="OnRegisterEmail">등록하기</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-row no-gutters justify="center">
          <v-img src="@/assets/prototype_iphone.png" alt="앱 예시 이미지" contain max-width="60%" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  created() {
    this.interval = setInterval(() => this.updateCurrCompanyIndex(), 2000);
  },
  props: {
    title: String,
    oneLiner: String,
    description: String,
    purposes: Array,
    partnerEmployees: Array
  },
  data() {
    return {
      currCompanyIndex: 0,
      emailLabel: "등록해주시면 출시 기념 쿠폰을 보내드립니다",
      emailRegistrationSuccessMsg:
        "가 성공적으로 출시 이벤트에 등록되었습니다.",
      emailRegistrationFailMsg:
        "죄송합니다. 무언가... 무언가.... 서버가 뻑났습니다. 뻐킹 갓...",
      userEmail: "",
      emailRules: []
    };
  },
  methods: {
    OnRegisterEmail: function(e) {
      e.preventDefault();
      if (this.validEmail(this.userEmail)) {
        // store this email (this.userEmail) to DB here
        // if successful, show following message
        if (false) {
          alert(
            "감사합니다.\n" + this.userEmail + this.emailRegistrationSuccessMsg
          );
        } else {
          alert(this.emailRegistrationFailMsg);
        }
      } else {
        alert(
          "이벤트 등록에 실패하였습니다.\n입력하신 email 주소를 다시 확인해주세요."
        );
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    updateCurrCompanyIndex() {
      this.currCompanyIndex++;
      if (this.currCompanyIndex >= this.partnerEmployees.length) {
        this.currCompanyIndex = 0;
      }
    }
  }
};
</script>

<style scoped>
</style>