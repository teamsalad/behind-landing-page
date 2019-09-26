<template>
  <v-container>
    <br />
    <br />
    <div id="home">
      <v-row>
        <v-col cols="12" md="7" align-self="center">
          <div id="company-info">
            <div class="text-center font-weight-bold">
              <div class="text-left">
                <span v-if="!isMobile()" class="display-1 font-weight-bold">{{ oneLiner }}</span>
                <pre v-else class="display-1 font-weight-bold">{{ oneLiner }}</pre>
              </div>
              <br />
              <br />
              <pre class="headline font-weight-bold text-left">{{ description }}</pre>
            </div>
          </div>
          <br />
          <div id="email-registration">
            <form @submit="OnRegisterEmail">
              <v-row>
                <v-text-field
                  v-model="userEmail"
                  placeholder="behind.youngjun@gmail.com"
                  v-bind:label="emailLabel"
                  autofocus
                  outlined
                  clearable
                  class="font-weight-light"
                ></v-text-field>
                <v-btn
                  v-bind:disabled="emailRegisterDisabled"
                  type="submit"
                  outlined
                  block
                  color="indigo"
                  class="font-weight-bold mt-n6"
                >{{ emailRegBtnText }}</v-btn>
              </v-row>
            </form>
          </div>
          <br />
          <v-row no-gutters justify="end" class="d-flex align-center">
            <v-col cols="3" md="3">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <a v-on="on" href="#">
                    <v-img
                      src="@/assets/apple-appstore-icon.png"
                      alt="앱스토어"
                      contain
                      max-height="44"
                    />
                  </a>
                </template>
                <span>behind 앱스토어로 이동</span>
              </v-tooltip>
            </v-col>
            <v-col cols="3" md="2">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <a v-on="on" href="#">
                    <v-img
                      src="@/assets/google-playstore-icon.png"
                      alt="플레이스토어"
                      contain
                      max-height="44"
                    />
                  </a>
                </template>
                <span>behind 플레이스토어로 이동</span>
              </v-tooltip>
            </v-col>
            <v-col cols="3" md="2">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <a v-on="on" href="https://fb.me/behind.co">
                    <v-img src="@/assets/fbicon.png" alt="페이스북페이지" contain max-height="44" />
                  </a>
                </template>
                <span>behind 페이스북페이지로 이동</span>
              </v-tooltip>
            </v-col>
            <v-col cols="4" md="2">
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
        <v-col id="prototype-photo-column" cols="12" md="5" align-self="end">
          <v-row no-gutters justify="center">
            <v-img
              src="@/assets/landing-iphone-cut.png"
              alt="앱 예시 이미지"
              contain
              v-bind:max-width="prototypePhotoWidth"
              v-bind:max-height="prototypePhotoHeight"
            />
          </v-row>
          <br />
          <br />
        </v-col>
      </v-row>
      <br />
      <v-carousel
        cycle
        height="100px"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="showArrows"
        interval="1000"
      >
        <v-carousel-item v-for="partnerEmployee in partnerEmployees" :key="partnerEmployee">
          <v-img
            v-bind:src="require(`@/assets/companyLogos/${partnerEmployee}.png`)"
            height="100px"
            contain
          />
        </v-carousel-item>
      </v-carousel>
      <div
        class="d-none"
      >카카오, LG전자, 삼성전자, CJ ENM, 현대카드, 네이버, 제일기획, 기업은행, 국민은행, DHL, Fedex, 현대자동차, Lockheed Martin, Facebook, 강남언니, 라인</div>
    </div>
    <br />
    <br />
    <div id="key-features">
      <p class="display-1 font-weight-bold">Key Features</p>
      <br />
      <v-row justify="space-around">
        <v-card width="25vw" flat color="#D8D8D8">
          <v-card-title class="headline font-weight-bold justify-center">Private</v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>behind 는 재직자와 구직자간의1대1 다이렉트 매칭을 통해 상담이 진행됩니다</p>
            <p>보다 개인적인 질문을 할 수 있고, 답변을 해주는 익명의 재직자도 훨씬 더 솔직한 답변이 가능합니다</p>
          </v-card-text>
        </v-card>
        <v-card width="25vw" flat color="#D8D8D8">
          <v-card-title class="headline font-weight-bold justify-center">Live</v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>재직자와 구직자는 behind 에서 실시간으로 상담이 가능합니다</p>
            <p>구직자는 재직자의 답변을 바탕으로 추가적인 질문이 발생할시 추가 요금 발생없이 정해진 시간동안 얼마든지 질문을 주고 받을 수 있습니다</p>
          </v-card-text>
        </v-card>
        <v-card width="25vw" flat color="#D8D8D8">
          <v-card-title class="headline font-weight-bold justify-center">Trusted</v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>인터넷에 떠돌아 다니는 “카더라” 정보는 이제 그만!</p>
            <p>재직자에게 직접 물어보고 직접 확인하세요</p>
            <p>회사나 직무에 대해 인사/PR 담당자 보다 훨씬 솔직하고 현실적인 대답을 해줄거에요</p>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
    <br />
    <br />
    <div id="how-it-works">
      <p class="display-1 font-weight-bold">How it works</p>
      <v-row justify="space-around">
        <v-card width="25vw" flat>
          <v-card-title class="headline font-weight-bold justify-center">
            <v-row justify="center">
              <v-icon size="64">mdi-numeric-1-circle</v-icon>
              <span class="pl-4">
                회사와 직무를 선택하고
                <br />첫 번째 질문을 등록하세요
              </span>
            </v-row>
          </v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>구직을 희망하는 회사와 직무를 선택하고 첫 번째 질문을 등록하세요</p>
            <p>첫번째 질문이 다수의 재직자에게 노출되고, 이를 바탕으로 재직자의 첫 답변이 올거에요</p>
          </v-card-text>
        </v-card>
        <v-card width="25vw" flat>
          <v-card-title class="headline font-weight-bold justify-center">
            <v-row justify="center">
              <v-icon size="64">mdi-numeric-2-circle</v-icon>
              <span class="pl-4">
                답변이 도착하면
                <br />선택해주세요
              </span>
            </v-row>
          </v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>선택한 회사와 직무에 맞는 재직자들의 답변이 도착했습니다</p>
            <p>다양한 답변들 중 가장 마음에드는 재직자의 답변을 선택해주세요</p>
          </v-card-text>
        </v-card>
        <v-card width="25vw" flat>
          <v-card-title class="headline font-weight-bold justify-center">
            <v-row justify="center">
              <v-icon size="64">mdi-numeric-3-circle</v-icon>
              <span class="pl-4">
                매칭 되었습니다!
                <br />무엇이든 물어보세요!
              </span>
            </v-row>
          </v-card-title>
          <v-card-text class="body-1 font-weight-bold text-center">
            <p>선택한 재직자와의 채팅 상담 매칭이 완료되었습니다.</p>
            <p>
              채팅 세션을 열어 질문의 제한없이 무엇이든 물어보세요
              <br />시간이 부족하면 언제든 연장가능합니다
            </p>
          </v-card-text>
        </v-card>
      </v-row>
    </div>
    <br />
    <br />
    <div id="FAQs">
      <p class="display-1 font-weight-bold">FAQs</p>
      <p class="pl-4">
        <span class="headline font-weight-bold">Q</span>
        <span class="title pl-4">서비스 이용시 비용이 발생하나요?</span>
      </p>
      <p class="pl-6">
        <span class="headline font-weight-bold">A</span>
        <span class="title pl-4">당근쓰</span>
      </p>
      <p class="pl-4">
        <span class="headline font-weight-bold">Q</span>
        <span class="title pl-4">질문을 했는데 답변이 없어요</span>
      </p>
      <p class="pl-6">
        <span class="headline font-weight-bold">A</span>
        <span class="title pl-4">기다려쓰</span>
      </p>
    </div>
  </v-container>
</template>
<script>
export default {
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
      emailLabel: "email",
      emailRegBtnText: "email 등록하고 10% 할인 받기",
      emailRegisterDisabled: false,
      emailRegSuccessMsg: "가 성공적으로 등록 되었습니다.",
      emailRegFailMsg:
        "죄송합니다.\n현재 등록이 지연되고 있습니다.\n나중에 다시 시도해주세요.",
      userEmail: "",

      showArrows: false
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

      var currentDateWithFormat = new Date().toJSON().slice(0, 10);
      const stringToSend =
        "등록일: " + currentDateWithFormat + ", 이메일: " + email;

      this.emailRegBtnText = "등록중입니다. 잠시만 기다려주세요.";
      this.emailRegisterDisabled = true;

      // store this email (this.userEmail) to DB here
      this.axios
        .post(registerServerUrl, {
          email: stringToSend
        })
        .then(function() {
          alert(email + emailRegSuccessMsg);
        })
        .catch(function() {
          alert(emailRegFailMsg);
        });
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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
    }
  }
};
</script>

<style scoped>
</style>