// CSS
import './app.css';

// JavaScript
// import axios from 'axios';
// window.axios = axios;

// Vue
import { createApp } from 'vue';
// import router from './router';
// import store from './store';
import RootComponent from './components/root.vue';
const app = createApp(RootComponent);//.use(router).use(store);
const vm = app.mount('#app');
