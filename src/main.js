import 'bootstrap';
import '../src/App.scss';
import Vue from 'vue';
import App from './App.vue';
import VueQRCodeComponent from 'vue-qrcode-component'
var vueInstance = new Vue({
  el: '#app',
  render: h => h(App),
  VueQRCodeComponent,
});






