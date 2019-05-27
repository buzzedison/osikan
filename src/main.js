import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/style.css";
import "./assets/img/bg-masthead.jpg";
import "./assets/img/bg-signup.jpg";
import "./assets/img/demo-image-01.jpg";
import "./assets/img/demo-image-02.jpg";
import "./assets/img/ipad.png";
import "./assets/scss/scale.scss";
import "./assets/scss/about.scss";
import "./assets/scss/_buttons.scss";
import "./assets/scss/navbar.scss";
import "./assets/scss/_projects.scss";
import "./assets/scss/masthead.scss";
import "./assets/scss/_contact.scss";
import "./assets/scss/_signup.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
