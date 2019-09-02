<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <div id="company-info">
          <div>
            <v-row no-gutters justify="center">
              <v-col cols="6">
                <v-img src="@/assets/behind-logo.png" alt="로고" contain />
              </v-col>
            </v-row>
            <!-- <v-row no-gutters justify="center">
              <span class="font-weight-bold headline">{{ title }}</span>
            </v-row>-->
            <br />
            <v-row no-gutters justify="center">
              <span class="overline font-weight-light text-uppercase">{{ subtitle }}</span>
            </v-row>
          </div>
          <br />
          <div class="text-center font-weight-light">
            {{ oneLiner }}
            <br />
            {{ description }}
          </div>
        </div>
        <br />
        <div
          id="partners"
          v-for="(partnerEmployee, index) in partnerEmployees"
          v-bind:key="index"
          class="text-center"
        >
          <v-row v-if="currCompanyIndex == index">
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
          <form @submit="OnRegisterEmail">
            <v-text-field
              v-model="userEmail"
              placeholder="infront@thebehind.com"
              v-bind:label="emailLabel"
              autofocus
              outlined
              clearable
              class="font-weight-light"
            ></v-text-field>
            <v-btn
              type="submit"
              outlined
              block
              color="indigo"
              class="font-weight-medium"
            >{{ emailRegBtnText }}</v-btn>
          </form>
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
            v-bind:max-height="prototypePhotoHeight"
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
    this.setPrototypePhotoSize();
  },
  updated() {
    this.setPrototypePhotoSize();
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
      prototypePhotoHeight: 0,
      currCompanyIndex: 0,
      askCurrEmployee: "의 재직자에게 물어보세요!",
      emailRegUrl:
        "https://hq80mfsrh3.execute-api.ap-northeast-2.amazonaws.com/production/email-subscriptions",
      emailLabel: "출시시 사전등록 쿠폰을 보내드립니다",
      emailRegBtnText: "등록하고 쿠폰받기",
      emailRegSuccessMsg:
        "가 성공적으로 사전등록 되었습니다.\n출시시 사전등록 쿠폰을 보내드립니다.",
      emailRegFailMsg: "죄송합니다.\n현재 신규등록이 제한되어 있습니다.",
      userEmail: ""
    };
  },
  methods: {
    OnRegisterEmail: function(e) {
      e.preventDefault();

      const email = this.userEmail;
      const emailRegUrl = this.emailRegUrl;
      const emailRegSuccessMsg = this.emailRegSuccessMsg;
      const emailRegFailMsg = this.emailRegFailMsg;

      // checkemail format before storing, and let the user know
      if (email == "") {
        alert("email 주소를 입력해주세요.");
        return;
      } else if (!this.validEmail(email)) {
        alert("입력하신 email 주소(" + email + ")를 다시 확인해주세요.");
        return;
      }

      // store this email (this.userEmail) to DB here
      this.axios
        .post(emailRegUrl, {
          email: email
        })
        .then(function(response) {
          // console.log(response.data);
          alert(email + emailRegSuccessMsg);
        })
        .catch(function(error) {
          // console.error(error);
          alert(emailRegFailMsg);
        });
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
    // max-width: smaller of 60% of the column or 60% of the screen
    // max-height: 60% of the screen
    setPrototypePhotoSize() {
      const colWidth = document.getElementById("prototype-photo-column")
        .offsetWidth;
      const screenWidth = screen.width;
      this.prototypePhotoWidth = Math.min(colWidth * 0.6, screenWidth * 0.6);

      this.prototypePhotoHeight = 0.6 * screen.height;
    }
  }
};
</script>

<style scoped>
</style>