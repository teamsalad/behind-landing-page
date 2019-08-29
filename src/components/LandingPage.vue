<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <div id="company-info">
          <div>
            <v-row no-gutters justify="center">
              <v-col cols="4">
                <v-img src="@/assets/logo.png" alt="로고" contain />
              </v-col>
            </v-row>
            <v-row no-gutters justify="center">
              <span class="font-weight-bold headline text-uppercase">{{ title }}</span>
            </v-row>
            <v-row no-gutters justify="center">
              <span class="overline font-weight-light text-uppercase">{{ subtitle }}</span>
            </v-row>
          </div>
          <br />
          <div class="text-center body-2">
            <span>
              {{ oneLiner }}
              <br />
              {{ description }}
            </span>
          </div>
        </div>
        <br />
        <div
          id="partners"
          v-for="(partnerEmployee, index) in partnerEmployees"
          v-bind:key="index"
          class="text-center"
        >
          <v-row v-if="currCompanyIndex == index" justify="center">
            <v-col cols="4" md="6">
              <v-img
                v-bind:src="require(`@/assets/companyLogos/${partnerEmployee}.png`)"
                height="10vh"
                contain
              />
            </v-col>
            <v-col cols="8" md="6" align-self="center">
              <span class="font-weight-black text-center body-1">{{ askCurrEmployee }}</span>
            </v-col>
          </v-row>
        </div>
        <br />
        <div id="registration">
          <v-text-field
            placeholder="ahead@behind.co"
            v-bind:label="emailLabel"
            autofocus
            outlined
            clearable
            v-model="userEmail"
            v-on:keyup.enter="OnRegisterEmail"
            class="font-weight-light"
          ></v-text-field>
          <v-btn
            outlined
            block
            color="indigo"
            v-on:click="OnRegisterEmail"
            class="font-weight-medium"
          >{{ emailRegistrationButton }}</v-btn>
        </div>
        <br />
      </v-col>
      <v-col id="prototype-photo-column" cols="12" md="6" align-self="center">
        <v-row no-gutters justify="center">
          <v-img
            src="@/assets/prototype_iphone.png"
            alt="앱 예시 이미지"
            contain
            v-bind:max-width="prototypePhotoWidth"
          />
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
  mounted() {
    this.setPrototypePhotoWidth();
  },
  updated() {
    this.setPrototypePhotoWidth();
  },
  props: {
    title: String,
    subtitle: String,
    oneLiner: String,
    description: String,
    purposes: Array,
    partnerEmployees: Array
  },
  data() {
    return {
      prototypePhotoWidth: 0,
      currCompanyIndex: 0,
      askCurrEmployee: "의 현직자에게 물어보세요!",
      emailLabel: "사전등록시 출시기념 쿠폰을 보내드립니다",
      emailRegistrationButton: "등록하고 쿠폰받기",
      emailRegistrationSuccessMsg:
        "가 성공적으로 출시 이벤트에 등록되었습니다.",
      emailRegistrationFailMsg:
        "죄송합니다. 무언가... 무언가.... 서버가 뻑났습니다. 뻐킹 갓...",
      userEmail: ""
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
    // update the rolling company (logo) index
    updateCurrCompanyIndex() {
      this.currCompanyIndex++;
      if (this.currCompanyIndex >= this.partnerEmployees.length) {
        this.currCompanyIndex = 0;
      }
    },
    // set the width of prototype photo
    // smaller of 60% of the column or 50% of the screen
    setPrototypePhotoWidth() {
      let colWidth = document.getElementById("prototype-photo-column")
        .offsetWidth;
      let screenWidth = screen.width;
      this.prototypePhotoWidth = Math.min(colWidth * 0.6, screenWidth * 0.5);
    }
  }
};
</script>

<style scoped>
</style>