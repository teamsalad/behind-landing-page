<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" align-self="center">
        <div id="company-info">
          <div>
            <v-row no-gutters justify="center">
              <v-col cols="8" md="6">
                <v-img src="@/assets/behind-logo-whitebg.png" alt="로고" contain />
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
          <div class="text-center font-weight-bold">
            <div>
              <span v-if="!isMobile()" class="display-1 font-weight-bold">{{ oneLiner }}</span>
              <pre v-else class="display-1 font-weight-bold">{{ oneLiner }}</pre>
            </div>
            <span class="font-weight-bold">{{ description }}</span>
          </div>
        </div>
        <div
          id="partners"
          v-for="(partnerEmployee, index) in partnerEmployees"
          v-bind:key="index"
          class="text-center"
        >
          <v-row v-if="currCompanyIndex == index">
            <v-col cols="5" md="6">
              <v-img
                v-bind:src="require(`@/assets/companyLogos/${partnerEmployee}.png`)"
                height="10vh"
                contain
              />
            </v-col>
            <v-col cols="7" md="6" align-self="center">
              <span class="font-weight-black text-center body-1">{{ askCurrEmployee }}</span>
            </v-col>
          </v-row>
        </div>
        <br />
        <div id="phone-registration">
          <form @submit="OnRegisterPhoneNumber">
            <v-text-field
              v-model="userPhoneNumber"
              placeholder="010-1234-5678"
              v-bind:label="phoneNumberLabel"
              autofocus
              outlined
              clearable
              class="font-weight-light"
            ></v-text-field>
            <v-btn
              v-bind:disabled="phoneRegisterDisabled"
              type="submit"
              outlined
              block
              color="indigo"
              class="font-weight-bold"
            >{{ phoneRegBtnText }}</v-btn>
          </form>
        </div>
        <!-- <div id="email-registration">
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
        </div>-->
        <br />
        <v-row no-gutters justify="end">
          <v-col cols="3" md="2">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <a v-on="on" href="https://fb.me/behind.co">
                  <v-img src="@/assets/fbicon.png" alt="페이스북페이지" contain max-height="44" />
                </a>
              </template>
              <span>behind facebook page로 이동</span>
            </v-tooltip>
          </v-col>
          <v-col cols="3" md="2">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <div id="plusfriend-chat-button" v-on="on"></div>
              </template>
              <span>behind와 카카오톡 플러스 친구 1:1 채팅</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <br />
      </v-col>
      <v-col id="prototype-photo-column" cols="12" md="6" align-self="center">
        <v-row no-gutters justify="center">
          <v-img
            src="@/assets/landing-iphone.png"
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
    //<![CDATA[
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init("ef6b101e44b5da5877ac6c493f8e8d68");
    // 플러스친구 1:1채팅 버튼을 생성합니다.
    Kakao.PlusFriend.createChatButton({
      container: "#plusfriend-chat-button",
      plusFriendId: "_xexinxiT" // 플러스친구 홈 URL에 명시된 id로 설정합니다.
    });
    //]]>
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
      askCurrEmployee: "지금 바로 물어보세요!",
      registerServerUrl:
        "https://hq80mfsrh3.execute-api.ap-northeast-2.amazonaws.com/production/email-subscriptions",
      emailLabel: "출시시 사전등록 쿠폰을 보내드립니다",
      emailRegBtnText: "등록하고 쿠폰받기",
      emailRegSuccessMsg:
        "가 성공적으로 사전등록 되었습니다.\n출시시 사전등록 쿠폰을 보내드립니다.",
      emailRegFailMsg: "죄송합니다.\n현재 신규등록이 제한되어 있습니다.",
      userEmail: "",

      phoneRegisterDisabled: false,
      phoneNumberLabel: "전화번호",
      phoneRegBtnText: "전화번호 등록하고 10% 할인 받기",
      userPhoneNumber: "",
      phoneNumberRegSucessMsg: "가 성공적으로 등록되었습니다.",
      phoneRegFailMsg: "죄송합니다.\n현재 등록에 문제가 있습니다."
    };
  },
  methods: {
    OnRegisterEmail: function(e) {
      e.preventDefault();

      const email = this.userEmail;
      const registerServerUrl = this.registerServerUrl;
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
        .post(registerServerUrl, {
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

    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    // set the width of prototype photo
    // max-width: smaller of 60% of the column or 60% of the screen
    // max-height: 60% of the screen if desktop
    setPrototypePhotoSize() {
      const colWidth = document.getElementById("prototype-photo-column")
        .offsetWidth;
      const screenWidth = screen.width;
      this.prototypePhotoWidth = Math.min(colWidth * 0.8, screenWidth * 0.8);

      if (!this.isMobile()) {
        this.prototypePhotoHeight = 0.6 * screen.height;
      } else {
        this.prototypePhotoHeight = screen.height;
      }
    },
    OnRegisterPhoneNumber: function(e) {
      e.preventDefault();

      const userPhoneNumber = this.userPhoneNumber;
      const registerServerUrl = this.registerServerUrl;
      const phoneNumberRegSucessMsg = this.phoneNumberRegSucessMsg;
      const emailRegFailMsg = this.emailRegFailMsg;

      var currentDateWithFormat = new Date().toJSON().slice(0, 10);
      const stringToSend =
        "등록일: " + currentDateWithFormat + ", 전화번호: " + userPhoneNumber;

      this.phoneRegBtnText = "등록중입니다. 잠시만 기다려주세요.";
      this.phoneRegisterDisabled = true;

      this.axios
        .post(registerServerUrl, {
          email: stringToSend
        })
        .then(function(response) {
          // console.log(response.data);
          alert(userPhoneNumber + phoneNumberRegSucessMsg);
        })
        .catch(function(error) {
          // console.error(error);
          alert(phoneRegFailMsg);
        });
    }
  }
};
</script>

<style scoped>
</style>