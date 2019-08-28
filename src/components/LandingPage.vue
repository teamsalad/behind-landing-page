<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-row no-gutters justify="center">
          <v-col cols="4" md="6">
            <v-img src="@/assets/logo.png" max-width="100%" />
          </v-col>
        </v-row>
        <div>
          <div class="title text-uppercase">{{ title }}</div>
          <div>{{ oneLiner }}</div>
          <div>{{ description }}</div>
        </div>
        <br />
        <div
          v-for="partnerEmployee in partnerEmployees"
          v-bind:key="partnerEmployee"
          class="text-center"
        >{{ partnerEmployee }}에 다니는 사람한테 물어보세요!</div>
        <br />
        <!-- <ul v-for="purpose in purposes" v-bind:key="purpose">
          <li>{{ purpose }}</li>
        </ul>-->
        <v-row>
          <v-text-field
            placeholder="ahead@behind.co"
            label="email 을 등록해주시면 출시 기념 쿠폰을 보내드립니다"
            autofocus
            outlined
            clearable
            v-model="userEmail"
            :rules="emailRules"
            v-on:keyup.enter="OnRegisterEmail"
          ></v-text-field>
          <v-btn outlined block color="indigo" v-on:click="OnRegisterEmail">등록하기</v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>프로토타입사진은요기에놓을겁니다</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    title: String,
    oneLiner: String,
    description: String,
    purposes: Array,
    partnerEmployees: Array
  },
  data: function() {
    return {
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
        if (0) {
          alert(
            "감사합니다.\n" +
              this.userEmail +
              "가 성공적으로 출시 이벤트에 등록되었습니다."
          );
        } else {
          alert("죄송합니다. 무언가 서버가 뻑났습니다. 뻐킹 갓...");
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
    }
  }
};
</script>

<style scoped>
</style>